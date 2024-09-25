// let arr = [1, "String", true, null, undefined];
// console.log(arr);

let fruits = ["apple", "banana", "cherry"];
fruits[1] = "mango";
console.log(fruits.length);

fruits.push("orange", 'grapes');
console.log(fruits)

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift('pineapple', 'lemon');
console.log(fruits);

let slicedfruits = fruits.slice(1, 4);
console.log(slicedfruits);

fruits.forEach(function (fruit) {
    // console.log(fruit);
})

for (const element of slicedfruits) {
    console.log(element);
}