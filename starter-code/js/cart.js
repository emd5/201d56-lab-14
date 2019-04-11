/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;
var getCartArray = [];

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('carts')) || [];
  cart = new Cart(cartItems);
  // console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

    getCartArray.push(cart);
  // TODO: Find the table body
  
  // TODO: Iterate over the items in the cart
  var tbody = document.getElementsByTagName('tbody')  // TODO: Iterate over the items in the cart
  console.log('get storage: ' + cart);

  for(var i=0; i< getCartArray.length; i++){
    new Cart(getCartArray[i]);
  }
  console.log(getCartArray);

  // TODO: Create a TR
  for(var i = 0; i< getCartArray.length; i++){
    var trEl = document.createElement('tr');
    var tdEl1 = document.createElement('td');
    var tdEl2 = document.createElement('td');

    tdEl2.textContent = getCartArray[0].items[i].product;
    tdEl1.textContent = getCartArray[0].items[i].quantity;
   
  }
  trEl.appendChild(tdEl2);
  trEl.appendChild(tdEl1);
  table.appendChild(trEl);

  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
