// Initialize an empty cart array
let cart = [];

// Function to add a plant to the cart
function addToCart(plantName) {
    // Check if the plant is already in the cart
    const existingPlant = cart.find((item) => item.name === plantName);
    if (existingPlant) {
        alert(`${plantName} is already in your cart.`);
    } else {
        // Add the plant to the cart
        cart.push({ name: plantName });
        alert(`${plantName} has been added to your cart.`);
        updateCartCount();
    }
}

// Function to update the cart count displayed
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

// Function to render the cart page
function renderCart() {
    const cartContainer = document.getElementById('cart-container');
    if (!cartContainer) return;

    // Clear the container
    cartContainer.innerHTML = '';

    // Check if the cart is empty
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Display the plants in the cart
    cart.forEach((item, index) => {
        const plantItem = document.createElement('div');
        plantItem.className = 'cart-item';
        plantItem.innerHTML = `
            <p>${item.name}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(plantItem);
    });

    // Add a "Place Order" button
    const placeOrderButton = document.createElement('button');
    placeOrderButton.textContent = 'Place Order';
    placeOrderButton.className = 'btn';
    placeOrderButton.onclick = placeOrder;
    cartContainer.appendChild(placeOrderButton);
}

// Function to remove a plant from the cart
function removeFromCart(index) {
    const removedPlant = cart.splice(index, 1)[0];
    alert(`${removedPlant.name} has been removed from your cart.`);
    updateCartCount();
    renderCart();
}

// Function to simulate placing an order
function placeOrder() {
    alert('Your order has been placed successfully!');
    cart = []; // Clear the cart
    updateCartCount();
    renderCart();
}

// Form Validation for Contact Page
function validateContactForm(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for contacting us. We will get back to you soon.');
    document.querySelector('form').reset(); // Clear the form
}

// Attach event listeners after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Attach click handlers for "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.plant button');
    addToCartButtons.forEach((button) => {
        const plantName = button.previousElementSibling.textContent;
        button.addEventListener('click', () => addToCart(plantName));
    });

    // Attach form validation handler on the contact page
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateContactForm);
    }

    // Render the cart page if it exists
    renderCart();
});

// Redirect to home page on login form submission
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (email && password) {
                // Simulate successful login (you can implement real validation here)
                alert('Login successful!');
                window.location.href = 'index.html'; // Redirect to the home page
            } else {
                alert('Please enter your email and password.');
            }
        });
    }
});

