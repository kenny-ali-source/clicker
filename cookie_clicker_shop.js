// Déclaration des variables
let cookies = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;
let clickMultiplierCost = 10;
let autoClickerCost = 50;
let autoClickers = 0;

// Fonction pour cliquer sur le cookie
function clickCookie() {
    cookies += cookiesPerClick;
    updateCookieCount();
}

// Fonction pour mettre à jour le nombre de cookies affiché
function updateCookieCount() {
    document.getElementById("cookieCount").innerHTML = cookies.toFixed(0);
}

// Fonction pour acheter un multiplicateur de clics
function buyClickMultiplier() {
    if (cookies >= clickMultiplierCost) {
        cookies -= clickMultiplierCost;
        cookiesPerClick *= 2;
        clickMultiplierCost *= 2;
        updateCookieCount();
        document.getElementById("clickMultiplierCost").innerHTML = clickMultiplierCost.toFixed(0);
    }
}

// Fonction pour acheter un auto-clicker
function buyAutoClicker() {
    if (cookies >= autoClickerCost) {
        cookies -= autoClickerCost;
        autoClickers++;
        autoClickerCost *= 2;
        updateCookieCount();
        document.getElementById("autoClickerCost").innerHTML = autoClickerCost.toFixed(0);
        startAutoClicker();
    }
}

// Fonction pour démarrer les auto-clickers
function startAutoClicker() {
    setInterval(function() {
        cookies += autoClickers;
        updateCookieCount();
    }, 1000);
}

// Initialisation de la boutique
function init() {
    updateCookieCount();
    document.getElementById("clickMultiplierCost").innerHTML = clickMultiplierCost.toFixed(0);
    document.getElementById("autoClickerCost").innerHTML = autoClickerCost.toFixed(0);
}

// Appel de la fonction d'initialisation au chargement de la page
window.onload = init;
