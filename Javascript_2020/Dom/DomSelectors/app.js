// create an element by using dom
// document.createElement()
let div = document.createElement("div");

//document.write(div);//object
//document.write(typeof div);
//div.textContent =" i am div";

div.innerText=" whats is lorem Ipsum is simply dummy text of the printing and typesettings i am inner html "

//console.log(div);


/*let span = document.createElement("span");
let form = document.createElement("form");




 console.log(div);//<div></div>
 console.log(span);//<span></span>
 console.log(form);//<form></form>*/
 document.body.append(div);
 /**======================================================== */
 let  form = document.createElement("form");
 let input = document.createElement("input");
 form.append(input);
 document.body.append(form);
 //console.log(form);<form></form>*/
 //console.log(input);//<input>

 /*============================================== DOM ATTRIBUTES & PROPERTIES ====================================================== */
/*let lead=document.querySelector(".lead");
let span = document.getElementsByClassName("span")[0];
let test = document.querySelector(".test");




let attr1 = lead.getAttribute("title");
let attr2 = span.getAttribute("id");
let attr3 = test.getAttribute("style");

console.log(attr1,attr2,attr3);

console.log(span);*/
/**======================================================================= */
let forms= document.createElement("form");
forms.setAttribute("method","POST");
forms.setAttribute("action ","/");




let username=document.createElement("input");
username.setAttribute("type","text");
username.setAttribute("name","username");
username.setAttribute("id","username");
username.setAttribute("placeholder","Please enter username");


let password=document.createElement("input");
username.setAttribute("type","password");
username.setAttribute("name","password");
username.setAttribute("id","password");
username.setAttribute("placeholder","Please enter password");

let button = document.createElement('button');
button.setAttribute("type","submit");
button.innerHTML="submit";

 console.log(forms);
 console.log(username);
 console.log(password);

