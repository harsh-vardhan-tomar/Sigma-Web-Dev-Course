// function printNumber(num){
//     console.log("printing number: ",num);
// }
// printNumber(34);

// function getAvg(num1, num2){
//     let avg=(num1+num2)/2;
//     console.log(avg);
// }
// getAvg(4,5);

// function getSum(a,b,c){
//     let sum=a+b+c;
//     return sum;
// }
// let s=getSum(10,20,30);
// console.log(s);

// function getmyfullName(firstName, lastName){
//     let fullName=firstName+" "+lastName;
//     return fullName;
// }
// let fullName=getmyfullName("Santra",45);
// console.log(fullName);

const multiply=function(a,b){
    return a*b;
}
console.log(multiply(3,9));

let getExp=(a,b) =>{
    let ans=a**b;
    return ans;
}
console.log(getExp(2,10));

// Object
let obj={
    name : "Santra 45",
    age : 45,
    weight : 65,
    height : 177,
    greet : function(){
        console.log("hi EveryOne !!");
    }
};
console.log(obj);
obj.greet();
let obj2=obj; // Shallow Copy
console.log(obj2);


// Array
let arr = [1,2,3,4,5];
let arr2= [1,2,true, null, 'Santra'];
console.log(arr);
console.log(arr2);

let brr= new Array('Santra',1,33,true);
console.log(brr);

console.log(typeof(brr));
console.log(brr[0]);
brr.push("hi there");
console.log(brr);
brr.pop();
console.log(brr);