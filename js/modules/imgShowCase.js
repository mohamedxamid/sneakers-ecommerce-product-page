import { modifiers } from "../main";


export default function imgShowCase(elShowCase) {
    const elShowCaseWrapper = elShowCase.querySelector('.img-showcase__showcase'),
    elShowCaseField = elShowCase.querySelector('.img-showcase__inner'),
    elsShowCaseImg = elShowCase.querySelectorAll('.img-showcase__img'),
    elShowCasePrevBtn = elShowCase.querySelector('.js-showcase-control-prev'),
    elShowCaseNextBtn = elShowCase.querySelector('.js-showcase-control-next'),
    elsImgShowCaseThumbnail = elShowCase.querySelectorAll('.img-showcase__thumbnail');
    
    let elShowCaseWrapperWidth = window.getComputedStyle(elShowCaseWrapper).width;
    
    let slideIndex = 0;
    showSlide(slideIndex)
    
    
    elShowCaseField.style.width = `${100 * elsShowCaseImg.length}%`;
    
    resizeImgShowCase()
    window.addEventListener('resize', () => {
        resizeImgShowCase()
    })
    
    
    if (elShowCasePrevBtn) {
        elShowCasePrevBtn.addEventListener('click', () => {
            slideControl(-1);
        })
    }
    
    if (elShowCaseNextBtn) {
        elShowCaseNextBtn.addEventListener('click', () => {
            slideControl(1);
        })
    }
    
    
    elsImgShowCaseThumbnail.forEach((elImgShowCaseThumbnail, idx) => {
        elImgShowCaseThumbnail.addEventListener('click', () => {
            slideIndex = idx;
            showSlide(slideIndex)
        })
    })
    
    
    function activateteThumbnails(idx) {
        elsImgShowCaseThumbnail.forEach(item => {
            item.classList.remove(modifiers.imgThumbnailActive)
        })
        elsImgShowCaseThumbnail[idx].classList.add(modifiers.imgThumbnailActive)
    }
    
    function slideControl(number) {
        slideIndex += number
        if (slideIndex < 0) {
            slideIndex = elsShowCaseImg.length - 1;
        } else if(slideIndex > elsShowCaseImg.length - 1) {
            slideIndex = 0;
        }
        showSlide(slideIndex)
    }
    
    function showSlide(i = 0) {
        elShowCaseField.style.transform = `translateX(-${elShowCaseWrapperWidth.replace(/(r?em|px|\%)$/g, '') * i}px)`
        activateteThumbnails(slideIndex);
    }
    
    function resizeImgShowCase() {
        elShowCaseWrapperWidth = window.getComputedStyle(elShowCaseWrapper).width;
        elsShowCaseImg.forEach(elShowCaseImg => {
            elShowCaseImg.style.width = elShowCaseWrapperWidth;
            showSlide(slideIndex)
        })
    }
}