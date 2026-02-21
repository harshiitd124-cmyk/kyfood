/* ========================================
   KnowYourFood - Main Application Logic
   ======================================== */

// DOM Elements
// DOM Elements
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const fileName = document.getElementById('fileName');
const removeBtn = document.getElementById('removeBtn');
const analyzeBtn = document.getElementById('analyzeBtn');
const uploadSection = document.getElementById('uploadSection');
const loadingSection = document.getElementById('loadingSection');
const resultsSection = document.getElementById('resultsSection');
const notFoodSection = document.getElementById('notFoodSection');
const backBtn = document.getElementById('backBtn');
const tryAgainBtn = document.getElementById('tryAgainBtn');

// State
let uploadedFile = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Click to upload
    uploadArea.addEventListener('click', () => fileInput.click());

    // File input change
    fileInput.addEventListener('change', handleFileSelect);

    // Drag and drop for the main upload area
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            handleFileSelect({ target: fileInput });
        }
    });

    // Remove image
    removeBtn.addEventListener('click', removeImage);

    // Analyze button
    analyzeBtn.addEventListener('click', handleAnalyze);

    // Remove search input and old tabs handlers since they are removed from HTML.
    // Sample chips are also removed.

    // Back button
    backBtn.addEventListener('click', showUploadSection);

    // Try again button (from not-food section)
    tryAgainBtn.addEventListener('click', showUploadSection);
}

// File Handling
// File Handling (Simplified)
function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) processFile(file);
}

// Removed drag handlers for now as UI changed to omnibox

function processFile(file) {
    uploadedFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
        previewImg.src = e.target.result;
        imagePreview.hidden = false;

        // Enable analyze button
        analyzeBtn.disabled = false;
        analyzeBtn.focus();
    };
    reader.readAsDataURL(file);
}

function removeImage() {
    uploadedFile = null;
    fileInput.value = '';
    imagePreview.hidden = true;
    previewImg.src = '';
    analyzeBtn.disabled = true;
}

// Quirky "Not Food" Messages
const NOT_FOOD_MESSAGES = [
    { icon: '🤔', title: "Hmm, that's not food!", message: "Unless you're a goat, I don't think you should be eating that!" },
    { icon: '😅', title: "Nice try!", message: "Last I checked, that's not on any menu I know of!" },
    { icon: '🙃', title: "Interesting choice...", message: "My dadi would be very confused if I served this at dinner!" },
    { icon: '😂', title: "Hold up!", message: "That's about as edible as my coding skills are visible!" },
    { icon: '🧐', title: "Let me check my notes...", message: "Nope, definitely not in the 'things you can eat' category!" },
    { icon: '😜', title: "Oops!", message: "I'm a food expert, not a... whatever-that-is expert!" },
    { icon: '🤭', title: "Arey wah!", message: "Bohot creative ho, but that's still not food!" },
    { icon: '😎', title: "Pro tip:", message: "If you can't chew it, don't put it in your mouth!" },
    { icon: '🙈', title: "I'm confused!", message: "Is this some new fusion cuisine I'm not aware of?" },
    { icon: '🤪', title: "Wait what?", message: "My algorithm is having an existential crisis looking at this!" }
];

// Non-food keywords to detect
const NON_FOOD_KEYWORDS = [
    'laptop', 'computer', 'phone', 'mobile', 'car', 'bike', 'motorcycle', 'vehicle',
    'table', 'chair', 'furniture', 'sofa', 'bed', 'desk', 'tv', 'television',
    'shoe', 'shoes', 'clothes', 'shirt', 'pants', 'dress', 'watch', 'bag',
    'book', 'pen', 'pencil', 'notebook', 'paper', 'keyboard', 'mouse',
    'tree', 'plant', 'flower', 'grass', 'leaf', 'stone', 'rock', 'sand',
    'dog', 'cat', 'bird', 'animal', 'pet', 'fish', 'lion', 'tiger', 'elephant',
    'house', 'building', 'road', 'street', 'bridge', 'tower', 'wall',
    'money', 'coin', 'card', 'wallet', 'keys', 'remote', 'cable', 'wire',
    'person', 'people', 'man', 'woman', 'boy', 'girl', 'face', 'hand', 'selfie',
    'sky', 'cloud', 'sun', 'moon', 'star', 'rain', 'mountain', 'river', 'ocean',
    'ball', 'game', 'toy', 'doll', 'robot', 'machine', 'tool', 'hammer',
    'bottle', 'glass', 'cup', 'plate', 'spoon', 'fork', 'knife',
    'medicine', 'pill', 'tablet', 'syringe', 'injection',
    'iphone', 'android', 'samsung', 'macbook', 'windows', 'mouse pad'
];

