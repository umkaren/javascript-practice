// What We Are Looking For:
// The users array is correctly defined with the required properties.
// The fetchUserById function is implemented correctly and returns a promise.
// The promise resolves with the user object when the user with the given ID exists in the users array.
// The promise rejects with an error message when the user with the given ID does not exist in the users array.
// The fetchUserById function is used to fetch users with different IDs, and the results are logged correctly.

// Create an array of user objects called users. Each user object should have an id, name, and email property.
let users = [
    {id: 1, name: 'Alvin', email: 'alvin@gmail.com'},
    {id: 2, name: 'Simon', email: 'simon@gmail.com'},
    {id: 3, name: 'Theodore', email: 'theodore@gmail.com'},
    {id: 4, name: 'Jeanette', email: 'jeanette@gmail.com'},
    {id: 5, name: 'Brittany', email: 'brittany@gmail.com'}
];

// Implement a function called fetchUserById that accepts a user ID as an argument and returns a promise. 
// The promise should resolve with the user object if the user with the given ID exists in the users array.
// Otherwise, it should reject with an error message.
// Simulate an asynchronous request by using setTimeout() to delay the resolution or rejection of the promise by 1 second.

function fetchUserByID(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let findUser = users.find((user) => user.id === id)
            if (findUser) {
                resolve(findUser)
            } else {
                reject('Error. Have you tried restarting your computer?')
            }
        }, 1000)
    });
};

// Use the fetchUserById function to fetch the user with ID 1.
// Log the user object if the promise is fulfilled and the error message if the promise is rejected.
// Next, chain another fetchUserById call to fetch the user with ID 2.
// Log the user object if the promise is fulfilled and the error message if the promise is rejected.
fetchUserByID(1)
    .then((findUser) => {
    console.log(findUser);
    return fetchUserByID(2);
})
    .then((findUser) => {
    console.log(findUser)
})
    .catch((whoops) => {
    console.log(whoops);
});

//testing out other IDs
fetchUserByID(5)
    .then((findUser) => {
    console.log(findUser);
})
    .catch((whoops) => {
    console.log(whoops);
});

fetchUserByID(20)
    .then((findUser) => {
    console.log(findUser);
})
    .catch((whoops) => {
    console.log(whoops);
});