/* ---------------------------------------------------------------------------
   Sea Salt Clay — site behaviour
   Mobile nav, product grid rendering, shop filters, footer year.
   No dependencies, no build step.
   --------------------------------------------------------------------------- */

(function () {
  "use strict";

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

  /* ------------------------------------------------------- price helpers */

  var money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  /* ---------------------------------------------------------- card markup */

  function cardFor(product) {
    var sold = product.status === "sold";
    var li = document.createElement("li");
    li.className = "card";
    li.setAttribute("data-category", product.category);

    var tag = sold
      ? '<span class="card__tag card__tag--sold">Sold</span>'
      : '';

    var priceClass = sold ? "card__price card__price--sold" : "card__price";

    var action = sold
      ? '<span class="card__link" aria-disabled="true">Out of stock</span>'
      : '<a class="card__link" href="contact.html?piece=' + encodeURIComponent(product.id) + '">Enquire &rarr;</a>';

    li.innerHTML =
      '<div class="card__media">' + tag +
        '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">' +
      '</div>' +
      '<div class="card__body">' +
        '<h3 class="card__name">' + product.name + '</h3>' +
        '<p class="card__desc">' + product.desc + '</p>' +
        '<div class="card__foot">' +
          '<span class="' + priceClass + '">' + money.format(product.price) + '</span>' +
          action +
        '</div>' +
      '</div>';

    return li;
  }

  function render(target, products) {
    target.innerHTML = "";
    if (!products.length) {
      var empty = document.createElement("li");
      empty.className = "grid-empty";
      empty.textContent = "Nothing in this category right now — check back after the next firing.";
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

  var shop = document.getElementById("shop-grid");
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
        btn.textContent = cat.label + " (" + count + ")";
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
      pieceField.value = match.name;
      var message = document.getElementById("message");
      if (message && !message.value) {
        message.value = "Hi! I'd like to ask about the " + match.name + ".";
      }
    }
  }

  /* ------------------------------------------------- contact form (demo) */

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = document.getElementById("form-status");
      if (status) {
        status.textContent =
          "This demo form isn't connected to anything yet — see the README for how to hook it up.";
        status.hidden = false;
      }
    });
  }
})();
