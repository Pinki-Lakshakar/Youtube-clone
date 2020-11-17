
//dom selectors
let template=document.getElementById("Template");
console.log(template);


//badge
let badges=document.getElementsByClassName("badge");
//getelementByclassname will give HTMlCollection
//htmlcollectipn is not an array just array like 

//console.log(badge[3]);
//console.log(badges[1]);

//badge.forEach((x)=> console.log(x)); //for each is not defained 
/*console.log( typeof badge);
console.log(Array.isArray(badge));*/

for(let i=0; i <=badges.length ; i++){
    console.log( " i am map for loop " ,badges[i]);
}


Array.form(badges).forEach((x)=> console.log("I am map from foreach",x));
[...badges].map((x)=> console.log("i am map",x));
//foreach()// array method 
//getElementsByClassName will give HTMLAllCollection
// CSS way also  can get element by using query selector
// document.querySelector();//css selector
//document.querySelectorAll();
/**=================================================================== */
let images= document.getElementsByTagName("form","span");

console.log(images);//html collection 
[...images].forEach((img)=> console.log(img));

[...images].map((img)=> console.log(img));