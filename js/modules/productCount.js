export default function productCount() {
    const elProductQty = document.querySelector('.product-info__quantity');
    const elProductQtyDecrementButton = document.querySelector('.js-product-quantity-decrement-button');
    const elProductQtyIncrementButton = document.querySelector('.js-product-quantity-increment-button');
    
    
    if (elProductQtyIncrementButton) {
        elProductQtyIncrementButton.addEventListener('click', function () {
            elProductQty.textContent = parseInt(elProductQty.textContent, 10) + 1;
        })
    }
    
    if (elProductQtyDecrementButton) {
        elProductQtyDecrementButton.addEventListener('click', function () {
            const qty = parseInt(elProductQty.textContent, 10);
            
            if (qty > 0) {
                elProductQty.textContent = parseInt(elProductQty.textContent, 10) - 1;
            }
        })
    }
}