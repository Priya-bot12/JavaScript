const URL = "https://cat-fact.herokuapp.com/facts";

let promise = fetch(URL) //it will return a promise 
console.log(promise);

const getfacts = async() =>{
    console.log("getting data....");
    let response = await fetch(URL) //it will return a promise 
    console.log(response);   //here response is an object   //JSON format
    let data = await response.json();  //.json() return the second promise
    console.log(data[0].text);
}