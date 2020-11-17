//Promisesettled method......!
let promise1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject(" i am resolve Block, Promise1 with angular ")
    },1000);
     
});
let promise2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject(" i am resolve Block, Promise1 with angular ")
    },1500);
     
});
let promise3 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject(" i am resolve Block, Promise1 with angular ")
    },500);
     
});
let promise4= new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject(" i am resolve Block, Promise1 with angular ")
    },200);
     
});
let promise5= new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject(" i am resolve Block, Promise1 with angular ")
    },100);
     
});
Promise.allSettled([promise1,promise2,promise3,promise4,promise5])
.then((angular)=>{
    angular.forEach((x)=> console.log(x.status));
})
.catch((err)=> console.log(err));
// rejected