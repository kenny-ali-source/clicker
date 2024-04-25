console.log("Main.js loaded");

let clicks = 0;
let isZoomed = false;
let points = 0;

function add() {
    clicks++;
    document.getElementById("clickcount").innerHTML = "Cookies: " + clicks;

    // Create and animate number element
    const number = document.createElement("div");
    number.classList.add("number");
    number.textContent = "+1";
    document.body.appendChild(number);

    setTimeout(() => {
        number.remove();
    }, 1500);

    // Increase points
    points++;
    // Show points popup
    showPointsPopup();

    // Toggle the zoom class
    isZoomed = !isZoomed;
    const cookieImg = document.getElementById("cookieImg");
    if (isZoomed) {
        // Add zoom class and remove it after a short delay
        cookieImg.classList.add("zoom");
        setTimeout(() => {
            cookieImg.classList.remove("zoom");
        }, 300); // Adjust duration as needed
    } else {
        // Remove zoom class
        cookieImg.classList.remove("zoom");
        // Trigger animation on unzoom
        cookieImg.classList.add("shake");
        // Remove animation after some time
        setTimeout(() => {
            cookieImg.classList.remove("shake");
        }, 1000); // Adjust duration as needed
    }
}



function showPointsPopup() {
    const cookieImg = document.getElementById("cookieImg");
    const pointPopup = document.createElement("div");
    pointPopup.classList.add("popup");
    pointPopup.textContent = "+1"; // Display points earned

    // Position the popup relative to the image
    const imgRect = cookieImg.getBoundingClientRect();
    pointPopup.style.left = imgRect.left + (imgRect.width / 2) + "px";
    pointPopup.style.top = imgRect.top - 20 + "px";

    document.body.appendChild(pointPopup);

    // Hide the popup after some time
    setTimeout(() => {
        pointPopup.remove();
    }, 1000); // Adjust duration as needed
}

