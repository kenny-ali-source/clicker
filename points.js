console.log("Main.js loaded")

let clicks = 0;
let isZoomed = false;

function clickAction() {
    const cookieImg = document.getElementById("cookieImg");

    // Increment click count
    clicks++;
    document.getElementById("clickcount").innerHTML = "Cookies: " + clicks;

    // Toggle zoom
    if (!isZoomed) {
        // Zoom in
        cookieImg.classList.add("zoom");
    } else {
        // Zoom out
        cookieImg.classList.remove("zoom");
    }
    
    // Update zoom state
    isZoomed = !isZoomed;

    // Show points popup
    showPointsPopup();
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
