// Sample function to handle "Add to Cart" button clicks
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productTitle = button.parentElement.querySelector('.product-title').textContent;
        addToCart(productTitle);
    });
});

// Function to add product to cart (sample function, actual implementation may vary)
function addToCart(product) {
    console.log(`Added ${product} to cart`);
}
