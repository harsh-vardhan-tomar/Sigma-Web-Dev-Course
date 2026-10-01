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

// const multiply=function(a,b){
//     return a*b;
// }
// console.log(multiply(3,9));

// let getExp=(a,b) =>{
//     let ans=a**b;
//     return ans;
// }
// console.log(getExp(2,10));

// // Object
// let obj={
//     name : "Santra 45",
//     age : 45,
//     weight : 65,
//     height : 177,
//     greet : function(){
//         console.log("hi EveryOne !!");
//     }
// };
// console.log(obj);
// obj.greet();
// let obj2=obj; // Shallow Copy
// console.log(obj2);


// // Array
// let arr = [1,2,3,4,5];
// let arr2= [1,2,true, null, 'Santra'];
// console.log(arr);
// console.log(arr2);

// let brr= new Array('Santra',1,33,true);
// console.log(brr);

// console.log(typeof(brr));
// console.log(brr[0]);
// brr.push("hi there");
// console.log(brr);
// brr.pop();
// brr.shift();
// brr.unshift("Namaste");
// brr.push(34);
// brr.push(64);
// brr.push(84);
// console.log(brr);
// console.log(brr.slice(2,4));
// brr.splice(1,2,"Removed 1 and 33");
// console.log(brr);


// let arr = [10,20,30,11];
// let ans =arr.map((number)=>{
//     return number*number;
// })
// console.log(ans);

// arr.map((number,index)=>{
//     console.log(number+1);
//     console.log(index);
// })

// let ans2=arr.filter((number)=>{
//     if(number%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans2);


// let arr2=['hello',true,3,4,6,null];
// let ans3= arr2.filter((value)=>{
//     if(typeof(value) === 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans3);

// let arr4=[10,20,30,40];
// let sum=arr4.reduce((acc,curr)=>{
//     return acc+curr;
// },0)
// console.log(sum);

let arr=[12,34,11,78,55,23];
arr.sort((a,b)=>b-a);
console.log(arr);

console.log(arr.indexOf(78))

let ans=arr.find(x=>x>25);
console.log(ans);

arr.forEach((value,index)=>{
    console.log("Value :",value,"Index: ",index);
})

for(let x in arr){
    console.log(x," ",arr[x]);
}

let fname="Santra";
for(let key of fname){
    console.log(key);
}

let getSum=(arr)=>{
    let sum=0;
    arr.forEach((value)=>{
        sum+=value;
    })
    return sum;
}
let sum=getSum(arr);
console.log(sum);