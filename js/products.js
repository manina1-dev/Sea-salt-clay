/* ---------------------------------------------------------------------------
   Sea Salt Clay — product catalogue
   Edit this file to change what shows up in the shop. Each entry renders one
   card on shop.html; entries marked `featured: true` also appear on the home
   page. Prices are plain numbers in USD; set `status` to "sold" for a piece
   that has already gone.
   --------------------------------------------------------------------------- */

window.PRODUCTS = [
  {
    id: "harbour-mug",
    name: "Harbour Mug",
    desc: "A chunky 12 oz mug with a pulled handle and a sage glaze dip.",
    price: 38,
    category: "mugs",
    image: "assets/img/mug.svg",
    status: "available",
    featured: true
  },
  {
    id: "tide-bowl",
    name: "Tide Serving Bowl",
    desc: "Wide and shallow — made for salads, pasta and too many clementines.",
    price: 72,
    category: "bowls",
    image: "assets/img/bowl.svg",
    status: "available",
    featured: true
  },
  {
    id: "dune-vase",
    name: "Dune Bud Vase",
    desc: "A narrow neck for a single stem, with a speckled unglazed foot.",
    price: 54,
    category: "vases",
    image: "assets/img/vase.svg",
    status: "available",
    featured: true
  },
  {
    id: "salt-plate",
    name: "Salt Dinner Plate",
    desc: "A 10-inch everyday plate. Stacks well, survives the dishwasher.",
    price: 44,
    category: "tableware",
    image: "assets/img/plate.svg",
    status: "available",
    featured: true
  },
  {
    id: "cove-planter",
    name: "Cove Planter",
    desc: "Drainage hole and matching saucer. Fits a 4-inch nursery pot.",
    price: 58,
    category: "home",
    image: "assets/img/planter.svg",
    status: "available"
  },
  {
    id: "morning-teapot",
    name: "Morning Teapot",
    desc: "Holds four cups. Built-in strainer, lid that stays put when you pour.",
    price: 128,
    category: "tableware",
    image: "assets/img/teapot.svg",
    status: "sold"
  },
  {
    id: "drift-tumblers",
    name: "Drift Tumblers, Pair",
    desc: "Two 8 oz tumblers, no handles. Good for wine, water or whiskey.",
    price: 64,
    category: "mugs",
    image: "assets/img/tumbler.svg",
    status: "available"
  },
  {
    id: "estuary-pitcher",
    name: "Estuary Pitcher",
    desc: "A one-litre pitcher with a proper drip-free lip.",
    price: 96,
    category: "tableware",
    image: "assets/img/pitcher.svg",
    status: "available"
  },
  {
    id: "shallow-bowl-set",
    name: "Breakfast Bowls, Set of Two",
    desc: "Deep enough for soup, shallow enough for cereal and a spoon.",
    price: 82,
    category: "bowls",
    image: "assets/img/bowl.svg",
    status: "sold"
  }
];

window.CATEGORIES = [
  { id: "all",       label: "Everything" },
  { id: "mugs",      label: "Mugs & cups" },
  { id: "bowls",     label: "Bowls" },
  { id: "tableware", label: "Tableware" },
  { id: "vases",     label: "Vases" },
  { id: "home",      label: "Home" }
];
