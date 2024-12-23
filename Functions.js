//Block of code that perform a specific task and can be invoked as many as times

 function myFunction(x,y)  ///parameter      
 {
   //xa and y are local variables and they have block scope 
   sum = x+y;
   return sum;
 }
 let val = sum(3,4);          //argument
 console.log(val);

 //Arrow functions

 const arrowFunc = (a,b) => {
   console.log(a+b);
 }//everytime we will can the function then the value will be stored in arrowFunction

 //pass the argumenets when executed

 //function to count Vowels in the string

 function countVow(str)
 {
   let count = 0;
   for(const char of str)
   {
      if(char==="a" || char==="e" || char==="i" || char==="o" || char ==="u")
      {
         count++;
      }
   }
   return count;
 }

 //forEach Loop in Arrays

 arr.forEach(callBackFunction)   //callBackFunction here it is a function to execute for each element in the array

 //In javaScript we can pass function as parametere

 //acallBack function is a function that passed as an argument to another function

//Example

let arr = [1,2,3,4,5];

arr.forEach(function myfunc(val) //here val is actually the element of array at eacj idx
{
   console.log(val);
});

//we generally use arrow function in the case of arrow function

//forEach is only used for arrays not for the strings

//forEach function is also called higher Order function/methods

arr.forEach((val , idx, arr)=>     //idx will print the index and arr will print the whole array
{
   console.log(val,idx,arr);
});


//functions are simply that we create but when we use them with an object we tend to call it methods 
//for example str.toUpperCase() //it is called method

//or for the above we can seperately amke a arrow function and store it in a variable and the pass that variable in the forEach 

let nums = [1,2,3,4,5,6,89];

let calcSquare = (num) => {
   console.log(num*num);
};

nums.forEach(calcSquare);

//some more array methods

//map -> creates a new array with the results of some operation. The value its callback return are used to form new Array
//map is used to create a new array with some operation done on the original elements of the array
arr.map(callBackFunction(value,indexedDB,array));

let newArr = nums.map((val) => {
   return val*2;
});

//filter -> creates a new array of elements that give true for a condition/filter.
//e.g all even elements 

let evenArrr = arr.filter((val)=>
{
   return val%2 ===0;
});

// reduce -> performs some operations & resduce the array to a single value. It returns the single value

let ar = [1,2,3,4,5];

const output = ar.reduce((res,curr)=>
{
   return res >curr ? res : curr;
});

console.log(output);
