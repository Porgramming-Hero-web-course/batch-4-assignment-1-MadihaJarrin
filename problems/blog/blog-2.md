## How to handle asynchronous operations using async/await over callback/promise TypeScript.

Asynchronous operation is an essential concept when dealing with operations that take time to complete such as fetching data from API, file reading and database queries. In TypeScript, there are several ways to handle asynchronous operations such as Callbacks, Promises and async/await. From them, when all of these methods have their use cases, async/awiat provides more readable and maintainable way of handling asynchronous operations compared to callback and promised. So, Let's explore about it. 

# Callback:
At first, we have to know what is callback function? Let's learn about this. 
A callback function passed into another function as an argument that is executed once the asynchronous operation complete. If I give you an example, that would be like this:


```Typescript
function fetchData(callback: (data: string)=> void ){
    setTimeOut(()=>{
        callback("data fetched);
    }, 1000);
}
fetchData((message)=>{
    conosle.log(messaeg) //data fetch will be the output .
})

``` 
callback function has some drawbacks as well such as callback hell. when multiple asynchronous operations depends on each other, callback can become nested that is leading to callback hell which is difficult to read and maintain. if I give an example of nested callback what would be like this:


```Typescript
fetchData((data1)=>{
    fetchData((data2) =>{
        fetchData((data3)=>{
            console.log(data3);
        })
    })
});
```

Also managing errors with callbacks canbe tricky, it might need to be passed through several layeers of callbacks. 


# Promises:
Promised provide a cleaner way to handle asynchronous operations. It represents a value that may be available now or in future or never. It has three states: pending, fulfilled and rejected .
Benefits of promised:
Cleaner syntax: promises allowo chaining with .then() and .catch() making thr code easier to read compare to nested callbacks.Promised have built-in mechanisms to handle error via .catch().


```Typescript
fetchData()
.then((data)=>{
    console.log(data);
    return fetchData();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.error(error);
});
```

Although promises offer better readability and error handling than callback, they can still lead to complex code when many asynchronous operations needs to be chained.



# async/await:
The async/await syntax is more modern approach that build on top of promises which improves code readability and error handling.
Async: A function declared as async will always return a promise. That means this function returns a value, it will be wrapped in a resolved promise.
Awiat: The await expression can be used inside an async function. It pauses the execution of the async function and waits for the promise to reject.



```Typescript
async function getAllData(){
    try{
        const data1 = await fetchData();
        const data2 = await fetchData();
        const data3 = await fetchData();
        console.log(data1, data2, data3)
    }catch{
        console.log(error)
    }
}
getAllData();
```
### Benefits of async/await:
`-` Synchronous Style: await keyword makes asynchronous code look like synchronous code making it easier to read & maintain.
`-` Error Handling: try/catch for more cleaner error handling.
`-` Avoiding nested promises: async await eliminate the need for chaining .then() & .catch(), making the code more readable. 



So,we can say Key features of Async/await are cleaner Code, Error Handling, No more callback hell.It is especially beneficial when dealing with multiple async operations ans complex error handling.So we should always use async/await for more flexiblity. 









