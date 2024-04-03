//for text to voice button
let speech= new SpeechSynthesisUtterance();
let textarea=document.querySelector("textarea")
let button = document.querySelector("button");


button.addEventListener("click",()=>{
    speech.text= textarea.value;
    window.speechSynthesis.speak(speech);
})


//for change voice language
let voices= [];
let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();    
    speech.voice= voices[0];
   
    //to add options for select tag
    voices.forEach((voice,i) =>(voiceselect.options[i] = new Option(voice.name, i)));
}

voiceselect.addEventListener("change",()=>{
    speech.voice =voices[voiceselect.value];
})
