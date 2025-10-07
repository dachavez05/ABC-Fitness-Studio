// Gets form by ID and listens for submit button press
document.getElementById('newsletter-form').addEventListener('submit', function () {
    // displays thank you message to user
    alert('Thank you for subscribing.');
    this.reset();  // clear input
});


// Creates and sets key name for sessionstorage
const CART_KEY = 'cartItems';

// Function to get cart array from sessionstorage and stores into variable 
function getCart() {
    const data = sessionStorage.getItem(CART_KEY);

    // evaluate if storage has data
    if (data) {
        return JSON.parse(data);  //if so, parse it
    } else {
        return [];  // if no data, use empty array
    }
}

function saveCart(arr) {
    // turns array (cart) into string to save to storage
    sessionStorage.setItem(CART_KEY, JSON.stringify(arr));
}

// Function to add product to cart
function addToCart(itemName) {
    // gets and adds name element to end of cart array
    const cart = getCart();
    cart.push(itemName);

    // save updated array to storage and alert user
    saveCart(cart);
    alert(`Item added to cart: ${itemName}`);
}


// Gets and stores all add to cart buttons
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

// loop to give each add cart button a click listener
for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener('click', function () {
        // finds product card that button belongs to
        const tile = this.closest('.product-tile');

        // gets products name aka h3 from tile
        // & stores it as productName string
        let productName;
        if (tile) {
            productName = tile.querySelector('h3').textContent;
        }

        // save name string and update storage for ul in cart modal
        addToCart(productName);
        renderCartList();
    });
}

// Function used to display/update cart items inside cart modal
function renderCartList() {
    const list = document.querySelector('.cart-items');  // this is the <ul> in cart modal

    // gets cart array from sessionstorage
    // clears any old list items to not have duplicates
    const cart = getCart();
    list.innerHTML = '';

    // add each item as a list item aka <li>
    for (let i = 0; i < cart.length; i++) {
        // creates a list item
        const li = document.createElement('li');

        // sets it to products name
        li.textContent = cart[i];
        // adds it to cart modal's ul
        list.appendChild(li);
    }
}
renderCartList();  // updates storage for ul in cart modal


// gets and stores clear cart button from modal
const clearBtn = document.getElementById('clear-cart');

// evaluates if button exists and runs when clicked
if (clearBtn) {
    clearBtn.addEventListener('click', function () {
        const cart = getCart();  // get current cart array

        // evaluates if cart is empty or not
        if (cart.length === 0) {
            // if so, tell user and stop function
            alert('No items to clear.');
            return;
        }

        // gets rid of all cart items in sessionstorage
        sessionStorage.removeItem(CART_KEY);
        alert('Cart cleared.');

        // updates storage for ul in cart modal
        renderCartList();
    })
}

// gets and stores process order button from modal
const processBtn = document.getElementById('process-order');

// evaluates if button exists and runs when clicked
if (processBtn) {
    processBtn.addEventListener('click', function () {
        const cart = getCart();  // get current cart array

        // evaluates if cart is empty or not
        if (cart.length === 0) {
            // if so, tell user and stop function
            alert('Cart is empty');
            return;
        }
        alert('Thank you for your order!');

        // gets rid of all cart items in sessionstorage
        sessionStorage.removeItem(CART_KEY);
        renderCartList();  // updates ul in cart modal
    })
}
