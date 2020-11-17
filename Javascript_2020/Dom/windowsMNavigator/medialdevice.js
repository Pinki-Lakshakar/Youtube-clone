//windows.navigator.mediaDevice();
//console.log( window.navigator.mediaDevice);//undefined
let VedioData=document.querySelector("vedio");
function getVedio(){
    window.navigator.mediaDevices.getUserMedia({
    //let getData =window.navigator.mediaDevices.getUserMedia({
        Vedio:true,
        audio:true,
    })
    //console.log(getData);
//}
//getVedio();
.then((MediaStream) => {
        console.log(MediaStream);
        VedioData.srcObject = MediaStream;
    

    })
    .catch((err)=> console.log(err));
}
getVedio();
/**================================================================= */
let Vediodata = document .querySelector("vedio");
console.log(Vediodata);
function getLiveIpMatch(){
    window.navigator.mediaDevices
    .getUserMedia({vedio:true,audio:true})
    .then((MediaStream)=>{
        Vediodata.srcObject = MediaStream;
    })
    .catch((err)=> console.log(err));
}
getLiveIpMatch();
   // alert( Vediodata.srcObject);// undefined
    //"hello dhoni we are waiting ....");


//}
//GetLiveIpMatch();
/**================================================== */
//window.navigator.geolocation//google map latitude amd longitude,
// coordinates.
window.navigator.geolocation.getCurrentPosition((position)=>{
    //its detecting my current location 
    position.coords.latitude + position.coords.longitude;

});

