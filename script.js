document.addEventListener('DOMContentLoaded', () => {
    // Handle form submissions
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const checkoutButton = document.getElementById('checkout');
    const statusElement = document.getElementById('status');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement login logic here
            alert('Login submitted');
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement registration logic here
            alert('Register submitted');
        });
    }

    if (addToCartButtons) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Implement add to cart logic here
                alert('Added to cart');
            });
        });
    }

    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            // Implement checkout logic here
            alert('Proceeding to checkout');
        });
    }

    if (statusElement) {
        // Simulate order tracking
        let status = ['Pending', 'Processing', 'Out for Delivery', 'Delivered'];
        let currentStatus = 0;
        setInterval(() => {
            if (currentStatus < status.length) {
                statusElement.textContent = status[currentStatus];
                currentStatus++;
            }
        }, 3000); // Update status every 3 seconds
    }
});
