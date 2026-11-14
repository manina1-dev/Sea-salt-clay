# Sea Salt Clay

A small static website for a handmade pottery studio. Four pages, no build step,
no dependencies — plain HTML, one stylesheet and one script.

```
.
├── index.html          Home: hero, featured pieces, studio intro, process
├── shop.html           Catalogue with category filters
├── about.html          Studio story, process, care instructions, FAQ
├── contact.html        Contact form + studio details
├── css/styles.css      All styles; design tokens live in :root
├── js/products.js      The catalogue — edit this to change the shop
├── js/main.js          Nav, grid rendering, filters, form handling
└── assets/img/*.svg    Hand-drawn product illustrations
```

## Running it locally

Open `index.html` directly in a browser, or serve the folder so that relative
paths behave exactly as they will in production:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Editing the shop

Everything in the shop comes from the `window.PRODUCTS` array in
`js/products.js`. Add, remove or reorder entries there — no other file needs to
change.

```js
{
  id: "harbour-mug",                 // used in the enquiry link
  name: "Harbour Mug",
  desc: "A chunky 12 oz mug…",
  price: 38,                         // plain number, rendered as USD
  category: "mugs",                  // must match an id in CATEGORIES
  image: "assets/img/mug.svg",
  status: "available",               // or "sold"
  featured: true                     // shows on the home page too
}
```

Filter buttons are generated from `window.CATEGORIES` in the same file, and a
category with no products in it is skipped automatically.

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
- product names, descriptions and prices in `js/products.js`
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

## Taking payment

There's no checkout here — the shop links each piece to the contact form, which
suits one-of-a-kind work where stock is a single item. If you want real
checkout, the usual options are embedded buy-buttons from a payment provider
(drop-in, keeps this site static) or moving the catalogue onto a hosted store
platform.

## Deploying

It's static, so anything that serves files works. Push the repo and point
GitHub Pages at the branch root, or drag the folder into Netlify or Cloudflare
Pages. No build command, no output directory.
