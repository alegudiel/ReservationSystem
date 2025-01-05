const hostels = [
    {
        id: 1,
        name: "Hostal San Martín",
        description: "Te sentirás como en los tiempos de la colonia con las comodidades del presente.",
        rooms: [
            {
                type: "Habitación Doble",
                description: "Aire acondicionado, baño privado, agua caliente, y televisión con cable.",
                capacity: "2 adultos y 2 niños menores de 12 años",
                affiliateRates: { weekday: 190, weekend: 285 },
                fullRates: { weekday: 545, weekend: 715 },
            },
        ],
        checkIn: "15:00",
        checkOut: "12:00",
        services: [
            "Business Center: Lunes a Domingo de 6:00 a 22:00 horas",
            "Foto copias: Q1.00",
            "Impresión a color: Q6.00",
        ],
        entertainment: ["Plazas coloniales", "Parques recreativos"],
    },
    {
        id: 2,
        name: "Santa Cruz",
        description: "Encuentra el descanso que te mereces y sumérgete en un ambiente mediterráneo.",
        rooms: [
            {
                type: "Habitación doble",
                description: "Dos camas dobles, aire acondicionado, baño privado, y agua caliente.",
                capacity: "4 adultos y 2 niños menores de 12 años",
                affiliateRates: { weekday: 290, weekend: 385 },
                fullRates: { weekday: 645, weekend: 815 },
            },
        ],
        checkIn: "15:00",
        checkOut: "12:00",
        services: ["Servicio de limpieza diaria", "Acceso a piscinas", "Wi-Fi gratuito en áreas comunes"],
        entertainment: ["Senderos naturales", "Piscinas"],
    },
];

export default hostels;