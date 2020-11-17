/*console.log(window.webkitSpeechRecognition);*///  speech recognition its detection speech .

////let button = document.querySelector("button");
//button.addEventListener("click",(e)=>{
window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
//console.log(recognition);
recognition.interimResults = true;
recognition.addEventListener("result", (e)  =>  {
    button.innerHTML ="Speak";
    let transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
   p.textContent = transcript;
    if(e.results[0].isFinal) {
        p = document.createElement("p");
        words.appendChild(p);
    }
    else {

        console.log(transcript);
    }

   
});
recognition.addEventListener("end",recognition.start);
recognition.start();
     