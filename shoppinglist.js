let list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

list.push('fruit loops');

list[4] = 'fair trade coffee';
list.splice (2, 2,'rice', 'beans');

let cart = [];

cart.push(list.pop());
cart.push(list.shift());

while (list.length > 0) {
    cart.push(list.pop());
}

cart.sort();

cart.reverse();

console.log(cart.toString());