const myGames ={
    GTA: 'Grand Theft Auto',
    NFS: 'Need for speed',
    FH5:'Forza Horizon 5',
    COD: 'Call of Duty'
}

// To iterate on an object we should use forin loop

for (const key in myGames) {
        console.log(`${key} is ${myGames[key]}`);
}

console.log();
// Can we use forin loop on an array? Yes!

fruits=[22,33,44,55,66]
for (const key in fruits) {
    console.log(`${key} is ${fruits[key]}`);
}

console.log();

// Can we use forin on map? No??
// coz map isnt iterable

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("USA", "United States of Ameria");

for (const key in map) {
    console.log(key);
};
