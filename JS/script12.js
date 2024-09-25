// Events

// function clickevent() {
//     alert("Button was Clicked!");
// }

// function mouseOverEvent() {
//     let element = document.getElementById('element');
//     element.style.backgroundColor = "orange";
//     element.style.color = "black";
// }

// function mouseOutEvent() {
//     let element = document.getElementById('element');
//     element.style.backgroundColor = "cadetblue";
//     element.style.color = "white";
// }

// function clickFunction() {
//     console.log('Button Clicked');
// }

// document.getElementById('btn').addEventListener('click', clickFunction);

function handleClick(event) {
    console.log(event);
    // console.log(event.target.name);
    // console.log(event.target.id);
}

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);
btn3.addEventListener('click', handleClick);

const one = document.getElementById('one');
const two = document.getElementById('two');
const add = document.getElementById('add');
const result = document.getElementById('result');

let num1 = 0, num2 = 0;

function handleNums(event) {
    let event_num = event.target.name;
    if (event_num === '1') {
        num1 = Number(event_num);
        console.log(num1);
    } else {
        num2 = Number(event_num);
        console.log(num2);
    }
}

function addnums() {
    console.log(num1 + num2);
    result.textContent = num1 + num2;
}

one.addEventListener('click', handleNums);
two.addEventListener('click', handleNums);
add.addEventListener('click', addnums);