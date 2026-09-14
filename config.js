// ========================================
// KING SMOKE SHOP - CONFIGURATION FILE
// ========================================
// Edit this file to customize your website
// All changes will automatically update the site

const CONFIG = {
    // ========== BUSINESS INFO ==========
    business: {
        name: "King Smoke Shop",
        tagline: "Your Premier Destination for Premium Smoking & Vaping Products",
        description: "Since opening our doors, King Smoke Shop and Vapors has been committed to providing the highest quality products and exceptional customer service.",
        logo: "👑",
        year: new Date().getFullYear()
    },

    // ========== CONTACT INFORMATION ==========
    contact: {
        phone: "+1 (555) 123-4567",
        email: "info@kingsmokeshop.com",
        address: "123 Main Street",
        city: "Your City",
        state: "State",
        zip: "12345",
        fullAddress: "123 Main Street, Your City, State 12345"
    },

    // ========== BUSINESS HOURS ==========
    hours: {
        monday: "10:00 AM - 9:00 PM",
        tuesday: "10:00 AM - 9:00 PM",
        wednesday: "10:00 AM - 9:00 PM",
        thursday: "10:00 AM - 9:00 PM",
        friday: "10:00 AM - 10:00 PM",
        saturday: "10:00 AM - 10:00 PM",
        sunday: "12:00 PM - 8:00 PM"
    },

    // ========== SOCIAL MEDIA ==========
    social: {
        facebook: "https://facebook.com/kingsmokeshop",
        instagram: "https://instagram.com/kingsmokeshop",
        twitter: "https://twitter.com/kingsmokeshop",
        tiktok: "https://tiktok.com/@kingsmokeshop"
    },

    // ========== PRODUCTS ==========
    products: [
        {
            id: 1,
            name: "Premium Cigars",
            icon: "🚬",
            description: "Hand-rolled, imported cigars from top manufacturers",
            color: "#8B7355"
        },
        {
            id: 2,
            name: "Vaping Devices",
            icon: "💨",
            description: "Latest vaping mods, tanks, and accessories",
            color: "#00CED1"
        },
        {
            id: 3,
            name: "E-Liquids & Juice",
            icon: "🧪",
            description: "Wide variety of flavors and nicotine strengths",
            color: "#FF69B4"
        },
        {
            id: 4,
            name: "Smoking Accessories",
            icon: "🔥",
            description: "Lighters, rolling papers, pipes, and more",
            color: "#FF6B35"
        },
        {
            id: 5,
            name: "Premium Tobacco",
            icon: "💎",
            description: "Select leaf tobacco and rolling supplies",
            color: "#D4A574"
        },
        {
            id: 6,
            name: "Starter Kits",
            icon: "📦",
            description: "Complete kits for beginners and enthusiasts",
            color: "#6C5CE7"
        }
    ],

    // ========== SERVICES ==========
    services: [
        {
            id: 1,
            title: "Fast Delivery",
            icon: "fa-truck",
            description: "Quick and secure shipping to your doorstep"
        },
        {
            id: 2,
            title: "24/7 Support",
            icon: "fa-headset",
            description: "Expert support team ready to help anytime"
        },
        {
            id: 3,
            title: "Easy Returns",
            icon: "fa-undo",
            description: "30-day money-back guarantee"
        },
        {
            id: 4,
            title: "Secure Payment",
            icon: "fa-lock",
            description: "Safe and encrypted checkout process"
        }
    ],

    // ========== TESTIMONIALS ==========
    testimonials: [
        {
            name: "John M.",
            rating: 5,
            text: "Exceptional quality products and outstanding service! Will definitely be back.",
            image: "👨‍💼"
        },
        {
            name: "Sarah T.",
            rating: 5,
            text: "Best selection in town. The staff knows their stuff and is very helpful.",
            image: "👩‍💼"
        },
        {
            name: "Mike R.",
            rating: 5,
            text: "Fast shipping and great prices. Highly recommend King Smoke Shop!",
            image: "👨‍🔬"
        }
    ],

    // ========== ABOUT SECTION ==========
    about: {
        highlights: [
            "20+ Years Industry Experience",
            "Authentic, Quality Products Only",
            "Expert Staff & Knowledgeable Team",
            "Competitive Pricing",
            "Fast & Reliable Shipping",
            "Premium Customer Service"
        ]
    },

    // ========== COLOR SCHEME ==========
    colors: {
        primary: "#d4af37",      // Gold
        secondary: "#1a1a1a",    // Dark
        accent: "#ff6b35",       // Orange accent
        text: "#333",
        lightBg: "#f5f5f5",
        white: "#ffffff",
        success: "#27ae60",
        warning: "#e74c3c"
    },

    // ========== FONTS ==========
    fonts: {
        heading: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        body: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },

    // ========== SEO & META ==========
    seo: {
        title: "King Smoke Shop and Vapors - Premium Smoking & Vaping Products",
        description: "Your Premier Destination for Premium Smoking & Vaping Products. Quality cigars, vaping devices, e-liquids, and accessories.",
        keywords: "smoke shop, vaping, cigars, e-liquids, vape devices, smoking accessories"
    }
};