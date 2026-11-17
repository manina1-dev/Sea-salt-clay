/* ---------------------------------------------------------------------------
   Sea Salt Clay — product catalogue (bilingual)

   One entry per piece. `name`/`desc` are English, `name_el`/`desc_el` Greek.
   Add, remove or reorder entries here — no other file needs changing.

   image : path relative to the SITE ROOT (main.js prefixes it per page) or "sold"
   price : plain number, rendered as euros
   --------------------------------------------------------------------------- */

window.PRODUCTS = [
  {
    id: "soy-candles",
    name: "Soy Candles in Stoneware",
    name_el: "Κεριά Σόγιας σε Κεραμικό",
    desc: "Hand-thrown vessels poured with soy wax and a Christmas scent. When the candle has burned down, wash the vessel out and it becomes a bowl like any other — dishwasher included. The candle is temporary; the pot is not.",
    desc_el: "Σκεύη πλασμένα στον τροχό, γεμισμένα με κερί σόγιας και χριστουγεννιάτικο άρωμα. Όταν τελειώσει το κερί, πλένετε το σκεύος και γίνεται ένα κανονικό μπολ — μπαίνει και στο πλυντήριο. Το κερί είναι προσωρινό, το κεραμικό όχι.",
    category: "candles",
    image: "assets/img/candles.webp",
    photo: true,
    made: "2026-11",
    featured: true
  },
  {
    id: "blue-candle",
    name: "Blue-Rimmed Candle",
    name_el: "Κερί με Μπλε Χείλος",
    desc: "Cobalt poured over the rim and left to run down the white, stopping where it wanted to. Filled with soy wax; wash it out when the candle is done and keep the bowl.",
    desc_el: "Κοβάλτιο χυμένο από το χείλος, αφημένο να τρέξει πάνω στο λευκό και να σταματήσει όπου θέλησε. Γεμισμένο με κερί σόγιας· όταν τελειώσει, το πλένετε και κρατάτε το μπολ.",
    category: "candles",
    image: "assets/img/blue-candle.webp",
    photo: true,
    made: "2026-11",
    featured: true
  },
  {
    id: "galaxy-bowl",
    name: "Galaxy Bowl",
    name_el: "Μπολ Γαλαξίας",
    desc: "A glaze that breaks into clouds and drifts inside the bowl — blues and greens settling where the fire took them. Plain white outside, so the inside does all the talking.",
    desc_el: "Ένα γυάλωμα που σπάει σε σύννεφα μέσα στο μπολ — μπλε και πράσινα που κάθισαν όπου τα πήγε η φωτιά. Απ' έξω σκέτο λευκό, ώστε να μιλάει μόνο το μέσα.",
    category: "bowls",
    image: "assets/img/galaxy-bowl.webp",
    photo: true,
    made: "2026-11",
    featured: true
  },
  {
    id: "pinched-bowl",
    name: "Pinched Bowl",
    name_el: "Τσιμπητό Μπολ",
    desc: "Built by pinching the clay between finger and thumb instead of throwing it, so the wall keeps every mark of being made. The rim rises and falls where the hand left it.",
    desc_el: "Φτιαγμένο με τσίμπημα του πηλού ανάμεσα σε δάχτυλα, όχι στον τροχό, οπότε το τοίχωμα κρατάει κάθε σημάδι του φτιαξίματος. Το χείλος ανεβοκατεβαίνει εκεί που το άφησε το χέρι.",
    category: "bowls",
    image: "assets/img/pinched-bowl.webp",
    photo: true,
    made: "2026-11"
  },
  {
    id: "white-bowl",
    name: "White Bowl",
    name_el: "Λευκό Μπολ",
    desc: "A plain white glaze over speckled clay, and nothing else. The dark flecks come up through it in the firing — the only decoration is the clay itself.",
    desc_el: "Σκέτο λευκό γυάλωμα πάνω σε πηλό με στίγματα, και τίποτα άλλο. Τα σκούρα στίγματα ανεβαίνουν μέσα από αυτό στο ψήσιμο — το μόνο στολίδι είναι ο ίδιος ο πηλός.",
    category: "bowls",
    image: "assets/img/white-bowl.webp",
    photo: true,
    made: "2026-11"
  },
  {
    id: "crackle-bowl",
    name: "Crackle Bowl",
    name_el: "Μπολ Κρακελέ",
    desc: "A bowl with a free, uneven rim. The inside is a crackle glaze over brown — white lines breaking across the surface, different in every firing.",
    desc_el: "Μπολ με ελεύθερο, ανομοιόμορφο χείλος. Στο εσωτερικό, κρακελέ γυάλωμα πάνω σε καφέ — λευκές γραμμές που σπάνε στην επιφάνεια, διαφορετικές σε κάθε ψήσιμο.",
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
    desc_el: "Σκαλισμένες μαργαρίτες σε βαθύ γκριζογάλανο γυάλωμα, με μικρό τραβηγμένο χερούλι. Το γυάλωμα μαζεύει πιο σκούρο εκεί που το σκάλισμα μπαίνει στον πηλό.",
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
  { id: "candles",   label: "Candles",      label_el: "Κεριά" },
  { id: "home",      label: "Home",         label_el: "Σπίτι" }
];

/* Interface strings used by main.js */
window.STRINGS = {
  en: {
    empty:    "Nothing in this category right now — the next firing will bring different pieces.",
    prefill:  function (n) { return "Hi! I'd like to ask about the " + n + "."; },
    subject:  "Message from the website",
    fName:    "Name",
    fEmail:   "Email",
    fPiece:   "Piece",
    fReason:  "About",
    fMessage: "Message",
    sent:     function (addr) {
      return "Your email program should now be open with the message ready — press send and it reaches the studio. " +
             "If nothing opened, write directly to " + addr + ".";
    }
  },
  el: {
    empty:    "Δεν υπάρχει τίποτα σε αυτή την κατηγορία αυτή τη στιγμή — το επόμενο ψήσιμο θα φέρει άλλα κομμάτια.",
    prefill:  function (n) { return "Γεια σας! Θα ήθελα να ρωτήσω για το κομμάτι «" + n + "»."; },
    subject:  "Μήνυμα από το site",
    fName:    "Όνομα",
    fEmail:   "Email",
    fPiece:   "Κομμάτι",
    fReason:  "Σχετικά με",
    fMessage: "Μήνυμα",
    sent:     function (addr) {
      return "Το πρόγραμμα email σας θα πρέπει να άνοιξε με το μήνυμα έτοιμο — πατήστε αποστολή και φτάνει στο εργαστήριο. " +
             "Αν δεν άνοιξε τίποτα, γράψτε απευθείας στο " + addr + ".";
    }
  }
};
