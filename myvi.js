let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
let audio=document.querySelector("#audio")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.rate=1
    text_speak.volume=1
    text_speak.lang='en-IN'
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("goog morning Biswa I am ROCKY your virtual assistant")
    }
    else if(hours>=12 && hours<16){
        speak("good afternoon biswa I am rocky your virtual assistant")
    }
    else if(hours>=16 && hours<19){
        speak("good evening biswa I am rocky your virtual assistant")
    }
    else{
        speak("good night biswa I am rocky your virtual assistant")
    }
}
window.addEventListener('load',()=>{
    wishMe()
    audio.style.display="flex"
})
  let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
  let recognition=new speechRecognition()
  recognition.onresult=(event)=>{
  let currentIndex=event.resultIndex
  let transcript= event.results[currentIndex][0].transcript
  content.innerText=transcript
   takeCommand(transcript.toLowerCase())
  console.log(event)
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
    audio.style.display="none"

})
function takeCommand(message){
    btn.style.display="flex"
     voice.style.display="none"
     audio.style.display="flex"
if(message.includes("hello") || message.includes("hey")){
    speak("hello biswa ,what can i help you ")
}
else if(message.includes("who are you")){
    speak("I am Rocky virtual assistant")
}
else if(message.includes("open youtube")){
    speak("opening youtube")
    window.open("https://www.youtube.com/ ")
}
else if(message.includes("open google")){
    speak("opening Google...")
    window.open("https://www.google.co.in/")
}
else if(message.includes("open calculator")){
    speak("opening calculator.....")
    window.open("calculator://")
}
else if(message.includes("open instagram")){
    speak("opening instagram.....")
    window.open("instagram://")
}
else if(message.includes("open whatsApp")){
    speak("opening whatsApp.....")
    window.open("whatsApp://")
}
else if(message.includes("open Mail")){
    speak("opening mail.....")
    window.open("mail://")
}
else if(message.includes("open PowerPoint")){
    speak("opening powerPoint.....")
    window.open("PowerPoint://")
}
else if(message.includes("open Word")){
    speak("opening Word.....")
    window.open("Word://")
}
else if(message.includes("open Excel")){
    speak("opening Excel.....")
    window.open("Excel://")
}
else if(message.includes("open Edge")){
    speak("opening Edge.....")
    window.open("Edge://")
}
else if(message.includes("open Settings")){
    speak("opening Settings.....")
    window.open("Settings://")
}
else{
    let tftext="this is what i found on internate regarding "+message.replace("ROCKY")
    speak(tftext)
    window.open(`https://www.google.com/search?q=${message.replace("ROCKY")}`)
}
}