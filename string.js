//strings

let str1 = "Priya";
let str2 = 'Chauhan';

//Strings are IMMUTABLE IN JAVASCRIPT;
//methods of string
//str.length
//access is strings are like str[0]
//str.toUpperCase()   //these methods do not change the original string in fact they made new updated string so we have to store the update string then use is further
//str.toLowerCse()
//str.trim() //remove the whitespaces from the starting and ending
//str.slice(start,end) //ending value is non inclusive
//str1.concat(str2) //add both the strings also can be done by using "+"
//str.replace(searchVal,newVal)  //replave the fisrt value to "newVal" that matches to "searchVal"
//str.replaceAll(searchVal,newVal) //replace everytime it matches
//str.charAt(i);


//template literals - A way to have embedded expressions in strings

let specialTypeOfString = `This is a template String`;

//in literals we do string interpolation means to create strings by doing substitution of placeholder

let obj =
{
    item : "Pen",
    price : 20,
}

let output = `The cost of the ${obj.item} is ${obj.price} rupees `;

//escape character is
//  \n // for the next line   //if we write it between the string that it is count as a single character even though there are two characters that are \ and n
//  \t //for the tab space