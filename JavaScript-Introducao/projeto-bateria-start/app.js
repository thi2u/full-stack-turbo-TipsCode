const botoes = document.querySelectorAll(".set button")
const bodySelected = document.querySelector("body")

const fileSounds = [
    './sounds/crash.mp3',
    './sounds/kick-bass.mp3',
    './sounds/snare.mp3',
    './sounds/tom-1.mp3',
    './sounds/tom-2.mp3',
    './sounds/tom-3.mp3',
    './sounds/tom-4.mp3'
]

const keysPressed = [
    "KeyW",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyJ",
    "KeyK",
    "KeyL"
]

const imagesBateria = [
    "./images/crash.png",
    "./images/kick.png",
    "./images/snare.png",
    "./images/tom1.png",
    "./images/tom2.png",
    "./images/tom3.png",
    "./images/tom4.png"
]

// Função que verifica se o usuário clicou em um dos elementos de nossa tela
bodySelected.addEventListener("keydown", function (e){
    const keyDown = keysPressed.indexOf(e.code)
    if (keyDown !== -1){
    tocarAudio(keyDown)
    }
}
)

botoes.forEach(handleClick)
function handleClick(item, indice){
    item.addEventListener("click", function (){
        tocarAudio(indice)
    }
)
}

// Função para tocar o áudio
function tocarAudio(indice){    
    const audioDrum = new Audio(fileSounds[indice])
    audioDrum.play()
}

for (let indice = 0; indice < botoes.length; indice++) {
    botoes[indice].style.backgroundImage=`url(${imagesBateria[indice]})`
    botoes[indice].style.backgroundSize=`contain`
}