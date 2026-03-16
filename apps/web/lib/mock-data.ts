// ============================================================
// Last Bite — Mock Data (Caracas, Venezuela)
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
  image?: string
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
  image?: string
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

export interface Mesa {
  id: string
  restauranteId: string
  numero: number
  capacidad: number
  estado: "libre" | "ocupada" | "reservada"
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
    name: "Carbón",
    slug: "carbon",
    cuisine: ["Parrilla", "Internacional", "Criolla"],
    priceRange: 3,
    rating: 4.6,
    reviewCount: 420,
    address: "Av. Eugenio Mendoza, Transversal 1, La Castellana",
    city: "Caracas",
    neighborhood: "La Castellana",
    phone: "+58 212 263 4521",
    description: "Restaurante gourmet especializado en carnes a la parrilla y aves. Ambiente de dos niveles con terraza. Destacan el pollo rostizado, Angus beef y acompañamientos como arepas y cachapas.",
    coverGradient: "from-stone-600 via-stone-500 to-amber-700",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop&q=80",
    features: ["Terraza", "Bar", "WiFi", "Estacionamiento", "Grupos"],
    hours: [
      { day: "Lun-Jue", open: "11:30", close: "22:00" },
      { day: "Vie-Sab", open: "08:30", close: "00:00" },
      { day: "Dom", open: "08:30", close: "22:00" },
    ],
    dietaryOptions: ["Sin gluten"],
    promotions: [
      {
        id: "p1",
        name: "Almuerzo ejecutivo",
        discount: 15,
        type: "percentage",
        conditions: "Valido de 12:00 a 15:00 en platos del menu ejecutivo",
        validDays: ["Lun", "Mar", "Mie", "Jue", "Vie"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Entradas",
        items: [
          { id: "m1", name: "Tequenos de queso", description: "Tequenos crujientes con salsa de ajo", price: 8, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80" },
          { id: "m2", name: "Cachapa con queso de mano", description: "Cachapa dulce con queso fresco", price: 9, image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=400&h=300&fit=crop&q=80" },
          { id: "m3", name: "Ensalada Carbon", description: "Mix de hojas, aguacate y aderezo de hierbas", price: 10, dietary: ["Vegetariano", "Sin gluten"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Platos principales",
        items: [
          { id: "m4", name: "Pollo rostizado", description: "Medio pollo al horno con papas y ensalada", price: 18, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=400&h=300&fit=crop&q=80" },
          { id: "m5", name: "Angus beef 200g", description: "Corte Angus a la parrilla con guarnicion", price: 28, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&q=80" },
          { id: "m6", name: "Parrilla mar y tierra", description: "Combinado de res y camarones a la parrilla", price: 32, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80" },
          { id: "m7", name: "Lebranche al ajillo", description: "Pescado fresco en salsa de ajo y vino blanco", price: 22, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Postres",
        items: [
          { id: "m8", name: "Quesillo", description: "Flan de huevo tradicional venezolano", price: 7, image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop&q=80" },
          { id: "m9", name: "Brownie con helado", description: "Brownie de chocolate con bola de helado", price: 9, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&q=80" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.5012,
    lng: -66.8518,
  },
  {
    id: "2",
    name: "La Casa Bistro",
    slug: "la-casa-bistro",
    cuisine: ["Internacional", "Fusion", "Vegetariana"],
    priceRange: 2,
    rating: 4.5,
    reviewCount: 380,
    address: "3a Avenida entre 3a y 4a Transversal, Los Palos Grandes",
    city: "Caracas",
    neighborhood: "Los Palos Grandes",
    phone: "+58 212 285 7744",
    description: "Cocina farm-to-table con vegetales organicos de su propia huerta. Pan artesanal diario y preparaciones caseras. Desayunos, brunch, sopas y platos a la parrilla.",
    coverGradient: "from-green-500 via-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop&q=80",
    features: ["Terraza", "WiFi", "Bar"],
    hours: [{ day: "Lun-Dom", open: "08:00", close: "18:00" }],
    dietaryOptions: ["Vegetariano", "Vegano", "Sin gluten"],
    promotions: [
      {
        id: "p2",
        name: "Brunch 2x1 cafe",
        discount: 50,
        type: "2x1",
        conditions: "Compra un brunch y lleva el segundo cafe gratis",
        validDays: ["Sab", "Dom"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Desayunos y brunch",
        items: [
          { id: "m10", name: "Huevos benedictinos", description: "Huevos poche sobre pan artesanal con holandesa", price: 12, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop&q=80" },
          { id: "m11", name: "Avena con frutos rojos", description: "Avena cremosa con frutos del bosque y miel", price: 8, dietary: ["Vegano", "Sin gluten"], image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=400&h=300&fit=crop&q=80" },
          { id: "m12", name: "Tostadas con aguacate", description: "Pan integral, aguacate, huevo y semillas", price: 10, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Platos principales",
        items: [
          { id: "m13", name: "Risotto de setas", description: "Arroz cremoso con setas y parmesano", price: 18, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop&q=80" },
          { id: "m14", name: "Pollo a la parrilla con vegetales", description: "Pechuga con verduras de la huerta", price: 16, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=400&h=300&fit=crop&q=80" },
          { id: "m15", name: "Salmon bowl", description: "Salmon, quinoa, aguacate y edamame", price: 22, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1512003867696-6d5ce6835040?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Postres y bebidas",
        items: [
          { id: "m16", name: "Tarta de limon", description: "Tarta cremosa de limon con merengue", price: 8, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1568093858174-0b39b0b786dc?w=400&h=300&fit=crop&q=80" },
          { id: "m17", name: "Smoothie verde", description: "Espinaca, pina, platano y jengibre", price: 6, dietary: ["Vegano", "Sin gluten"] },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4962,
    lng: -66.8551,
  },
  {
    id: "3",
    name: "La Barra de Chacao",
    slug: "la-barra-de-chacao",
    cuisine: ["Internacional", "Mariscos", "Criolla"],
    priceRange: 2,
    rating: 4.3,
    reviewCount: 290,
    address: "Av. Francisco de Miranda con Calle El Muneco, Chacao",
    city: "Caracas",
    neighborhood: "Chacao",
    phone: "+58 212 266 8890",
    description: "Restaurante y bar internacional con ambiente animado. Tres espacios con distintas intensidades. Especialidad en parrilla mar y tierra, tequenos y pescados.",
    coverGradient: "from-amber-500 via-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=500&fit=crop&q=80",
    features: ["Bar", "Terraza", "WiFi", "Grupos"],
    hours: [
      { day: "Lun-Jue", open: "12:00", close: "23:00" },
      { day: "Vie-Sab", open: "12:00", close: "01:00" },
      { day: "Dom", open: "12:00", close: "22:00" },
    ],
    dietaryOptions: [],
    promotions: [
      {
        id: "p3",
        name: "Happy hour",
        discount: 25,
        type: "percentage",
        conditions: "En bebidas y tapas de 17:00 a 19:00",
        validDays: ["Lun", "Mar", "Mie", "Jue", "Vie"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Tapas y entradas",
        items: [
          { id: "m18", name: "Tequenos con guasacaca", description: "Tequenos crujientes con salsa guasacaca", price: 7, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80" },
          { id: "m19", name: "Ceviche de corvina", description: "Ceviche clasico con leche de tigre", price: 12, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1535400255456-984b8b0ba9e4?w=400&h=300&fit=crop&q=80" },
          { id: "m20", name: "Patatas bravas", description: "Papas crocantes con alioli y salsa brava", price: 8, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1573680156791-e76e0f82a594?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Platos principales",
        items: [
          { id: "m21", name: "Parrilla mar y tierra", description: "Res y camarones a la parrilla", price: 28, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80" },
          { id: "m22", name: "Lebranche al ajillo", description: "Pescado en salsa de ajo", price: 20, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&q=80" },
          { id: "m23", name: "Arroz con mariscos", description: "Arroz cremoso con camarones y calamares", price: 22, image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Bebidas",
        items: [
          { id: "m24", name: "Cerveza nacional", description: "Polar o Regional fria", price: 4 },
          { id: "m25", name: "Ron y coke", description: "Ron venezolano con Coca-Cola", price: 6 },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4948,
    lng: -66.8532,
  },
  {
    id: "4",
    name: "Omono Restaurant",
    slug: "omono-restaurant",
    cuisine: ["Japonesa", "Mariscos"],
    priceRange: 3,
    rating: 4.4,
    reviewCount: 350,
    address: "Av. El Bosque con 4ta Transversal, Altamira",
    city: "Caracas",
    neighborhood: "Altamira",
    phone: "+58 212 263 1022",
    description: "Sushi y Japanese Steak House con nueve estaciones de teppanyaki. Teppan Lunch en horario de almuerzo. Entregas sin minimo los jueves.",
    coverGradient: "from-red-600 via-rose-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=500&fit=crop&q=80",
    features: ["Bar", "WiFi", "Grupos", "Estacionamiento"],
    hours: [{ day: "Lun-Dom", open: "12:00", close: "23:00" }],
    dietaryOptions: ["Sin gluten", "Vegetariano"],
    promotions: [
      {
        id: "p4",
        name: "Teppan Lunch",
        discount: 0,
        type: "fixed",
        conditions: "Menu teppanyaki $15.99 de 12:00 a 16:00",
        validDays: ["Lun", "Mar", "Mie", "Jue", "Vie"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Entradas",
        items: [
          { id: "m26", name: "Edamame", description: "Vainas de soja con sal marina", price: 6, dietary: ["Vegano", "Sin gluten"], image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop&q=80" },
          { id: "m27", name: "Gyozas", description: "Empanadillas de cerdo o vegetales", price: 10, image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400&h=300&fit=crop&q=80" },
          { id: "m28", name: "Sopa miso", description: "Sopa tradicional con tofu y alga", price: 5, dietary: ["Vegano"], image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Sushi y rolls",
        items: [
          { id: "m29", name: "Roll Philadelphia", description: "Salmon, queso crema y aguacate", price: 16, image: "https://images.unsplash.com/photo-1617196034183-421b4040d74d?w=400&h=300&fit=crop&q=80" },
          { id: "m30", name: "Roll dynamite", description: "Camaron tempura con salsa picante", price: 18, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&q=80" },
          { id: "m31", name: "Sashimi mixto", description: "Seleccion de pescado fresco", price: 24, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Teppanyaki",
        items: [
          { id: "m32", name: "Teppan pollo", description: "Pollo salteado en la plancha con vegetales", price: 18, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=400&h=300&fit=crop&q=80" },
          { id: "m33", name: "Teppan res", description: "Filete de res con salsa teriyaki", price: 28, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&q=80" },
          { id: "m34", name: "Tempura de camarones", description: "Camarones empanizados con salsa tentsuyu", price: 20, image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop&q=80" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4985,
    lng: -66.8482,
  },
  {
    id: "5",
    name: "El Alazan de Altamira",
    slug: "el-alazan-de-altamira",
    cuisine: ["Parrilla", "Criolla"],
    priceRange: 4,
    rating: 4.6,
    reviewCount: 487,
    address: "Av. Luis Roche, entre 5ta y 6ta Transversal, Altamira",
    city: "Caracas",
    neighborhood: "Altamira",
    phone: "+58 212 263 8899",
    description: "Steakhouse de referencia en Altamira. Especialidad en baby beef y punta trasera. Ambiente formal con estacionamiento y WiFi. Muy recomendado reservar.",
    coverGradient: "from-rose-800 via-red-700 to-amber-800",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=500&fit=crop&q=80",
    features: ["Estacionamiento", "WiFi", "Bar", "Grupos", "Privado"],
    hours: [{ day: "Lun-Dom", open: "12:00", close: "23:00" }],
    dietaryOptions: ["Sin gluten"],
    promotions: [
      {
        id: "p5",
        name: "Corte + vino",
        discount: 20,
        type: "percentage",
        conditions: "Al comprar un corte de res, segunda copa de vino a 20% off",
        validDays: ["Mar", "Mie", "Jue"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Entradas",
        items: [
          { id: "m35", name: "Carpaccio de res", description: "Laminas de res con rucula y parmesano", price: 14, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80" },
          { id: "m36", name: "Provoleta", description: "Queso provolone a la parrilla con oregano", price: 11, dietary: ["Vegetariano", "Sin gluten"], image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop&q=80" },
          { id: "m37", name: "Ensalada Cesar", description: "Lechuga romana, crutones y aderezo Cesar", price: 10, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Cortes y parrilla",
        items: [
          { id: "m38", name: "Baby beef", description: "Corte tierno a la parrilla 250g", price: 32, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&q=80" },
          { id: "m39", name: "Punta trasera", description: "Corte premium 300g con guarnicion", price: 38, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop&q=80" },
          { id: "m40", name: "Tomahawk para dos", description: "Corte tomahawk 800g compartido", price: 75, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80" },
          { id: "m41", name: "Costillas de cerdo", description: "Costillas glaseadas con salsa BBQ", price: 26, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Postres",
        items: [
          { id: "m42", name: "Volcan de chocolate", description: "Brownie caliente con corazon de chocolate", price: 10, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&q=80" },
          { id: "m43", name: "Cheesecake", description: "Cheesecake cremoso con frutos rojos", price: 9, image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=400&h=300&fit=crop&q=80" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4978,
    lng: -66.8475,
  },
  {
    id: "6",
    name: "Cima Las Mercedes",
    slug: "cima-las-mercedes",
    cuisine: ["Internacional", "Parrilla", "Mariscos"],
    priceRange: 4,
    rating: 4.5,
    reviewCount: 310,
    address: "Av. Paseo Erazo con calle Chivacoa, Torre Tamanaco, Azotea",
    city: "Caracas",
    neighborhood: "Las Mercedes",
    phone: "+58 212 909 1234",
    description: "Restaurante con vista panoramica en la azotea del Torre Tamanaco. Cocina internacional y carnes, menu ejecutivo, valet parking y WiFi.",
    coverGradient: "from-sky-600 via-blue-600 to-indigo-700",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80",
    features: ["Vista", "Terraza", "Estacionamiento", "WiFi", "Bar", "Grupos"],
    hours: [
      { day: "Lun-Vie", open: "12:00", close: "23:00" },
      { day: "Sab-Dom", open: "11:00", close: "00:00" },
    ],
    dietaryOptions: ["Vegetariano", "Sin gluten"],
    promotions: [
      {
        id: "p6",
        name: "Menu ejecutivo",
        discount: 15,
        type: "percentage",
        conditions: "De 12:00 a 15:00 de lunes a viernes",
        validDays: ["Lun", "Mar", "Mie", "Jue", "Vie"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Entradas",
        items: [
          { id: "m44", name: "Tartar de atun", description: "Atun fresco con aguacate y chips de wonton", price: 16, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop&q=80" },
          { id: "m45", name: "Ceviche Cima", description: "Ceviche de pescado con mango y cilantro", price: 14, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1535400255456-984b8b0ba9e4?w=400&h=300&fit=crop&q=80" },
          { id: "m46", name: "Bruschetta trio", description: "Tres variedades sobre pan artesanal", price: 11, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Platos principales",
        items: [
          { id: "m47", name: "Filet mignon", description: "Filete 200g con salsa de vino tinto", price: 35, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&q=80" },
          { id: "m48", name: "Risotto de mariscos", description: "Arroz cremoso con langostinos y mejillones", price: 28, image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&h=300&fit=crop&q=80" },
          { id: "m49", name: "Salmon a la plancha", description: "Salmon con vegetales y salsa de eneldo", price: 26, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Postres",
        items: [
          { id: "m50", name: "Tiramisu", description: "Clasico italiano con cafe y cacao", price: 10, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop&q=80" },
          { id: "m51", name: "Creme brulee", description: "Crema de vainilla con costra de caramelo", price: 9, image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop&q=80" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4921,
    lng: -66.8582,
  },
  {
    id: "7",
    name: "La Fonda de Las Mercedes",
    slug: "la-fonda-de-las-mercedes",
    cuisine: ["Criolla", "Parrilla"],
    priceRange: 2,
    rating: 4.2,
    reviewCount: 195,
    address: "Av. Veracruz con Calle Cali, C.C. Vicent, Nivel PB, Local 2",
    city: "Caracas",
    neighborhood: "Las Mercedes",
    phone: "+58 212 992 7635",
    description: "Comida criolla tradicional y carne a la brasa. Ambiente familiar con estacionamiento privado. Sabores venezolanos autenticos en Las Mercedes.",
    coverGradient: "from-amber-400 via-orange-400 to-red-500",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=500&fit=crop&q=80",
    features: ["Estacionamiento", "Bar", "Grupos"],
    hours: [{ day: "Lun-Dom", open: "11:30", close: "00:00" }],
    dietaryOptions: [],
    promotions: [
      {
        id: "p7",
        name: "Pabellon del dia",
        discount: 10,
        type: "percentage",
        conditions: "Pabellon criollo completo los martes con 10% off",
        validDays: ["Mar"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Entradas",
        items: [
          { id: "m52", name: "Tequenos fritos", description: "6 tequenos de queso con salsa verde", price: 7, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80" },
          { id: "m53", name: "Ensalada mixta", description: "Lechuga, tomate, cebolla y aguacate", price: 8, dietary: ["Vegetariano", "Sin gluten"] },
          { id: "m54", name: "Sopa de pollo", description: "Sopa criolla con yuca y cilantro", price: 8, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Platos principales",
        items: [
          { id: "m55", name: "Pabellon criollo", description: "Carne mechada, arroz, caraotas y platano", price: 14, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&q=80" },
          { id: "m56", name: "Pollo a la brasa", description: "Medio pollo con papas fritas y ensalada", price: 16, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=400&h=300&fit=crop&q=80" },
          { id: "m57", name: "Churrasco con guarnicion", description: "Carne a la brasa con arroz y tajadas", price: 22, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Postres",
        items: [
          { id: "m58", name: "Quesillo de la casa", description: "Quesillo venezolano con caramelo", price: 6, image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop&q=80" },
          { id: "m59", name: "Bienmesabe", description: "Postre de coco tradicional venezolano", price: 5 },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4915,
    lng: -66.8590,
  },
  {
    id: "8",
    name: "El Rosal Grill",
    slug: "el-rosal-grill",
    cuisine: ["Criolla", "Internacional"],
    priceRange: 1,
    rating: 4.0,
    reviewCount: 120,
    address: "Av. Tamanaco, C.C. Galipan, Torre C, Nivel Avenida, El Rosal",
    city: "Caracas",
    neighborhood: "El Rosal",
    phone: "+58 212 953 4421",
    description: "Almuerzos ejecutivos y comida casera abundante a buen precio. Ambiente sencillo. Solo efectivo. Ideal para comer rapido en la zona.",
    coverGradient: "from-yellow-500 via-amber-500 to-orange-600",
    features: ["Grupos"],
    hours: [
      { day: "Lun-Sab", open: "07:00", close: "18:00" },
      { day: "Dom", open: "07:00", close: "16:00" },
    ],
    dietaryOptions: [],
    promotions: [
      {
        id: "p8",
        name: "Almuerzo del dia",
        discount: 20,
        type: "percentage",
        conditions: "Plato del dia de 12:00 a 14:30",
        validDays: ["Lun", "Mar", "Mie", "Jue", "Vie"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Desayunos",
        items: [
          { id: "m60", name: "Desayuno criollo", description: "Huevos, arepa, queso y cafe", price: 7, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop&q=80" },
          { id: "m61", name: "Cachapa con queso", description: "Cachapa con queso de mano y mantequilla", price: 6, image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=400&h=300&fit=crop&q=80" },
          { id: "m62", name: "Perico con arepa", description: "Huevos revueltos con tomate y cebolla", price: 6, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Almuerzos",
        items: [
          { id: "m63", name: "Pabellon criollo", description: "Carne mechada, arroz, caraotas y platano", price: 10, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&q=80" },
          { id: "m64", name: "Pollo guisado", description: "Pollo en salsa con arroz y ensalada", price: 9, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=400&h=300&fit=crop&q=80" },
          { id: "m65", name: "Carne mechada", description: "Carne desmechada con arroz y tajadas", price: 10, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Bebidas",
        items: [
          { id: "m66", name: "Jugo natural", description: "Jugo del dia", price: 3 },
          { id: "m67", name: "Cafe", description: "Cafe negro o con leche", price: 2 },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4902,
    lng: -66.8625,
  },
  {
    id: "9",
    name: "Maco Bistro",
    slug: "maco-bistro",
    cuisine: ["Internacional", "Fusion"],
    priceRange: 2,
    rating: 4.3,
    reviewCount: 178,
    address: "Av. Guaicaipuro, Urb. San Marino, Chacao",
    city: "Caracas",
    neighborhood: "Chacao",
    phone: "+58 424 177 0127",
    description: "Bistro en San Marino con cocina internacional y toques mediterraneos. Abierto de manana a noche; ideal para desayuno, almuerzo o cena.",
    coverGradient: "from-teal-500 via-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&h=500&fit=crop&q=80",
    features: ["WiFi", "Terraza", "Bar"],
    hours: [
      { day: "Lun-Sab", open: "08:00", close: "22:00" },
      { day: "Dom", open: "08:00", close: "18:00" },
    ],
    dietaryOptions: ["Vegetariano", "Sin gluten"],
    promotions: [
      {
        id: "p9",
        name: "Desayuno ejecutivo",
        discount: 15,
        type: "percentage",
        conditions: "Desayunos de 08:00 a 11:00 de lunes a viernes",
        validDays: ["Lun", "Mar", "Mie", "Jue", "Vie"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Entradas",
        items: [
          { id: "m68", name: "Bruschetta de tomate", description: "Pan tostado con tomate, albahaca y aceite", price: 8, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop&q=80" },
          { id: "m69", name: "Hummus con pan pita", description: "Hummus cremoso con aceite y paprika", price: 7, dietary: ["Vegano"], image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&q=80" },
          { id: "m70", name: "Ensalada griega", description: "Pepino, tomate, aceitunas y queso feta", price: 9, dietary: ["Vegetariano", "Sin gluten"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Platos principales",
        items: [
          { id: "m71", name: "Pasta al pesto", description: "Spaghetti con pesto de albahaca y pinones", price: 14, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop&q=80" },
          { id: "m72", name: "Salmon a la plancha", description: "Salmon con vegetales y limon", price: 20, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&q=80" },
          { id: "m73", name: "Risotto de champinones", description: "Risotto cremoso con champinones", price: 16, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Postres",
        items: [
          { id: "m74", name: "Panna cotta", description: "Panna cotta de vainilla con frutos rojos", price: 8, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=400&h=300&fit=crop&q=80" },
          { id: "m75", name: "Tarta de manzana", description: "Tarta de manzana con helado", price: 7, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1568093858174-0b39b0b786dc?w=400&h=300&fit=crop&q=80" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4935,
    lng: -66.8540,
  },
  {
    id: "10",
    name: "Andino Pop",
    slug: "andino-pop",
    cuisine: ["Criolla", "Fusion"],
    priceRange: 1,
    rating: 4.1,
    reviewCount: 95,
    address: "Calle Sucre, Chacao",
    city: "Caracas",
    neighborhood: "Chacao",
    phone: "+58 212 266 3344",
    description: "Comida criolla y andina con influencias peruanas. Desayunos, almuerzos y meriendas en un ambiente casual. Horario continuado.",
    coverGradient: "from-lime-500 via-green-500 to-emerald-600",
    features: ["WiFi", "Grupos"],
    hours: [
      { day: "Lun-Sab", open: "07:00", close: "18:00" },
      { day: "Dom", open: "07:00", close: "16:00" },
    ],
    dietaryOptions: ["Vegetariano"],
    promotions: [
      {
        id: "p10",
        name: "Merienda 2x1",
        discount: 50,
        type: "2x1",
        conditions: "Cafe o infusion 2x1 de 15:00 a 17:00",
        validDays: ["Lun", "Mar", "Mie", "Jue", "Vie"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Desayunos",
        items: [
          { id: "m76", name: "Desayuno andino", description: "Huevos, queso, palta y pan", price: 8, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop&q=80" },
          { id: "m77", name: "Arepa reina pepiada", description: "Arepa con pollo y aguacate", price: 6, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80" },
          { id: "m78", name: "Avena con fruta", description: "Avena con platano y miel", price: 5, dietary: ["Vegano", "Sin gluten"] },
        ],
      },
      {
        name: "Platos principales",
        items: [
          { id: "m79", name: "Ceviche peruano", description: "Pescado marinado en leche de tigre", price: 12, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1535400255456-984b8b0ba9e4?w=400&h=300&fit=crop&q=80" },
          { id: "m80", name: "Lomo saltado", description: "Lomo de res con arroz y papas fritas", price: 14, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80" },
          { id: "m81", name: "Pabellon andino", description: "Variacion del pabellon con influencia andina", price: 11, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Bebidas",
        items: [
          { id: "m82", name: "Chicha morada", description: "Bebida peruana de maiz morado", price: 4, dietary: ["Vegano"] },
          { id: "m83", name: "Cafe con leche", description: "Cafe con leche caliente", price: 3 },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535400255456-984b8b0ba9e4?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4940,
    lng: -66.8528,
  },
  {
    id: "11",
    name: "The Grand",
    slug: "the-grand",
    cuisine: ["Internacional", "Fusion"],
    priceRange: 4,
    rating: 4.7,
    reviewCount: 520,
    address: "Av. Principal de Las Mercedes, C.C. Sambil, Nivel Gastronomia",
    city: "Caracas",
    neighborhood: "Las Mercedes",
    phone: "+58 212 993 5566",
    description: "Restaurante de alta cocina en Las Mercedes. Menu internacional con influencias mediterraneas. Ambiente elegante y carta de vinos seleccionada.",
    coverGradient: "from-slate-700 via-slate-600 to-amber-700",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=500&fit=crop&q=80",
    features: ["Bar", "Terraza", "WiFi", "Estacionamiento", "Grupos", "Privado"],
    hours: [
      { day: "Lun-Jue", open: "12:00", close: "23:00" },
      { day: "Vie-Dom", open: "12:00", close: "00:00" },
    ],
    dietaryOptions: ["Vegetariano", "Vegano", "Sin gluten"],
    promotions: [
      {
        id: "p11",
        name: "Menu degustacion",
        discount: 20,
        type: "percentage",
        conditions: "Menu de 5 tiempos con reserva previa",
        validDays: ["Lun", "Mar", "Mie", "Jue"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Entradas",
        items: [
          { id: "m84", name: "Carpaccio de remolacha", description: "Remolacha con queso de cabra y nueces", price: 14, dietary: ["Vegetariano", "Sin gluten"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80" },
          { id: "m85", name: "Tartar de salmon", description: "Salmon con aguacate y chips", price: 16, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop&q=80" },
          { id: "m86", name: "Foie gras", description: "Foie gras con brioche y confitura", price: 20, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Platos principales",
        items: [
          { id: "m87", name: "Lubina a la sal", description: "Lubina entera al horno con sal", price: 32, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&q=80" },
          { id: "m88", name: "Cordero con romero", description: "Pierna de cordero con papas y verduras", price: 38, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&q=80" },
          { id: "m89", name: "Risotto de mariscos Grand", description: "Arroz cremoso con langostinos y trufa", price: 30, image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Postres",
        items: [
          { id: "m90", name: "Souffle de chocolate", description: "Souffle caliente con helado de vainilla", price: 12, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&q=80" },
          { id: "m91", name: "Seleccion de quesos", description: "Tabla de quesos con miel y nueces", price: 14, dietary: ["Vegetariano", "Sin gluten"] },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4918,
    lng: -66.8575,
  },
  {
    id: "12",
    name: "Creperia Ana",
    slug: "creperia-ana",
    cuisine: ["Internacional", "Vegetariana"],
    priceRange: 1,
    rating: 4.4,
    reviewCount: 210,
    address: "Av. Francisco de Miranda, C.C. Paseo Las Mercedes, Local 15",
    city: "Caracas",
    neighborhood: "Las Mercedes",
    phone: "+58 212 993 2211",
    description: "Creperia con crepes dulces y salados. Opciones vegetarianas y sin gluten. Ambiente casual ideal para desayuno o merienda.",
    coverGradient: "from-amber-300 via-yellow-400 to-orange-400",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=500&fit=crop&q=80",
    features: ["WiFi"],
    hours: [{ day: "Lun-Dom", open: "08:00", close: "21:00" }],
    dietaryOptions: ["Vegetariano", "Sin gluten"],
    promotions: [
      {
        id: "p12",
        name: "Crepe + cafe",
        discount: 15,
        type: "percentage",
        conditions: "Al comprar un crepe, cafe a 15% off",
        validDays: ["Lun", "Mar", "Mie", "Jue", "Vie"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Crepes salados",
        items: [
          { id: "m92", name: "Crepe jamon y queso", description: "Crepe de trigo con jamon y queso gratinado", price: 9, image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop&q=80" },
          { id: "m93", name: "Crepe pollo y champinones", description: "Pollo en tiras con champinones y crema", price: 11, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop&q=80" },
          { id: "m94", name: "Crepe vegetariana", description: "Espinaca, queso de cabra y tomate", price: 10, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Crepes dulces",
        items: [
          { id: "m95", name: "Crepe Nutella y platano", description: "Nutella con platano caramelizado", price: 8, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=300&fit=crop&q=80" },
          { id: "m96", name: "Crepe manzana y canela", description: "Manzana en compota con canela", price: 7, dietary: ["Vegetariano"] },
          { id: "m97", name: "Crepe Suzette", description: "Crepe con salsa de naranja y Grand Marnier", price: 10, dietary: ["Vegetariano"] },
        ],
      },
      {
        name: "Bebidas",
        items: [
          { id: "m98", name: "Cafe espresso", description: "Cafe espresso simple o doble", price: 3 },
          { id: "m99", name: "Jugo natural", description: "Jugo de naranja o fruta del dia", price: 4, dietary: ["Vegano", "Sin gluten"] },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4925,
    lng: -66.8588,
  },
  {
    id: "13",
    name: "Alto",
    slug: "alto",
    cuisine: ["Internacional", "Fusion", "Parrilla"],
    priceRange: 4,
    rating: 4.6,
    reviewCount: 340,
    address: "Calle Veracruz con Calle Orinoco, Las Mercedes",
    city: "Caracas",
    neighborhood: "Las Mercedes",
    phone: "+58 212 993 7788",
    description: "Restaurante de cocina de autor en Las Mercedes. Platos elaborados con productos de primera. Terraza y bar con vista. Ideal para ocasiones especiales.",
    coverGradient: "from-indigo-700 via-purple-600 to-pink-600",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=500&fit=crop&q=80",
    features: ["Terraza", "Bar", "Vista", "WiFi", "Estacionamiento", "Privado"],
    hours: [
      { day: "Lun-Jue", open: "12:00", close: "23:00" },
      { day: "Vie-Sab", open: "12:00", close: "00:00" },
      { day: "Dom", open: "12:00", close: "22:00" },
    ],
    dietaryOptions: ["Vegetariano", "Sin gluten"],
    promotions: [
      {
        id: "p13",
        name: "Cena romantica",
        discount: 25,
        type: "percentage",
        conditions: "Menu para dos con botella de vino los viernes",
        validDays: ["Vie"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Entradas",
        items: [
          { id: "m100", name: "Tartar de atun Alto", description: "Atun con aguacate, soja y wasabi", price: 16, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop&q=80" },
          { id: "m101", name: "Carpaccio de res", description: "Res con rucula, parmesano y alcaparras", price: 15, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80" },
          { id: "m102", name: "Ravioli de langosta", description: "Ravioli fresco con relleno de langosta", price: 18, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Platos principales",
        items: [
          { id: "m103", name: "Filet mignon Alto", description: "Filete 250g con reduccion de vino", price: 36, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&q=80" },
          { id: "m104", name: "Salmon glaseado", description: "Salmon con glaseado de soja y jengibre", price: 28, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&q=80" },
          { id: "m105", name: "Rack de cordero", description: "Costillas de cordero con hierbas", price: 38, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Postres",
        items: [
          { id: "m106", name: "Fondant de chocolate", description: "Fondant con corazon liquido", price: 11, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&q=80" },
          { id: "m107", name: "Copa de frutos rojos", description: "Frutos rojos con crema y menta", price: 9, dietary: ["Vegetariano", "Sin gluten"] },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4910,
    lng: -66.8595,
  },
  {
    id: "14",
    name: "Trattoria Francesca",
    slug: "trattoria-francesca",
    cuisine: ["Italiana"],
    priceRange: 2,
    rating: 4.4,
    reviewCount: 265,
    address: "Av. Principal de Los Palos Grandes, entre 2a y 3a Transversal",
    city: "Caracas",
    neighborhood: "Los Palos Grandes",
    phone: "+58 212 285 4433",
    description: "Trattoria italiana con pastas frescas, pizzas al horno de lena y risottos. Ambiente familiar y acogedor. Vinos italianos.",
    coverGradient: "from-red-600 via-rose-500 to-amber-600",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1b81115?w=800&h=500&fit=crop&q=80",
    features: ["Terraza", "Bar", "WiFi", "Grupos"],
    hours: [{ day: "Lun-Dom", open: "12:00", close: "23:00" }],
    dietaryOptions: ["Vegetariano", "Sin gluten"],
    promotions: [
      {
        id: "p14",
        name: "Pizza + pasta",
        discount: 20,
        type: "percentage",
        conditions: "Al llevar una pizza y una pasta",
        validDays: ["Lun", "Mie", "Jue"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Antipasti",
        items: [
          { id: "m108", name: "Bruschetta trio", description: "Tomate, setas y oliva sobre pan tostado", price: 9, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop&q=80" },
          { id: "m109", name: "Carpaccio di manzo", description: "Res con rucula y parmesano", price: 12, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80" },
          { id: "m110", name: "Caprese", description: "Mozzarella, tomate y albahaca", price: 10, dietary: ["Vegetariano", "Sin gluten"], image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Pastas y pizzas",
        items: [
          { id: "m111", name: "Spaghetti carbonara", description: "Pasta con guanciale, huevo y pecorino", price: 14, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop&q=80" },
          { id: "m112", name: "Pizza margherita", description: "Salsa de tomate, mozzarella y albahaca", price: 13, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop&q=80" },
          { id: "m113", name: "Risotto ai funghi", description: "Risotto con setas y parmesano", price: 16, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=300&fit=crop&q=80" },
          { id: "m114", name: "Lasagna della casa", description: "Lasagna de carne con bechamel", price: 15, image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Postres",
        items: [
          { id: "m115", name: "Tiramisu Francesca", description: "Clasico con cafe y mascarpone", price: 8, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop&q=80" },
          { id: "m116", name: "Panna cotta", description: "Con salsa de frutos rojos", price: 7, dietary: ["Vegetariano"], image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=400&h=300&fit=crop&q=80" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551183053-bf91a1b81115?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4958,
    lng: -66.8545,
  },
  {
    id: "15",
    name: "Soya Restaurant",
    slug: "soya-restaurant",
    cuisine: ["Japonesa", "Fusion", "Mariscos"],
    priceRange: 2,
    rating: 4.3,
    reviewCount: 188,
    address: "Altamira Village, Av. Luis Roche, Local 12",
    city: "Caracas",
    neighborhood: "Altamira",
    phone: "+58 212 263 5544",
    description: "Cocina asiatica fusion en Altamira Village. Sushi, woks y platos de inspiracion japonesa y tailandesa. Ambiente moderno y animado.",
    coverGradient: "from-emerald-600 via-teal-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1617196034183-421b4040d74d?w=800&h=500&fit=crop&q=80",
    features: ["WiFi", "Bar", "Grupos"],
    hours: [{ day: "Lun-Dom", open: "12:00", close: "22:30" }],
    dietaryOptions: ["Vegetariano", "Sin gluten"],
    promotions: [
      {
        id: "p15",
        name: "Roll del dia",
        discount: 25,
        type: "percentage",
        conditions: "Roll especial del dia a 25% off",
        validDays: ["Lun", "Mar", "Mie", "Jue", "Vie"],
        validFrom: "2026-01-01",
        validUntil: "2026-12-31",
        status: "active",
      },
    ],
    menu: [
      {
        name: "Entradas",
        items: [
          { id: "m117", name: "Edamame", description: "Vainas de soja con sal", price: 5, dietary: ["Vegano", "Sin gluten"], image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop&q=80" },
          { id: "m118", name: "Wontons fritos", description: "Wontons de cerdo con salsa dulce", price: 8, image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400&h=300&fit=crop&q=80" },
          { id: "m119", name: "Ensalada de wakame", description: "Alga wakame con sesamo", price: 7, dietary: ["Vegano", "Sin gluten"] },
        ],
      },
      {
        name: "Sushi y woks",
        items: [
          { id: "m120", name: "Roll dragon", description: "Roll con langostino tempura y aguacate", price: 16, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&q=80" },
          { id: "m121", name: "Wok de vegetales", description: "Vegetales salteados con salsa de soja", price: 12, dietary: ["Vegano", "Sin gluten"], image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop&q=80" },
          { id: "m122", name: "Pad thai", description: "Fideos de arroz con camarones y mani", price: 14, dietary: ["Sin gluten"], image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop&q=80" },
        ],
      },
      {
        name: "Bebidas",
        items: [
          { id: "m123", name: "Te verde", description: "Te verde japones", price: 3, dietary: ["Vegano"] },
          { id: "m124", name: "Sake", description: "Sake frio o caliente", price: 8 },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800&h=500&fit=crop&q=80",
    ],
    lat: 10.4988,
    lng: -66.8478,
  },
]

// ---- REVIEWS ----

export const reviews: Review[] = [
  {
    id: "r1",
    restaurantId: "1",
    userName: "Gabriela Hernandez",
    userAvatar: "GH",
    rating: 5,
    comment: "El mejor pollo rostizado de Caracas. La terraza es perfecta para cenar. El Angus beef es increible. Volveremos pronto!",
    date: "2026-02-10",
    aspects: { food: 5, service: 5, ambience: 4, value: 4 },
  },
  {
    id: "r2",
    restaurantId: "1",
    userName: "Carlos Mendoza",
    userAvatar: "CM",
    rating: 4,
    comment: "Muy buena parrilla y ambiente agradable. La cachapa con queso de entrada es deliciosa. Un poco caro pero vale la pena.",
    date: "2026-02-05",
    aspects: { food: 5, service: 4, ambience: 4, value: 3 },
  },
  {
    id: "r3",
    restaurantId: "2",
    userName: "Laura Fernandez",
    userAvatar: "LF",
    rating: 5,
    comment: "El brunch de La Casa Bistro es unico en Caracas. Los huevos benedictinos son perfectos y el pan artesanal es adictivo.",
    date: "2026-02-08",
    aspects: { food: 5, service: 5, ambience: 5, value: 4 },
  },
  {
    id: "r4",
    restaurantId: "4",
    userName: "Miguel Torres",
    userAvatar: "MT",
    rating: 4,
    comment: "Sushi de altisima calidad. El Roll Philadelphia es excelente. El teppanyaki es una experiencia increible. Precios altos pero justificados.",
    date: "2026-01-28",
    aspects: { food: 5, service: 4, ambience: 5, value: 3 },
  },
  {
    id: "r5",
    restaurantId: "14",
    userName: "Sofia Ruiz",
    userAvatar: "SR",
    rating: 4,
    comment: "La mejor pizza de Los Palos Grandes. La carbonara es autentica y los postres son de primer nivel. Muy recomendada.",
    date: "2026-02-12",
    aspects: { food: 5, service: 4, ambience: 4, value: 4 },
  },
  {
    id: "r6",
    restaurantId: "7",
    userName: "Elena Moreno",
    userAvatar: "EM",
    rating: 5,
    comment: "El mejor pabellon criollo que he comido en Las Mercedes. Sabores autenticos venezolanos, precio justo y ambiente familiar.",
    date: "2026-02-11",
    aspects: { food: 5, service: 5, ambience: 4, value: 5 },
  },
  {
    id: "r7",
    restaurantId: "5",
    userName: "Javier Lopez",
    userAvatar: "JL",
    rating: 5,
    comment: "El tomahawk para dos es espectacular. Sin duda el mejor steakhouse de Altamira. El baby beef esta perfecto de coccion.",
    date: "2026-02-09",
    aspects: { food: 5, service: 5, ambience: 5, value: 4 },
  },
  {
    id: "r8",
    restaurantId: "6",
    userName: "Maria Sanchez",
    userAvatar: "MS",
    rating: 4,
    comment: "La vista desde la azotea es impresionante. El ceviche Cima es fresco y delicioso. Perfecto para una cena especial.",
    date: "2026-02-07",
    aspects: { food: 5, service: 4, ambience: 5, value: 3 },
  },
  {
    id: "r9",
    restaurantId: "11",
    userName: "Pablo Navarro",
    userAvatar: "PN",
    rating: 5,
    comment: "The Grand es una experiencia gastro de primer nivel en Caracas. El souffle de chocolate es el mejor de la ciudad.",
    date: "2026-01-30",
    aspects: { food: 5, service: 5, ambience: 5, value: 4 },
  },
  {
    id: "r10",
    restaurantId: "3",
    userName: "Isabel Gutierrez",
    userAvatar: "IG",
    rating: 4,
    comment: "La Barra de Chacao tiene el mejor happy hour de la zona. El ceviche de corvina es fresco y el ambiente es muy animado.",
    date: "2026-01-25",
    aspects: { food: 4, service: 4, ambience: 5, value: 5 },
  },
]

// ---- SURPLUS BAGS ----

export const surplusBags: SurplusBag[] = [
  {
    id: "b1",
    restaurantId: "1",
    restaurantName: "Carbon",
    name: "Bolsa Sorpresa Parrilla",
    description: "Sobras del servicio de parrilla. Puede incluir pollo rostizado, cortes de res, arepas y guarniciones del dia.",
    originalPrice: 28,
    price: 8.99,
    discount: 68,
    pickupFrom: "21:30",
    pickupUntil: "22:30",
    dietaryTags: ["Sin gluten disponible"],
    available: 3,
    total: 5,
    coverGradient: "from-stone-600 to-amber-700",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&q=80",
    status: "available",
  },
  {
    id: "b2",
    restaurantId: "3",
    restaurantName: "La Barra de Chacao",
    name: "Bolsa Sorpresa Mariscos",
    description: "Seleccion de mariscos y tapas del dia. Puede incluir ceviche, arroz con mariscos y tequenos.",
    originalPrice: 22,
    price: 6.99,
    discount: 68,
    pickupFrom: "22:00",
    pickupUntil: "23:00",
    dietaryTags: ["Contiene mariscos"],
    available: 2,
    total: 4,
    coverGradient: "from-amber-500 to-red-600",
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&h=400&fit=crop&q=80",
    status: "available",
  },
  {
    id: "b3",
    restaurantId: "2",
    restaurantName: "La Casa Bistro",
    name: "Bolsa Sorpresa Saludable",
    description: "Platos vegetarianos y organicos del dia. Siempre fresco, siempre delicioso. Puede incluir bowls, ensaladas y postres.",
    originalPrice: 18,
    price: 5.99,
    discount: 67,
    pickupFrom: "17:00",
    pickupUntil: "18:00",
    dietaryTags: ["Vegetariano", "Sin gluten disponible"],
    available: 4,
    total: 6,
    coverGradient: "from-green-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&q=80",
    status: "available",
  },
  {
    id: "b4",
    restaurantId: "4",
    restaurantName: "Omono Restaurant",
    name: "Bolsa Sorpresa Sushi",
    description: "Piezas de sushi y rolls variados del dia. Puede incluir nigiri, sashimi y rolls especiales.",
    originalPrice: 30,
    price: 9.99,
    discount: 67,
    pickupFrom: "22:30",
    pickupUntil: "23:00",
    dietaryTags: ["Sin gluten disponible", "Contiene mariscos"],
    available: 0,
    total: 2,
    coverGradient: "from-red-600 to-pink-500",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop&q=80",
    status: "sold_out",
  },
  {
    id: "b5",
    restaurantId: "7",
    restaurantName: "La Fonda de Las Mercedes",
    name: "Bolsa Sorpresa Criolla",
    description: "Comida criolla venezolana del dia. Puede incluir pabellon, pollo guisado, tajadas y postres venezolanos.",
    originalPrice: 16,
    price: 4.99,
    discount: 69,
    pickupFrom: "22:30",
    pickupUntil: "23:30",
    dietaryTags: ["Comida criolla venezolana"],
    available: 3,
    total: 5,
    coverGradient: "from-amber-400 to-red-500",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&q=80",
    status: "available",
  },
]

// ---- CURRENT USER ----

export const currentUser: UserProfile = {
  id: "u1",
  name: "Maria Gonzalez",
  email: "maria.gonzalez@email.com",
  phone: "+58 412 345 6789",
  avatar: "MG",
  dietaryPreferences: ["Sin gluten"],
  favoriteRestaurants: ["1", "6"],
  reservations: [
    {
      id: "res1",
      restaurantId: "1",
      restaurantName: "Carbon",
      date: "2026-03-20",
      time: "20:00",
      guests: 2,
      promotion: "Almuerzo ejecutivo (-15%)",
      status: "confirmed",
      code: "LB-2026-A3F8",
      notes: "Mesa en terraza si es posible",
    },
    {
      id: "res2",
      restaurantId: "4",
      restaurantName: "Omono Restaurant",
      date: "2026-03-25",
      time: "20:30",
      guests: 4,
      promotion: "Teppan Lunch",
      status: "confirmed",
      code: "LB-2026-B7K2",
    },
    {
      id: "res3",
      restaurantId: "6",
      restaurantName: "Cima Las Mercedes",
      date: "2026-02-14",
      time: "20:00",
      guests: 2,
      status: "completed",
      code: "LB-2026-C1D4",
      notes: "San Valentin",
    },
    {
      id: "res4",
      restaurantId: "5",
      restaurantName: "El Alazan de Altamira",
      date: "2026-01-18",
      time: "13:00",
      guests: 6,
      status: "completed",
      code: "LB-2026-D9E6",
      notes: "Cumpleanos",
    },
    {
      id: "res5",
      restaurantId: "11",
      restaurantName: "The Grand",
      date: "2025-12-31",
      time: "21:00",
      guests: 2,
      promotion: "Menu degustacion (-20%)",
      status: "cancelled",
      code: "LB-2025-E5F7",
    },
  ],
  bagPurchases: [
    {
      id: "bp1",
      bagId: "b1",
      restaurantName: "Carbon",
      bagName: "Bolsa Sorpresa Parrilla",
      price: 8.99,
      pickupDate: "2026-03-18",
      pickupFrom: "21:30",
      pickupUntil: "22:30",
      status: "pending_pickup",
      code: "LB-BAG-X4Y2",
    },
    {
      id: "bp2",
      bagId: "b3",
      restaurantName: "La Casa Bistro",
      bagName: "Bolsa Sorpresa Saludable",
      price: 5.99,
      pickupDate: "2026-03-10",
      pickupFrom: "17:00",
      pickupUntil: "18:00",
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
  { id: "mr1", restaurantId: "1", restaurantName: "Carbon", date: "2026-03-16", time: "13:00", guests: 2, status: "confirmed", code: "LB-M1" },
  { id: "mr2", restaurantId: "1", restaurantName: "Carbon", date: "2026-03-16", time: "13:30", guests: 4, status: "confirmed", code: "LB-M2", promotion: "Almuerzo ejecutivo (-15%)" },
  { id: "mr3", restaurantId: "1", restaurantName: "Carbon", date: "2026-03-16", time: "14:00", guests: 3, status: "confirmed", code: "LB-M3" },
  { id: "mr4", restaurantId: "1", restaurantName: "Carbon", date: "2026-03-16", time: "14:00", guests: 2, promotion: "Almuerzo ejecutivo (-15%)", status: "confirmed", code: "LB-M4" },
  { id: "mr5", restaurantId: "1", restaurantName: "Carbon", date: "2026-03-16", time: "20:00", guests: 6, status: "confirmed", code: "LB-M5", notes: "Aniversario" },
  { id: "mr6", restaurantId: "1", restaurantName: "Carbon", date: "2026-03-16", time: "20:30", guests: 2, status: "confirmed", code: "LB-M6" },
  { id: "mr7", restaurantId: "1", restaurantName: "Carbon", date: "2026-03-16", time: "20:30", guests: 4, status: "no_show", code: "LB-M7" },
  { id: "mr8", restaurantId: "1", restaurantName: "Carbon", date: "2026-03-16", time: "21:00", guests: 2, status: "completed", code: "LB-M8" },
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
  return new Intl.NumberFormat("es-VE", { style: "currency", currency: "USD" }).format(amount)
}

// ---- MESAS ----

export const mesas: Mesa[] = [
  { id: "t1", restauranteId: "1", numero: 1, capacidad: 2, estado: "libre" },
  { id: "t2", restauranteId: "1", numero: 2, capacidad: 4, estado: "ocupada" },
  { id: "t3", restauranteId: "1", numero: 3, capacidad: 4, estado: "ocupada" },
  { id: "t4", restauranteId: "1", numero: 4, capacidad: 6, estado: "reservada" },
  { id: "t5", restauranteId: "1", numero: 5, capacidad: 2, estado: "libre" },
  { id: "t6", restauranteId: "1", numero: 6, capacidad: 8, estado: "libre" },
  { id: "t7", restauranteId: "1", numero: 7, capacidad: 4, estado: "ocupada" },
  { id: "t8", restauranteId: "1", numero: 8, capacidad: 2, estado: "libre" },
]

export function getMesa(id: string): Mesa | undefined {
  return mesas.find((m) => m.id === id)
}

export function getMesasByRestaurante(restauranteId: string): Mesa[] {
  return mesas.filter((m) => m.restauranteId === restauranteId)
}
