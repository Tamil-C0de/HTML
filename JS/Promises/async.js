function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched!');
        }, 2000);
    });
}

console.log('Start');

fetchData().then(data => {
    console.log(data);

    console.log('End');
});

// async function getData() {
//     const data = await fetchData();
//     console.log(data);

//     console.log('End');
// }

// getData();
