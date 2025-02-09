function animateCards() {
    const container = document.querySelector(".card-container");
    const cards = document.querySelectorAll(".card");

    if (cards.length === 0) return;

    let topCard = cards[0]; // Get the first card
    let text = topCard.querySelector("span"); // Get the text inside

    // Fade out the text before moving the card
    http://text.style.opacity = "0";

    setTimeout(() => {
        // Move the top card upwards and fade out
        //topCard.style.transform = "translateY(-120%)";
        //topCard.style.opacity = "0";
    }, 300); // Give text some time to fade out first

    setTimeout(() => {
        // Reset position & move the card to the bottom
        //topCard.style.transition = "none";
        //topCard.style.transform = "translateY(0)";
        //topCard.style.opacity = "1";

        container.appendChild(topCard); // Move first card to end

        setTimeout(() => {
            // Restore transition and fade text back in
            //topCard.style.transition = "transform 0.8s ease-in-out, opacity 0.8s ease-in-out";
            //text.style.opacity = "1";
        }, 50);
    }, 1000); // Wait for card to move before resetting
}

// Run animation every 3 seconds
setInterval(animateCards, 3000);