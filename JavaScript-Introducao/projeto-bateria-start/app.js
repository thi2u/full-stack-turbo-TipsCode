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

// Função que verifica se o usuário clicou em um dos elementos de nossa tela
keysPressed.forEach(keyClick)
function keyClick(item, indice){
    bodySelected.addEventListener("keydown", function (e){
        if (e.code == item){
        tocarAudio(indice)
        }
        console.log (e.code)
    }
)
}
botoes.forEach(handleClick)
function handleClick(item, indice){
    item.addEventListener("click", function (){
        tocarAudio(indice)
    }
)
}

// Função que captura as teclas pressionadas e verifica se é igual às teclas indicadas em nosso array, que identifica W, A, S, D, J, K, L
keysPressed.forEach(keyClick)
function keyClick(item, indice){
    bodySelected.addEventListener("keydown", function (e){
        if (e.code == item){
        tocarAudio(indice)
        }
        console.log (e.code)
    }
)
}

// Função para tocar o áudio
function tocarAudio(indice){    
    const audioDrum = new Audio(fileSounds[indice])
    audioDrum.play()
}