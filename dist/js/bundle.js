/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modifiers: () => (/* binding */ modifiers)\n/* harmony export */ });\n/* harmony import */ var _modules_shoppingCartModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/shoppingCartModal */ \"./js/modules/shoppingCartModal.js\");\n/* harmony import */ var _modules_imgShowCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/imgShowCase */ \"./js/modules/imgShowCase.js\");\n/* harmony import */ var _modules_lightBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/lightBox */ \"./js/modules/lightBox.js\");\n/* harmony import */ var _modules_productCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/productCount */ \"./js/modules/productCount.js\");\n/* harmony import */ var _modules_sitenavToggler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sitenavToggler */ \"./js/modules/sitenavToggler.js\");\n/* harmony import */ var _modules_addProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addProduct */ \"./js/modules/addProduct.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst modifiers = {\r\n    siteHeaderCartModalOpen: 'site-header__cart-modal--open',\r\n    imgThumbnailActive: 'img-showcase__thumbnail--active',\r\n    lightboxOpen: 'lightbox--open',\r\n    sitenavTogglerActive: 'sitenav-toggler--active',\r\n    siteheaderActive: 'site-header--active'\r\n}\r\n\r\nconst elsImgShowCase = document.querySelectorAll('.img-showcase');\r\n\r\nelsImgShowCase.forEach(elImgShowCase => {\r\n    (0,_modules_imgShowCase__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elImgShowCase);\r\n})\r\n\r\n\r\n;(0,_modules_shoppingCartModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_lightBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_productCount__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_sitenavToggler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_addProduct__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack://sneakers-ecommerce-product-page/./js/main.js?");

/***/ }),