// Check if search term is a non-food item
function isNotFood(searchTerm) {
    if (!searchTerm) return false;
    const term = searchTerm.toLowerCase();
    return NON_FOOD_KEYWORDS.some(keyword => term.includes(keyword));
}

// Get random quirky message
function getRandomNotFoodMessage() {
    return NOT_FOOD_MESSAGES[Math.floor(Math.random() * NOT_FOOD_MESSAGES.length)];
}

// Analysis
async function handleAnalyze() {
    if (!uploadedFile) {
        shakeElement(document.querySelector('.upload-card'));
        return;
    }

    showLoadingSection();

    // Start loading animation and API request concurrently
    const loadingPromise = simulateLoading();
    let foodData = null;

    try {
        let base64Image = null;
        if (uploadedFile) {
            // Send the full data URI as required by chat completions API
            base64Image = previewImg.src;
        }

        const prompt = `Analyze the given food item based on ICMR-NIN 2024 Recommendations. 
You are an expert Indian nutritionist. Identify the food in the uploaded image. Check if it is a valid food item or not.
If the image is NOT food, return the following exactly: {"isFood": false}
Otherwise, return the output STRICTLY as a JSON object with the following structure:
{
    "isFood": true,
    "name": "Detected Food Name (e.g. Samosa, Dal Makhani)",
    "portion": "Estimated portion size from image (e.g. 150g, 2 pieces)",
    "summary": "Brief description of the food and its ingredients...",
    "nutrition": {
        "calories": 300, 
        "protein": 12, 
        "carbs": 40, 
        "fat": 10, 
        "fiber": 4, 
        "vitamins": "Vitamin A, Calcium"
    },
    "healthStatus": "GOOD" | "WARNING" | "BAD",
    "healthReason": "Why did it get this classification (based on ICMR)...",
    "specificWarnings": [ "High saturated fat", "High sodium content", "Low fiber" ],
    "recommendations": [ "Recommendation 1", "Recommendation 2" ]
}`;

        const messages = [];
        if (base64Image) {
            messages.push({
                role: "user",
                content: [
                    { type: "text", text: prompt },
                    { type: "image_url", image_url: { url: base64Image } }
                ]
            });
        } else {
            messages.push({
                role: "user",
                content: prompt
            });
        }

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer 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",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "google/gemma-3-27b-it:free",
                messages: messages
            })
        });

        if (!response.ok) {
            throw new Error(`API returned status ${response.status}`);
        }

        const data = await response.json();
        let content = data.choices[0].message.content;

        // Remove markdown formatting if present
        content = content.replace(/```json\n?/g, '').replace(/```/g, '').trim();
        foodData = JSON.parse(content);

    } catch (e) {
        console.error("API Error:", e);
        // If API fails completely, fallback to generic error.
        await loadingPromise;
        displayNotFoodError("Unknown Error");
        return;
    }

    await loadingPromise;

    if (foodData && foodData.isFood === false) {
        displayNotFoodError("Image");
    } else if (foodData) {
        displayResults(foodData);
    } else {
        displayNotFoodError("Unknown");
    }
}

function simulateLoading() {
    const loadingTexts = [
        'Analyzing food composition...',
        'Checking ICMR guidelines...',
        'Calculating nutrition values...',
        'Preparing recommendations...'
    ];

    let index = 0;
    const loadingText = document.querySelector('.loading-text');

    return new Promise(resolve => {
        const interval = setInterval(() => {
            loadingText.textContent = loadingTexts[index];
            index++;
            if (index >= loadingTexts.length) {
                clearInterval(interval);
                setTimeout(resolve, 500);
            }
        }, 500);
    });
}

