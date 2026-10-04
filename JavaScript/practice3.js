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


console.log(pixel);
{
    var pixel=10000;
}
console.log(pixel);


// Class 

class Human{
    age=12;
    #weight=34; // private
    height=152;

    sayHello(){
        console.log("Hello Everyone !!");
    }
    getWeight(){
        return this.#weight;
    }
    setWeight(wt){
        this.#weight=wt;
    }
}
let obj=new Human();
console.log(obj.age);
obj.sayHello();

obj.setWeight(45);
let weight=obj.getWeight();
console.log(weight);

//default parameter

function calculate(value={age:12,wt:45}){
    console.log("hello there it is ",value);
}
calculate();
calculate(null);      // null value hogi
calculate(undefined); // default value

function getAge(){
    return 120;
}
function utility(fname="Santra", age=getAge()){
    console.log("Full Name and age : ",fname," ",age);
}
utility();

// Built-in Objects
// console.log(Math.PI);

// console.log(Math.max(12,54,88,16,987,33,700));
// console.log(Math.min(12,54,88,16,987,33,700));
// console.log(Math.round(3.5));
// console.log(Math.ceil(3.6));
// console.log(Math.abs(-4.4));
// console.log(Math.random()); // between 0 and 1
// console.log(Math.sqrt(625));
// console.log(Math.pow(2,10));

let curr=new Date();
console.log(curr);
// let date = new Date("1972 August 8 5:00");
let date= new Date(1972,7,8,5); // 0-indexing for month
console.log(date);
console.log(date.getDay()); // mon-1, sun-0;

console.log(date.setFullYear(2005));
console.log(date);

//Object Cloning

let obj2={
    wt: 120,
    ht:190,
    age: 30,
};
obj2.color="White";  // dynamic nature of object
console.log(obj2);

let obj3={
    val:12,
    firstName:"santra",
};

// let obj4={...obj3};  // using spread ... operator
// obj3.val=14;
// console.log(obj3);
// console.log(obj4);

// let obj4=Object.assign({},obj3);
// console.log(obj4);
let obj4={

}
for(let key in obj3){
    let newKey=key;
    let newValue=obj3[key];
    obj4[newKey]=newValue;
}
console.log(obj4);