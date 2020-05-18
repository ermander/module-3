/* Write a JavaScript program to test whether an array of integers of length 2 contains a 1 or a 3.  */

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
