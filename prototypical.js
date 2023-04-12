// constructor
function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
}

// prototype
Person.prototype.fullName = function() {
    return `Full Name: ` + this.firstName + ` ` + this.lastName;
}

// overwriting the previous string method in the prototype
Person.prototype.toString = function () {
    return `Full Name: ${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}

// add family property to Person object
Person.prototype.family = [];

// Add a function on the Person.prototype called addToFamily which adds an object constructed 
// from the Person constructor to the family array. 
// To make sure that the object you are adding is an object constructed from the Person constructor - 
// take a look at the instanceofoperator. Make sure that your family array does not include duplicates! 
// This method should return the length of the family array.
Person.prototype.addToFamily = function(homies) {
    if(homies instanceof Person && !this.family.includes(homies)){
        this.family.push(homies);
    }
    return this.family.length;
}

// adding objects

const karen = new Person('Karen', 'Ngo', 'green', '4', ['sashimi', 'ramen']);
const christina = new Person('Christina', 'Ha', 'red', '1', ['cheese', 'banh mi']);
const christie = new Person('Christie', 'Ngo', 'gray', '8', ['pho', 'strawberries']);

// testing out properties and methods
console.log(karen.firstName);
console.log(karen.favoriteFoods);

console.log(karen);
console.log(karen.fullName());
console.log(karen.toString());
console.log(karen.addToFamily(christina));
console.log(karen.addToFamily(christie));
console.log(karen.addToFamily(karen));
console.log(karen.addToFamily(christina));
