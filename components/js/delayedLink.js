// Function to handle the delayed navigation
function delayNavigation(link, delay = 500) {
    // Prevent the default navigation immediately
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent immediate navigation

        const href = link.getAttribute('href'); // Get the link's href attribute

        // Optionally play a sound or add any other effect here

        // Delay the navigation by the specified time (in milliseconds)
        setTimeout(() => {
            window.location.href = href; // Navigate to the URL after the delay
        }, delay);
    });
}

// Apply the function to all links with the class 'delayed-link'
document.querySelectorAll('.delayed-link').forEach(link => {
    delayNavigation(link); // You can pass a custom delay if needed (e.g., delayNavigation(link, 1000))
});
