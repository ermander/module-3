/*

1)
Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

let integer1 = Math.floor(Math.random() * 100);
let integer2 = Math.floor(Math.random() * 100);

if(integer1!==integer2){
    console.log("integer1 is : " + integer1," and integer2 is : " + integer2);
    console.log(integer1*integer2)
}else{
    console.log("integer1 is : " + integer1," and integer2 is : " + integer2);
    console.log((integer1*integer2)*3);
}



2)
Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

let number1 =  Math.floor(Math.random() * 100);
let number2 =  Math.floor(Math.random() * 100);

if(number1===50 || number2===50 || number1+number2===50){
    console.log("number1 is : " + number1, " and number2 is : " + number2);
    console.log ("true");
}else{
    console.log("number1 is : " + number1, " and number2 is : " + number2);
    console.log("false");
}


3)
Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

let myString = "Hello world!";
let myNewString = myString.substring(2);
console.log(myNewString);

4)
Write a JavaScript program to find the largest of three given integers.

let 
integer1=Math.floor(Math.random()*100), 
integer2=Math.floor(Math.random()*100), 
integer3=Math.floor(Math.random()*100);

console.log(integer1, integer2, integer3);

console.log("The higher number is : " + Math.max(integer1, integer2, integer3));

5)
Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

let 
number1=Math.floor(Math.random()*120), 
number2=Math.floor(Math.random()*120);

if(number1>=40 && number1<=60 && number2>=40 && number2<=60){
    console.log("number1 is : " + number1, "and number2 is : " + number2);
    console.log("The numbers are in the right range!");
}else if(number1>=70 && number1<=100 && number2>=70 && number2<=100){
    console.log("number1 is : " + number1, "and number2 is : " + number2);
    console.log("The numbers are in the right range!");
}else{
    console.log("number1 is : " + number1, "and number2 is : " + number2);
    console.log("The numbers are not in the right range!");
}

6) 

Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

let 
string="I'm the string to be copied!",
randomIndex=Math.floor(Math.random()*10);

console.log(randomIndex);


let newString = [];

for(let i=0; i<randomIndex; i++){
    newString[i]=string;
}

console.log(newString);

7)
Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

Non riesco a capirlo

8)
Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.


let 
myArray=[],
totalSum=0;

for(let i=0; i<3; i++){
    myArray[i]=Math.floor(Math.random()*10);
}
console.log(myArray);

for(let i=0; i<myArray.length; i++){
    totalSum=totalSum+myArray[i];
}
console.log(totalSum);

9)
Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3. 

let 
myArray=[];

for(let i=0; i<2; i++){
    myArray[i]=Math.floor(Math.random()*10);
}

console.log(myArray);

for(let i=0; i<myArray.length; i++){
    if(myArray[i]===1 || myArray[i]===3){
        console.log("The integer inside is equel to 1 or to 3");
    }else{
        console.log("The integer inside is not equal to 1 or 3")
    }
}

NOT FINISHED!

10)

Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3

STESSA ROBA DI PRIMA!

11)

Write a JavaScript to find the longest string from a given array of strings.

12)

Write a JavaScript program to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Write a JavaScript program to find the index of the greatest element of a given array of integers

14)

Write a JavaScript program to get the largest even number from an array of integers.

15)

Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

16)

Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

17)

Write a JavaScript program to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Convert a number to a string, the contents of which depend on the number's factors.

If the number has 3 as a factor, output 'Pling'.
If the number has 5 as a factor, output 'Plang'.
If the number has 7 as a factor, output 'Plong'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
In raindrop-speak, this would be a simple "Plong".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
In raindrop-speak, this would be a "PlingPlang".
34 has four factors: 1, 2, 17, and 34.
In raindrop-speak, this would be "34".

20)
Convert a phrase to its acronym, like Portable Network Graphics to its acronym (PNG).

*/