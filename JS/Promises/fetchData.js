// function fetchData() {
//     return new Promise((resolve, reject) => {
//         // creating a delay like waiting for user data
//         setTimeout(() => {
//             const dataAvailable = true;
//             if (dataAvailable) {
//                 resolve({ name: 'Banner', age: 35 });
//             } else {
//                 reject('Data not available');
//             }
//         }, 4000);
//     });
// }

// fetchData()
//     .then(data => {
//         console.log("Data fetched: ", data);
//     })
//     .catch(error => {
//         console.log("Error:", error);
//     })

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('User Data'), 1000);
    });
}

function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('User Posts'), 1000);
    });
}

function fetchComments() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('User Comments'), 1000);
    });
}

// .then() chaining
// fetchUser()
//     .then(user => {
//         console.log(user);
//         return fetchPosts();
//     })
//     .then(posts => {
//         console.log(posts);
//         return fetchComments();
//     })
//     .then(comments => {
//         console.log(comments);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// async/await
async function fetchData() {
    try {
        const user = await fetchUser();
        console.log(user);

        const posts = await fetchPosts();
        console.log(posts);

        const comments = await fetchComments();
        console.log(comments);
    } catch (error) {
        console.log(error);
    }
}
fetchData();