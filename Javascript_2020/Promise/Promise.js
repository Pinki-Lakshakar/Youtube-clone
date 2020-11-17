//promise.race()
let promise1= new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("i am resolve Block i am slower")
    },1000)

});
let promise2= new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("i am resolve Block i am  faster")
    },500)

});
Promise.race([promise1,promise2]).then(data =>{
    console.log(data)

}).catch(err => console.log(err))
/*-------------------------------------------------------------*/
//promise.race()
let promise3= new Promise(function (resolve,reject) {
    setTimeout(() => {
        resolve(" i am executing first")
    },1000)
    setTimeout(()=>{
        reject ("i am reject ");
    },500);

});
promise3 
.then((data)=>{
    console.log(data);
})
.catch(err => console.log(err));
//Promise.all();
/*Promise.race();
promise.any();


promise.prototype.then();
promise.prototype.catch();
promise.prototype.finally();
*/

let java = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("java is faster");
    },1000);
});
let javascriptisfaster = new Promise((resolve,reject)=>{
 setTimeout(()=>{
        reject("javascript is faster");
    },500);
});
Promise.race([java,javascriptisfaster]).then((faster)=>
{console.log(faster);

})
.catch((err)=> console.log(err));