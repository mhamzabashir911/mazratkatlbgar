// Function to handle the redirection when the "Yes" button is clicked
function nextPage() {
    // Redirect to the 'yes.html' page (Change the URL if needed)
    window.location.href = "yes.html";
}

// Function to move the "No" button around the screen
function moveButton() {
    // Get the "No" button element
    const noButton = document.getElementById('noButton');
    
    // Calculate random x and y positions within the browser's window dimensions
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth) - 85;  // Adjust the -85 to center the button
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight) - 48;  // Adjust the -48 to center the button

    // Apply the random positions to the "No" button
    noButton.style.position = 'absolute';  // Make sure it can move
    noButton.style.left = `${x}px`;       // Move the button horizontally
    noButton.style.top = `${y}px`;        // Move the button vertically
}
