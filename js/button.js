const addToCartButton = document.getElementById('add-to-cart');
let isAddedToCart = false;

addToCartButton.addEventListener('click', function() {
  if (!isAddedToCart) {
    addToCartButton.innerText = 'Success';
    addToCartButton.classList.add('success');
    isAddedToCart = true;
  } else {
    if (addToCartButton.classList.contains('removed')) {
      addToCartButton.innerText = 'Add to Cart';
      addToCartButton.classList.remove('removed');
      isAddedToCart = false;
    } else {
      addToCartButton.innerText = 'Removed';
      addToCartButton.classList.remove('success');
      addToCartButton.classList.add('removed');
    }
  }
});


















