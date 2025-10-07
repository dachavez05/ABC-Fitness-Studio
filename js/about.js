// Gets form by ID and listens for submit button press
document.getElementById('newsletter-form').addEventListener('submit', function () {
    // displays thank you message to user
    alert('Thank you for subscribing.');
    this.reset();  // clear input
});

// Gets contact form and stores in variable
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    // prevents form form reloading page after submitting
    e.preventDefault();

    // gets all of users input from form fields when submitted
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const phone = document.getElementById('contact-phone').value;
    const message = document.getElementById('contact-message').value;
    const customOrder = document.getElementById('custom-order').checked;  // .checked = true if box is checked, false if not


    // evaluate if any required form fields are empty 
    if (!name || !email || !message) {
        // if so, alert user and stop function
        alert('Please enter your name, email, and message.');
        return;
    }

    // store all of users input into an object
    const userInfo = {
        name: name,
        email: email,
        phone: phone,
        message: message,
        customOrder: customOrder
    };

    // create and set key to users name
    // & convert userInfo object into json string as value
    const userKey = userInfo.name;
    const userString = JSON.stringify(userInfo);

    // save to localStorage
    localStorage.setItem(userKey, userString);  // (key, value)


    // displays thank you message w users name
    alert(`Thank you for your message ${userInfo.name}.`);
    form.reset();  // clear form
});
