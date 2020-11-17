let IsJavascriptEasyorNot = new Promise((resolve,reject) =>
{
    let IsGoodorBad = false;
    if (IsGoodorBad){
        resolve("yes you are good at javascript");// fullfilled
    
    }
    else{
        reject("yes javascript is not good for me  ");//failure
    }

});
//Promise having method 
//Promise.prototype.then();//fullfiled can then ()
//Promise.prototype.catch();//rejected can catch()


/*IsJavascriptEasyorNot.then((fulfilled) =>{
    console.log(fulfilled);
}).catch((err) => console.log(err));*/
/***========================= */
//Success Block
IsJavascriptEasyorNot.then(function(data){
    console.log(err,"emoji")
});
//Error Block 
IsJavascriptEasyorNot.catch(function(err){
    console.log(err,"smiletag")
});
IsJavascriptEasyorNot.then(data =>console.log(data)).catch(err => console.log(err))
/**================================================== */
let promise1 = function()
{
    return new Promise(function (resolve , reject ){
        setTimeout(()=>
        {
            resolve("i am executing first ");
        },1000);
    });

};
promise1().then((data) =>{
    console.log(data);

})
.catch((err)=> console.log(err));
/**==================================================================== */
/**=========================All Promises ================================= */
let promise11 =new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("i am Promise 1");
    },500);
});
let promise2 =new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("i am Promise 2");
    },600);
});
let promise3 =new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("i am Promise 3");
    },700);
});



let AllPromises = async()=>{
    try{

         /*let beforeTime = new Date();
         let promo11 =await promise11;
         let promo2 =await promise2;
         let promo3 =await promise3;
         let afterTime=new Date();
         console.log(promo11,promo2,promo3,afterTime-beforeTime);*/
         let beforeTime = new Data();
         let res = await Promise.all([promise1,promise2,promise3]);
         let afterTime = new Data();
         console.log(res.join(""), afterTime-beforeTime);
    }
    catch(err){
        console.log(err);
    }
    
    };
    AllPromises();
