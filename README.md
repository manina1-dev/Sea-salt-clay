# Sea Salt Clay

A portfolio site for a handmade pottery studio in Attica, Greece. Not a shop:
there are no prices, no stock and nothing for sale — it exists to show the work
and how it is made.

Bilingual (English at the root, Greek under `el/`), four pages per language, no
build step and no dependencies — plain HTML, one stylesheet and one script.

```
.
├── index.html          Home (English)
├── work.html           The work, with category filters
├── about.html          Studio story, process, care instructions, FAQ
├── contact.html        Contact form + Instagram
├── el/                 The same four pages in Greek
├── css/styles.css      All styles; design tokens live in :root
├── js/products.js      The pieces — edit this to change what is shown
├── js/main.js          Nav, grid rendering, filters, form handling
└── assets/img/*.svg    Hand-drawn illustrations standing in for photos
```

## Running it locally

Open `index.html` directly in a browser, or serve the folder so that relative
paths behave exactly as they will in production:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Editing the pieces

Everything shown comes from the `window.PRODUCTS` array in `js/products.js`.
Add, remove or reorder entries there — no other file needs to change. Each
entry carries both languages:

```js
{
  id: "harbour-mug",
  name: "Harbour Mug",            // English
  name_el: "Κούπα Λιμάνι",        // Greek
  desc: "A chunky 350 ml mug…",
  desc_el: "Χοντρή κούπα 350 ml…",
  category: "mugs",               // must match an id in CATEGORIES
  image: "assets/img/mug.svg",    // relative to the site root
  featured: true                  // also shows on the home page
}
```

There are deliberately no price or stock fields. Filter buttons are generated
from `window.CATEGORIES`, and a category with nothing in it is skipped.

## Languages

English lives at the root, Greek under `el/`. Each page declares which it is
just before the scripts:

```html
<script>window.SITE = { root: "../", lang: "el" };</script>
```

`root` is how the page reaches `assets/` and `js/`; `lang` picks the Greek or
English fields from `products.js` and the interface strings in
`window.STRINGS`. Pages are paired with `hreflang` tags and the EN/ΕΛ switch in
the header.

Adding a page means adding it in both languages, or the switch will 404.

## Swapping in real photos

The illustrations in `assets/img/` are placeholders. Drop real photos into that
folder and point each product's `image` at them. Cards use a 4:3 frame with
`object-fit: contain`, so square or 4:3 images need no cropping.

## Changing the look

Colours, fonts, spacing and radii are CSS custom properties at the top of
`css/styles.css`. Changing `--clay`, `--sea` and `--sand` re-themes the whole
site. A dark-mode block right below adjusts the same tokens for
`prefers-color-scheme: dark`.

Type is Fraunces (display) and Inter (body), loaded from Google Fonts with
system fallbacks — remove the `<link>` tags in each page's `<head>` if you'd
rather not call out to Google.

## Placeholder content to replace

Before this goes anywhere public, swap out:

- the studio address and market details in `contact.html` and the footer of each page
- `hello@seasaltclay.example` — not a real address
- the piece names and descriptions in `js/products.js`, in both languages
- the copy on `about.html`, which is written to be plausible, not true

## Wiring up the contact form

The form currently intercepts its own submit and shows a note; it sends
nothing. Two easy ways to make it real:

**A hosted form service** — point the form at the endpoint and delete the
submit handler at the bottom of `js/main.js`:

```html
<form class="form" id="contact-form" action="https://your-form-endpoint" method="POST">
```

**Plain mailto** — no backend, opens the visitor's mail client:

```html
<form class="form" id="contact-form" action="mailto:you@example.com" method="POST" enctype="text/plain">
```

## Deploying

It's static, so anything that serves files works. Push the repo and point
GitHub Pages at the branch root, or drag the folder into Netlify or Cloudflare
Pages. No build command, no output directory.
