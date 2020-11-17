// Dom (document object model )
console.log(window.screen.width,"total width");
console.log(window.screen.height,"total height");
console.log(window.screen.availWidth,"available width");
console.log(window.screen.colorDepth,"color depth");
console.log(window.screen.pixelDepth,"pixel depth");
console.log(window.screen.orientation," orientation ");
/*============================================================================================ */
let Screenobj= window.screen;
if(Screenobj.pixelDepth <8 )
{
    console.log("low resolution ");
    // windows .vedioplayback quality ('low')
}
else {
    console.log("high resolution ");
        // windows .vedioplayback quality ('high')
}
if(Screenobj.width <600 )
{
    console.log("low resolution ");
}
else {
    console.log("high resolution ");
}

