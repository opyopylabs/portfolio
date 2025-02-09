function animateCards() {
    const container = document.querySelector(".card-container");
    const cards = document.querySelectorAll(".card");

    if (cards.length === 0) return;

    let topCard = cards[0]; // Get the first card
    let text = topCard.querySelector("span"); // Get the text inside

    // Move the card up and fade out with its text
    text.style.opacity = "0"; // Fade out text
    topCard.style.transform = "translateY(-120%)";
    topCard.style.opacity = "0";

    setTimeout(() => {
        // Instantly reset the card's position & move to the bottom
        topCard.style.transition = "none";
        text.style.transition = "none";

        topCard.style.transform = "translateY(0)";
        topCard.style.opacity = "1";
        text.style.opacity = "1"; // Fade text back in

        container.appendChild(topCard); // Move first card to end

        // Restore transition after reset
        setTimeout(() => {
            topCard.style.transition = "transform 0.8s ease-in-out, opacity 0.5s ease-in-out";
            text.style.transition = "opacity 0.5s ease-in-out";
        }, 50);
    }, 800); // Wait for animation to complete before resetting
}

// Run animation every 3 seconds
setInterval(animateCards, 3000);