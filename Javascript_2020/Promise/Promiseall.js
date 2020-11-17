let java=new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("i love java");
    },1000);

});

let javascript=new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("i love javascript");
    },500);

});
let python=new Promise((resolve, reject) =>{
    setTimeout(()=>{
        reject("i love python");
    },1500);

});
Promise.any([java,javascript,python]).then(lang =>{
    console.log(lang)// i like java  i like javascript , i like python .
  
}).catch(err => console.log(err))
/***===================================== Trying  Example Also==================== */


let promise1= new Promise ((resolve,reject)=>{
 let dolikeme = false;
 if( dolikeme) {
        resolve("i am liking you ");
 }
 else {
     resolve("no i hate you ");
 }
    });
s

    promise1.then(like => console.log(like)).catch (err=>console.log(err));
    // no i hate you .... !