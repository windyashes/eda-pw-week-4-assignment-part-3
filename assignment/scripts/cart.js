console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function isFull(){
    if(basket.length < maxItems){
        return false;
    }
    return true;
}
function addItem(item){
    if(!isFull()){
        basket.push(item);
        return true;
    }
    return false;
}
function removeItem(item){
    let i = basket.indexOf(item);
    if(i < 0){
        return null;
    }
    let item2 = basket[i];
    basket.splice(i, 1);
    return item2;
}
function listItems(){
    for(let i = 0; i < basket.length; i++){
        console.log(basket[i]);
    }
}
function empty(){
    let x = basket.length;
    for(let i = 0; i < x; i++){
        basket.shift();
    }
    console.log(basket);
}

console.log(`Basket is curerently ${basket}`);
listItems();
console.log(`Adding pasta to basket: ${addItem('pasta')}`);
console.log(`Adding pasta sauce to basket: ${addItem('pasta sauce')}`);
console.log(`Basket is curerently ${basket}`);
listItems();
console.log(`Emptying basket... `);
empty();
console.log(`Basket is curerently ${basket}`);
listItems();
console.log(`Adding pasta to basket: ${addItem('pasta')}`);
console.log(`Adding pasta sauce to basket: ${addItem('pasta sauce')}`);
console.log(`Adding broccoli to basket: ${addItem('broccoli')}`);
console.log(`Adding watermelon to basket: ${addItem('watermelon')}`);
console.log(`Adding beef to basket: ${addItem('beef')}`);
console.log(`Adding spices to basket: ${addItem('spices')}`);
console.log(`Removed ${removeItem('broccoli')}`);
console.log(`Adding spices to basket: ${addItem('spices')}`);



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
