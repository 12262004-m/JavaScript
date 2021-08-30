'use strict';

let images = 'images';
let productsImages = `${images}/featured`;
let featuredItemsEl = document.querySelector('.featuredItems');

function getMarkup(product) {
    return `
        <div class="featuredItem">

            <div class="featuredImgWrap">
                <img src="${productsImages}/${product.image}" alt="${product.name}">
                <div class="featuredImgDark">
                    <button data-productId="${product.id}">
                        <img src="${images}/cart.svg" alt="">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div class="featuredData">
                <div class="featuredName">
                    ${product.name}
                </div>
                <div class="featuredText">
                    ${product.description}
                </div>
                <div class="featuredPrice">
                    $${product.price}
                </div>
            </div>

        </div>
    `;
}


function insertProductsIntoPage(products, featuredItemsEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getMarkup(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}


function addEventListeners() {
    const addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}


function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}

insertProductsIntoPage(products, featuredItemsEl);
addEventListeners();
