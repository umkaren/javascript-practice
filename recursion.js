function exponential(base, power) {
    if (power === 0) {
        return 1;
    } else {
        return base * exponential(base, power-1);
    }
}

console.log(exponential(2,5));
console.log(exponential(7,3));
console.log(exponential(12,2));
console.log(exponential(9,4));