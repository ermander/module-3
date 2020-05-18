/* Type of data */

let myIntegerVar = 10; // Numeric data

let myStringVar = "10"; // String data

let myBooleanVar = true; // Boolean data. True is not equal to "true"

let myNullVar = null; // The var is empty

let myUndefinedVar = undefined; // The value inside a var has not been defined

/* Variables */

/* Ternary operator */

const studentAge = 15;

const price = studentAge > 18 ? "20€" : "15€";

/* It's the same thing to write this code */

let price2

if(sutendeAge > 18){
    price2 = "20€"
}else{
    price2 = "15€"
}

/* Objects */

let myObject = {
    name: "John",
    surname: "Rambo",
    age: "18",
    isDoctor: true,
    address: {
        street: "Rambo Street",
        number: 18,
        country: "Alabama",
    },
    phoneNumbers: ["3681635321654", "984616846168"],
}; 

user.surname = "Schwarzenegger"; // Change the value inside

console.log(user.surname); 

delete user.address; // Delete the address inside the object

console.log(Object.keys(user)); // Elenca le proprietà dell'oggetto
console.log(Object.keys(user).length);
console.log(user.phoneNumbers.length);

const key = "surname";

console.log(user["phoneNumbers"].length);
console.log(user.phoneNumbers.length);
console.log(user["isDoctor"]);

/* Arrays */

const usersList = [user];


