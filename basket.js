'use strict';

let openBasketBtn = document.querySelector('.cartIconWrap');
let basketEl = document.querySelector('.basket');
let basketCounterEl = document.querySelector('.cartIconWrap span');
let basketTotalEl = document.querySelector('.basketTotal');
let basketTotalValueEl = document.querySelector('.basketTotalValue');

openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});

let basket = {};
function addProductToObject(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

function renderProduct(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    } else {
        renderNewProduct(productId);
    }
}

function renderNewProduct(productId) {
    let productRow = `
        <div class="basketRow">
            <div>${products[productId].name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${products[productId].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}

function increaseProductCount(productId) {
    let productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}

function recalculateSumForProduct(productId) {
    let productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceForRow = (basket[productId] * products[productId].price).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

function TotalBasketSum() {
    let totalSum = 0;
    for (let productId in basket) {
        totalSum += basket[productId] * products[productId].price;
    }
    basketTotalValueEl.textContent = totalSum.toFixed(2);
}


function Counter() {
    basketCounterEl.textContent++;
}

function addProductIntoBasket(productId) {
    Counter();
    addProductToObject(productId);
    renderProduct(productId);
    TotalBasketSum();
}

