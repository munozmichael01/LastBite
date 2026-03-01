// ============================================================
// Last Bite — Mock Data
// ============================================================

export interface Restaurant {
  id: string
  name: string
  slug: string
  cuisine: string[]
  priceRange: 1 | 2 | 3 | 4
  rating: number
  reviewCount: number
  address: string
  city: string
  neighborhood: string
  phone: string
  description: string
  coverGradient: string
  features: string[]
  hours: { day: string; open: string; close: string }[]
  dietaryOptions: string[]
  promotions: Promotion[]
  menu: MenuCategory[]
  gallery: string[]
  lat: number
  lng: number
}

export interface Promotion {
  id: string
  name: string
  discount: number
  type: "percentage" | "fixed" | "2x1"
  conditions: string
  validDays: string[]
  validFrom: string
  validUntil: string
  status: "active" | "paused" | "expired"
}

export interface MenuCategory {
  name: string
  items: MenuItem[]
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  dietary?: string[]
  image?: string
}

export interface Review {
  id: string
  restaurantId: string
  userName: string
  userAvatar: string
  rating: number
  comment: string
  date: string
  aspects: { food: number; service: number; ambience: number; value: number }
}

export interface SurplusBag {
  id: string
  restaurantId: string
  restaurantName: string
  name: string
  description: string
  originalPrice: number
  price: number
  discount: number
  pickupFrom: string
  pickupUntil: string
  dietaryTags: string[]
  available: number
  total: number
  coverGradient: string
  status: "available" | "sold_out" | "expired"
}

export interface Reservation {
  id: string
  restaurantId: string
  restaurantName: string
  date: string
  time: string
  guests: number
  promotion?: string
  status: "confirmed" | "completed" | "cancelled" | "no_show"
  code: string
  notes?: string
}

export interface BagPurchase {
  id: string
  bagId: string
  restaurantName: string
  bagName: string
  price: number
  pickupDate: string
  pickupFrom: string
  pickupUntil: string
  status: "pending_pickup" | "picked_up" | "expired"
  code: string
}

export interface UserProfile {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  dietaryPreferences: string[]
  favoriteRestaurants: string[]
  reservations: Reservation[]
  bagPurchases: BagPurchase[]
}

