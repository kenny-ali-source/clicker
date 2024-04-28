var num = 0;
var cookies = 0;
var upgradeLevel = '';

window.onload = function () {
    var name = prompt("What is your name?");
    var space = document.getElementById("space");
    space.innerHTML = name;
}

function cookieClick() {
    num += 1;
    cookies += 1;


    if (upgradeLevel === "Granny Level") {
        cookies += 1;
    }

    if (upgradeLevel === "Factory Level") {
        cookies += 9;
    }

    if (upgradeLevel === "Plant Level") {
        cookies += 29;
    }

    if (upgradeLevel === "Super-Plant Level") {
        cookies += 99;
    }


    var numbers = document.getElementById("numbers");
    numbers.innerHTML = cookies;


    if (cookies >= 30) {
        document.getElementById('shop').rows[1].cells[3].innerHTML = '<button onclick="buyUpgrade(\'granny\', 30)">Buy</button>';
    }
    if (cookies >= 150) {
        document.getElementById('shop').rows[2].cells[3].innerHTML = '<button onclick="buyUpgrade(\'factory\', 150)">Buy</button>';
    }
    if (cookies >= 500) {
        document.getElementById('shop').rows[3].cells[3].innerHTML = '<button onclick="buyUpgrade(\'plant\', 500)">Buy</button>';
    }
    if (cookies >= 1000) {
        document.getElementById('shop').rows[4].cells[3].innerHTML = '<button onclick="buyUpgrade(\'superPlant\', 1000)">Buy</button>';
    }
}

function buyUpgrade(upgrade, cost) {
    if (cookies >= cost) {
        cookies -= cost;
        var numbers = document.getElementById("numbers");
        numbers.innerHTML = cookies;

        switch (upgrade) {
            case 'granny':
                num *= 2;
                upgradeLevel = "Granny Level";
                break;
            case 'factory':
                num *= 10;
                upgradeLevel = "Factory Level";
                break;
            case 'plant':
                num *= 30;
                upgradeLevel = "Plant Level";
                break;
            case 'superPlant':
                num *= 100;
                upgradeLevel = "Super-Plant Level";
                break;
            default:
                break;
        }

        var upgradeDisplay = document.getElementById("upgradeLevel");
        upgradeDisplay.innerHTML = upgradeLevel;


        document.getElementById('shop').rows[upgradeIndex(upgrade)].cells[3].innerHTML = 'Bought';
    } else {
        alert("Not enough cookies!");
    }
}

function upgradeIndex(upgrade) {
    switch (upgrade) {
        case 'granny':
            return 1;
        case 'factory':
            return 2;
        case 'plant':
            return 3;
        case 'superPlant':
            return 4;
        default:
            return -1;
    }
}



