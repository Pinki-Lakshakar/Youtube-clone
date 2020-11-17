// Data Object
// data and time in javascript go with  build in data object 
/*let data = new Data();
console.log(data);


 Data Object */

 function DigitalClock(){
     let date = new Date();
     let hour=date.getHours();
     let minutes =date.getMinutes();
     let seconds=date.getSeconds();
     let AmorPm = date.getHours() < 12 ?"AM":"PM";
     document.getElementById(
         "Clock"
         ).innerHTML= `<h1>${hour}:${minutes}:${seconds}:${AmorPm}</h1>`;

 }
 DigitalClock();
 setInterval(DigitalClock,1000);