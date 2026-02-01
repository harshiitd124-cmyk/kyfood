/* ========================================
   KnowYourFood - Main Application Logic
   ======================================== */

// DOM Elements
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const removeBtn = document.getElementById('removeBtn');
const foodSearch = document.getElementById('foodSearch');
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
    animateFloatingIcons();
});

// Setup Event Listeners
function setupEventListeners() {
    // Upload area click
    uploadArea.addEventListener('click', () => fileInput.click());

    // File input change
    fileInput.addEventListener('change', handleFileSelect);

    // Drag and drop
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);

    // Remove image
    removeBtn.addEventListener('click', removeImage);

    // Analyze button
    analyzeBtn.addEventListener('click', handleAnalyze);

    // Search input enter key
    foodSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAnalyze();
    });

    // Sample chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const food = chip.dataset.food;
            foodSearch.value = food;
            handleAnalyze();
        });
    });

    // Back button
    backBtn.addEventListener('click', showUploadSection);

    // Try again button (from not-food section)
    tryAgainBtn.addEventListener('click', showUploadSection);

    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });
}

// File Handling
function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) processFile(file);
}

function handleDragOver(e) {
    e.preventDefault();
    uploadArea.classList.add('dragover');
}

function handleDragLeave(e) {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        processFile(file);
    }
}

function processFile(file) {
    uploadedFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
        previewImg.src = e.target.result;
        uploadArea.hidden = true;
        imagePreview.hidden = false;
    };
    reader.readAsDataURL(file);
}

function removeImage() {
    uploadedFile = null;
    fileInput.value = '';
    uploadArea.hidden = false;
    imagePreview.hidden = true;
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
    const searchTerm = foodSearch.value.trim();

    if (!searchTerm && !uploadedFile) {
        shakeElement(foodSearch.parentElement);
        shakeElement(uploadArea);
        return;
    }

    showLoadingSection();

    // Simulate analysis time
    await simulateLoading();

    // Check if it's a non-food item first
    if (isNotFood(searchTerm)) {
        displayNotFoodError(searchTerm);
        return;
    }

    // Find food in database
    const foodData = findFood(searchTerm || 'butter chicken');

    if (foodData) {
        displayResults(foodData);
    } else {
        displayNotFound(searchTerm);
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
    // Set food name
    document.getElementById('foodName').textContent = food.name;

    // Set summary
    document.getElementById('foodSummary').textContent = food.summary;

    // Set nutrition quick view
    const nutritionQuick = document.getElementById('nutritionQuick');
    nutritionQuick.innerHTML = generateNutritionQuick(food.nutrition);

    // Populate tabs
    populateList('.good-list', food.good, '✅');
    populateList('.bad-list', food.bad, '⚠️');
    populateList('.warnings-list', food.warnings, '🚨');
    populateList('.alternatives-list', food.alternatives, '🥗');

    // Populate tips
    const tipsList = document.getElementById('consumptionTips');
    tipsList.innerHTML = food.tips.map(tip => `<li>${tip}</li>`).join('');

    // Reset to first tab
    switchTab('good');

    showResultsSection();
}

function generateNutritionQuick(nutrition) {
    const items = [
        { label: 'Calories', value: nutrition.calories, unit: 'kcal', level: 'neutral' },
        { label: 'Protein', value: nutrition.protein, unit: 'g', level: getProteinLevel(nutrition.protein) },
        { label: 'Sugar', value: nutrition.sugar, unit: 'g', level: getSugarLevel(nutrition.sugar) },
        { label: 'Fat', value: nutrition.fat, unit: 'g', level: getFatLevel(nutrition.fat) }
    ];

    return items.map(item => `
        <div class="nutrition-item ${item.level}">
            <span class="label">${item.label}</span>
            <span class="value">${item.value}${item.unit}</span>
        </div>
    `).join('');
}

function getProteinLevel(protein) {
    if (protein >= 15) return 'low'; // Green for high protein
    if (protein >= 8) return 'medium';
    return 'high'; // Red for low protein
}

function getSugarLevel(sugar) {
    if (sugar > 20) return 'high';
    if (sugar > 10) return 'medium';
    return 'low';
}

function getFatLevel(fat) {
    if (fat > 25) return 'high';
    if (fat > 15) return 'medium';
    return 'low';
}

function populateList(selector, items, icon) {
    const list = document.querySelector(selector);
    if (!items || items.length === 0) {
        list.innerHTML = `<li><span class="icon">ℹ️</span><span class="text">No items to display</span></li>`;
        return;
    }

    list.innerHTML = items.map(item => `
        <li>
            <span class="icon">${icon}</span>
            <span class="text">
                <strong>${item.title}</strong>
                <span>${item.desc}</span>
            </span>
        </li>
    `).join('');
}

function displayNotFound(searchTerm) {
    // Create a generic response for unknown foods
    const genericFood = {
        name: searchTerm || 'Unknown Food',
        summary: `We don't have specific data for "${searchTerm}" in our database yet. However, here are general ICMR guidelines to keep in mind when consuming any food.`,
        nutrition: {
            calories: '?',
            protein: '?',
            sugar: '?',
            fat: '?'
        },
        good: [
            { title: 'General Advice', desc: 'Look for foods high in protein, fiber, and essential vitamins' },
            { title: 'Whole Foods', desc: 'Prefer whole grains, fresh vegetables, and unprocessed items' }
        ],
        bad: [
            { title: 'Avoid Excess Sugar', desc: 'ICMR recommends less than 25g added sugar per day' },
            { title: 'Limit Salt', desc: 'Keep salt intake below 5g per day' }
        ],
        warnings: [
            { title: 'Check Labels', desc: 'Always read nutritional labels on packaged foods' },
            { title: 'Portion Control', desc: 'Be mindful of serving sizes, especially for calorie-dense foods' }
        ],
        alternatives: [
            { title: 'Traditional Options', desc: 'Consider traditional Indian foods like dals, roti, and fresh vegetables' },
            { title: 'Home Cooking', desc: 'Homemade meals let you control oil, salt, and sugar' }
        ],
        tips: [
            'Try our sample foods to see detailed analysis',
            'Upload a clear photo of the food or nutrition label',
            'Type the exact food name for better results'
        ]
    };

    displayResults(genericFood);
}

// Tab Switching
function switchTab(tabId) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabId);
    });

    // Update tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === tabId);
    });
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
    foodSearch.value = '';
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

    // Scroll to top of results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function showNotFoodSection() {
    uploadSection.hidden = true;
    loadingSection.hidden = true;
    resultsSection.hidden = true;
    notFoodSection.hidden = false;

    // Scroll to top
    notFoodSection.scrollIntoView({ behavior: 'smooth' });
}

// Animations
function shakeElement(element) {
    element.style.animation = 'shake 0.5s';
    setTimeout(() => element.style.animation = '', 500);
}

function animateFloatingIcons() {
    const icons = document.querySelectorAll('.float-icon');
    icons.forEach((icon, index) => {
        icon.style.animationDuration = `${15 + index * 3}s`;
    });
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
