// JSON - JavaScript Object Notation

let person = {
    name: "John",
    age: 30,
    isMarried: true,
    children: [
        "Lincy",
        "Bruce"
    ],
    address: {
        "street": "123 Main St",
        "city": "New York",
        "zip": "123456"
    }
}
// console.log(typeof person, person);

let jsonstring = JSON.stringify(person);
console.log(typeof jsonstring, jsonstring);

let personObject = JSON.parse(jsonstring);
console.log(typeof personObject, personObject);