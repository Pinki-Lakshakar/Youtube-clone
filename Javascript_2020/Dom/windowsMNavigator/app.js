//Windows. navigator .
// navigator  object contains information about browser.
// navigator object is detecting some information about user agent == online webcam,
// geolocation.
//appcodeName.
console.log(window.navigator.appCodeName);
console.log( "APPNAME",window.navigator.appCodeName);
console.log("APPVERSION ",window.navigator.appCodeName);
console.log( "ONLINE",window.navigator.appCodeName);

if( window.navigator.online){
    document.write('<p style ="color:green">online </p>');
}
else{
    document.write('<p style ="color:grey">offline</p>');

}
/*========================================================*/
console.log("PLATFORM" , Window. navigator.platform);
// it  is detecting platform example windows ,linux,,apple,mobile/.
if( window. navigator.platform){
    console.log("this is windows platform ");
    document.write(' <button style ="border:none;
    background:blue;color:white; ">Download for ubuntu </button>');

   
}

else  if  {
    console.log("this is linux platform ");
    document.write(' <button style ="border:none;
    background: orange; color:white;">Download for ubuntu </button>');
}
 else if  (window.navigator.platform){
     console.log("this is Mac Platform");

 }
 else {
     console.log("other platform ");
 }



