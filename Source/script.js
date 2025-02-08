function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    speak("I love you. will you be my bandi?")
}

window.addEventListener('load', ()=>{
    wishMe()
});


// function wishMe(){
//     let day = new Date()
//     let hours = day.getHours()
//     if(hours >= 0 && hours < 12){
//         speak("I love you. will you be my bandi?")
//     }else if(hours >= 12 && hours < 16){
//         speak("Good Afternoon Sir")
//     }else{
//         speak("Good Evening Sir")
//     }
// }

// window.addEventListener('load', ()=>{
//     wishMe()
// });
 


const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const cta = document.querySelector(".buttons");  // Corrected the way 'cta' is selected
const emoji = document.querySelector(".emoji")

noBtn.addEventListener('mouseenter', () => {
    const yesIdx = Array.from(cta.children).indexOf(yesBtn);
    const noIdx = Array.from(cta.children).indexOf(noBtn);
    

    if (yesIdx < noIdx) {
        cta.insertBefore(noBtn, yesBtn);
        emoji.style.visibility = "visible";
        
    
    } else {
        cta.insertBefore(yesBtn, noBtn);
        emoji.style.visibility = "hidden";
        
    }
});




