const RESTAURANTS = [
  {
    id: 1,
    name: "El Celler de Can Roca",
    city: "Girona",
    country: "Spain",
    cuisine: "Catalana Contemporánea",
    priceRange: 4,
    year: 1986,
    chef: "Joan, Josep & Jordi Roca",
    description: "Tres hermanos, tres genios. Una experiencia gastronómica que fusiona tradición catalana con técnicas de vanguardia. Cada plato cuenta una historia familiar.",
    avgRating: 4.8,
    totalRatings: 3420,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    tags: ["Fine Dining", "Michelin 3★", "Tasting Menu", "Wine Pairing"],
    reviews: [
      { user: "Marina G.", rating: 5, date: "2026-02-14", text: "Una experiencia que trasciende la comida. El maridaje de vinos es impecable y el postre de perfumes de la tierra te transporta." },
      { user: "Carlos R.", rating: 5, date: "2026-01-20", text: "Cada visita es diferente. El menú degustación de este año rinde homenaje a los viajes de los hermanos. Sublime." },
      { user: "Anna L.", rating: 4, date: "2025-12-05", text: "Técnicamente perfecto, aunque eché en falta un poco más de alma en algunos platos del medio." }
    ]
  },
  {
    id: 2,
    name: "Disfrutar",
    city: "Barcelona",
    country: "Spain",
    cuisine: "Vanguardia Mediterránea",
    priceRange: 4,
    year: 2012,
    chef: "Oriol Castro, Eduard Xatruch & Mateu Casañas",
    description: "Herederos del espíritu de elBulli, llevan la creatividad mediterránea a nuevas dimensiones. Cada plato es una obra de arte comestible.",
    avgRating: 4.9,
    totalRatings: 2890,
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600&h=400&fit=crop",
    tags: ["Fine Dining", "Michelin 3★", "Avant-garde", "Mediterranean"],
    reviews: [
      { user: "Pablo M.", rating: 5, date: "2026-03-01", text: "El mejor restaurante del mundo y no lo digo a la ligera. La multiesférica de pesto es magia pura." },
      { user: "Sophie D.", rating: 5, date: "2026-02-10", text: "C'est incroyable! Chaque plat est une surprise. Le service est impeccable." },
      { user: "Marc T.", rating: 5, date: "2025-11-22", text: "Tercera vez que vengo y sigo descubriendo cosas nuevas. El panchino de brioche es adictivo." }
    ]
  },
  {
    id: 3,
    name: "Etxebarri",
    city: "Atxondo",
    country: "Spain",
    cuisine: "Parrilla Vasca",
    priceRange: 4,
    year: 1990,
    chef: "Víctor Arguinzoniz",
    description: "En un pequeño pueblo del País Vasco, Víctor Arguinzoniz ha elevado el arte de la parrilla a niveles casi místicos. Fuego, producto y genio.",
    avgRating: 4.7,
    totalRatings: 1950,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
    tags: ["Grill", "Michelin 1★", "Basque Country", "Product-driven"],
    reviews: [
      { user: "Iñaki Z.", rating: 5, date: "2026-01-15", text: "El txuleta es religión. Arguinzoniz entiende el fuego como nadie en el mundo." },
      { user: "Laura P.", rating: 5, date: "2025-10-30", text: "Los percebes a la brasa me cambiaron la vida. Simple, brutal, perfecto." },
      { user: "James W.", rating: 4, date: "2025-09-12", text: "Worth the trip to this tiny village. The grilled prawns are unforgettable." }
    ]
  },
  {
    id: 4,
    name: "Tickets",
    city: "Barcelona",
    country: "Spain",
    cuisine: "Tapas Creativas",
    priceRange: 3,
    year: 2011,
    chef: "Albert Adrià",
    description: "El hermano pequeño de elBulli, pero con personalidad propia. Un viaje lúdico por las tapas más creativas e inesperadas de Barcelona.",
    avgRating: 4.3,
    totalRatings: 4200,
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=600&h=400&fit=crop",
    tags: ["Tapas", "Creative", "Fun Dining", "Barcelona"],
    reviews: [
      { user: "Elena V.", rating: 5, date: "2026-02-28", text: "La aire de patatas bravas es una locura. El ambiente es genial, como estar en un circo gastronómico." },
      { user: "David S.", rating: 4, date: "2026-01-05", text: "Divertido y delicioso. Algunas tapas son más concepto que sabor, pero en general una experiencia top." },
      { user: "Rita M.", rating: 4, date: "2025-12-18", text: "Genial para ir con amigos. La tarta de queso líquida es pecado." }
    ]
  },
  {
    id: 5,
    name: "Noma",
    city: "Copenhagen",
    country: "Denmark",
    cuisine: "New Nordic",
    priceRange: 4,
    year: 2003,
    chef: "René Redzepi",
    description: "El restaurante que redefinió la cocina nórdica y cambió el mundo gastronómico. Ahora reinventado como laboratorio de sabores.",
    avgRating: 4.6,
    totalRatings: 5100,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    tags: ["New Nordic", "Foraging", "Seasonal", "Legendary"],
    reviews: [
      { user: "Anders K.", rating: 5, date: "2026-01-30", text: "Redzepi sigue siendo un visionario. La temporada de vegetales es poesía en cada bocado." },
      { user: "Lucía F.", rating: 4, date: "2025-11-15", text: "Fascinante conceptualmente. Algunos platos requieren un manual para entenderlos, pero la experiencia es única." },
      { user: "Tom B.", rating: 5, date: "2025-08-22", text: "Changed how I think about food entirely. The ant dish is surprisingly delicious." }
    ]
  },
  {
    id: 6,
    name: "Quintonil",
    city: "Ciudad de México",
    country: "Mexico",
    cuisine: "Mexicana Contemporánea",
    priceRange: 3,
    year: 2012,
    chef: "Jorge Vallejo",
    description: "México en su máxima expresión culinaria. Ingredientes endémicos, técnicas ancestrales y una creatividad desbordante.",
    avgRating: 4.5,
    totalRatings: 2300,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    tags: ["Mexican", "Contemporary", "Indigenous Ingredients", "Best 50"],
    reviews: [
      { user: "Alejandra C.", rating: 5, date: "2026-02-20", text: "Vallejo es un poeta de la cocina mexicana. El mole con insectos es revelador." },
      { user: "Roberto N.", rating: 4, date: "2025-12-01", text: "Excelente menú degustación. El uso de ingredientes como el huitlacoche es magistral." },
      { user: "Sarah J.", rating: 5, date: "2025-10-10", text: "Best meal I had in Mexico. Every dish tells a story of Mexican terroir." }
    ]
  },
  {
    id: 7,
    name: "Gaggan Anand",
    city: "Bangkok",
    country: "Thailand",
    cuisine: "Indian Progressive",
    priceRange: 4,
    year: 2023,
    chef: "Gaggan Anand",
    description: "El enfant terrible de la cocina india. Un menú de 25 emojis que desafía todas las convenciones culinarias.",
    avgRating: 4.4,
    totalRatings: 1800,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    tags: ["Indian", "Progressive", "Emoji Menu", "Bangkok"],
    reviews: [
      { user: "Priya S.", rating: 5, date: "2026-03-05", text: "Gaggan is a genius madman. The yogurt explosion and lick-it-up are mind-blowing experiences." },
      { user: "Miguel A.", rating: 4, date: "2026-01-12", text: "Divertido, provocador y delicioso. No es para puristas de la cocina india." },
      { user: "Yuki T.", rating: 4, date: "2025-11-28", text: "The emoji menu is fun but the food is seriously impressive. Great energy." }
    ]
  },
  {
    id: 8,
    name: "Septime",
    city: "Paris",
    country: "France",
    cuisine: "Neo-Bistró",
    priceRange: 3,
    year: 2011,
    chef: "Bertrand Grébaut",
    description: "El neo-bistró que conquistó París. Cocina de mercado elevada a la perfección en un ambiente relajado y sin pretensiones.",
    avgRating: 4.3,
    totalRatings: 3800,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
    tags: ["Neo-Bistro", "Market Cuisine", "Natural Wine", "Paris"],
    reviews: [
      { user: "Claire D.", rating: 5, date: "2026-02-05", text: "Le meilleur rapport qualité-prix de Paris. Les légumes ont plus de sabor que la carne en cualquier otro sitio." },
      { user: "Pedro L.", rating: 4, date: "2025-12-20", text: "Ambiente perfecto, carta de vinos naturales espectacular. El menú cambia con las estaciones y siempre sorprende." },
      { user: "Emma R.", rating: 4, date: "2025-09-30", text: "No reservas? No comes. Pero merece cada segundo de espera. Unpretentious perfection." }
    ]
  },
  {
    id: 9,
    name: "La Boquería - Bar Pinotxo",
    city: "Barcelona",
    country: "Spain",
    cuisine: "Cocina de Mercado",
    priceRange: 2,
    year: 1940,
    chef: "Juanito Bayén",
    description: "Una barra en medio del mercado más famoso de Barcelona. Garbanzos con butifarra, cigalas al natural y el mejor café cortado de la ciudad.",
    avgRating: 4.1,
    totalRatings: 8900,
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop",
    tags: ["Market", "Traditional", "Tapas", "Barcelona Icon"],
    reviews: [
      { user: "Jordi P.", rating: 5, date: "2026-03-10", text: "80 años de historia en cada plato. Los garbanzos con sepia son mi comfort food definitivo." },
      { user: "Lisa K.", rating: 4, date: "2026-01-25", text: "Touristy? Yes. Worth it? Absolutely. Arrive at 8am for the real experience." },
      { user: "Ferran B.", rating: 4, date: "2025-11-05", text: "Juanito es una institución. Si no has desayunado aquí, no conoces Barcelona." }
    ]
  },
  {
    id: 10,
    name: "Central",
    city: "Lima",
    country: "Peru",
    cuisine: "Peruana de Altitudes",
    priceRange: 4,
    year: 2008,
    chef: "Virgilio Martínez",
    description: "Un viaje vertical por los ecosistemas del Perú. Desde el mar hasta los Andes a 4000 metros, cada plato es un paisaje comestible.",
    avgRating: 4.7,
    totalRatings: 2700,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
    tags: ["Peruvian", "Altitude Cuisine", "Best 50", "Biodiversity"],
    reviews: [
      { user: "Valentina R.", rating: 5, date: "2026-02-18", text: "Cada plato es un ecosistema. El concepto de altitudes es brillante y la ejecución impecable." },
      { user: "Diego M.", rating: 5, date: "2025-12-10", text: "Virgilio ha puesto la biodiversidad peruana en el mapa gastronómico mundial. Imprescindible." },
      { user: "Kate H.", rating: 4, date: "2025-08-15", text: "A journey through Peru's geography on a plate. Some flavors are challenging but always fascinating." }
    ]
  },
  {
    id: 11,
    name: "Narisawa",
    city: "Tokyo",
    country: "Japan",
    cuisine: "Innovative Satoyama",
    priceRange: 4,
    year: 2003,
    chef: "Yoshihiro Narisawa",
    description: "Filosofía satoyama llevada a la mesa. Narisawa cocina con la naturaleza japonesa, no sobre ella. Su 'pan del bosque' es legendario.",
    avgRating: 4.5,
    totalRatings: 2100,
    image: "https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?w=600&h=400&fit=crop",
    tags: ["Japanese", "Satoyama", "Nature-driven", "Tokyo"],
    reviews: [
      { user: "Kenji O.", rating: 5, date: "2026-01-08", text: "The forest bread alone is worth the visit. Narisawa's connection to nature is unmatched." },
      { user: "Isabel G.", rating: 4, date: "2025-10-20", text: "Una experiencia zen. Cada plato respeta profundamente los ingredientes y las estaciones." },
      { user: "Chen W.", rating: 5, date: "2025-07-15", text: "Satoyama cuisine at its finest. The soil soup is surprisingly moving." }
    ]
  },
  {
    id: 12,
    name: "Burnt Ends",
    city: "Singapore",
    country: "Singapore",
    cuisine: "Modern Australian BBQ",
    priceRange: 3,
    year: 2013,
    chef: "Dave Pynt",
    description: "Fuego australiano en el corazón de Singapur. Dos hornos de leña customizados y un counter de 20 asientos donde todo sucede frente a ti.",
    avgRating: 4.4,
    totalRatings: 3100,
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop",
    tags: ["BBQ", "Counter Dining", "Fire Cooking", "Singapore"],
    reviews: [
      { user: "Wei L.", rating: 5, date: "2026-02-22", text: "The pulled pork sanger and bone marrow are insane. Best counter dining experience in Asia." },
      { user: "Álvaro T.", rating: 4, date: "2025-11-18", text: "Brutal. El king crab con mantequilla ahumada es de otro planeta. Reservar es casi imposible." },
      { user: "Amy C.", rating: 4, date: "2025-09-05", text: "Smoky, juicy perfection. The casual vibe makes it even better." }
    ]
  }
];

