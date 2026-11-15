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
└── assets/img/        Photographs of the work, plus logo.svg
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
  id: "daisy-mug",
  name: "Daisy Mug",                 // English
  name_el: "Κούπα Μαργαρίτα",        // Greek
  desc: "Carved daisies around…",
  desc_el: "Σκαλισμένες μαργαρίτες…",
  category: "mugs",                  // must match an id in CATEGORIES
  image: "assets/img/daisy-mug.webp", // relative to the site root
  photo: true,                       // crop to fill the card
  made: "2026-09",                   // when it was made, YYYY-MM
  featured: true                     // also shows on the home page
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

## Adding photographs

Photographs live in `assets/img/` as WebP. Each piece needs a square version
for the grid; the wide versions are for the hero and feature frames. The
originals come off a phone as HEIC, which browsers cannot display, so they are
converted:

```python
import pillow_heif
from PIL import Image, ImageOps
pillow_heif.register_heif_opener()

im = ImageOps.exif_transpose(Image.open("IMG_1234.HEIC")).convert("RGB")
side = min(im.size)
w, h = im.size
im.crop(((w-side)//2, (h-side)//2, (w+side)//2, (h+side)//2)) \
  .resize((1200, 1200), Image.LANCZOS) \
  .save("assets/img/name.webp", "WEBP", quality=82, method=6)
```

Then add an entry to `js/products.js` with `photo: true`, which makes the card
crop the image to fill its square frame.

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
- the piece names and descriptions in `js/products.js`, in both languages
- the copy on `about.html`, which is written to be plausible, not true

## The contact form

The form has no backend and uses no third-party service. On submit it
assembles the message and hands it to the visitor's own mail program,
already addressed and filled in, via a `mailto:` link.

The address is read from the first `mailto:` link on the page, so it is
written in exactly one place — change it in `contact.html` and
`el/contact.html` and the form follows.

The trade-off: a visitor with no mail program configured sees nothing
happen, which is why the status line also prints the address and the
note below the form points at Instagram.

If you later want messages delivered without involving the visitor's mail
client, sign up with a hosted form service, point the form at the endpoint
and delete the submit handler at the bottom of `js/main.js`:

```html
<form class="form" id="contact-form" action="https://your-form-endpoint" method="POST">
```

## Deploying

It's static, so anything that serves files works. Push the repo and point
GitHub Pages at the branch root, or drag the folder into Netlify or Cloudflare
Pages. No build command, no output directory.
