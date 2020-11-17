//Synchronouse vs Asynchronous.
// by  usi g event -loop  convert synchronous calls into asychronous calls .
// set Timeout ()
// Ajaxcalls
//promises
//synchronous Example.

/*let results =0;
for (let i = 0; i < 10000000000000 ; i++){
    results += 1;
}
console.log(results);


let afterloop= "after loop";
console.log(afterloop)*/
//Asynchronous 
let results = 0;
window.setTimeout(function (){
    let div =document .createElement("div");
    div.innerHTML='<h1 style="color:white"> i am Div </h1>';
    document.body.append(div);

},10000);

console.log(results);

let Pinki ="sir i am Pinki";
document.querySelector("h1").innerHTML =Pinki;


