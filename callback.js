//Callback

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData)
        {
            getNextData();
        }
    },2000);
}

getData(1,()=>{
    getData(2);
});

//promise chaining

getData(1)
    .the((res)=>{
        return getData(2);
    })
    .then((res)=>{
        console.log(res)
    });

//promises

let promise = new Promise((resolve,reject)=>{
    console.log("It is a promise");
    resolve("Done");
    reject("some error occurred");
})

//async function 
//unecessay call of function
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

//IIFE
(async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
})();

