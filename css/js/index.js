document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
});
// JavaScript function to handle button click event
document.getElementById('buy-now-button').addEventListener('click', redirectToCheckout);

function redirectToCheckout() {
    // Replace 'checkout.html' with the actual URL of your checkout page
    window.location.href = 'checkout.html';
};
