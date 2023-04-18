// Update the 'Apples' item to say 'Granny Smith Apples'
// Remove 'Oat Milk' from the list
// Add an item 'Kombucha'
// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
// Add the class 'important' to the almonds item.

document.getElementById('list').children[1].innerHTML = "Granny Smith Apples";

document.getElementById('list').children[3].remove();

const newLI = document.createElement('li');
newLI.innerHTML = 'Kombucha';
document.getElementById('list').appendChild(newLI);

const oldlist = document.querySelectorAll('li');
for (i = 0; i < oldlist.length; i++) {
    oldlist[i].remove()
};

const newlist = ['protein bars', 'almonds', 'peanut butter'];
for (i = 0; i < newlist.length; i++) {
    const newlistchild = document.createElement('li');
    newlistchild.innerHTML = newlist[i];
    const finallist = document.querySelector('ul');
    finallist.appendChild(newlistchild);
}

const almondclass = document.getElementById('list').children[1]
almondclass.classList.add('important')
// console.log(almondclass)



