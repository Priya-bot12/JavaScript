//for loop

for(let i = 1 ; i<=5 ;i++)
{
    console.log("Name");
}

//while loop

while(condition)
{
    //code
    //updation
}

//do while loop

do{

}while(condtion);    //there is a semicolon

//for-of //on datatypes

for(let ch of str)
{
    console.log("ch=",ch)
}

//for-in loop //loops of object

let student = {
    name : "Priya Chauhan",
    age : 20,
    cgpa : 7.5,
    isPass : true,
}

for(let key in student)
{
    console.log("key=",key , "Value=" ,student[key]);
}

//the input that we get from the prompt is by default in the form of string
