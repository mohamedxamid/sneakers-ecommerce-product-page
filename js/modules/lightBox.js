import { modifiers } from "../main";

export default function lightBox() {
    const elLightbox = document.querySelector('.lightbox'),
    elLightboxToggler = document.querySelector('.js-lightbox-toggler');
    
    function lightBoxToggler(evt) {
        elLightbox.classList.add(modifiers.lightboxOpen);
        document.body.style.overflow = 'hidden';
    }
    
    if (document.body.offsetWidth > 560 && elLightboxToggler) {
        elLightboxToggler.addEventListener('click', lightBoxToggler);
    }
    
    window.addEventListener('resize', (evt) => {
        if (document.body.offsetWidth > 560 && elLightboxToggler) {
            elLightboxToggler.addEventListener('click', lightBoxToggler);
        } else {
            elLightboxToggler.removeEventListener('click', lightBoxToggler);
        }
    })
    
    if (elLightbox) {
        elLightbox.addEventListener('click', (evt) => {
            if(evt.target && (evt.target.matches('.js-lightbox-close') || (evt.target.matches('.lightbox')))) {
                elLightbox.classList.remove(modifiers.lightboxOpen);
                document.body.style.overflow = '';
            }
        })
    }
}