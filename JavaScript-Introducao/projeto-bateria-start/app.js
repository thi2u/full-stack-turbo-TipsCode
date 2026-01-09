const botoes = document.querySelectorAll(".set button")
const fileSounds = [
    './sounds/crash.mp3',
    './sounds/kick-bass.mp3',
    './sounds/snare.mp3',
    './sounds/tom-1.mp3',
    './sounds/tom-2.mp3',
    './sounds/tom-3.mp3',
    './sounds/tom-4.mp3'
]

    botoes.forEach(handleClick)

    function handleClick(item, indice){
       item.addEventListener("click", function (){

        console.log("Você clicou no botão " + item.innerHTML + ", na posição " + indice)
       }
        )
    }