 //direct way of creating objects 

 const student = {
    fullName : "Priya Chauhan",
    marks : 90,
    printMarks : function(){
        console.log("marks = ", this.marks);  //here this.marks is actually student.marks refering to itself 
    },
    //we can also define the methods like the below
    printMarks2(){
        console.log("marks = ", this.marks);  //here this.marks is actually student.marks refering to itself 
    },
 };

 const employee = {
    calTax(){
        console.log("Tax is 10%");
    },
 };

 const priya = {
    salary : 500000,
 };

// now i want that priya object can access the calTax function of employee object for that
// i can set employee object in the prototype of priya

priya.__proto__ = employee;

//another way of creating objects is throug classes
//creation of class

class Car{
    constructor(mileage){
        console.log("creating a new object");
        this.mileage = mileage;
    }
    start(){
        console.log("start")
    }
    stop(){
       console.log("stop"); 
    }
    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new Car(mileage);
fortuner.setBrand("fortuner");

//Inheritance
class Parent{
    constructor(name){
        this.species="homo sapiens"; 
        this.name = name;
    }
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{
    constructor(branch,name){
        super(name);   //to invoke the parent class constructor
        this.branch = this.branch;
    }
    work(){
        super.hello();    //to access the properties and methods of parent class we use super keyword
    }
}
let obj = new Child("cse eng"); 

//ERROR HANDLING

try{
    //code
}catch(err){ //error object

}