// String .prototype.slice().




let str=" javaScript";
//console.log(str.slice(0,4));// error 
/**============================================================= */

//let str1=" javascript";
//console.log(str1.slice(-4));// error 

// String .substring()
//console.log(str1.substring(0, 4));// java// error 
//console.log(str1);
console.log(str.slice(4, 0));// empty string 
console.log(str.substring(4, 0));//jav//error
console.log(str.substr(0,4));//jav // error.