const tempList = [1, 2, 3, 4, 5, 6];
const object = { a: 1, b: 2, c: 3};

// for loop
console.log("for loop");
for(let i =0; i < tempList.length; i++) {
    console.log(tempList[i]);
}

// for of loop
console.log("for of loop")
for(const element of tempList) {
    console.log(element);
}

// for each loop
console.log("for each loop");
tempList.forEach(elem => {
    console.log(elem);
});

// for in loop
console.log("for in loop");
for( const property in object) {
    console.log(`${property}: ${object[property]}`);
}