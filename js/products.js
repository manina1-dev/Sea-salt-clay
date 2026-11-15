/* ---------------------------------------------------------------------------
   Sea Salt Clay — product catalogue (bilingual)

   One entry per piece. `name`/`desc` are English, `name_el`/`desc_el` Greek.
   Add, remove or reorder entries here — no other file needs changing.

   image : path relative to the SITE ROOT (main.js prefixes it per page) or "sold"
   price : plain number, rendered as euros
   --------------------------------------------------------------------------- */

window.PRODUCTS = [
  {
    id: "crackle-bowl",
    name: "Crackle Bowl",
    name_el: "Μπολ Κρακελέ",
    desc: "A bowl with a free, uneven rim. The inside is a crackle glaze over brown — white lines breaking across the surface, different in every firing.",
    desc_el: "Μπολ με ελεύθερο, ανομοιόμορφο χείλος. Στο εσωτερικό, κρακελέ γλάσο πάνω σε καφέ — λευκές γραμμές που σπάνε στην επιφάνεια, διαφορετικές σε κάθε ψήσιμο.",
    category: "bowls",
    image: "assets/img/crackle-bowl.webp",
    photo: true,
    made: "2026-10",
    featured: true
  },
  {
    id: "daisy-mug",
    name: "Daisy Mug",
    name_el: "Κούπα Μαργαρίτα",
    desc: "Carved daisies around a deep blue-grey glaze, with a small pulled handle. The glaze pools darker where the carving cuts into the clay.",
    desc_el: "Σκαλισμένες μαργαρίτες σε βαθύ γκριζογάλανο γλάσο, με μικρό τραβηγμένο χερούλι. Το γλάσο μαζεύει πιο σκούρο εκεί που το σκάλισμα μπαίνει στον πηλό.",
    category: "mugs",
    image: "assets/img/daisy-mug.webp",
    photo: true,
    made: "2026-09",
    featured: true
  },
  {
    id: "little-houses",
    name: "Little Houses",
    name_el: "Σπιτάκια",
    desc: "A small family of figures, white with pale blue stripes and a heart on each one. Hand-painted, no two the same height.",
    desc_el: "Μια μικρή οικογένεια από φιγούρες, λευκές με γαλάζιες ρίγες και μια καρδιά στην καθεμιά. Ζωγραφισμένες στο χέρι, καμία στο ίδιο ύψος.",
    category: "home",
    image: "assets/img/little-houses.webp",
    photo: true,
    made: "2025-01",
    featured: true
  }
];

window.CATEGORIES = [
  { id: "all",       label: "Everything",   label_el: "Όλα" },
  { id: "mugs",      label: "Mugs & cups",  label_el: "Κούπες & ποτήρια" },
  { id: "bowls",     label: "Bowls",        label_el: "Μπολ" },
  { id: "tableware", label: "Tableware",    label_el: "Σκεύη τραπεζιού" },
  { id: "vases",     label: "Vases",        label_el: "Βάζα" },
  { id: "home",      label: "Home",         label_el: "Σπίτι" }
];

/* Interface strings used by main.js */
window.STRINGS = {
  en: {
    empty:    "Nothing in this category right now — the next firing will bring different pieces.",
    prefill:  function (n) { return "Hi! I'd like to ask about the " + n + "."; },
    demo:     "This demo form isn't connected to anything yet — see the README for how to hook it up."
  },
  el: {
    empty:    "Δεν υπάρχει τίποτα σε αυτή την κατηγορία αυτή τη στιγμή — το επόμενο ψήσιμο θα φέρει άλλα κομμάτια.",
    prefill:  function (n) { return "Γεια σας! Θα ήθελα να ρωτήσω για το κομμάτι «" + n + "»."; },
    demo:     "Η φόρμα δεν είναι ακόμα συνδεδεμένη — δείτε το README για το πώς συνδέεται."
  }
};
