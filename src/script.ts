// Defining a variable
const x:number = 1
console.log(x)

// Write a function that greets a user given their first name. 
function greet(name:string){
    return "Hi," + name
}
greet("Aayush")

// Write a function that calculates the sum of two functions
function Sum(num1:number, num2:number){
    return num1 + num2
}
Sum(2,3)

// Write a function to check if the user is 18+
function isAdult(age:number){
    if(age > 18){
        return 'the user is an adult'
    }else{
        return 'the user is not an adult'
    }
}
console.log(isAdult(20))

// Create a function that takes another function as input, and runs it after 1 second.
function RunAfter1S(fn:()=>void){
    setTimeout(fn,1000)
}
RunAfter1S(function(){
    console.log("delayed output")
})


// Interfaces
// Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
interface User {
    firstName: string,
    lastName:string,
    email?:string,
    age: number
}
function isLegal(user:User){
    if(user.age > 18){
        return true
    }else{
        return false
    }
}
console.log(isLegal({firstName:"Aayush", lastName:"Dubey", age: 21}))


// Implements
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}
class Peoples implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}


// Types 
type newUser = {
    firstName:string,
    lastName:string,
    age:number,
}

type StringOrNumber = string | number   //union

function printId(id:StringOrNumber){
    console.log(`ID:${id}`)
}
printId(10)
printId("21")

type StringAndNumber = string & number  //intersection
type Employee = {
    name:string,
    startDate: Date
}
type Manager = {
    name:string,
    department: string
}
type TeamLead = Employee & Manager


// Array
// Write a function to return the maximum value from a array
function MaxNum(arr:number[]){
    let max = 0
    for(let i=0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    // console.log(max)
    return max
}

console.log(MaxNum([1,2,3,7,8,9]))


// Enums

// type arrows = "up" | "down" |  "right" |  "left"
// function doSomething(input:arrows){}
// doSomething("up")
// doSomething("down")
// doSomething("right")

enum Directions{
    Up = 1,  
    Down,   //2
    Right,   //3
    Left    //4
}

function doSomething(imput:Directions){}

doSomething(Directions.Up)
doSomething(Directions.Down)
console.log(doSomething(Directions.Down))  //2

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

function something<T>(arg: T){
    return arg
}

const val1 = something<string>("aayush")
const val2 = something<number>(10)