const LISTS = [
  {
    id: 1,
    title: "Los 10 Mejores Restaurantes para una Primera Cita",
    author: "Marina G.",
    likes: 234,
    restaurants: [2, 8, 4, 7],
    description: "Sitios donde la comida habla por ti cuando los nervios no te dejan."
  },
  {
    id: 2,
    title: "Comer por el Mundo sin Salir de Barcelona",
    author: "Jordi P.",
    likes: 189,
    restaurants: [2, 4, 9],
    description: "Barcelona es un mapa gastronómico. Aquí mis favoritos para viajar sin pasaporte."
  },
  {
    id: 3,
    title: "Templos del Fuego: Restaurantes de Brasa y Parrilla",
    author: "Carlos R.",
    likes: 312,
    restaurants: [3, 12],
    description: "Para los que creen que el fuego es el mejor condimento."
  },
  {
    id: 4,
    title: "Asia Gastronómica: Imprescindibles",
    author: "Yuki T.",
    likes: 156,
    restaurants: [7, 11, 12],
    description: "De Tokyo a Bangkok, los restaurantes que definen la nueva cocina asiática."
  },
  {
    id: 5,
    title: "Menús Degustación que Cambian Vidas",
    author: "Pablo M.",
    likes: 445,
    restaurants: [1, 2, 5, 10, 11],
    description: "Experiencias de más de 10 platos que justifican cada céntimo."
  }
];

