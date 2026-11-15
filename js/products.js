/* ---------------------------------------------------------------------------
   Sea Salt Clay — product catalogue (bilingual)

   One entry per piece. `name`/`desc` are English, `name_el`/`desc_el` Greek.
   Add, remove or reorder entries here — no other file needs changing.

   image : path relative to the SITE ROOT (main.js prefixes it per page) or "sold"
   price : plain number, rendered as euros
   --------------------------------------------------------------------------- */

window.PRODUCTS = [
  {
    id: "harbour-mug",
    name: "Harbour Mug",
    name_el: "Κούπα Λιμάνι",
    desc: "A chunky 350 ml mug with a pulled handle and a sage glaze dip.",
    desc_el: "Χοντρή κούπα 350 ml με χειροποίητο χερούλι, βουτηγμένη σε φασκόμηλο γλάσο.",
    category: "mugs",
    image: "assets/img/mug.svg",
    featured: true
  },
  {
    id: "tide-bowl",
    name: "Tide Serving Bowl",
    name_el: "Μπολ Σερβιρίσματος Παλίρροια",
    desc: "Wide and shallow — made for salads, pasta and too many clementines.",
    desc_el: "Φαρδύ και ρηχό — για σαλάτες, ζυμαρικά και υπερβολικά πολλά μανταρίνια.",
    category: "bowls",
    image: "assets/img/bowl.svg",
    featured: true
  },
  {
    id: "dune-vase",
    name: "Dune Bud Vase",
    name_el: "Βάζο Αμμόλοφος",
    desc: "A narrow neck for a single stem, with a speckled unglazed foot.",
    desc_el: "Στενός λαιμός για ένα μόνο κλαδί, με άβαφη βάση γεμάτη στίγματα.",
    category: "vases",
    image: "assets/img/vase.svg",
    featured: true
  },
  {
    id: "salt-plate",
    name: "Salt Dinner Plate",
    name_el: "Πιάτο Αλάτι",
    desc: "A 25 cm everyday plate. Stacks well, survives the dishwasher.",
    desc_el: "Καθημερινό πιάτο 25 εκ. Στοιβάζεται καλά, αντέχει στο πλυντήριο.",
    category: "tableware",
    image: "assets/img/plate.svg",
    featured: true
  },
  {
    id: "cove-planter",
    name: "Cove Planter",
    name_el: "Γλάστρα Όρμος",
    desc: "Drainage hole and matching saucer. Fits a 10 cm nursery pot.",
    desc_el: "Με οπή αποστράγγισης και πιατάκι στο ίδιο γλάσο. Χωράει γλαστράκι 10 εκ.",
    category: "home",
    image: "assets/img/planter.svg"
  },
  {
    id: "morning-teapot",
    name: "Morning Teapot",
    name_el: "Τσαγιέρα Πρωινό",
    desc: "Holds four cups. Built-in strainer, lid that stays put when you pour.",
    desc_el: "Χωράει τέσσερα φλιτζάνια. Ενσωματωμένο φίλτρο, καπάκι που δεν πέφτει όταν σερβίρεις.",
    category: "tableware",
    image: "assets/img/teapot.svg"
  },
  {
    id: "drift-tumblers",
    name: "Drift Tumblers, Pair",
    name_el: "Ποτήρια Ρεύμα, Ζευγάρι",
    desc: "Two 240 ml tumblers, no handles. Good for wine, water or whisky.",
    desc_el: "Δύο ποτήρια 240 ml, χωρίς χερούλι. Για κρασί, νερό ή ουίσκι.",
    category: "mugs",
    image: "assets/img/tumbler.svg"
  },
  {
    id: "estuary-pitcher",
    name: "Estuary Pitcher",
    name_el: "Κανάτα Εκβολή",
    desc: "A one-litre pitcher with a proper drip-free lip.",
    desc_el: "Κανάτα ενός λίτρου με στόμιο που πραγματικά δεν στάζει.",
    category: "tableware",
    image: "assets/img/pitcher.svg"
  },
  {
    id: "shallow-bowl-set",
    name: "Breakfast Bowls, Set of Two",
    name_el: "Μπολ Πρωινού, Σετ των Δύο",
    desc: "Deep enough for soup, shallow enough for cereal and a spoon.",
    desc_el: "Αρκετά βαθιά για σούπα, αρκετά ρηχά για δημητριακά και κουτάλι.",
    category: "bowls",
    image: "assets/img/bowl.svg"
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
