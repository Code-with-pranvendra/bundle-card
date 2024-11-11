const prices = [165.00, 345.00, 528.00];
const options = document.querySelectorAll('.pricing-option');
const totalPrice = document.getElementById('total-price');
const addToCartButton = document.querySelector('.add-to-cart');

function selectOption(index) {
    options.forEach((option, i) => {
        const radio = option.querySelector('.radio-input');
        radio.checked = i === index;
        option.classList.toggle('selected', i === index);
    });

    
    totalPrice.textContent = `DKK ${prices[index].toFixed(2)}`;
}

function addToCart() {
    const selectedIndex = Array.from(options).findIndex(
        option => option.querySelector('.radio-input').checked
    );
    const pairs = selectedIndex + 1;
    const price = prices[selectedIndex];


    alert(`Added ${pairs} pair${pairs > 1 ? 's' : ''} to cart\nTotal: DKK ${price.toFixed(2)}`);
}

options.forEach((option, index) => {
    option.addEventListener('click', () => selectOption(index));
});

addToCartButton.addEventListener('click', addToCart);


selectOption(0);
