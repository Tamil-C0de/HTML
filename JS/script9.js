// Strict Mode Execution

"use strict";

function test() {
    x = 10;
    console.log(x);
}
// test();

// function duplicate(a, a, a) {
//     return a;
// }

// console.log(duplicate(1, 2, 3));

// Exception Handling
// Reference Error
function showReferenceError() {
    try {
        console.log(x);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}
// showReferenceError();

// console.log("Program End");

// TypeError
function showTypeError() {
    try {
        let num = null;
        num.toUpperCase();
    } catch (e) {
        console.log("You have to enter proper values");
    }
}
showTypeError();