/***/ "./js/modules/addProduct.js":
/*!**********************************!*\
  !*** ./js/modules/addProduct.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProduct)\n/* harmony export */ });\nfunction addProduct() {\r\n    const products = JSON.parse(localStorage.getItem(\"products\")) || [],\r\n    addToCartBtn = document.querySelector('.js-add-to-cart'),\r\n    elProductQty = document.querySelector('.product-info__quantity'),\r\n    elProductInfoTitle = document.querySelector('.product-info__title'),\r\n    elProductPrice = document.querySelector('.product-info__price'),\r\n    elShoppingCart = document.querySelector('.shopping-cart'),\r\n    elShoppingCartProducts = document.querySelector('.shopping-cart-products'),\r\n    elSiteHeaderCart = document.querySelector('.site-header__cart'),\r\n    elSiteHeaderCartProductCount = elSiteHeaderCart.querySelector('.site-header__cart-product-count');\r\n    \r\n    \r\n    bindRenderProducts();\r\n    \r\n    \r\n    if (addToCartBtn) {\r\n        addToCartBtn.addEventListener('click', (evt) => {\r\n            if(+elProductQty.textContent > 0) {\r\n                const newProduct = {count: +elProductQty.textContent, productName: elProductInfoTitle.textContent, price: +elProductPrice.textContent.replace(/^\\$/g, '')}\r\n                if(products.length > 0) {\r\n                    products.forEach(product => {\r\n                        if(product.productName === newProduct.productName) {\r\n                            product.count += newProduct.count;\r\n                        } else {\r\n                            products.push(newProduct);\r\n                        }\r\n                    })\r\n                } else {\r\n                    products.push(newProduct);\r\n                }\r\n                elProductQty.textContent = '0';\r\n                bindRenderProducts();\r\n                \r\n                const prevBtnIcon = addToCartBtn.querySelector('.button__prepend'),\r\n                checkBtnIcon = document.createElement('span');\r\n                checkBtnIcon.classList.add('button__prepend');\r\n                checkBtnIcon.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 50 50\" width=\"22px\" height=\"22px\"><path fill=\"currentColor\" d=\"M 42.875 8.625 C 42.84375 8.632813 42.8125 8.644531 42.78125 8.65625 C 42.519531 8.722656 42.292969 8.890625 42.15625 9.125 L 21.71875 40.8125 L 7.65625 28.125 C 7.410156 27.8125 7 27.675781 6.613281 27.777344 C 6.226563 27.878906 5.941406 28.203125 5.882813 28.597656 C 5.824219 28.992188 6.003906 29.382813 6.34375 29.59375 L 21.25 43.09375 C 21.46875 43.285156 21.761719 43.371094 22.050781 43.328125 C 22.339844 43.285156 22.59375 43.121094 22.75 42.875 L 43.84375 10.1875 C 44.074219 9.859375 44.085938 9.425781 43.875 9.085938 C 43.664063 8.746094 43.269531 8.566406 42.875 8.625 Z\"/></svg>`;\r\n                prevBtnIcon.replaceWith(checkBtnIcon)\r\n                addToCartBtn.setAttribute('disabled', true)\r\n                setTimeout(() => {\r\n                    checkBtnIcon.replaceWith(prevBtnIcon)\r\n                    addToCartBtn.removeAttribute('disabled')\r\n                    checkBtnIcon.remove()\r\n                }, 3000);\r\n            } else {\r\n                console.log('Need a product');\r\n            }\r\n        })\r\n    }\r\n    \r\n    function bindRenderProducts() {\r\n        if (products.length == 0) {\r\n            elShoppingCart.classList.add('shopping-cart--empty')\r\n            elSiteHeaderCart.classList.add('site-header__cart--empty')\r\n        } else {\r\n            elShoppingCart.classList.remove('shopping-cart--empty')\r\n            elSiteHeaderCart.classList.remove('site-header__cart--empty')\r\n            elSiteHeaderCartProductCount.textContent = products.length\r\n            const cartProducts = renderProducts(products);\r\n            elShoppingCartProducts.replaceChildren(...cartProducts)\r\n        }\r\n        localStorage.setItem(\"products\", JSON.stringify(products))\r\n    }\r\n    \r\n    function renderProducts(arr) {\r\n        return arr.map(({count, productName, price}, idx, cArr) => {\r\n            const elLi = document.createElement('li');\r\n            elLi.classList.add('shopping-cart-products__item');\r\n            elLi.innerHTML = `\r\n            <div class=\"item-shopping-cart-products\">\r\n            <img class=\"item-shopping-cart-products__img\" src=\"img/shopping-cart-item-img.jpg\" alt=\"${productName}\" width=\"50\" height=\"50\" srcset=\"img/shopping-cart-item-img.jpg 1x, img/shopping-cart-item-img@2x.jpg 2x\">\r\n            <div class=\"item-shopping-cart-products__info\">\r\n            <div class=\"item-shopping-cart-products__name\">${productName}</div>\r\n            <div class=\"item-shopping-cart-products__cost\">$${price.toFixed(2)} x ${count} <b class=\"item-shopping-cart-products__subtotal\">$${(price * count).toFixed(2)}</b></div>\r\n            </div>\r\n            <button class=\"item-shopping-cart-products__remove-button\" type=\"button\" aria-label=\"Remove item\">\r\n            <svg class=\"item-shopping-cart-products__remove-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"16\" fill=\"none\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4 6c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5Zm3.5.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7ZM10 6c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5Z\" clip-rule=\"evenodd\"/><mask id=\"a\" width=\"14\" height=\"16\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4 6c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5Zm3.5.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7ZM10 6c.275 0 .5.225.5.5v7c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5Z\" clip-rule=\"evenodd\"/></mask></svg>\r\n            </button>\r\n            </div>\r\n            `\r\n\r\n            elLi.addEventListener('click', (evt) => {\r\n                if(evt.target && evt.target.matches('.item-shopping-cart-products__remove-button')) {\r\n                    cArr.splice(idx, 1);\r\n                    bindRenderProducts();\r\n                }\r\n            })\r\n\r\n            return elLi;\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://sneakers-ecommerce-product-page/./js/modules/addProduct.js?");

/***/ }),