// Display Results
function displayResults(food) {
    try {
        // Set food name and badge
        document.getElementById('foodName').textContent = food?.name || 'Unknown Food';

        const badge = document.getElementById('healthBadge');
        badge.textContent = `STATUS: ${food?.healthStatus || 'UNKNOWN'}`;
        badge.className = 'health-badge'; // reset class

        if (food?.healthStatus === 'GOOD') {
            badge.classList.add('good');
            badge.textContent = '🟢 Good';
        } else if (food?.healthStatus === 'WARNING') {
            badge.classList.add('warning');
            badge.textContent = '🟡 Warning';
        } else {
            badge.classList.add('bad');
            badge.textContent = '🔴 Bad';
        }

        // Set summary
        document.getElementById('foodSummary').innerHTML = `<strong>Portion Size:</strong> ${food?.portion || 'Unknown'}<br><br>${food?.summary || 'No summary provided.'}`;

        // Set nutrition grid
        const nutritionGrid = document.getElementById('nutritionGrid');
        nutritionGrid.innerHTML = generateNutritionGrid(food?.nutrition || {});

        // Set health reasons
        document.getElementById('healthReason').textContent = food?.healthReason || 'No specific reasons provided.';

        // Set warnings list
        const warnList = document.getElementById('warningsList');
        if (food?.specificWarnings && Array.isArray(food.specificWarnings) && food.specificWarnings.length > 0) {
            document.getElementById('warningsSection').style.display = 'block';
            warnList.innerHTML = food.specificWarnings.map(warn => `
                <li>
                    <span class="icon">⚠️</span>
                    <span class="text">${warn}</span>
                </li>
            `).join('');
        } else {
            document.getElementById('warningsSection').style.display = 'none';
        }

        // Set recommendations list
        const recList = document.getElementById('recommendationList');
        if (food?.recommendations && Array.isArray(food.recommendations) && food.recommendations.length > 0) {
            recList.innerHTML = food.recommendations.map(rec => `
                <li>
                    <span class="icon">✔</span>
                    <span class="text">${rec}</span>
                </li>
            `).join('');
        } else {
            recList.innerHTML = `<li><span class="text">No specific recommendations provided.</span></li>`;
        }

        showResultsSection();
    } catch (e) {
        console.error("Display rendering error:", e);
        displayNotFoodError("Rendering Error");
    }
}

function generateNutritionGrid(nutrition = {}) {
    const items = [
        { label: 'Calories', value: nutrition?.calories || 0, unit: 'kcal' },
        { label: 'Protein', value: nutrition?.protein || 0, unit: 'g' },
        { label: 'Carbs', value: nutrition?.carbs || 0, unit: 'g' },
        { label: 'Fat', value: nutrition?.fat || 0, unit: 'g' },
        { label: 'Fiber', value: nutrition?.fiber || 0, unit: 'g' },
        { label: 'Vitamins', value: nutrition?.vitamins || 'None marked', unit: '' }
    ];

    return items.map(item => `
        <div class="nutrition-item">
            <span class="label">${item.label}</span>
            <span class="value">${item.value}${item.unit}</span>
        </div>
    `).join('');
}

// Display Not Food Error
function displayNotFoodError(searchTerm) {
    const message = getRandomNotFoodMessage();

    document.getElementById('notFoodIcon').textContent = message.icon;
    document.getElementById('notFoodTitle').textContent = message.title;
    document.getElementById('notFoodMessage').textContent = message.message;

    // Re-trigger the shake animation
    const iconEl = document.getElementById('notFoodIcon');
    iconEl.style.animation = 'none';
    iconEl.offsetHeight; // Trigger reflow
    iconEl.style.animation = 'headShake 1s ease-in-out';

    showNotFoodSection();
}

// Section Navigation
function showUploadSection() {
    uploadSection.hidden = false;
    loadingSection.hidden = true;
    resultsSection.hidden = true;
    notFoodSection.hidden = true;
    removeImage();
}

function showLoadingSection() {
    uploadSection.hidden = true;
    loadingSection.hidden = false;
    resultsSection.hidden = true;
    notFoodSection.hidden = true;
}

function showResultsSection() {
    uploadSection.hidden = true;
    loadingSection.hidden = true;
    resultsSection.hidden = false;
    notFoodSection.hidden = true;
}

function showNotFoodSection() {
    uploadSection.hidden = true;
    loadingSection.hidden = true;
    resultsSection.hidden = true;
    notFoodSection.hidden = false;
}

// Animations
function shakeElement(element) {
    element.style.animation = 'shake 0.5s';
    setTimeout(() => element.style.animation = '', 500);
}

// Add shake animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c🍽️ KnowYourFood', 'font-size: 24px; font-weight: bold; color: #FF6B35;');
console.log('%cIndian Food Nutrition Analyzer powered by ICMR Guidelines', 'font-size: 12px; color: #888;');
