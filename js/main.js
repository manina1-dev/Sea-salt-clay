/* ---------------------------------------------------------------------------
   Sea Salt Clay — site behaviour
   Mobile nav, product grid rendering, shop filters, footer year.
   Bilingual: each page sets window.SITE = { root, lang } before this loads.
   No dependencies, no build step.
   --------------------------------------------------------------------------- */

(function () {
  "use strict";

  var SITE = window.SITE || { root: "", lang: "en" };
  var T = (window.STRINGS || {})[SITE.lang] || (window.STRINGS || {}).en || {};
  var EL = SITE.lang === "el";

  /* ---------------------------------------------------------- mobile nav */

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
  }

  /* --------------------------------------------------------- footer year */

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ------------------------------------------------- per-language fields */

  function nameOf(p) { return EL && p.name_el ? p.name_el : p.name; }
  function descOf(p) { return EL && p.desc_el ? p.desc_el : p.desc; }
  function labelOf(c) { return EL && c.label_el ? c.label_el : c.label; }

  /* ---------------------------------------------------------- card markup */

  function cardFor(product) {
    var li = document.createElement("li");
    li.className = "card";
    li.setAttribute("data-category", product.category);

    li.innerHTML =
      '<div class="card__media' + (product.photo ? ' card__media--photo' : '') + '">' +
        '<img src="' + SITE.root + product.image + '" alt="' + nameOf(product) + '" loading="lazy">' +
      '</div>' +
      '<div class="card__body">' +
        '<h3 class="card__name">' + nameOf(product) + '</h3>' +
        '<p class="card__desc">' + descOf(product) + '</p>' +
      '</div>';

    return li;
  }

  function render(target, products) {
    target.innerHTML = "";
    if (!products.length) {
      var empty = document.createElement("li");
      empty.className = "grid-empty";
      empty.textContent = T.empty;
      target.appendChild(empty);
      return;
    }
    products.forEach(function (p) { target.appendChild(cardFor(p)); });
  }

  var all = window.PRODUCTS || [];

  /* ------------------------------------------------------- featured grid */

  var featured = document.getElementById("featured-grid");
  if (featured) {
    render(featured, all.filter(function (p) { return p.featured; }).slice(0, 4));
  }

  /* ----------------------------------------------------- shop grid + tabs */

  var shop = document.getElementById("work-grid");
  var filterBar = document.getElementById("filters");

  if (shop) {
    var active = "all";

    function apply() {
      render(shop, active === "all"
        ? all
        : all.filter(function (p) { return p.category === active; }));

      if (filterBar) {
        Array.prototype.forEach.call(filterBar.querySelectorAll(".filter"), function (btn) {
          btn.setAttribute("aria-pressed", String(btn.dataset.filter === active));
        });
      }
    }

    if (filterBar) {
      (window.CATEGORIES || []).forEach(function (cat) {
        var count = cat.id === "all"
          ? all.length
          : all.filter(function (p) { return p.category === cat.id; }).length;
        if (!count) return;

        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "filter";
        btn.dataset.filter = cat.id;
        btn.textContent = labelOf(cat) + " (" + count + ")";
        btn.setAttribute("aria-pressed", String(cat.id === active));
        btn.addEventListener("click", function () {
          active = cat.id;
          apply();
        });
        filterBar.appendChild(btn);
      });
    }

    apply();
  }

  /* --------------------------------------- prefill contact form from link */

  var pieceField = document.getElementById("piece");
  if (pieceField) {
    var id = new URLSearchParams(window.location.search).get("piece");
    var match = all.filter(function (p) { return p.id === id; })[0];
    if (match) {
      pieceField.value = nameOf(match);
      var message = document.getElementById("message");
      if (message && !message.value) message.value = T.prefill(nameOf(match));
    }
  }

  /* -------------------------------------------------------- contact form

     No backend and no third-party form service: the form assembles the
     message and hands it to the visitor's own mail program, already
     addressed and filled in. The address is read from the mailto link on
     the page, so it lives in one place only.                           */

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var link = document.querySelector('a[href^="mailto:"]');
      var addr = link ? link.getAttribute("href").replace("mailto:", "").split("?")[0] : "";
      if (!addr) return;

      function val(id) {
        var el = document.getElementById(id);
        return el && el.value ? String(el.value).trim() : "";
      }

      var piece = val("piece");
      var subject = T.subject + (piece ? " — " + piece : "");

      var body = [
        T.fName + ": " + val("name"),
        T.fEmail + ": " + val("email"),
        piece ? T.fPiece + ": " + piece : null,
        T.fReason + ": " + val("reason"),
        "",
        val("message")
      ].filter(function (l) { return l !== null; }).join("\n");

      var href = "mailto:" + addr +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      // An anchor click is handled more reliably than assigning to
      // location.href, which some browsers ignore for mailto:.
      var a = document.createElement("a");
      a.href = href;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      var status = document.getElementById("form-status");
      if (status) {
        status.textContent = T.sent(addr);
        status.hidden = false;
      }
    });
  }
})();
