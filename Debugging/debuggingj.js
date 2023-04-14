const storeOwners = [
    { charles: 1 },
    { sally: 1 },
    { cassandra: 1 },
    {
        "Danny Shavez": 1,
       location: "in NM"},
];

function tellMeMyStores() {
console.log("Hey, can you tell me how many stores you have?");
};

function hasStore() {
for (let i = 0; i <= 2; i++) {
          people = Object.values(storeOwners);
        let person = Object.keys(people[i]);
           console.log("Yes, " + person + " has one");
}
}

tellMeMyStores();
hasStore();

let man = Object.keys(storeOwners[3]);
let mister = man[0];

let whereHeLives = storeOwners[3].location;
console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");

// the below isn't used
const listNumberOfStores = function () {
    for (let i = 0; i < storeOwners.length; i++) {
             let totalLocations = totalLocations + i;
          }
        return i;
        };
        
let locations = listNumberOfStores;
    if (locations > 0) {
           console.log("Of course, we have " + totalLocations + " stores");
  }

