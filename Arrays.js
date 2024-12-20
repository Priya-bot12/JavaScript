//Collection of items
//store the same type of data

let name = ["priya", "Nandita", "Tushar"];
let marks = [34,45,56,78]
let info = ["priya", 78]  //not preffered

//marks.length
// typeof arrays is object 
/* arrays are key value pair basically where index are keys*/

// access the elements are like arr[0] 
// if we try to access the index that is not present in array that it gives undefined
//arrays are mutale means there elements can be changed

//Arrays Method
//some methods return a new array and some change the original
//1. arr.push("apple","litchi") //at last
//2. arr.pop() //we can stored the elemet popped from the last
//3. arr.toString //return a new string
//4. arr1.concat(arr2,arr3)  // concat two arrays and return a new array do not change in the original array and we can concat multiple arrays too
//5. arr.unshift("Priya") //add to the start
//6. arr.shift() //delete from the start and return 
//7. arr.slice(start,end) //do not make changes in original
//8. arr.splice(startingIndex, delCount, newElements)  //make changes in the original array

/*in splice start is the index and after that there is the count of elements that we want to delete after that index and the after the 
there are elements that we want to addd after that index*/
