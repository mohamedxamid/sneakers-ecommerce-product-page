import { modifiers } from "../main";

export default function shoppingCartModal() {
    const elSiteHeaderCartLink = document.querySelector('.js-site-header__cart-link'),
    elSiteHeaderCartModal= document.querySelector('.site-header__cart-modal'),
    elSiteHeaderCartModalWrapper = document.querySelector('.site-header__cart-modal-wrapper');
    
    if (elSiteHeaderCartLink) {
        elSiteHeaderCartLink.addEventListener('click', function (evt) {
            evt.preventDefault();
            
            elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCartModalOpen);
            elSiteHeaderCartModalWrapper.classList.toggle('show')
        })
    }
    
    elSiteHeaderCartModalWrapper.addEventListener('click', (evt) => {
        if(evt.target && evt.target.matches('.site-header__cart-modal-wrapper')) {
            elSiteHeaderCartModal.classList.remove(modifiers.siteHeaderCartModalOpen);
            elSiteHeaderCartModalWrapper.classList.remove('show')
        }
    })
} 