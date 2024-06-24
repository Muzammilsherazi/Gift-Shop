let category = ["Bracelets", "Mugs", "Watches", "Wallets", "Cufflinks", "Handbags", "Cards"]//array for category wise display products
let brand = ["Gucci", "Hallmark", "Riblor"]//array for brand wise display products

let Data = [
    {
        id: 0,
        image: "/Gift-Shop/images/bracelet.jpg",
        productName: "Golden Bracelet H(mens)",
        brand: "Riblor",
        price: 1500,
        category: "Bracelets",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Wrist elegance: our bracelets add charm to any ensemble.",
        quantity: 1
    },
    {
        id: 1,
        image: "/Gift-Shop/images/mug.webp",
        productName: "caramic mug with cork",
        brand: "Hallmark",
        price: 800,
        category: "Mugs",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star-half-stroke'></i>",
        description: "Explore chic mugs: stylish, practical vessels for your favorite drinks, adding flair to every sip.",
        quantity: 1
    },
    {
        id: 2,
        image: "/Gift-Shop/images/gucci\ wallet.avif",
        productName: "long card case with gucci logo",
        brand: "Gucci",
        price: 3500,
        category: "Wallets",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Sleek and functional: our wallets keep your essentials organized.",
        quantity: 1
    },
    {
        id: 3,
        image: "/Gift-Shop/images/friendship\ card.jpg",
        productName: "freindship card",
        brand: "Hallmark",
        price: 200,
        category: "Cards",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star-half-stroke'></i>",
        description: "Send your sentiments: our cards speak volumes of love.",
        quantity: 1
    },
    {
        id: 4,
        image: "/Gift-Shop/images/Riblor-Carlo-Cufflinks.webp",
        productName: "Carlo Cufflinks",
        brand: "Riblor",
        price: 2800,
        category: "Cufflinks",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Elevate your style with our sleek and stylish cufflinks.",
        quantity: 1
    },
    {
        id: 5,
        image: "/Gift-Shop/images/Birthday-Balloons-Mug_1MUG3543_01.jpg",
        productName: "Birthday balloons mug",
        brand: "Hallmark",
        price: 1600,
        category: "Mugs",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Explore chic mugs: stylish, practical vessels for your favorite drinks, adding flair to every sip.",
        quantity: 1
    },
    {
        id: 6,
        image: "/Gift-Shop/images/Riblor-Benito-Leather-Bracelet-Black-And-Silver.webp",
        productName: "benito leather bracelet",
        brand: "Riblor",
        price: 3200,
        category: "Bracelets",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Wrist elegance: our bracelets add charm to any ensemble.",
        quantity: 1
    },
    {
        id: 7,
        image: "/Gift-Shop/images/Riblor-Gennaro-Cufflinks-01.webp",
        productName: "Gennaro Cufflink",
        brand: "Riblor",
        price: 2600,
        category: "Cufflinks",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Elevate your style with our sleek and stylish cufflinks.",
        quantity: 1
    },
    {
        id: 8,
        image: "/Gift-Shop/images/anniversary.jpg",
        productName: "Anniversary Card",
        brand: "Hallmark",
        price: 300,
        category: "Cards",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star-half-stroke'></i>",
        description: "Send your sentiments: our cards speak volumes of love.",
        quantity: 1
    },
    {
        id: 9,
        image: "/Gift-Shop/images/Sculpted-Gray-and-White-Cat-Mug_1ART1007_01.jpg",
        productName: "sculpted gray/white mug",
        brand: "Hallmark",
        price: 1900,
        category: "Mugs",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star-half-stroke'></i>",
        description: "Explore chic mugs: stylish, practical vessels for your favorite drinks, adding flair to every sip.",
        quantity: 1
    },
    {
        id: 10,
        image: "/Gift-Shop/images/gg amrmont gucci wallet.avif",
        productName: "GG Marmont leather wallet",
        brand: "Gucci",
        price: 4500,
        category: "Wallets",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star-half-stroke'></i>",
        description: "Sleek and functional: our wallets keep your essentials organized.",
        quantity: 1
    },
    {
        id: 11,
        image: "/Gift-Shop/images/Danilo-Leather-Bracelet-Black-01.webp",
        productName: "denilo leather bracelet",
        brand: "Riblor",
        price: 2600,
        category: "Bracelets",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Wrist elegance: our bracelets add charm to any ensemble.",
        quantity: 1
    },
    {
        id: 12,
        image: "/Gift-Shop/images/Antonio-Cufflinks-01.webp",
        productName: "antonio cufflink",
        brand: "Riblor",
        price: 3200,
        category: "Cufflinks",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Elevate your style with our sleek and stylish cufflinks.",
        quantity: 1
    },
    {
        id: 13,
        image: "/Gift-Shop/images/Floral-Heart-Ceramic-Mug_1MUG3545_01.jpg",
        productName: "Floral Heart Ceramic mug",
        brand: "Hallmark",
        price: 1700,
        category: "Mugs",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Explore chic mugs: stylish, practical vessels for your favorite drinks, adding flair to every sip.",
        quantity: 1
    },
    {
        id: 14,
        image: "/Gift-Shop/images/eid card.jpg",
        productName: "Eid Card",
        brand: "Hallmark",
        price: 400,
        category: "Cards",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Send your sentiments: our cards speak volumes of love.",
        quantity: 1
    },
    {
        id: 15,
        image: "/Gift-Shop/images/gucci horsebit handbag.avif",
        productName: "Horsebit 1955 Handbag",
        brand: "Gucci",
        price: 10200,
        category: "Handbags",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star-half-stroke'></i>",
        description: "Accessorize with flair: our handbags add style to any outfit.",
        quantity: 1
    },
    {
        id: 16,
        image: "/Gift-Shop/images/gucci dive watch for men.avif",
        productName: "Dive Watch (Mens)",
        brand: "Gucci",
        price: 8200,
        category: "Watches",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star-half-stroke'></i>",
        description: "Timeless elegance: our watches make every moment memorable.",
        quantity: 1
    },
    {
        id: 17,
        image: "/Gift-Shop/images/Riblor-Renzo-Cufflinks-in-Stainless-Steel-01.webp",
        productName: "renzo cufflink",
        brand: "Riblor",
        price: 2300,
        category: "Cufflinks",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Elevate your style with our sleek and stylish cufflinks.",
        quantity: 1
    },
    {
        id: 18,
        image: "/Gift-Shop/images/mothers day.jpg",
        productName: "Mothers day",
        brand: "Hallmark",
        price: 200,
        category: "Cards",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Send your sentiments: our cards speak volumes of love.",
        quantity: 1
    },
    {
        id: 19,
        image: "/Gift-Shop/images/Complaints-Funny-Mug_1MUG3598_01.jpg",
        productName: "Complaint mug",
        brand: "Hallmark",
        price: 2000,
        category: "Mugs",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Explore chic mugs: stylish, practical vessels for your favorite drinks, adding flair to every sip.",
        quantity: 1
    },
    {
        id: 20,
        image: "/Gift-Shop/images/wallet with interlocking.avif",
        productName: "Wallet with interlocking",
        brand: "Gucci",
        price: 5300,
        category: "Wallets",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star-half-stroke'></i>",
        description: "Sleek and functional: our wallets keep your essentials organized.",
        quantity: 1
    },
    {
        id: 21,
        image: "/Gift-Shop/images/Riblor-Adriano-Cufflinks-01.webp",
        productName: "adriano cufflink",
        brand: "Riblor",
        price: 3300,
        category: "Cufflinks",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Elevate your style with our sleek and stylish cufflinks.",
        quantity: 1
    },
    {
        id: 22,
        image: "/Gift-Shop/images/father day.jpg",
        productName: "father's day",
        brand: "Hallmark",
        price: 300,
        category: "Cards",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Send your sentiments: our cards speak volumes of love.",
        quantity: 1
    },
    {
        id: 23,
        image: "/Gift-Shop/images/Serafino-8-Card-Italian-Leather-Wallet-Brown-001.webp",
        productName: "serafino leather wallet brown",
        brand: "Riblor",
        price: 4000,
        category: "Wallets",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Sleek and functional: our wallets keep your essentials organized.",
        quantity: 1
    },
    {
        id: 24,
        image: "/Gift-Shop/images/gucci diana small tote bag.avif",
        productName: "diana small tote bag",
        brand: "Gucci",
        price: 11100,
        category: "Handbags",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Accessorize with flair: our handbags add style to any outfit.",
        quantity: 1
    },
    {
        id: 25,
        image: "/Gift-Shop/images/gucci blondie handle bag.avif",
        productName: "blondie handle bag",
        brand: "Gucci",
        price: 11700,
        category: "Handbags",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Accessorize with flair: our handbags add style to any outfit.",
        quantity: 1
    },
    {
        id: 26,
        image: "/Gift-Shop/images/Serafino-8-Card-Italian-Leather-Wallet-Black-001.webp",
        productName: "serafino leather wallet black",
        brand: "Riblor",
        price: 3900,
        category: "Wallets",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star-half-stroke'></i>",
        description: "Sleek and functional: our wallets keep your essentials organized.",
        quantity: 1
    },
    {
        id: 27,
        image: "/Gift-Shop/images/g-timeless watch women gucci.avif",
        productName: "G-timeless watch (women)",
        brand: "Gucci",
        price: 9500,
        category: "Watches",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star-half-stroke'></i>",
        description: "Timeless elegance: our watches make every moment memorable.",
        quantity: 1
    },
    {
        id: 28,
        image: "/Gift-Shop/images/orphidia gg large bag gucci.avif",
        productName: "Orphidia GG large bag",
        brand: "Gucci",
        price: 12900,
        category: "Handbags",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star-half-stroke'></i>",
        description: "Accessorize with flair: our handbags add style to any outfit.",
        quantity: 1
    },
    {
        id: 29,
        image: "/Gift-Shop/images/Serafino-8-Card-Italian-Leather-Wallet-Navy-Blue-001.webp",
        productName: "serafino leather wallet blue",
        brand: "Riblor",
        price: 3800,
        category: "Wallets",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star-half-stroke'></i>",
        description: "Sleek and functional: our wallets keep your essentials organized.",
        quantity: 1
    },
    {
        id: 30,
        image: "/Gift-Shop/images/g-timeless automatic gucci women.avif",
        productName: "G-Timeless automatic (women)",
        brand: "Gucci",
        price: 10600,
        category: "Watches",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Timeless elegance: our watches make every moment memorable.",
        quantity: 1
    },
    {
        id: 31,
        image: "/Gift-Shop/images/orphidia card acse gucci.avif",
        productName: "orphidia card case",
        brand: "Gucci",
        price: 3900,
        caches: "Wallets",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Sleek and functional: our wallets keep your essentials organized.",
        quantity: 1
    },
    {
        id: 32,
        image: "/Gift-Shop/images/Margo-Leather-Bracelet-Navy-Blue-And-Silver-02.webp",
        productName: "Margo leather bracelet",
        brand: "Riblor",
        price: 3700,
        category: "Bracelets",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Wrist elegance: our bracelets add charm to any ensemble.",
        quantity: 1
    },
    {
        id: 33,
        image: "/Gift-Shop/images/gucci 25th watch.avif",
        productName: "Gucci 25th women watch",
        brand: "Gucci",
        price: 12900,
        category: "Watches",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Timeless elegance: our watches make every moment memorable.",
        quantity: 1
    },
    {
        id: 34,
        image: "/Gift-Shop/images/orpgidia gg mini shoulder bag gucci.avif",
        productName: "orphidia GG mini bag",
        brand: "Gucci",
        price: 8400,
        category: "Handbags",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Accessorize with flair: our handbags add style to any outfit.",
        quantity: 1
    },
    {
        id: 35,
        image: "/Gift-Shop/images/g-timeless multibee watch for men.avif",
        productName: "G-Timeless MultiBEE Watch (Men's)",
        brand: "Gucci",
        price: 11500,
        category: "Watches",
        rating: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Timeless elegance: our watches make every moment memorable.",
        quantity: 1
    },
    {
        id: 36,
        image: "/Gift-Shop/images/card case with horsebit gucci.avif",
        productName: "Card case with horsebit",
        brand: "Gucci",
        price: 4900,
        category: "Wallets",
        rating: "<i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        description: "Sleek and functional: our wallets keep your essentials organized.",
        quantity: 1
    },
    {
        id: 37,
        image: "/Gift-Shop/images/Fabio-Leather-Bracelet-Black-And-Silver-02.webp",
        productName: "fabio leather bracelet",
        brand: "Riblor",
        price: 2900,
        category: "Bracelets",
        rating: "<i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i>",
        description: "Wrist elegance: our bracelets add charm to any ensemble.",
        quantity: 1
    },
    {
        id: 38,
        image: "/Gift-Shop/images/g-timeless watch 29mm gucci mens.avif",
        productName: "G-Timeless Watch 29MM (Men's)",
        brand: "Gucci",
        price: 9000,
        category: "Watches",
        rating: "<i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i> <i class='fa-solid fa-star'></i>",
        description: "Timeless elegance: our watches make every moment memorable.",
        quantity: 1
    },
]

export { Data };
export { category };
export { brand };