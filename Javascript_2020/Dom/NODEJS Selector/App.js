 // elector Interface
 //rySelector();
 // it access only one elememt like getelementBYid
 let SingleElement=document.querySelector(".badge");
 console.log("i am single Element ",SingleElement);

 //rySelectorAll();
 // multiple elements like documemt.getElemenyByClassName, documemt.getelementBYTageName

 let MultipleElement=document.querySelectorAll(".badge");

 // its return multiple no need convert in to array.
 // nodelistnis having foreach method by deafult
 console.log("i am mutiple element Block  ", MultipleElement);
 MultipleElement.forEach((badge)=> console.log(badge));
 console.log(typeof MultipleElement);
 console.log(Array.isArray(MultipleElement)); // false