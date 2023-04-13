// Find a user named 'Jose'
// Get an array of all the premium members
// Get an array of all the user last names
// Get an array of the full names who have logged in more than 10 times
// Get the total number of logins for the list of users

const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

// find Jose
const dondeEsta = users.find(donde => donde.firstName = 'Jose')

console.log(dondeEsta);

// find premiumair

function findPremiumMembers(members){
    return members.isPremiumMember == true
}

let premiumMembers = users.filter(findPremiumMembers);
console.log(premiumMembers);

// all last names

let returnLastName = users.map(user => user.lastName);
console.log(returnLastName);

//return full names of people who have logged on more than x10.
function noLife(people){
    return people.logins > 10;
}
let spammers = users.filter(noLife)

const fullNames = spammers.map(spammers => spammers.firstName + ` ` + spammers.lastName);
console.log(fullNames);

// get total number of logins from all users
let allLogins = users.map(user => user.logins);

const loginTotal = allLogins.reduce(function(login, total){
    return total + login;
    });

console.log(loginTotal)
