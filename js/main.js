import shoppingCartModal from "./modules/shoppingCartModal";
import imgShowCase from "./modules/imgShowCase";
import lightBox from "./modules/lightBox";
import productCount from "./modules/productCount";
import sitenavToggler from "./modules/sitenavToggler";
import addProduct from "./modules/addProduct";


export const modifiers = {
    siteHeaderCartModalOpen: 'site-header__cart-modal--open',
    imgThumbnailActive: 'img-showcase__thumbnail--active',
    lightboxOpen: 'lightbox--open',
    sitenavTogglerActive: 'sitenav-toggler--active',
    siteheaderActive: 'site-header--active'
}

const elsImgShowCase = document.querySelectorAll('.img-showcase');

elsImgShowCase.forEach(elImgShowCase => {
    imgShowCase(elImgShowCase);
})


shoppingCartModal();
lightBox();
productCount();
sitenavToggler();
addProduct();