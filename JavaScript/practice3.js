// Function Hoisting

sayMyName("Santra");

function sayMyName(fullname){
    console.log(fullname);
}

// Variable Hoisting

console.log(age);
var age=35;

//using let and const keyword
// console.log(fname);
// let fname="Sandy";

// sayHello(); //ReferenceError
// let sayHello=function(){
//     console.log("hello jee, kaise ho saree");
// }

// class Hoisting
// class Human{

// }
// const obj=new Human();


function greetMe(greet,fullName){
    console.log("Hello",fullName);
    greet();
}
function greet(){
    console.log("Greetings of the day");
}
greetMe(greet,"Santra45");


function solve(number){
    return function(number){
        return number*number;
    }
}
let ans=solve(5);
let finalAns=ans(10);
console.log(finalAns);


// Array of function
const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a/b;
    }
];
let first=arr[0];
let second=arr[1];
let third=arr[2];
let fourth=arr[3];

let ans1=first(10,5);
let ans2=second(10,5);
let ans3=third(10,5);
let ans4=fourth(10,5);

console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);

let bmi={
    age: 25,
    weight:55,
    height:1.72,
    calculateBMI: (age,weight,height)=>{
        let bmi=weight/(height**2);
        if(bmi<=18.5){
            console.log("UnderWeight");
        }
        else if(bmi>18.5 && bmi<=25){
            console.log("Normal");
        }
        else if(bmi>25 && bmi<=30){
            console.log("Overweight");
        }
        else if(bmi>30){
            console.log("Obesity");
        }
    }
};
bmi.calculateBMI(bmi.age,bmi.weight,bmi.height);

console.log(sayHello);
var sayHello=function(){
    console.log("Namaste !!");
}