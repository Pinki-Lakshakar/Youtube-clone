// STring helper method .
// c STring prortype.concat.()
let str1="hello";
let str2="world";
let str3=[" i love java"];

//let concat = str1.concat("",str2,"",str3);
//console.log(typeof concat);// STring 
let results = str1 + " "+ str2 + " " + str3;
let es6way = '${ str1.toUppercase()} ${str2} ${str3.join("").toUpperCase()}';// error in this line
console.log(results);//hello world i love java
console.log(es6way);//'${ str1} ${str2} ${str3}'// error
/****=============================================  ends here ======================================= */