/***/ "./js/modules/imgShowCase.js":
/*!***********************************!*\
  !*** ./js/modules/imgShowCase.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ imgShowCase)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ \"./js/main.js\");\n\r\n\r\n\r\nfunction imgShowCase(elShowCase) {\r\n    const elShowCaseWrapper = elShowCase.querySelector('.img-showcase__showcase'),\r\n    elShowCaseField = elShowCase.querySelector('.img-showcase__inner'),\r\n    elsShowCaseImg = elShowCase.querySelectorAll('.img-showcase__img'),\r\n    elShowCasePrevBtn = elShowCase.querySelector('.js-showcase-control-prev'),\r\n    elShowCaseNextBtn = elShowCase.querySelector('.js-showcase-control-next'),\r\n    elsImgShowCaseThumbnail = elShowCase.querySelectorAll('.img-showcase__thumbnail');\r\n\r\n    let elShowCaseWrapperWidth = window.getComputedStyle(elShowCaseWrapper).width;\r\n\r\n    let slideIndex = 0;\r\n    showSlide(slideIndex)\r\n\r\n    \r\n    elShowCaseField.style.width = `${100 * elsShowCaseImg.length}%`;\r\n    \r\n    resizeImgShowCase()\r\n    window.addEventListener('resize', () => {\r\n        resizeImgShowCase()\r\n    })\r\n    \r\n    \r\n    if (elShowCasePrevBtn) {\r\n        elShowCasePrevBtn.addEventListener('click', () => {\r\n            slideControl(-1);\r\n        })\r\n    }\r\n    \r\n    if (elShowCaseNextBtn) {\r\n        elShowCaseNextBtn.addEventListener('click', () => {\r\n            slideControl(1);\r\n        })\r\n    }\r\n\r\n\r\n    elsImgShowCaseThumbnail.forEach((elImgShowCaseThumbnail, idx) => {\r\n        elImgShowCaseThumbnail.addEventListener('click', () => {\r\n            slideIndex = idx;\r\n            showSlide(slideIndex)\r\n        })\r\n    })\r\n    \r\n    \r\n    function activateteThumbnails(idx) {\r\n        elsImgShowCaseThumbnail.forEach(item => {\r\n            item.classList.remove(_main__WEBPACK_IMPORTED_MODULE_0__.modifiers.imgThumbnailActive)\r\n        })\r\n        elsImgShowCaseThumbnail[idx].classList.add(_main__WEBPACK_IMPORTED_MODULE_0__.modifiers.imgThumbnailActive)\r\n    }\r\n    \r\n    function slideControl(number) {\r\n        slideIndex += number\r\n        if (slideIndex < 0) {\r\n            slideIndex = elsShowCaseImg.length - 1;\r\n        } else if(slideIndex > elsShowCaseImg.length - 1) {\r\n            slideIndex = 0;\r\n        }\r\n        showSlide(slideIndex)\r\n    }\r\n    \r\n    function showSlide(i = 0) {\r\n        elShowCaseField.style.transform = `translateX(-${elShowCaseWrapperWidth.replace(/(r?em|px|\\%)$/g, '') * i}px)`\r\n        activateteThumbnails(slideIndex);\r\n    }\r\n\r\n    function resizeImgShowCase() {\r\n        elShowCaseWrapperWidth = window.getComputedStyle(elShowCaseWrapper).width;\r\n        elsShowCaseImg.forEach(elShowCaseImg => {\r\n            elShowCaseImg.style.width = elShowCaseWrapperWidth;\r\n            showSlide(slideIndex)\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://sneakers-ecommerce-product-page/./js/modules/imgShowCase.js?");

/***/ }),

/***/ "./js/modules/lightBox.js":
/*!********************************!*\
  !*** ./js/modules/lightBox.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ lightBox)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ \"./js/main.js\");\n\r\n\r\nfunction lightBox() {\r\n    const elLightbox = document.querySelector('.lightbox'),\r\n    elLightboxToggler = document.querySelector('.js-lightbox-toggler');\r\n    \r\n    function lightBoxToggler(evt) {\r\n        elLightbox.classList.add(_main__WEBPACK_IMPORTED_MODULE_0__.modifiers.lightboxOpen);\r\n        document.body.style.overflow = 'hidden';\r\n    }\r\n    \r\n    if (document.body.offsetWidth > 560 && elLightboxToggler) {\r\n        elLightboxToggler.addEventListener('click', lightBoxToggler);\r\n    }\r\n    \r\n    window.addEventListener('resize', (evt) => {\r\n        if (document.body.offsetWidth > 560 && elLightboxToggler) {\r\n            elLightboxToggler.addEventListener('click', lightBoxToggler);\r\n        } else {\r\n            elLightboxToggler.removeEventListener('click', lightBoxToggler);\r\n        }\r\n    })\r\n    \r\n    if (elLightbox) {\r\n        elLightbox.addEventListener('click', (evt) => {\r\n            if(evt.target && (evt.target.matches('.js-lightbox-close') || (evt.target.matches('.lightbox')))) {\r\n                elLightbox.classList.remove(_main__WEBPACK_IMPORTED_MODULE_0__.modifiers.lightboxOpen);\r\n                document.body.style.overflow = '';\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://sneakers-ecommerce-product-page/./js/modules/lightBox.js?");

/***/ }),

