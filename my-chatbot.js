let text=document.querySelector("#area")
let userMessage=null;
let container=document.querySelector(".container")
let Api_url='https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBQ8wYG2qEnDp9lY5LHnt9ohM_ztOFLbrc'
let btn=document.querySelector("#btn")
let chatContainer=document.querySelector(".chat-container")

function createChatBox(html,className){
    let div=document.createElement("div")
    div.classList.add(className)
    div.innerHTML=html
    return div
}

async function getApiResponse(aichatbox){

    let textelement=aichatbox.querySelector(".text")

    try{
        let response=await fetch(Api_url,{
            method:"post",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                contents:[
                    {"role":"user",
                        "parts":[{text:userMessage}]
                    }
                ]
            })
        })
        let data=await response.json();
        let apiResponse=data?.candidates[0].content.parts[0].text;
        textelement.innerText=apiResponse
    }
    catch(error){
        console.log(error)
    }
    finally{
        aichatbox.querySelector(".loading").style.display="none"
    }
}

function showaichat(){
    let html=` <div class="img">
         <img src="08-01.jpg" width="20">
      </div> 
      <p class="text"></p>
      <img src="Animation - 1739745867083.gif" alt="loading" class="loading" height="50">`
         let aichatbox=createChatBox(html,"aichat")
         chatContainer.appendChild(aichatbox)
         getApiResponse(aichatbox)
}

btn.addEventListener("click",()=>{
    userMessage=text.value
    if(userMessage==""){
        container.style.display="flex"
    }{
    container.style.display="none"
     }
    if(!userMessage) return;
    let  html=`<div class="img">
         <img src="avatar-3637561_640.png" width="20">
      </div>
      <p class="text"></p>`
    let userchatbox=createChatBox(html,"userchat")
    userchatbox.querySelector(".text").innerText=userMessage
    chatContainer.appendChild(userchatbox)
    text.value=""
    setTimeout(showaichat,700)
})
