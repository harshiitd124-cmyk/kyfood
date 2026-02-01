/* ========================================
   ICMR Dietary Guidelines Data
   Based on ICMR-NIN 2024 Recommendations
   ======================================== */

const ICMR_GUIDELINES = {
    // Daily limits (based on 2000 kcal diet)
    limits: {
        sugar: { max: 25, unit: 'g', label: 'Added Sugar' },
        salt: { max: 5, unit: 'g', label: 'Salt' },
        fat: { max: 27, unit: 'g', label: 'Visible Fat' },
        saturatedFat: { max: 10, unit: '%energy', label: 'Saturated Fat' },
        protein: { min: 0.83, unit: 'g/kg', label: 'Protein' }
    },
    
    // Energy contribution
    energyContribution: {
        cereals: { max: 45, label: 'Cereals' },
        pulses: { recommended: 15, label: 'Pulses, Eggs, Meat' },
        fat: { max: 30, label: 'Total Fat' },
        dairy: { recommended: 10, label: 'Milk Products' }
    }
};

// Comprehensive Indian Food Database
const INDIAN_FOOD_DATABASE = {
    // ============ COOKED DISHES ============
    "butter chicken": {
        name: "Butter Chicken",
        category: "Non-Veg Main Course",
        origin: "Punjab",
        summary: "Butter Chicken (Murgh Makhani) is a rich North Indian curry made with tender chicken pieces in a creamy tomato-based gravy, enriched with butter and cream. Originated in Delhi in the 1950s, it's now one of India's most popular dishes worldwide.",
        nutrition: {
            calories: 490,
            protein: 28,
            carbs: 12,
            fat: 38,
            saturatedFat: 18,
            sugar: 6,
            salt: 2.1,
            fiber: 2
        },
        good: [
            { title: "High Protein Content", desc: "Provides ~28g protein per serving from chicken, supporting muscle health" },
            { title: "Rich in B Vitamins", desc: "Chicken is an excellent source of B6 and B12 for energy metabolism" },
            { title: "Contains Lycopene", desc: "Tomato-based gravy provides antioxidant lycopene for heart health" },
            { title: "Spice Benefits", desc: "Contains turmeric, ginger, and garlic with anti-inflammatory properties" }
        ],
        bad: [
            { title: "High in Saturated Fat", desc: "Butter and cream add significant saturated fat (~18g), exceeding ICMR limits" },
            { title: "Calorie Dense", desc: "At ~490 kcal per serving, it's energy-dense and can lead to weight gain" },
            { title: "High Sodium", desc: "Contains ~2.1g salt, nearing half of ICMR's 5g daily limit" }
        ],
        warnings: [
            { title: "Heart Health Alert", desc: "High saturated fat content may increase LDL cholesterol. ICMR recommends limiting saturated fat to <10% of daily energy." },
            { title: "Portion Control Needed", desc: "Restaurant portions often exceed recommended serving sizes" }
        ],
        alternatives: [
            { title: "Chicken Tikka (No Gravy)", desc: "Grilled tandoori chicken without the creamy gravy - saves 200+ calories" },
            { title: "Butter Chicken with Greek Yogurt", desc: "Replace cream with low-fat yogurt to reduce saturated fat by 50%" },
            { title: "Dal Makhani (Veg Option)", desc: "High-protein lentil dish with similar flavors but less saturated fat" },
            { title: "Chicken Curry with Coconut Milk", desc: "Use light coconut milk for medium-chain triglycerides (MCTs)" }
        ],
        tips: [
            "Pair with brown rice or multigrain roti instead of naan for added fiber",
            "Request less butter/cream when ordering at restaurants",
            "Add a side salad or raita to increase vegetables in your meal",
            "Limit to once a week as per ICMR guidelines on high-fat foods"
        ]
    },

    "boost health drink": {
        name: "Boost Health Drink",
        category: "Packaged Beverage",
        origin: "India (GSK/Hindustan Unilever)",
        summary: "Boost is a popular malt-based health drink marketed for energy and stamina. It contains added vitamins and minerals but also significant amounts of sugar. Common among children and athletes in India.",
        nutrition: {
            calories: 377,
            protein: 7.5,
            carbs: 82,
            fat: 2,
            saturatedFat: 0.8,
            sugar: 54,
            salt: 0.5,
            fiber: 0.5
        },
        perServing: "Per 100g powder",
        good: [
            { title: "Fortified with Vitamins", desc: "Contains added B-vitamins, Vitamin D, and minerals like Iron and Calcium" },
            { title: "Energy Boost", desc: "Provides quick energy from carbohydrates, useful for active children and athletes" },
            { title: "Low Fat", desc: "Contains minimal fat content (~2g per 100g)" },
            { title: "Iron Content", desc: "Helps prevent iron-deficiency anemia, common in Indian children" }
        ],
        bad: [
            { title: "Extremely High Sugar", desc: "Contains 54g sugar per 100g - a single serving exceeds ICMR's 25g daily limit!" },
            { title: "Processed Additives", desc: "Contains maltodextrin and artificial flavoring agents" },
            { title: "Low Fiber", desc: "Processed nature means very little dietary fiber" },
            { title: "Hidden Calories", desc: "Often consumed with sugar-added milk, further increasing calorie load" }
        ],
        warnings: [
            { title: "🚨 ICMR Sugar Limit Exceeded", desc: "ICMR recommends <25g added sugar/day. Just 2 tablespoons of Boost (20g) contains ~11g sugar!" },
            { title: "Dental Health Risk", desc: "High sugar content can lead to tooth decay, especially in children" },
            { title: "Obesity Concern", desc: "Regular consumption linked to childhood obesity as per ICMR-NIN studies" }
        ],
        alternatives: [
            { title: "Homemade Sattu Drink", desc: "Roasted gram flour with jaggery - natural energy with protein and fiber" },
            { title: "Ragi Malt (Homemade)", desc: "Finger millet porridge with minimal sugar - rich in calcium and iron" },
            { title: "Milk with Nuts & Dates", desc: "Natural sweetness from dates, protein from nuts - no added sugar" },
            { title: "Sprouted Moong Shake", desc: "Blend sprouted moong with banana for natural protein and energy" }
        ],
        tips: [
            "Use only 1 teaspoon instead of recommended 2 tablespoons to reduce sugar intake",
            "Mix with unsweetened milk to avoid double sugar load",
            "Consider switching to natural alternatives for daily consumption",
            "Reserve for occasional use during high physical activity"
        ]
    },

    "sweet lassi": {
        name: "Sweet Lassi",
        category: "Traditional Beverage",
        origin: "Punjab",
        summary: "Lassi is a traditional Punjabi yogurt-based drink, either sweet or salted. Sweet lassi is made with dahi (curd), sugar, and often flavored with cardamom or rose water. It's a probiotic-rich cooling drink popular across India.",
        nutrition: {
            calories: 160,
            protein: 5,
            carbs: 28,
            fat: 4,
            saturatedFat: 2.5,
            sugar: 24,
            salt: 0.2,
            fiber: 0
        },
        perServing: "Per glass (250ml)",
        good: [
            { title: "Probiotic Rich", desc: "Contains beneficial bacteria from yogurt that support gut health and digestion" },
            { title: "Calcium Source", desc: "Provides calcium for bone health - supports ICMR recommendation for dairy intake" },
            { title: "Cooling Properties", desc: "Traditional Ayurvedic cooling drink, ideal for Indian summers" },
            { title: "Protein Content", desc: "Provides about 5g protein from yogurt per glass" }
        ],
        bad: [
            { title: "High Added Sugar", desc: "Commercial/restaurant versions contain ~24g sugar per glass, nearly hitting ICMR's 25g daily limit" },
            { title: "Calorie Dense", desc: "Sweet version adds significant calories compared to plain buttermilk" },
            { title: "No Fiber", desc: "Lacks dietary fiber unless fruits are added" }
        ],
        warnings: [
            { title: "Sugar Content Warning", desc: "One glass nearly exhausts your entire day's recommended added sugar quota (ICMR: <25g/day)" },
            { title: "Restaurant Portions", desc: "Street lassi often comes in large glasses (400-500ml) doubling the sugar content" }
        ],
        alternatives: [
            { title: "Chaas / Buttermilk (Salted)", desc: "Zero added sugar, same probiotic benefits, lower calories (~40 kcal)" },
            { title: "Lassi with Jaggery", desc: "Replace white sugar with jaggery for added iron and minerals" },
            { title: "Mango Lassi (Fresh Fruit)", desc: "Use fresh mango for natural sweetness, reduce added sugar by 50%" },
            { title: "Plain Dahi with Honey", desc: "Small amount of honey provides sweetness with antioxidants" }
        ],
        tips: [
            "Make at home with fresh dahi and control sugar (use 1 tsp instead of 3)",
            "Try the salted (namkeen) version - zero sugar and equally refreshing",
            "Add fresh fruits like banana or mango for natural sweetness",
            "Order 'kam cheeni' (less sweet) at restaurants"
        ]
    },

    "masala dosa": {
        name: "Masala Dosa",
        category: "South Indian Breakfast",
        origin: "Karnataka",
        summary: "Masala Dosa is a crispy fermented rice and lentil crepe filled with spiced potato filling. It's a staple South Indian breakfast that originated in Karnataka and is now popular worldwide. The fermentation process makes it nutritious and easy to digest.",
        nutrition: {
            calories: 350,
            protein: 8,
            carbs: 55,
            fat: 12,
            saturatedFat: 3,
            sugar: 2,
            salt: 1.5,
            fiber: 3
        },
        perServing: "Per dosa with potato filling",
        good: [
            { title: "Fermented Food Benefits", desc: "Fermentation increases B-vitamins and makes nutrients more bioavailable" },
            { title: "Complete Protein", desc: "Rice + urad dal combination provides all essential amino acids" },
            { title: "Low Sugar", desc: "Minimal sugar content, safe for diabetics in moderation" },
            { title: "Probiotic Properties", desc: "Fermentation adds beneficial bacteria for gut health" },
            { title: "Good Fiber Content", desc: "Potato filling and batter provide 3g fiber per serving" }
        ],
        bad: [
            { title: "High Carbohydrate", desc: "At 55g carbs, it's carb-heavy. ICMR recommends cereals at <45% of daily energy" },
            { title: "Oil Absorption", desc: "Restaurant dosas often use excess oil/ghee for crispiness, adding 100+ extra calories" },
            { title: "Sodium Content", desc: "Batter and potato filling contain 1.5g salt per serving" }
        ],
        warnings: [
            { title: "Portion Control", desc: "Often served in large portions. Stick to 1-2 dosas per meal" },
            { title: "Restaurant Oil Usage", desc: "Street food versions may use reused oil, affecting heart health" }
        ],
        alternatives: [
            { title: "Ragi Dosa", desc: "Made with finger millet - higher in calcium and iron, lower GI" },
            { title: "Oats Dosa", desc: "Blend oats into batter for added fiber and lower glycemic index" },
            { title: "Moong Dal Dosa", desc: "Protein-rich instant dosa without fermentation" },
            { title: "Set Dosa (Thicker)", desc: "Absorbs less oil than thin crispy versions" }
        ],
        tips: [
            "Pair with sambar (lentil curry) for additional protein and vegetables",
            "Request less oil when ordering at restaurants",
            "Skip the butter/ghee topping to save 100+ calories",
            "Add coconut chutney moderately - it provides healthy fats"
        ]
    },

    "maggi noodles": {
        name: "Maggi Noodles",
        category: "Packaged Instant Food",
        origin: "India (Nestlé)",
        summary: "Maggi is India's most popular instant noodle brand. Made from refined wheat flour (maida) with a tastemaker seasoning, it's a quick comfort food. While convenient, it raises nutritional concerns due to high sodium and processing.",
        nutrition: {
            calories: 420,
            protein: 9,
            carbs: 58,
            fat: 17,
            saturatedFat: 8,
            sugar: 1,
            salt: 1.9,
            fiber: 2
        },
        perServing: "Per pack (70g + tastemaker)",
        good: [
            { title: "Fortified with Iron", desc: "Contains added iron to address deficiency, common in Indian population" },
            { title: "Quick Energy", desc: "Provides fast carbohydrate energy, useful in emergencies" },
            { title: "Low Sugar", desc: "Contains minimal sugar (~1g), unlike many packaged snacks" }
        ],
        bad: [
            { title: "Refined Flour (Maida)", desc: "Made from refined wheat, stripped of fiber and nutrients" },
            { title: "High Sodium", desc: "Contains 1.9g salt per pack - 38% of ICMR's 5g daily limit!" },
            { title: "Trans Fats", desc: "Contains partially hydrogenated vegetable oil (palm oil)" },
            { title: "MSG Concerns", desc: "Tastemaker contains flavor enhancers like MSG (INS 635)" },
            { title: "Low Nutritional Value", desc: "Provides empty calories with minimal vitamins and minerals" }
        ],
        warnings: [
            { title: "🚨 ICMR Ultra-Processed Food Alert", desc: "ICMR 2024 guidelines specifically warn against ultra-processed foods like instant noodles" },
            { title: "High Sodium Risk", desc: "Regular consumption linked to hypertension. Salt: 1.9g vs ICMR limit: 5g/day" },
            { title: "Not a Complete Meal", desc: "Lacks protein, fiber, vitamins - should not replace regular meals" }
        ],
        alternatives: [
            { title: "Homemade Vegetable Noodles", desc: "Use whole wheat noodles with fresh veggies - control salt and oil" },
            { title: "Poha (Flattened Rice)", desc: "Traditional quick meal, made in similar time, much healthier" },
            { title: "Upma (Semolina)", desc: "South Indian breakfast, higher fiber, customizable vegetables" },
            { title: "Oats with Vegetables", desc: "Quick savory oats - high fiber, low sodium if homemade" },
            { title: "Millet Vermicelli", desc: "Ragi or bajra sevai - healthy whole grain alternative" }
        ],
        tips: [
            "Use only half the tastemaker to reduce sodium by 50%",
            "Add vegetables like peas, carrots, and spinach to increase nutrition",
            "Add a boiled egg or paneer for protein",
            "Limit to once a week maximum as per ICMR guidelines on processed foods"
        ]
    },

    "gulab jamun": {
        name: "Gulab Jamun",
        category: "Indian Dessert",
        origin: "North India/Mughal Era",
        summary: "Gulab Jamun is a classic Indian dessert of milk-solid dumplings (khoya-based) deep-fried and soaked in rose-flavored sugar syrup. It's a must-have at festivals and celebrations, known for its rich, melt-in-mouth texture.",
        nutrition: {
            calories: 175,
            protein: 2,
            carbs: 28,
            fat: 7,
            saturatedFat: 4,
            sugar: 25,
            salt: 0.1,
            fiber: 0
        },
        perServing: "Per piece (2 medium)",
        good: [
            { title: "Calcium from Khoya", desc: "Made from reduced milk solids, provides some calcium" },
            { title: "Cultural Significance", desc: "Traditional festive sweet with emotional and social value" },
            { title: "Cardamom & Rose", desc: "Contains aromatic spices with mild digestive benefits" }
        ],
        bad: [
            { title: "Extremely High Sugar", desc: "Just 2 pieces contain 25g sugar - your ENTIRE ICMR daily limit!" },
            { title: "Deep Fried", desc: "Absorbs significant oil during frying, adding saturated fat" },
            { title: "Empty Calories", desc: "Provides 175 kcal per serving with minimal nutritional value" },
            { title: "Zero Fiber", desc: "Contains no dietary fiber whatsoever" }
        ],
        warnings: [
            { title: "🚨 Sugar Bomb Alert", desc: "2 pieces = 25g sugar = 100% of ICMR's daily added sugar limit. Diabetics beware!" },
            { title: "Glycemic Index", desc: "Extremely high GI causes rapid blood sugar spikes" },
            { title: "Addictive Nature", desc: "High sugar + fat combination triggers reward centers, leading to overconsumption" }
        ],
        alternatives: [
            { title: "Date & Nut Ladoo", desc: "Natural sweetness from dates, protein from nuts - no added sugar" },
            { title: "Baked Gulab Jamun", desc: "Air-fried or baked versions reduce fat content by 50%" },
            { title: "Rasgulla (Single)", desc: "Lower in fat (not deep-fried), though still high in sugar" },
            { title: "Fresh Fruit with Mishri", desc: "Seasonal fruits with rock sugar - traditional Ayurvedic dessert" },
            { title: "Til Gur Ladoo", desc: "Sesame and jaggery balls - iron-rich, less processed sugar" }
        ],
        tips: [
            "Limit to 1 piece on special occasions",
            "Choose smaller pieces when available",
            "Balance with a walk after consuming to utilize the sugar",
            "Pair with unsweetened chai to offset sweetness"
        ]
    },

    "dal makhani": {
        name: "Dal Makhani",
        category: "Vegetarian Main Course",
        origin: "Punjab",
        summary: "Dal Makhani is a rich, creamy Punjabi lentil dish made with whole black lentils (urad dal) and kidney beans (rajma), slow-cooked with butter and cream. It's a vegetarian protein powerhouse and a staple of North Indian cuisine.",
        nutrition: {
            calories: 320,
            protein: 12,
            carbs: 35,
            fat: 16,
            saturatedFat: 9,
            sugar: 3,
            salt: 1.8,
            fiber: 8
        },
        perServing: "Per bowl (200g)",
        good: [
            { title: "Excellent Protein Source", desc: "Provides 12g plant-based protein from lentils - meets ICMR vegetarian protein needs" },
            { title: "High Fiber Content", desc: "Contains 8g fiber per serving, aiding digestion and blood sugar control" },
            { title: "Iron Rich", desc: "Black lentils are excellent source of iron for vegetarians" },
            { title: "Complete Amino Acids", desc: "Lentil + rajma combination provides all essential amino acids" },
            { title: "Low Glycemic", desc: "Lentils have low GI, causing gradual blood sugar rise" }
        ],
        bad: [
            { title: "High in Butter/Cream", desc: "Restaurant versions use excessive butter, adding saturated fat" },
            { title: "Calorie Dense", desc: "Creamy preparation adds significant calories (320 kcal per bowl)" },
            { title: "Sodium Content", desc: "Contains 1.8g salt per serving" }
        ],
        warnings: [
            { title: "Restaurant Preparation", desc: "Dhabas often add 'finishing butter' (extra tadka), doubling the fat content" },
            { title: "Portion Awareness", desc: "Often served in large quantities - stick to one small bowl" }
        ],
        alternatives: [
            { title: "Dal Tadka (Yellow Dal)", desc: "Lighter lentil preparation with minimal oil/ghee - 40% fewer calories" },
            { title: "Homemade Dal Makhani", desc: "Control butter/cream - use 1 tbsp butter instead of 4" },
            { title: "Chana Masala", desc: "Chickpea curry - high protein, can be made oil-free" },
            { title: "Sprouts Curry", desc: "Mixed sprouts in gravy - highest protein, lowest fat" }
        ],
        tips: [
            "Make at home with Greek yogurt instead of cream for healthier fats",
            "Pair with roti instead of naan to save 100+ calories",
            "Ask for 'kam butter' (less butter) at restaurants",
            "Add a side of salad for balanced nutrition"
        ]
    },

    "samosa": {
        name: "Samosa",
        category: "Indian Snack",
        origin: "Central Asia / India",
        summary: "The Samosa is India's iconic triangular fried snack, filled with spiced potatoes, peas, and sometimes meat. Originating from Central Asia, it's been adapted into countless Indian regional variations. It's a beloved street food but raises health concerns due to deep frying.",
        nutrition: {
            calories: 260,
            protein: 4,
            carbs: 32,
            fat: 14,
            saturatedFat: 3,
            sugar: 2,
            salt: 0.8,
            fiber: 2
        },
        perServing: "Per piece (large)",
        good: [
            { title: "Contains Vegetables", desc: "Potato filling provides potassium, peas add protein and fiber" },
            { title: "Spice Benefits", desc: "Cumin, coriander, and green chilies offer digestive and metabolic benefits" },
            { title: "Satisfying Snack", desc: "Combination of carbs and fat provides sustained energy" }
        ],
        bad: [
            { title: "Deep Fried", desc: "Absorbs significant oil during frying - 14g fat per samosa" },
            { title: "Refined Flour Covering", desc: "Outer shell is made of maida (refined wheat), low in nutrients" },
            { title: "Reused Oil Risk", desc: "Street vendors often reuse oil multiple times, creating harmful compounds" },
            { title: "Low Protein", desc: "Only 4g protein despite being filling - not a balanced snack" }
        ],
        warnings: [
            { title: "Trans Fat Risk", desc: "Reused frying oil in street stalls may contain harmful trans fats" },
            { title: "Calorie Addition", desc: "Often eaten with sweet chutney, adding more sugar to meal" }
        ],
        alternatives: [
            { title: "Baked Samosa", desc: "Air-fried or baked versions reduce fat by 60% while keeping taste" },
            { title: "Samosa Chaat", desc: "Smaller portions with yogurt and vegetables - more balanced" },
            { title: "Whole Wheat Samosa", desc: "Replace maida with atta for added fiber" },
            { title: "Sprouts Tikki", desc: "Pan-fried patty with sprouts - higher protein, less oil" },
            { title: "Baked Kachori", desc: "Similar satisfaction, can be made with less oil" }
        ],
        tips: [
            "Limit to 1 samosa as a snack, not a meal",
            "Pair with green chutney (fewer calories) instead of sweet tamarind",
            "Choose shops that fry in fresh oil",
            "Try baking at home for a healthier version"
        ]
    },

    "biryani": {
        name: "Chicken Biryani",
        category: "Rice Main Course",
        origin: "Hyderabad/Lucknow",
        summary: "Biryani is a royal Mughlai rice dish made by layering aromatic basmati rice with spiced meat (or vegetables), slow-cooked to perfection. Hyderabadi and Lucknowi biryanis are most famous. It's a complete meal rich in flavors and tradition.",
        nutrition: {
            calories: 450,
            protein: 22,
            carbs: 52,
            fat: 18,
            saturatedFat: 6,
            sugar: 2,
            salt: 2.2,
            fiber: 2
        },
        perServing: "Per plate (300g with chicken)",
        good: [
            { title: "High Protein", desc: "Provides 22g protein from chicken, supporting muscle health" },
            { title: "Aromatic Spices", desc: "Contains bay leaf, cardamom, cinnamon with digestive and anti-inflammatory properties" },
            { title: "Complete Meal", desc: "Combines carbs, protein, and fats in one dish" },
            { title: "Saffron Benefits", desc: "Contains kesar (saffron) with mood-enhancing and antioxidant properties" }
        ],
        bad: [
            { title: "High Sodium", desc: "Contains 2.2g salt per serving - 44% of ICMR's daily limit" },
            { title: "Calorie Dense", desc: "At 450 kcal per plate, it's a heavy meal" },
            { title: "Ghee/Oil Content", desc: "Traditional recipes use generous ghee, adding saturated fat" },
            { title: "White Rice Base", desc: "Basmati rice, while aromatic, is refined and has high GI" }
        ],
        warnings: [
            { title: "Sodium Alert", desc: "Restaurant biryani often exceeds 2g salt. Combined with raita and mirchi, sodium adds up fast" },
            { title: "Portion Sizes", desc: "Restaurant portions are often 500g+, nearly doubling nutrition facts" }
        ],
        alternatives: [
            { title: "Brown Rice Biryani", desc: "Use brown basmati for added fiber and lower GI" },
            { title: "Quinoa Biryani", desc: "High-protein grain substitute with complete amino acids" },
            { title: "Vegetable Pulao", desc: "Lighter rice dish with less oil and more vegetables" },
            { title: "Chicken with Jeera Rice", desc: "Simpler preparation with less oil and salt" }
        ],
        tips: [
            "Share a portion or take half home to control serving size",
            "Pair with raita (yogurt) for probiotics and cooling effect",
            "Skip the mirchi ka salan to reduce calories",
            "Request less oil when ordering from restaurants"
        ]
    },

    "parle-g biscuit": {
        name: "Parle-G Biscuits",
        category: "Packaged Snack",
        origin: "India (Parle)",
        summary: "Parle-G is India's most iconic and bestselling biscuit brand, known for its glucose content and affordability. It's a staple in Indian households, often paired with chai. Despite being marketed as 'glucose biscuits,' they're essentially sugar-rich cookies.",
        nutrition: {
            calories: 450,
            protein: 6.5,
            carbs: 75,
            fat: 14.5,
            saturatedFat: 6,
            sugar: 27,
            salt: 0.7,
            fiber: 2
        },
        perServing: "Per 100g (approx 14 biscuits)",
        good: [
            { title: "Quick Energy", desc: "Glucose provides rapid energy, useful during low blood sugar" },
            { title: "Affordable Nutrition", desc: "Provides cheap calories for lower-income populations" },
            { title: "Fortified", desc: "Contains added vitamins and minerals" }
        ],
        bad: [
            { title: "High Sugar Content", desc: "27g sugar per 100g - just 4 biscuits exceed 10g sugar" },
            { title: "Refined Flour", desc: "Made primarily from maida (refined wheat flour)" },
            { title: "High Saturated Fat", desc: "Contains palm oil, high in saturated fat" },
            { title: "Low Satiety", desc: "High GI leads to quick hunger return, promoting overeating" }
        ],
        warnings: [
            { title: "Sugar Warning", desc: "4 biscuits contain ~7.7g sugar. ICMR recommends <25g added sugar daily" },
            { title: "Not a Health Food", desc: "Despite 'glucose' branding, these are essentially cookies, not health supplements" }
        ],
        alternatives: [
            { title: "Marie/Digestive Biscuits", desc: "Lower sugar content (~20g/100g), slightly better option" },
            { title: "Ragi Biscuits", desc: "Millet-based biscuits with more fiber and minerals" },
            { title: "Homemade Atta Biscuits", desc: "Whole wheat cookies with controlled sugar and jaggery" },
            { title: "Roasted Makhana", desc: "Low-calorie, high-protein snack with chai" },
            { title: "Mixed Nuts", desc: "Protein and healthy fats instead of empty carbs" }
        ],
        tips: [
            "Limit to 2-3 biscuits at a time (not half a packet!)",
            "Replace daily chai-biscuit habit with healthier alternatives",
            "Store in single-serving containers to control portions",
            "Try with unsweetened green tea instead of sugary chai"
        ]
    },

    "paneer tikka": {
        name: "Paneer Tikka",
        category: "Vegetarian Starter",
        origin: "North India",
        summary: "Paneer Tikka is a popular tandoor-grilled appetizer made with marinated cottage cheese cubes. The marinade typically includes yogurt, spices, and sometimes cream. It's a high-protein vegetarian option loved across India.",
        nutrition: {
            calories: 280,
            protein: 18,
            carbs: 8,
            fat: 20,
            saturatedFat: 12,
            sugar: 3,
            salt: 1.2,
            fiber: 1
        },
        perServing: "Per serving (150g)",
        good: [
            { title: "Excellent Protein", desc: "Provides 18g high-quality complete protein from paneer" },
            { title: "Calcium Rich", desc: "Paneer is an excellent source of calcium for bone health" },
            { title: "Low Carbs", desc: "Only 8g carbs, suitable for low-carb diets" },
            { title: "Grilled Preparation", desc: "Tandoor grilling uses less oil than deep-frying" },
            { title: "Vegetarian Complete Protein", desc: "Contains all essential amino acids" }
        ],
        bad: [
            { title: "High Saturated Fat", desc: "Paneer contains 12g saturated fat per serving from milk fat" },
            { title: "Calorie Dense", desc: "280 kcal for an appetizer adds up quickly in a full meal" },
            { title: "Sodium Content", desc: "Marinades often contain significant salt" }
        ],
        warnings: [
            { title: "Saturated Fat Alert", desc: "One serving provides significant saturated fat. ICMR recommends limiting for heart health" },
            { title: "Butter Basting", desc: "Restaurants often baste with butter during cooking, adding extra fat" }
        ],
        alternatives: [
            { title: "Tofu Tikka", desc: "Soy-based alternative with less saturated fat, similar protein" },
            { title: "Paneer Tikka (Low-fat)", desc: "Use low-fat paneer to reduce saturated fat by 40%" },
            { title: "Mushroom Tikka", desc: "Much lower in calories and fat, good texture substitute" },
            { title: "Soya Chaap Tikka", desc: "Textured soy protein with similar taste, lower fat" }
        ],
        tips: [
            "Request no butter basting when ordering at restaurants",
            "Pair with green chutney instead of creamy dips",
            "Enjoy with grilled vegetables for a balanced starter",
            "Make at home with low-fat yogurt marinade"
        ]
    },

    "aloo paratha": {
        name: "Aloo Paratha",
        category: "North Indian Breakfast",
        origin: "Punjab",
        summary: "Aloo Paratha is a stuffed flatbread filled with spiced mashed potatoes, cooked on a tawa with ghee or butter. It's a hearty Punjabi breakfast staple, often served with curd, pickle, and butter. Delicious but calorie-dense.",
        nutrition: {
            calories: 300,
            protein: 6,
            carbs: 42,
            fat: 13,
            saturatedFat: 7,
            sugar: 2,
            salt: 1.0,
            fiber: 3
        },
        perServing: "Per paratha (with ghee)",
        good: [
            { title: "Wholesome Breakfast", desc: "Provides sustained energy from complex carbs for morning activities" },
            { title: "Contains Potassium", desc: "Potato filling provides potassium for blood pressure regulation" },
            { title: "Whole Wheat Base", desc: "Atta provides more fiber and nutrients than refined flour" },
            { title: "Satisfying", desc: "Keeps you full for hours due to carb-fat combination" }
        ],
        bad: [
            { title: "High in Ghee/Butter", desc: "Traditionally cooked with generous ghee, adding saturated fat" },
            { title: "Carb Heavy", desc: "42g carbs (potato inside + wheat outside) is significant" },
            { title: "Low Protein", desc: "Only 6g protein - not a complete meal on its own" },
            { title: "Calorie Dense", desc: "300 kcal per paratha adds up quickly (Indians often eat 2-3)" }
        ],
        warnings: [
            { title: "Portion Alert", desc: "2 parathas = 600 kcal (30% of daily needs) before adding butter/pickle" },
            { title: "Additional Toppings", desc: "Often served with extra butter/makhan, doubling the fat content" }
        ],
        alternatives: [
            { title: "Paneer Paratha", desc: "Higher protein filling (15g vs 6g), more balanced" },
            { title: "Mooli/Gobhi Paratha", desc: "Radish/cauliflower filling - lower carbs than potato" },
            { title: "Sattu Paratha", desc: "Roasted gram flour filling - high protein, high fiber" },
            { title: "Palak Paratha", desc: "Spinach paratha - adds iron and vitamins" }
        ],
        tips: [
            "Use minimal ghee or switch to olive oil for cooking",
            "Pair with raita (yogurt) instead of butter for protein and probiotics",
            "Add a side of vegetables to balance the meal",
            "Limit to 1 paratha and supplement with eggs or paneer for protein"
        ]
    },

    "jalebi": {
        name: "Jalebi",
        category: "Indian Sweet",
        origin: "North India/Middle East",
        summary: "Jalebi is a deep-fried sweet made from fermented batter, soaked in sugar syrup. Known for its bright orange color (from food coloring) and spiral shape, it's a popular festival and breakfast sweet. Often paired with rabri or milk.",
        nutrition: {
            calories: 350,
            protein: 2,
            carbs: 65,
            fat: 10,
            saturatedFat: 2,
            sugar: 55,
            salt: 0.1,
            fiber: 0
        },
        perServing: "Per 100g (3-4 medium jalebis)",
        good: [
            { title: "Quick Energy", desc: "Provides rapid energy from sugar - historically given to wrestlers and laborers" },
            { title: "Fermented Batter", desc: "Traditional preparation involves fermentation, adding slight probiotic benefit" },
            { title: "Cultural Value", desc: "Traditional festive sweet with emotional significance" }
        ],
        bad: [
            { title: "Extremely High Sugar", desc: "55g sugar per 100g - more than DOUBLE your daily ICMR limit in one serving!" },
            { title: "Deep Fried", desc: "Absorbs oil during frying, adding empty calories and oxidized fats" },
            { title: "Artificial Color", desc: "Orange color often comes from artificial food coloring (not saffron)" },
            { title: "Zero Nutritional Value", desc: "Provides calories but virtually no vitamins, minerals, or fiber" }
        ],
        warnings: [
            { title: "🚨 Extreme Sugar Alert", desc: "3 jalebis contain 55g sugar = 220% of ICMR's 25g daily limit! Diabetics must avoid." },
            { title: "Glycemic Spike", desc: "Causes rapid blood sugar spike followed by crash" },
            { title: "Harmful Colorants", desc: "Some vendors use non-food-grade colors; choose naturally colored versions" }
        ],
        alternatives: [
            { title: "Malpua (Small Portion)", desc: "Pan-fried instead of deep-fried, can be made with less sugar" },
            { title: "Gur/Jaggery Treats", desc: "Natural sweetness with iron and minerals" },
            { title: "Fresh Fruit with Honey", desc: "Natural sugars with fiber, vitamins, and antioxidants" },
            { title: "Dates & Nuts", desc: "Natural sweetness with protein and healthy fats" }
        ],
        tips: [
            "Limit to 1 small piece on special occasions only",
            "Never consume on empty stomach - extreme sugar spike",
            "Pair with rabri (milk-based) for some protein to slow sugar absorption",
            "Walk after consuming to help utilize the sugar"
        ]
    },

    "chole bhature": {
        name: "Chole Bhature",
        category: "North Indian Dish",
        origin: "Punjab/Delhi",
        summary: "Chole Bhature is a beloved Punjabi dish combining spicy chickpea curry (chole) with deep-fried leavened bread (bhature). It's a popular breakfast/brunch option in North India, known for its rich, indulgent taste.",
        nutrition: {
            calories: 650,
            protein: 18,
            carbs: 85,
            fat: 28,
            saturatedFat: 8,
            sugar: 6,
            salt: 2.8,
            fiber: 10
        },
        perServing: "Per plate (2 bhature + chole)",
        good: [
            { title: "High Protein", desc: "Chickpeas provide 18g plant-based protein with complete amino acids" },
            { title: "Excellent Fiber", desc: "10g fiber from chickpeas aids digestion and blood sugar control" },
            { title: "Iron Rich", desc: "Chole is rich in iron, essential for vegetarians" },
            { title: "Satisfying", desc: "Protein + fiber combination keeps you full for hours" }
        ],
        bad: [
            { title: "Deep Fried Bhature", desc: "Each bhatura absorbs significant oil, contributing 15g+ fat" },
            { title: "Very High Calories", desc: "650 kcal per serving - a third of daily needs in one meal" },
            { title: "High Sodium", desc: "2.8g salt per serving - 56% of ICMR's daily 5g limit" },
            { title: "Heavy Meal", desc: "Can cause sluggishness and digestive discomfort" }
        ],
        warnings: [
            { title: "Sodium Overload", desc: "Combined with pickle and chutney, easily exceeds daily sodium limit" },
            { title: "Calorie Bomb", desc: "Adding lassi makes this a 900+ calorie meal" }
        ],
        alternatives: [
            { title: "Chole with Kulcha", desc: "Kulcha is baked, not deep-fried - saves 200+ calories" },
            { title: "Chole with Roti", desc: "Whole wheat roti instead of bhatura - minimal oil" },
            { title: "Chole Rice", desc: "Pair chole with brown rice for a balanced, lighter meal" },
            { title: "Chana Chaat", desc: "Cold chickpea salad - all protein, no fried bread" }
        ],
        tips: [
            "Order 1 bhatura instead of 2 (most of the nutrition comes from chole)",
            "Skip the fried onion and pickle to reduce sodium",
            "Share the portion with someone to control calories",
            "Choose restaurants that use fresh oil for frying"
        ]
    },

    "idli": {
        name: "Idli",
        category: "South Indian Breakfast",
        origin: "Karnataka/Tamil Nadu",
        summary: "Idli is a steamed rice and lentil cake, one of South India's healthiest breakfast options. Made from fermented batter, it's light, easily digestible, and probiotic-rich. Often served with sambar and chutneys.",
        nutrition: {
            calories: 40,
            protein: 2,
            carbs: 8,
            fat: 0.2,
            saturatedFat: 0,
            sugar: 0.5,
            salt: 0.3,
            fiber: 0.5
        },
        perServing: "Per idli (medium)",
        good: [
            { title: "Very Low Calorie", desc: "Only 40 kcal per idli - one of the lowest calorie Indian foods" },
            { title: "Fermented & Probiotic", desc: "Fermentation creates beneficial bacteria for gut health" },
            { title: "Fat Free", desc: "Steamed preparation means virtually zero fat" },
            { title: "Easy to Digest", desc: "Fermentation breaks down complex compounds, gentle on stomach" },
            { title: "Complete Protein", desc: "Rice + urad dal provides all essential amino acids" },
            { title: "ICMR Recommended", desc: "Fermented foods are specifically recommended in ICMR 2024 guidelines" }
        ],
        bad: [
            { title: "Low Protein Per Piece", desc: "Only 2g protein per idli - need multiple for adequate protein" },
            { title: "Low Fiber", desc: "White rice base means limited fiber content" },
            { title: "Needs Accompaniments", desc: "Plain idli is bland; chutneys/sambar essential but add sodium" }
        ],
        warnings: [
            { title: "Watch the Accompaniments", desc: "Coconut chutney and sambar are healthy, but restaurant versions may add excess oil/salt" }
        ],
        alternatives: [
            { title: "Ragi Idli", desc: "Made with finger millet - higher calcium and iron" },
            { title: "Oats Idli", desc: "Added fiber and slightly nutty flavor" },
            { title: "Rava Idli", desc: "Semolina based - quicker to make, similar nutrition" },
            { title: "Sprouts Idli", desc: "Add sprouted moong for extra protein and fiber" }
        ],
        tips: [
            "Eat 4-6 idlis for a complete breakfast with adequate protein",
            "Pair with egg curry or sambar for added protein",
            "Choose homemade coconut chutney over store-bought",
            "Add vegetables to sambar for a nutritionally complete meal"
        ]
    },

    "chai": {
        name: "Masala Chai",
        category: "Beverage",
        origin: "India",
        summary: "Masala Chai is India's beloved spiced tea, made by brewing black tea with milk, sugar, and aromatic spices like cardamom, ginger, cinnamon, and cloves. It's more than a beverage - it's a cultural ritual enjoyed multiple times daily.",
        nutrition: {
            calories: 90,
            protein: 3,
            carbs: 14,
            fat: 3,
            saturatedFat: 1.8,
            sugar: 12,
            salt: 0.1,
            fiber: 0
        },
        perServing: "Per cup (150ml with 2 tsp sugar)",
        good: [
            { title: "Antioxidant Rich", desc: "Black tea contains polyphenols with heart and brain benefits" },
            { title: "Spice Benefits", desc: "Ginger aids digestion, cardamom freshens breath, cinnamon may help blood sugar" },
            { title: "Calcium from Milk", desc: "Milk provides calcium and protein" },
            { title: "Mental Alertness", desc: "Caffeine provides gentle energy boost without coffee jitters" },
            { title: "Cultural Connection", desc: "Social ritual that promotes relationships and breaks" }
        ],
        bad: [
            { title: "High Sugar", desc: "Traditional chai contains 2-3 teaspoons sugar (10-15g) per cup" },
            { title: "Multiple Cups Daily", desc: "3-4 cups = 40+ grams sugar - exceeding ICMR limits" },
            { title: "Added Calories", desc: "Full-fat milk adds saturated fat and calories" }
        ],
        warnings: [
            { title: "Hidden Sugar Bomb", desc: "4 cups of chai with 2 tsp sugar each = 48g sugar = 192% of ICMR daily limit" },
            { title: "Caffeine Dependency", desc: "Regular consumption can lead to caffeine dependency and withdrawal headaches" }
        ],
        alternatives: [
            { title: "Green Tea", desc: "Zero calories, higher antioxidants, less caffeine" },
            { title: "Black Coffee (No Sugar)", desc: "Zero calories with caffeine boost" },
            { title: "Kahwa", desc: "Kashmiri green tea with spices - no milk, optional honey" },
            { title: "Masala Chai (Sugar-Free)", desc: "Same taste with stevia or no sweetener - acquired taste" }
        ],
        tips: [
            "Gradually reduce sugar from 2 tsp to 1 tsp to half tsp",
            "Use low-fat or toned milk to reduce saturated fat",
            "Limit to 2 cups per day maximum",
            "Try jaggery instead of white sugar for added minerals",
            "Avoid chai on empty stomach - can cause acidity"
        ]
    },

    "pav bhaji": {
        name: "Pav Bhaji",
        category: "Street Food",
        origin: "Mumbai",
        summary: "Pav Bhaji is a Mumbai street food icon - a spiced mashed vegetable curry served with butter-toasted bread rolls (pav). Invented as a fast, filling meal for textile mill workers, it's now a beloved dish across India.",
        nutrition: {
            calories: 550,
            protein: 12,
            carbs: 68,
            fat: 26,
            saturatedFat: 15,
            sugar: 8,
            salt: 2.5,
            fiber: 7
        },
        perServing: "Per plate (2 pav + bhaji)",
        good: [
            { title: "Vegetable Rich", desc: "Bhaji contains potatoes, tomatoes, peas, capsicum, and cauliflower" },
            { title: "Good Fiber", desc: "7g fiber from vegetables aids digestion" },
            { title: "Vitamin C", desc: "Tomatoes and capsicum provide vitamin C and antioxidants" },
            { title: "Satisfying Meal", desc: "Balanced carbs and fat keep you full for hours" }
        ],
        bad: [
            { title: "Excessive Butter", desc: "Street vendors use up to 4-5 tablespoons butter per serving" },
            { title: "High Saturated Fat", desc: "15g saturated fat - near daily limit from ICMR" },
            { title: "White Bread (Pav)", desc: "Refined flour rolls with minimal nutrients" },
            { title: "High Sodium", desc: "2.5g salt per serving - half of daily ICMR limit" }
        ],
        warnings: [
            { title: "Butter Overload", desc: "Restaurant versions may contain 100+ grams of butter per serving" },
            { title: "Calorie Dense", desc: "550 kcal before adding extra butter - often 700+ at stalls" }
        ],
        alternatives: [
            { title: "Pav Bhaji (Minimal Butter)", desc: "Request 'kam butter' - save 200+ calories" },
            { title: "Bhaji with Multigrain Pav", desc: "Whole wheat or multigrain bread for fiber" },
            { title: "Bhaji with Roti", desc: "Skip the pav, use whole wheat roti" },
            { title: "Homemade Version", desc: "Control butter quantity (1 tsp vs 5 tbsp)" }
        ],
        tips: [
            "Always request 'kam butter' (less butter) at street stalls",
            "Eat only 1 pav instead of 2 to reduce refined carbs",
            "Add extra coriander and lemon to enhance flavor without calories",
            "Make at home with minimal oil and butter for a healthier version"
        ]
    },

    "thums up": {
        name: "Thums Up",
        category: "Carbonated Beverage",
        origin: "India (Coca-Cola)",
        summary: "Thums Up is India's original cola drink, known for its strong, slightly spicy taste. Now owned by Coca-Cola, it remains India's bestselling soft drink. Despite being a beloved brand, it's essentially sugar water with no nutritional value.",
        nutrition: {
            calories: 140,
            protein: 0,
            carbs: 35,
            fat: 0,
            saturatedFat: 0,
            sugar: 35,
            salt: 0.05,
            fiber: 0
        },
        perServing: "Per 330ml can",
        good: [
            { title: "Hydration", desc: "Contains water, though not the best hydration source" },
            { title: "Quick Energy", desc: "Sugar provides rapid energy in emergency situations" }
        ],
        bad: [
            { title: "Extremely High Sugar", desc: "35g sugar per can - exceeds ICMR's 25g daily limit!" },
            { title: "Zero Nutrition", desc: "Provides calories but no vitamins, minerals, protein, or fiber" },
            { title: "Phosphoric Acid", desc: "Contains phosphoric acid which may affect calcium absorption" },
            { title: "Caffeine Content", desc: "Contains caffeine, can disturb sleep if consumed late" },
            { title: "Addictive Properties", desc: "Sugar-caffeine combination triggers reward centers" }
        ],
        warnings: [
            { title: "🚨 Sugar Bomb", desc: "One can = 140% of ICMR's daily added sugar limit (25g)!" },
            { title: "Empty Calories", desc: "140 kcal with zero nutritional benefit - pure weight gain" },
            { title: "Dental Erosion", desc: "Acidic pH (2.5-3) erodes tooth enamel over time" },
            { title: "Obesity Link", desc: "ICMR specifically warns against sugary beverages in 2024 guidelines" }
        ],
        alternatives: [
            { title: "Nimbu Pani", desc: "Fresh lemon water with minimal sugar - vitamin C and electrolytes" },
            { title: "Coconut Water", desc: "Natural, mineral-rich hydration with ~6g natural sugars" },
            { title: "Buttermilk (Chaas)", desc: "Probiotic, cooling, zero added sugar" },
            { title: "Jaljeera", desc: "Cumin-mint drink - digestive and refreshing" },
            { title: "Sparkling Water", desc: "Zero calories, satisfies carbonation craving" }
        ],
        tips: [
            "If craving cola, share a small bottle with someone",
            "Switch to nimbu pani (lime water) with minimal sugar",
            "Keep cola for very occasional indulgence, not daily habit",
            "Drink water immediately after cola to rinse teeth"
        ]
    }
};

// Search function
function findFood(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    
    // Direct match
    if (INDIAN_FOOD_DATABASE[term]) {
        return INDIAN_FOOD_DATABASE[term];
    }
    
    // Partial match
    for (let key in INDIAN_FOOD_DATABASE) {
        if (key.includes(term) || INDIAN_FOOD_DATABASE[key].name.toLowerCase().includes(term)) {
            return INDIAN_FOOD_DATABASE[key];
        }
    }
    
    // Keyword matching
    const keywords = term.split(/\s+/);
    for (let key in INDIAN_FOOD_DATABASE) {
        const food = INDIAN_FOOD_DATABASE[key];
        for (let keyword of keywords) {
            if (key.includes(keyword) || 
                food.name.toLowerCase().includes(keyword) ||
                food.category.toLowerCase().includes(keyword)) {
                return food;
            }
        }
    }
    
    return null;
}

// Export for use in app.js
window.ICMR_GUIDELINES = ICMR_GUIDELINES;
window.INDIAN_FOOD_DATABASE = INDIAN_FOOD_DATABASE;
window.findFood = findFood;