/***/ "./js/modules/productCount.js":
/*!************************************!*\
  !*** ./js/modules/productCount.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ productCount)\n/* harmony export */ });\nfunction productCount() {\r\n    const elProductQty = document.querySelector('.product-info__quantity');\r\n    const elProductQtyDecrementButton = document.querySelector('.js-product-quantity-decrement-button');\r\n    const elProductQtyIncrementButton = document.querySelector('.js-product-quantity-increment-button');\r\n    \r\n    \r\n    if (elProductQtyIncrementButton) {\r\n        elProductQtyIncrementButton.addEventListener('click', function () {\r\n            elProductQty.textContent = parseInt(elProductQty.textContent, 10) + 1;\r\n        })\r\n    }\r\n    \r\n    if (elProductQtyDecrementButton) {\r\n        elProductQtyDecrementButton.addEventListener('click', function () {\r\n            const qty = parseInt(elProductQty.textContent, 10);\r\n            \r\n            if (qty > 0) {\r\n                elProductQty.textContent = parseInt(elProductQty.textContent, 10) - 1;\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://sneakers-ecommerce-product-page/./js/modules/productCount.js?");

/***/ }),

/***/ "./js/modules/shoppingCartModal.js":
/*!*****************************************!*\
  !*** ./js/modules/shoppingCartModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shoppingCartModal)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ \"./js/main.js\");\n\r\n\r\nfunction shoppingCartModal() {\r\n    const elSiteHeaderCartLink = document.querySelector('.js-site-header__cart-link'),\r\n        elSiteHeaderCartModal= document.querySelector('.site-header__cart-modal'),\r\n        elSiteHeaderCartModalWrapper = document.querySelector('.site-header__cart-modal-wrapper');\r\n    \r\n    if (elSiteHeaderCartLink) {\r\n        elSiteHeaderCartLink.addEventListener('click', function (evt) {\r\n            evt.preventDefault();\r\n            \r\n            elSiteHeaderCartModal.classList.toggle(_main__WEBPACK_IMPORTED_MODULE_0__.modifiers.siteHeaderCartModalOpen);\r\n            elSiteHeaderCartModalWrapper.classList.toggle('show')\r\n        })\r\n    }\r\n    \r\n    elSiteHeaderCartModalWrapper.addEventListener('click', (evt) => {\r\n        if(evt.target && evt.target.matches('.site-header__cart-modal-wrapper')) {\r\n            elSiteHeaderCartModal.classList.remove(_main__WEBPACK_IMPORTED_MODULE_0__.modifiers.siteHeaderCartModalOpen);\r\n            elSiteHeaderCartModalWrapper.classList.remove('show')\r\n        }\r\n    })\r\n} \n\n//# sourceURL=webpack://sneakers-ecommerce-product-page/./js/modules/shoppingCartModal.js?");

/***/ }),

/***/ "./js/modules/sitenavToggler.js":
/*!**************************************!*\
  !*** ./js/modules/sitenavToggler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sitenavToggler)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ \"./js/main.js\");\n\r\n\r\nfunction sitenavToggler() {\r\n    const elSiteHeader = document.querySelector('.site-header'),\r\n        elSitenavToggler = elSiteHeader.querySelector('.js-sitenav-toggler'),\r\n        elSiteHeaderSitenav = document.querySelector('.site-header__sitenav');\r\n    \r\n    if (elSitenavToggler) {\r\n        elSitenavToggler.addEventListener('click', function() {\r\n            elSitenavToggler.classList.toggle(_main__WEBPACK_IMPORTED_MODULE_0__.modifiers.sitenavTogglerActive);\r\n            elSiteHeader.classList.toggle(_main__WEBPACK_IMPORTED_MODULE_0__.modifiers.siteheaderActive);\r\n            if(elSiteHeader.classList.contains('site-header--active')) {\r\n                document.body.style.overflow = 'hidden'\r\n            } else {\r\n                document.body.style.overflow = '';\r\n            }\r\n        })\r\n    }\r\n\r\n    if (elSiteHeaderSitenav) {\r\n        elSiteHeaderSitenav.addEventListener('click', (evt) => {\r\n            if (evt.target && evt.target.matches('.site-header__sitenav')) {\r\n                elSitenavToggler.classList.toggle(_main__WEBPACK_IMPORTED_MODULE_0__.modifiers.sitenavTogglerActive);\r\n                elSiteHeader.classList.toggle(_main__WEBPACK_IMPORTED_MODULE_0__.modifiers.siteheaderActive);\r\n                document.body.style.overflow = '';\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://sneakers-ecommerce-product-page/./js/modules/sitenavToggler.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;