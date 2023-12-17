export default function addProduct() {
    const products = JSON.parse(localStorage.getItem("products")) || [],
    addToCartBtn = document.querySelector('.js-add-to-cart'),
    elProductQty = document.querySelector('.product-info__quantity'),
    elProductInfoTitle = document.querySelector('.product-info__title'),
    elProductPrice = document.querySelector('.product-info__price'),
    elShoppingCart = document.querySelector('.shopping-cart'),
    elShoppingCartProducts = document.querySelector('.shopping-cart-products'),
    elSiteHeaderCart = document.querySelector('.site-header__cart'),
    elSiteHeaderCartProductCount = elSiteHeaderCart.querySelector('.site-header__cart-product-count');
    
    
    bindRenderProducts();
    
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (evt) => {
            if(+elProductQty.textContent > 0) {
                const newProduct = {count: +elProductQty.textContent, productName: elProductInfoTitle.textContent, price: +elProductPrice.textContent.replace(/^\$/g, '')}
                if(products.length > 0) {
                    products.forEach(product => {
                        if(product.productName === newProduct.productName) {
                            product.count += newProduct.count;
                        } else {
                            products.push(newProduct);
                        }
                    })
                } else {
                    products.push(newProduct);
                }
                elProductQty.textContent = '0';
                bindRenderProducts();
                
                const prevBtnIcon = addToCartBtn.querySelector('.button__prepend'),
                checkBtnIcon = document.createElement('span');
                checkBtnIcon.classList.add('button__prepend');
                checkBtnIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="22px" height="22px"><path fill="currentColor" d="M 42.875 8.625 C 42.84375 8.632813 42.8125 8.644531 42.78125 8.65625 C 42.519531 8.722656 42.292969 8.890625 42.15625 9.125 L 21.71875 40.8125 L 7.65625 28.125 C 7.410156 27.8125 7 27.675781 6.613281 27.777344 C 6.226563 27.878906 5.941406 28.203125 5.882813 28.597656 C 5.824219 28.992188 6.003906 29.382813 6.34375 29.59375 L 21.25 43.09375 C 21.46875 43.285156 21.761719 43.371094 22.050781 43.328125 C 22.339844 43.285156 22.59375 43.121094 22.75 42.875 L 43.84375 10.1875 C 44.074219 9.859375 44.085938 9.425781 43.875 9.085938 C 43.664063 8.746094 43.269531 8.566406 42.875 8.625 Z"/></svg>`;
                prevBtnIcon.replaceWith(checkBtnIcon)
                addToCartBtn.setAttribute('disabled', true)
                setTimeout(() => {
                    checkBtnIcon.replaceWith(prevBtnIcon)
                    addToCartBtn.removeAttribute('disabled')
                    checkBtnIcon.remove()
                }, 3000);
            } else {
                console.log('Need a product');
            }
        })
    }
    
    function bindRenderProducts() {
        if (products.length == 0) {
            elShoppingCart.classList.add('shopping-cart--empty')
            elSiteHeaderCart.classList.add('site-header__cart--empty')
        } else {
            elShoppingCart.classList.remove('shopping-cart--empty')
            elSiteHeaderCart.classList.remove('site-header__cart--empty')
            elSiteHeaderCartProductCount.textContent = products.length
            const cartProducts = renderProducts(products);
            elShoppingCartProducts.replaceChildren(...cartProducts)
        }
        localStorage.setItem("products", JSON.stringify(products))
    }
    
    function renderProducts(arr) {
        return arr.map(({count, productName, price}, idx, cArr) => {
            const elLi = document.createElement('li');
            elLi.classList.add('shopping-cart-products__item');
            elLi.innerHTML = `
            <div class="item-shopping-cart-products">
            <img class="item-shopping-cart-products__img" src="img/shopping-cart-item-img.jpg" alt="${productName}" width="50" height="50" srcset="img/shopping-cart-item-img.jpg 1x, img/shopping-cart-item-img@2x.jpg 2x">
            <div class="item-shopping-cart-products__info">
            <div class="item-shopping-cart-products__name">${productName}</div>
            <div class="item-shopping-cart-products__cost">$${price.toFixed(2)} x ${count} <b class="item-shopping-cart-products__subtotal">$${(price * count).toFixed(2)}</b></div>
            </div>
            <button class="item-shopping-cart-products__remove-button" type="button" aria-label="Remove item">
            <svg class="item-shopping-cart-products__remove-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4 6c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5Zm3.5.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7ZM10 6c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5Z" clip-rule="evenodd"/><mask id="a" width="14" height="16" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4 6c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5Zm3.5.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7ZM10 6c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5Z" clip-rule="evenodd"/></mask></svg>
            </button>
            </div>
            `
            
            elLi.addEventListener('click', (evt) => {
                if(evt.target && evt.target.matches('.item-shopping-cart-products__remove-button')) {
                    cArr.splice(idx, 1);
                    bindRenderProducts();
                }
            })
            
            return elLi;
        })
    }
}