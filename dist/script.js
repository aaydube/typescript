"use strict";
// defining a variable
const x = 1;
console.log(x);
// Write a function that greets a user given their first name. 
function greet(name) {
    return "Hi" + name;
}
greet("Aayush");
// Write a function that calculates the sum of two functions
function Sum(num1, num2) {
    return num1 + num2;
}
Sum(2, 3);
// Write a function to check if the user is 18+
function isLegal(age) {
    if (age > 18) {
        return 'the user is an adult';
    }
    else {
        return 'the user is not an adult';
    }
}
console.log(isLegal(20));
// Create a function that takes another function as input, and runs it after 1 second.
function RunAfter1S(fn) {
    setTimeout(fn, 1000);
}
RunAfter1S(function () {
    console.log("delayed output");
});
function largest(arr) {
    let maxValue = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    // console.log(maxValue)
    return maxValue;
}
console.log(largest([1, 2, 3]));
function doSomething(input) {
}
doSomething("up");
doSomething("down");
doSomething("right");
// enum Arrows{
//     Up,
//     Down,
//     Right,
//     Left
// }
// enum Arrows{
//     Up = 1,
//     Down,  //2
//     Right,  //3
//     Left    //4
// }
// function doSomething(input:Arrows){
// }
// doSomething(Arrows.Up)
// doSomething(Arrows.Down)
// console.log(doSomething(Arrows.Down))
// console.log(doSomething(Arrows.Left))
// type deftype = string[] | number[]
// function firstEl(arr:deftype){
//     return arr[0]
// }
// const val = firstEl(["aayush", "dubey"])
// console.log(val)
function something(arg) {
    return arg;
}
const val1 = something("aayush");
const val2 = something(10);
