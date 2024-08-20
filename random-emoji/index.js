 const btnEl = document.getElementById("btn")
 const emojiNameEl = document.getElementById("emoji-name")

const emoji = []

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=64e06a4ebd5e92c1d54c20e331132622e0d90c2a")
    data = await response.json()
    for(let i = 0; i < 1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }
}

getEmoji()

 btnEl.addEventListener("click", ()=>{
     const random = Math.floor(Math.random() * emoji.length)
     btnEl.innerText = emoji[random].emojiName
     emojiNameEl.innerText = emoji[random].emojiCode

 })

