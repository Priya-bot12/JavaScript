let heading = document.getElementById("heading");
console.dir(heading);   /*if there doesnt exist any id with heading it will print null*/

let headings = document.getElementsByClassName("heading2");
console.dir(headings);   /*If there does not exist any class as heading 2 it will print the HTML Collection with 0 length which is similar to array*/

let paras = document.getElementsByTagName("p");
console.dir(paras);

let firstEl = document.querySelector("p"); //always return the first Element
console.dir(firstEl);

let allEl = document.querySelectorAll("p") //return all the elements
console.dir(allEl);

// let div = document.querySelector("div");
// console.dir(div);

// let id = div.getAttribute("id");
// console.log(id);

let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));

// let divv = document.querySelectory("div");

// divv.style.backgroundColor = "green"  // we can dirrectly make changes in the styling with JS without using CSS file


//ADD THE BUTTON AT THE LAST OF THE LIST

let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);