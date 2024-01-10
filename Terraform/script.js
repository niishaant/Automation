document.addEventListener('DOMContentLoaded', function () {
    // Function to create and display a welcome message
    function displayWelcomeMessage() {
        console.log('Welcome to My DevOps Engineer Resume on Cloud! Feel free to connect.');

        // Create a welcome message element
        const welcomeMessage = document.createElement('div');
        // welcomeMessage.className = 'welcome-message';
        // welcomeMessage.innerHTML = '<h2>Welcome to My DevOps Engineer Resume on Cloud!</h2>' +
        //                             '<p>Explore my skills, projects, and certifications below. Feel free to connect with me!</p>';

        // Append the welcome message to the body
        document.body.appendChild(welcomeMessage);
    }

    // Call the function to display the welcome message
    displayWelcomeMessage();

    // You can add more JavaScript functionality here based on your needs
    // For example, you could implement form validation, dynamic content loading, etc.
});