const USER_PROFILE = {
  name: "Àngel Mola",
  username: "@angelmola",
  avatar: null,
  bio: "Comiendo por el mundo, un plato a la vez. Barcelona native. 🍷",
  stats: {
    visited: 47,
    reviews: 23,
    lists: 5,
    following: 84,
    followers: 156
  },
  recentActivity: [
    { type: "review", restaurantId: 2, rating: 5, date: "2026-03-20", text: "Quinta visita y sigue sorprendiendo. La esferificación de aceituna es poesía." },
    { type: "visited", restaurantId: 9, date: "2026-03-15" },
    { type: "list", listTitle: "Mejores Brunchs de Barcelona", date: "2026-03-10" },
    { type: "review", restaurantId: 3, rating: 5, date: "2026-03-01", text: "Peregrinación anual a Atxondo completada. El txuletón sigue siendo religión." },
    { type: "wishlist", restaurantId: 10, date: "2026-02-25" },
    { type: "visited", restaurantId: 8, date: "2026-02-15" }
  ],
  wishlist: [10, 5, 6, 7],
  visited: [1, 2, 3, 4, 8, 9, 11, 12],
  ratings: { 1: 5, 2: 5, 3: 5, 4: 4, 8: 4, 9: 4, 11: 4, 12: 4 }
};

const FRIENDS_ACTIVITY = [
  { user: "Marina G.", avatar: null, action: "rated", restaurantId: 1, rating: 5, time: "2h ago" },
  { user: "Pablo M.", avatar: null, action: "added to wishlist", restaurantId: 6, time: "4h ago" },
  { user: "Carlos R.", avatar: null, action: "reviewed", restaurantId: 12, rating: 4, time: "6h ago", text: "Brutal experiencia counter. El pulled pork es top 3 mundial." },
  { user: "Anna L.", avatar: null, action: "created list", listTitle: "Ramen Tour Tokyo 2026", time: "1d ago" },
  { user: "Elena V.", avatar: null, action: "rated", restaurantId: 4, rating: 5, time: "1d ago" },
  { user: "Jordi P.", avatar: null, action: "visited", restaurantId: 2, time: "2d ago" },
  { user: "Laura P.", avatar: null, action: "reviewed", restaurantId: 5, rating: 4, time: "3d ago", text: "Noma en temporada de mariscos es brutal." }
];
