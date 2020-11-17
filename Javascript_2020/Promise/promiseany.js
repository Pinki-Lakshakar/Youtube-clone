//PromiseAny.Any()
let promise1 = new Promise((resolve, reject) => {
setTimeout(()=>{
    resolve("i am resolve Block ,Promise1 with angualr ");
},1000);


});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("i am resolve Block ,Promise2 with angualr ");
    },50);
    
    
    });

    let promise3 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("i am resolve Block ,Promise3 with angualr ");
        },500);
        
        
        });

        
/*Promise.any([promise1,promise2,promise3])
.then((anyMethod)=>{
    console.log(anyMethod);
    })
    .catch((err)=> console.log(err));
    */
   Promise.allsettledMethod([promise1,promise2,promise3])
   .them((allsettledMethod)=>{
      allsettledMethod.forEach((x)=>console.log(x));
   })
.catch((err)=> console.log(err));