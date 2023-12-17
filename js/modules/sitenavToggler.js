import { modifiers } from "../main";

export default function sitenavToggler() {
    const elSiteHeader = document.querySelector('.site-header'),
    elSitenavToggler = elSiteHeader.querySelector('.js-sitenav-toggler'),
    elSiteHeaderSitenav = document.querySelector('.site-header__sitenav');
    
    if (elSitenavToggler) {
        elSitenavToggler.addEventListener('click', function() {
            elSitenavToggler.classList.toggle(modifiers.sitenavTogglerActive);
            elSiteHeader.classList.toggle(modifiers.siteheaderActive);
            if(elSiteHeader.classList.contains('site-header--active')) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = '';
            }
        })
    }
    
    if (elSiteHeaderSitenav) {
        elSiteHeaderSitenav.addEventListener('click', (evt) => {
            if (evt.target && evt.target.matches('.site-header__sitenav')) {
                elSitenavToggler.classList.toggle(modifiers.sitenavTogglerActive);
                elSiteHeader.classList.toggle(modifiers.siteheaderActive);
                document.body.style.overflow = '';
            }
        })
    }
}