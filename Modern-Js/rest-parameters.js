function add(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(10, 20, 30, 40, 50));