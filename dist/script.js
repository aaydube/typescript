"use strict";
// Defining a variable
const x = 1;
console.log(x);
// Write a function that greets a user given their first name. 
function greet(name) {
    return "Hi," + name;
}
greet("Aayush");
// Write a function that calculates the sum of two functions
function Sum(num1, num2) {
    return num1 + num2;
}
Sum(2, 3);
// Write a function to check if the user is 18+
function isAdult(age) {
    if (age > 18) {
        return 'the user is an adult';
    }
    else {
        return 'the user is not an adult';
    }
}
console.log(isAdult(20));
// Create a function that takes another function as input, and runs it after 1 second.
function RunAfter1S(fn) {
    setTimeout(fn, 1000);
}
RunAfter1S(function () {
    console.log("delayed output");
});
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal({ firstName: "Aayush", lastName: "Dubey", age: 21 }));
class Peoples {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
function printId(id) {
    console.log(`ID:${id}`);
}
printId(10);
printId("21");
// Array
// Write a function to return the maximum value from a array
function MaxNum(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    // console.log(max)
    return max;
}
console.log(MaxNum([1, 2, 3, 7, 8, 9]));
// Enums
// type arrows = "up" | "down" |  "right" |  "left"
// function doSomething(input:arrows){}
// doSomething("up")
// doSomething("down")
// doSomething("right")
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 1] = "Up";
    Directions[Directions["Down"] = 2] = "Down";
    Directions[Directions["Right"] = 3] = "Right";
    Directions[Directions["Left"] = 4] = "Left"; //4
})(Directions || (Directions = {}));
function doSomething(imput) { }
doSomething(Directions.Up);
doSomething(Directions.Down);
console.log(doSomething(Directions.Down)); //2
//enum usecase in express
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })
// Generics <>
// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }
// const el = getFirstElement(["harkiratSingh", "ramanSingh"]);     //typescript cannot infer the type of el variable 
// console.log(el.toLowerCase())
function something(arg) {
    return arg;
}
const val1 = something("aayush");
const val2 = something(10);