// ---- RESTAURANTS ----

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "La Taberna de Lola",
    slug: "la-taberna-de-lola",
    cuisine: ["Espanola", "Tapas"],
    priceRange: 2,
    rating: 4.5,
    reviewCount: 234,
    address: "Calle de Ponzano, 42",
    city: "Madrid",
    neighborhood: "Chamberi",
    phone: "+34 912 345 678",
    description: "Taberna castiza con toques modernos en pleno Chamberi. Tapas creativas elaboradas con producto de temporada, amplia seleccion de vinos naturales y un ambiente acogedor que te hara sentir como en casa.",
    coverGradient: "from-orange-400 via-red-400 to-rose-500",
    features: ["Terraza", "WiFi", "Accesible", "Grupos"],
    hours: [
      { day: "Lun-Jue", open: "12:00", close: "00:00" },
      { day: "Vie-Sab", open: "12:00", close: "01:00" },
      { day: "Dom", open: "12:00", close: "17:00" },
    ],
    dietaryOptions: ["Vegetariano", "Sin gluten"],
    promotions: [
      {
        id: "p1",
        name: "Happy Hour Tapas",
        discount: 30,
        type: "percentage",
        conditions: "En tapas seleccionadas, de 18:00 a 20:00",
        validDays: ["Lun", "Mar", "Mie", "Jue"],
        validFrom: "2026-01-01",
        validUntil: "2026-06-30",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Tapas",
        items: [
          { id: "m1", name: "Patatas bravas", description: "Con salsa brava casera y alioli", price: 6.5 },
          { id: "m2", name: "Croquetas de jamon", description: "Croquetas cremosas de jamon iberico (6 uds)", price: 9, dietary: ["Sin gluten"] },
          { id: "m3", name: "Pulpo a la gallega", description: "Con pimenton de la Vera y aceite de oliva", price: 14 },
          { id: "m4", name: "Tortilla espanola", description: "Jugosa, con cebolla caramelizada", price: 8 },
        ],
      },
      {
        name: "Principales",
        items: [
          { id: "m5", name: "Rabo de toro", description: "Estofado lentamente con verduras de temporada", price: 18 },
          { id: "m6", name: "Merluza a la plancha", description: "Con verduritas salteadas y salsa verde", price: 16, dietary: ["Sin gluten"] },
        ],
      },
      {
        name: "Postres",
        items: [
          { id: "m7", name: "Torrija", description: "Con helado de canela y miel", price: 7 },
          { id: "m8", name: "Tarta de queso", description: "Estilo vasco, cremosa y sin fondo", price: 6.5 },
        ],
      },
    ],
    gallery: [],
    lat: 40.4350,
    lng: -3.6985,
  },
  {
    id: "2",
    name: "Sushi Zen",
    slug: "sushi-zen",
    cuisine: ["Japonesa", "Fusion"],
    priceRange: 3,
    rating: 4.7,
    reviewCount: 189,
    address: "Passeig de Gracia, 78",
    city: "Barcelona",
    neighborhood: "Eixample",
    phone: "+34 933 456 789",
    description: "Experiencia gastronomica japonesa con influencias mediterraneas. Omakase del chef, rolls creativos y una seleccion de sakes premium en un espacio minimalista y elegante.",
    coverGradient: "from-slate-600 via-zinc-700 to-neutral-800",
    features: ["Barra de sushi", "Sake bar", "Accesible"],
    hours: [
      { day: "Mar-Sab", open: "13:00", close: "16:00" },
      { day: "Mar-Sab", open: "20:00", close: "23:30" },
      { day: "Dom", open: "13:00", close: "16:00" },
    ],
    dietaryOptions: ["Sin gluten", "Pescetariano"],
    promotions: [
      {
        id: "p2",
        name: "Menu Almuerzo",
        discount: 20,
        type: "percentage",
        conditions: "Menu degustacion al mediodia",
        validDays: ["Mar", "Mie", "Jue"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Entrantes",
        items: [
          { id: "m9", name: "Edamame trufa", description: "Con sal en escamas y aceite de trufa negra", price: 8 },
          { id: "m10", name: "Gyozas de gambas", description: "6 uds con salsa ponzu", price: 11 },
        ],
      },
      {
        name: "Nigiri & Sashimi",
        items: [
          { id: "m11", name: "Nigiri variado (8 pzas)", description: "Seleccion del chef: atun, salmon, hamachi, gamba", price: 22, dietary: ["Sin gluten"] },
          { id: "m12", name: "Sashimi premium (12 pzas)", description: "Cortes premium del dia", price: 28, dietary: ["Sin gluten"] },
        ],
      },
      {
        name: "Rolls Especiales",
        items: [
          { id: "m13", name: "Dragon Roll", description: "Tempura de gamba, aguacate, anguila y salsa unagi", price: 16 },
          { id: "m14", name: "Barcelona Roll", description: "Atun picante, jamon iberico, queso crema, wasabi yuzu", price: 18 },
        ],
      },
    ],
    gallery: [],
    lat: 41.3940,
    lng: 2.1640,
  },
  {
    id: "3",
    name: "Trattoria Bella Roma",
    slug: "trattoria-bella-roma",
    cuisine: ["Italiana", "Mediterranea"],
    priceRange: 2,
    rating: 4.3,
    reviewCount: 312,
    address: "Calle de Serrano, 15",
    city: "Madrid",
    neighborhood: "Salamanca",
    phone: "+34 914 567 890",
    description: "Autentica cocina italiana en el corazon de Salamanca. Pasta fresca hecha a diario, pizzas en horno de lena napolitano y una bodega con los mejores vinos italianos.",
    coverGradient: "from-amber-400 via-orange-400 to-red-400",
    features: ["Horno de lena", "Terraza", "WiFi", "Grupos", "Accesible"],
    hours: [
      { day: "Lun-Dom", open: "13:00", close: "16:00" },
      { day: "Lun-Dom", open: "20:00", close: "23:30" },
    ],
    dietaryOptions: ["Vegetariano", "Vegano", "Sin gluten"],
    promotions: [
      {
        id: "p3",
        name: "Martes de Pasta",
        discount: 25,
        type: "percentage",
        conditions: "25% en todos los platos de pasta los martes",
        validDays: ["Mar"],
        validFrom: "2026-01-01",
        validUntil: "2026-06-30",
        status: "active",
      },
      {
        id: "p4",
        name: "2x1 en Pizzas",
        discount: 50,
        type: "2x1",
        conditions: "2x1 en pizzas seleccionadas, solo cenas de miercoles",
        validDays: ["Mie"],
        validFrom: "2026-01-01",
        validUntil: "2026-06-30",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Antipasti",
        items: [
          { id: "m15", name: "Burrata con tomate", description: "Con tomate corazon de buey y pesto fresco", price: 12, dietary: ["Vegetariano", "Sin gluten"] },
          { id: "m16", name: "Carpaccio de ternera", description: "Con rucula, parmesano y aceite de trufa", price: 14, dietary: ["Sin gluten"] },
        ],
      },
      {
        name: "Pasta",
        items: [
          { id: "m17", name: "Cacio e Pepe", description: "Receta clasica romana con pecorino y pimienta", price: 13, dietary: ["Vegetariano"] },
          { id: "m18", name: "Ragu alla bolognese", description: "Tagliatelle frescos con ragu tradicional", price: 14 },
        ],
      },
      {
        name: "Pizza",
        items: [
          { id: "m19", name: "Margherita", description: "Mozzarella di bufala, tomate San Marzano, albahaca", price: 11, dietary: ["Vegetariano"] },
          { id: "m20", name: "Diavola", description: "Salami picante, mozzarella, guindilla calabresa", price: 13 },
        ],
      },
    ],
    gallery: [],
    lat: 40.4260,
    lng: -3.6835,
  },
  {
    id: "4",
    name: "El Rincon Verde",
    slug: "el-rincon-verde",
    cuisine: ["Vegetariana", "Ecologica"],
    priceRange: 2,
    rating: 4.6,
    reviewCount: 156,
    address: "Carrer de Blai, 32",
    city: "Barcelona",
    neighborhood: "Poble Sec",
    phone: "+34 935 678 901",
    description: "Cocina plant-based creativa con ingredientes ecologicos de proximidad. Platos que sorprenden incluso a los mas carnivoros, con propuestas que celebran la sostenibilidad.",
    coverGradient: "from-emerald-400 via-green-500 to-teal-500",
    features: ["Terraza", "Ecologico", "Sin residuos", "WiFi"],
    hours: [
      { day: "Mar-Dom", open: "12:00", close: "16:00" },
      { day: "Mar-Sab", open: "19:30", close: "23:00" },
    ],
    dietaryOptions: ["Vegetariano", "Vegano", "Sin gluten", "Ecologico"],
    promotions: [
      {
        id: "p5",
        name: "Brunch Dominical",
        discount: 15,
        type: "percentage",
        conditions: "15% en brunch buffet los domingos",
        validDays: ["Dom"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Entrantes",
        items: [
          { id: "m21", name: "Hummus tricolor", description: "Clasico, remolacha y pimiento asado con pan de masa madre", price: 9, dietary: ["Vegano"] },
          { id: "m22", name: "Ceviche de mango", description: "Con aguacate, cilantro y chips de boniato", price: 11, dietary: ["Vegano", "Sin gluten"] },
        ],
      },
      {
        name: "Principales",
        items: [
          { id: "m23", name: "Bowl thai", description: "Arroz integral, tofu teriyaki, verduras wok, edamame", price: 13, dietary: ["Vegano", "Sin gluten"] },
          { id: "m24", name: "Risotto de setas", description: "Con boletus, parmesano vegano y trufa", price: 15, dietary: ["Vegano"] },
        ],
      },
    ],
    gallery: [],
    lat: 41.3735,
    lng: 2.1620,
  },
  {
    id: "5",
    name: "Asador Don Pedro",
    slug: "asador-don-pedro",
    cuisine: ["Asador", "Espanola"],
    priceRange: 4,
    rating: 4.8,
    reviewCount: 421,
    address: "Calle Mayor, 8",
    city: "Madrid",
    neighborhood: "Centro",
    phone: "+34 916 789 012",
    description: "Asador de referencia en Madrid con mas de 30 anos de historia. Carnes a la brasa con denominacion de origen, pescados del dia y una bodega excepcional con mas de 400 referencias.",
    coverGradient: "from-red-700 via-rose-800 to-red-900",
    features: ["Bodega premium", "Salon privado", "Accesible", "Parking"],
    hours: [
      { day: "Lun-Sab", open: "13:00", close: "16:00" },
      { day: "Lun-Sab", open: "20:30", close: "23:30" },
      { day: "Dom", open: "13:00", close: "16:30" },
    ],
    dietaryOptions: ["Sin gluten"],
    promotions: [],
    menu: [
      {
        name: "Entrantes",
        items: [
          { id: "m25", name: "Jamon iberico de bellota", description: "Cortado a mano, 100g", price: 24, dietary: ["Sin gluten"] },
          { id: "m26", name: "Pimientos de Padron", description: "Unos pican y otros no", price: 9, dietary: ["Vegano", "Sin gluten"] },
        ],
      },
      {
        name: "Carnes",
        items: [
          { id: "m27", name: "Chuleton de buey (1kg)", description: "Madurado 45 dias, a la brasa", price: 65, dietary: ["Sin gluten"] },
          { id: "m28", name: "Cochinillo asado", description: "Cuarto de cochinillo al horno de lena", price: 28, dietary: ["Sin gluten"] },
        ],
      },
    ],
    gallery: [],
    lat: 40.4153,
    lng: -3.7074,
  },
  {
    id: "6",
    name: "Mariscos del Puerto",
    slug: "mariscos-del-puerto",
    cuisine: ["Marisqueria", "Gallega"],
    priceRange: 3,
    rating: 4.4,
    reviewCount: 198,
    address: "Rambla del Poblenou, 55",
    city: "Barcelona",
    neighborhood: "Poblenou",
    phone: "+34 937 890 123",
    description: "Los mejores mariscos y pescados frescos de las rias gallegas directos a tu mesa. Mariscada para compartir, arroces marineros y vinos blancos seleccionados.",
    coverGradient: "from-blue-400 via-cyan-500 to-teal-400",
    features: ["Terraza", "Vista al mar", "Accesible", "Grupos"],
    hours: [
      { day: "Mar-Dom", open: "13:00", close: "16:30" },
      { day: "Mar-Sab", open: "20:00", close: "23:30" },
    ],
    dietaryOptions: ["Sin gluten", "Pescetariano"],
    promotions: [
      {
        id: "p6",
        name: "Arroz del dia",
        discount: 15,
        type: "percentage",
        conditions: "15% en arroces de lunes a jueves al mediodia",
        validDays: ["Lun", "Mar", "Mie", "Jue"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Mariscos",
        items: [
          { id: "m29", name: "Gambas al ajillo", description: "Con guindilla y ajo confitado", price: 16, dietary: ["Sin gluten"] },
          { id: "m30", name: "Pulpo braseado", description: "Con puree de patata y pimenton ahumado", price: 19, dietary: ["Sin gluten"] },
        ],
      },
      {
        name: "Arroces",
        items: [
          { id: "m31", name: "Arroz negro", description: "Con chipirones, alioli de azafran (min 2 pax)", price: 18, dietary: ["Sin gluten"] },
          { id: "m32", name: "Paella de marisco", description: "Receta clasica (min 2 pax)", price: 20, dietary: ["Sin gluten"] },
        ],
      },
    ],
    gallery: [],
    lat: 41.4005,
    lng: 2.2040,
  },
]

// ---- REVIEWS ----

export const reviews: Review[] = [
  {
    id: "r1",
    restaurantId: "1",
    userName: "Ana Garcia",
    userAvatar: "AG",
    rating: 5,
    comment: "Las mejores croquetas que he probado en Madrid. El ambiente es fantastico y el personal super amable. Volveremos seguro!",
    date: "2026-02-10",
    aspects: { food: 5, service: 5, ambience: 4, value: 5 },
  },
  {
    id: "r2",
    restaurantId: "1",
    userName: "Carlos Martinez",
    userAvatar: "CM",
    rating: 4,
    comment: "Muy buenas tapas y buen precio. La tortilla es espectacular. Solo le faltaria un poco mas de espacio entre mesas.",
    date: "2026-02-05",
    aspects: { food: 5, service: 4, ambience: 3, value: 5 },
  },
  {
    id: "r3",
    restaurantId: "2",
    userName: "Laura Fernandez",
    userAvatar: "LF",
    rating: 5,
    comment: "El omakase fue una experiencia increible. Cada pieza perfecta. El Barcelona Roll es adictivo.",
    date: "2026-02-08",
    aspects: { food: 5, service: 5, ambience: 5, value: 4 },
  },
  {
    id: "r4",
    restaurantId: "2",
    userName: "Miguel Torres",
    userAvatar: "MT",
    rating: 4,
    comment: "Sushi de altisima calidad. Pescado frisquisimo. Precios altos pero justificados por la calidad.",
    date: "2026-01-28",
    aspects: { food: 5, service: 4, ambience: 5, value: 3 },
  },
  {
    id: "r5",
    restaurantId: "3",
    userName: "Sofia Ruiz",
    userAvatar: "SR",
    rating: 4,
    comment: "Pizza increible, de las mejores de Madrid. La masa es perfecta y los ingredientes de primera.",
    date: "2026-02-12",
    aspects: { food: 5, service: 4, ambience: 4, value: 4 },
  },
  {
    id: "r6",
    restaurantId: "4",
    userName: "Elena Moreno",
    userAvatar: "EM",
    rating: 5,
    comment: "No soy vegetariana pero este sitio me ha convertido. El bowl thai es espectacular y el risotto de setas divino.",
    date: "2026-02-11",
    aspects: { food: 5, service: 5, ambience: 5, value: 5 },
  },
  {
    id: "r7",
    restaurantId: "5",
    userName: "Javier Lopez",
    userAvatar: "JL",
    rating: 5,
    comment: "El chuleton mejor madurado de Madrid, sin discusion. Servicio impecable y bodega de ensueno.",
    date: "2026-02-09",
    aspects: { food: 5, service: 5, ambience: 5, value: 4 },
  },
  {
    id: "r8",
    restaurantId: "6",
    userName: "Maria Sanchez",
    userAvatar: "MS",
    rating: 4,
    comment: "Marisco fresquisimo. La paella de marisco es generosa y sabrosa. Buen servicio y terraza con encanto.",
    date: "2026-02-07",
    aspects: { food: 5, service: 4, ambience: 4, value: 4 },
  },
  {
    id: "r9",
    restaurantId: "3",
    userName: "Pablo Navarro",
    userAvatar: "PN",
    rating: 5,
    comment: "La cacio e pepe mas autentica fuera de Roma. Ambiente italiano genuino, el chef es un crack.",
    date: "2026-01-30",
    aspects: { food: 5, service: 5, ambience: 5, value: 4 },
  },
  {
    id: "r10",
    restaurantId: "1",
    userName: "Isabel Gutierrez",
    userAvatar: "IG",
    rating: 4,
    comment: "El rabo de toro estaba para llorar de lo bueno. Vinos naturales muy interesantes. Repetiremos!",
    date: "2026-01-25",
    aspects: { food: 5, service: 4, ambience: 4, value: 4 },
  },
]

// ---- SURPLUS BAGS ----

export const surplusBags: SurplusBag[] = [
  {
    id: "b1",
    restaurantId: "1",
    restaurantName: "La Taberna de Lola",
    name: "Bolsa Sorpresa Tapas",
    description: "Surtido de tapas del dia que no se han vendido. Puede incluir croquetas, tortilla, patatas bravas y mas.",
    originalPrice: 18,
    price: 5.99,
    discount: 67,
    pickupFrom: "21:30",
    pickupUntil: "22:30",
    dietaryTags: ["Puede contener gluten"],
    available: 3,
    total: 5,
    coverGradient: "from-orange-400 to-red-400",
    status: "available",
  },
  {
    id: "b2",
    restaurantId: "3",
    restaurantName: "Trattoria Bella Roma",
    name: "Bolsa Sorpresa Italiana",
    description: "Combinacion de pizza, pasta y antipasti preparados hoy. Una cena italiana completa.",
    originalPrice: 22,
    price: 6.99,
    discount: 68,
    pickupFrom: "22:00",
    pickupUntil: "23:00",
    dietaryTags: ["Contiene gluten", "Contiene lacteos"],
    available: 2,
    total: 4,
    coverGradient: "from-amber-400 to-orange-400",
    status: "available",
  },
  {
    id: "b3",
    restaurantId: "4",
    restaurantName: "El Rincon Verde",
    name: "Bolsa Sorpresa Veggie",
    description: "Seleccion de platos vegetarianos y veganos del dia. Siempre ecologico, siempre delicioso.",
    originalPrice: 16,
    price: 4.99,
    discount: 69,
    pickupFrom: "21:00",
    pickupUntil: "22:00",
    dietaryTags: ["Vegano", "Ecologico", "Sin gluten disponible"],
    available: 4,
    total: 6,
    coverGradient: "from-emerald-400 to-teal-400",
    status: "available",
  },
  {
    id: "b4",
    restaurantId: "6",
    restaurantName: "Mariscos del Puerto",
    name: "Bolsa Sorpresa Marinera",
    description: "Raciones de pescado y marisco del dia. Puede incluir arroz, gambas, pescado frito o al horno.",
    originalPrice: 25,
    price: 7.99,
    discount: 68,
    pickupFrom: "22:00",
    pickupUntil: "23:00",
    dietaryTags: ["Sin gluten", "Pescetariano"],
    available: 1,
    total: 3,
    coverGradient: "from-blue-400 to-cyan-400",
    status: "available",
  },
  {
    id: "b5",
    restaurantId: "2",
    restaurantName: "Sushi Zen",
    name: "Bolsa Sorpresa Sushi",
    description: "Piezas de sushi y rolls variados del dia. Frescura garantizada.",
    originalPrice: 30,
    price: 9.99,
    discount: 67,
    pickupFrom: "22:30",
    pickupUntil: "23:30",
    dietaryTags: ["Pescetariano"],
    available: 0,
    total: 2,
    coverGradient: "from-slate-500 to-zinc-600",
    status: "sold_out",
  },
]

// ---- CURRENT USER ----

export const currentUser: UserProfile = {
  id: "u1",
  name: "Maria Lopez",
  email: "maria.lopez@email.com",
  phone: "+34 612 345 678",
  avatar: "ML",
  dietaryPreferences: ["Sin gluten"],
  favoriteRestaurants: ["1", "4"],
  reservations: [
    {
      id: "res1",
      restaurantId: "1",
      restaurantName: "La Taberna de Lola",
      date: "2026-02-18",
      time: "21:00",
      guests: 2,
      promotion: "Happy Hour Tapas (-30%)",
      status: "confirmed",
      code: "LB-2026-A3F8",
      notes: "Mesa cerca de la ventana si es posible",
    },
    {
      id: "res2",
      restaurantId: "2",
      restaurantName: "Sushi Zen",
      date: "2026-02-22",
      time: "20:30",
      guests: 4,
      promotion: "Menu Almuerzo (-20%)",
      status: "confirmed",
      code: "LB-2026-B7K2",
    },
    {
      id: "res3",
      restaurantId: "3",
      restaurantName: "Trattoria Bella Roma",
      date: "2026-01-20",
      time: "21:00",
      guests: 2,
      status: "completed",
      code: "LB-2026-C1D4",
    },
    {
      id: "res4",
      restaurantId: "5",
      restaurantName: "Asador Don Pedro",
      date: "2026-01-10",
      time: "14:00",
      guests: 6,
      status: "completed",
      code: "LB-2026-D9E6",
      notes: "Cumpleanos",
    },
    {
      id: "res5",
      restaurantId: "4",
      restaurantName: "El Rincon Verde",
      date: "2025-12-28",
      time: "13:00",
      guests: 2,
      promotion: "Brunch Dominical (-15%)",
      status: "cancelled",
      code: "LB-2025-E5F7",
    },
  ],
  bagPurchases: [
    {
      id: "bp1",
      bagId: "b1",
      restaurantName: "La Taberna de Lola",
      bagName: "Bolsa Sorpresa Tapas",
      price: 5.99,
      pickupDate: "2026-02-15",
      pickupFrom: "21:30",
      pickupUntil: "22:30",
      status: "pending_pickup",
      code: "LB-BAG-X4Y2",
    },
    {
      id: "bp2",
      bagId: "b3",
      restaurantName: "El Rincon Verde",
      bagName: "Bolsa Sorpresa Veggie",
      price: 4.99,
      pickupDate: "2026-02-10",
      pickupFrom: "21:00",
      pickupUntil: "22:00",
      status: "picked_up",
      code: "LB-BAG-Z8W1",
    },
  ],
}

// ---- MANAGER MOCK DATA ----

export const managerStats = {
  today: {
    reservations: 18,
    guests: 52,
    noShows: 1,
    occupancy: 78,
    surplusBags: 4,
    surplusSold: 3,
    revenue: 1240,
  },
  week: {
    reservations: 94,
    guests: 312,
    noShows: 5,
    avgOccupancy: 72,
    surplusBags: 24,
    surplusSold: 19,
    revenue: 7840,
  },
}

export const managerReservations: Reservation[] = [
  { id: "mr1", restaurantId: "1", restaurantName: "La Taberna de Lola", date: "2026-02-14", time: "13:00", guests: 2, status: "confirmed", code: "LB-M1" },
  { id: "mr2", restaurantId: "1", restaurantName: "La Taberna de Lola", date: "2026-02-14", time: "13:30", guests: 4, status: "confirmed", code: "LB-M2", promotion: "Happy Hour Tapas (-30%)" },
  { id: "mr3", restaurantId: "1", restaurantName: "La Taberna de Lola", date: "2026-02-14", time: "14:00", guests: 3, status: "confirmed", code: "LB-M3" },
  { id: "mr4", restaurantId: "1", restaurantName: "La Taberna de Lola", date: "2026-02-14", time: "14:00", guests: 2, promotion: "Happy Hour Tapas (-30%)", status: "confirmed", code: "LB-M4" },
  { id: "mr5", restaurantId: "1", restaurantName: "La Taberna de Lola", date: "2026-02-14", time: "21:00", guests: 6, status: "confirmed", code: "LB-M5", notes: "Aniversario" },
  { id: "mr6", restaurantId: "1", restaurantName: "La Taberna de Lola", date: "2026-02-14", time: "21:30", guests: 2, status: "confirmed", code: "LB-M6" },
  { id: "mr7", restaurantId: "1", restaurantName: "La Taberna de Lola", date: "2026-02-14", time: "21:30", guests: 4, status: "no_show", code: "LB-M7" },
  { id: "mr8", restaurantId: "1", restaurantName: "La Taberna de Lola", date: "2026-02-14", time: "22:00", guests: 2, status: "completed", code: "LB-M8" },
]

export const weeklyReservationData = [
  { day: "Lun", reservations: 12, guests: 38 },
  { day: "Mar", reservations: 15, guests: 45 },
  { day: "Mie", reservations: 18, guests: 56 },
  { day: "Jue", reservations: 14, guests: 42 },
  { day: "Vie", reservations: 22, guests: 68 },
  { day: "Sab", reservations: 25, guests: 78 },
  { day: "Dom", reservations: 8, guests: 25 },
]

export const surplusWeeklyData = [
  { day: "Lun", published: 4, sold: 3 },
  { day: "Mar", published: 3, sold: 3 },
  { day: "Mie", published: 5, sold: 4 },
  { day: "Jue", published: 4, sold: 2 },
  { day: "Vie", published: 3, sold: 3 },
  { day: "Sab", published: 5, sold: 4 },
  { day: "Dom", published: 0, sold: 0 },
]

// ---- HELPERS ----

export function getRestaurant(id: string): Restaurant | undefined {
  return restaurants.find((r) => r.id === id)
}

export function getRestaurantReviews(restaurantId: string): Review[] {
  return reviews.filter((r) => r.restaurantId === restaurantId)
}

export function getRestaurantBags(restaurantId: string): SurplusBag[] {
  return surplusBags.filter((b) => b.restaurantId === restaurantId)
}

export function priceRangeLabel(range: number): string {
  return "$".repeat(range)
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(amount)
}
