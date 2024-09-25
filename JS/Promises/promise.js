/*
    Pending
    Resolved / fulfilled
    Rejected
*/

let cookFoodItem = new Promise(function (resolve, reject) {
    let foodReady = false;
    if (foodReady) {
        resolve('Here your food item!');
    } else {
        reject("Sorry, I can't do that");
    }
})

cookFoodItem.then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.log(error);
})