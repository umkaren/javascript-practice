// Create a function called initializeCart that checks if there's a cart in localStorage; if not, it initializes an empty cart and stores it in localStorage.
function initializeCart() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    };
};

// Create a function called addItem that takes an item object as a parameter, retrieves the cart from localStorage, adds the item to the cart, and then stores the updated cart back into localStorage.
function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Create a function called removeItem that takes an item id as a parameter, retrieves the cart from localStorage, removes the item with the given id from the cart, and then stores the updated cart back into localStorage.
function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
    };
};

// Create a function called displayCart that retrieves the cart from localStorage and logs the cart contents to the console.
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
};

// Create event listeners for the add item form and display cart button to call the respective functions.
const addItemForm = document.getElementById('addItemForm');

// add item event
const addButton = document.getElementById('addButton');
addItemForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const itemName = addItemForm.elements.itemName.value;
    const itemPrice = addItemForm.elements.itemPrice.value;
    const item = {id: Date.now(), name: itemName, price: Number(itemPrice)};
    addItem(item);
    addItemForm.reset();
});

// remove item event
const removeButton = document.getElementById('removeButton')
removeButton.addEventListener('click', function(event){
    event.preventDefault();
    const itemID = prompt('Enter item ID to remove:');
    if (itemID) {
        removeItem(parseInt(itemID))};
    displayCart();
});

//displays cart in console
const displayCartButton = document.querySelector('#displayCartButton');
displayCartButton.addEventListener('click', function() {
    displayCart();
});

initializeCart();