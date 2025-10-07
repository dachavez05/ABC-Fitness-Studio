// Gets form by ID and listens for submit button press
document.getElementById('newsletter-form').addEventListener('submit', function () {
    // displays thank you message to user
    alert('Thank you for subscribing.');
    this.reset();  // clear input
});

