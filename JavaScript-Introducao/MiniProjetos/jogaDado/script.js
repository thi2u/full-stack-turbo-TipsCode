let abaPrincipal = document.querySelector(".abaPrincipal")
let tituloPlayer = abaPrincipal.querySelectorAll(".tituloPlayer")
let pontosPlayer1 = 0;
let pontosPlayer2 = 0;
const matrizDados = [ 
"./images/dice1.png",
"./images/dice2.png",
"./images/dice3.png",
"./images/dice4.png",
"./images/dice5.png",
"./images/dice6.png"
]

function iniciarJogo(){
    const attributesPlayer1 = abaPrincipal.querySelector("#dadoPlayer1")
    const attributesPlayer2 = abaPrincipal.querySelector("#dadoPlayer2")
    
    const resultadoPlayer1 = Math.floor(Math.random()*6)
    const resultadoPlayer2 = Math.floor(Math.random()*6)

    attributesPlayer1.src = matrizDados[resultadoPlayer1]
    attributesPlayer2.src = matrizDados[resultadoPlayer2]

    if (resultadoPlayer1>resultadoPlayer2) {
        pontosPlayer1++
    } else if (resultadoPlayer1 != resultadoPlayer2){
        pontosPlayer2++
    }

    abaPrincipal.querySelector("#pontosPlayer1 p").textContent=pontosPlayer1
    abaPrincipal.querySelector("#pontosPlayer2 p").textContent=pontosPlayer2

    if (pontosPlayer1>pontosPlayer2) {
        abaPrincipal.querySelector("#textoVencedor").textContent = tituloPlayer[0].innerHTML + " está ganhando"
    } else if(pontosPlayer2 != pontosPlayer1) {
        abaPrincipal.querySelector("#textoVencedor").textContent = tituloPlayer[1].innerHTML + " está ganhando"
    } else {
        abaPrincipal.querySelector("#textoVencedor").textContent = "Está empatado"
    }

    abaPrincipal.querySelector("#boxPlacar").classList.add("activeBlock")
}

nomePlayers()

function nomePlayers(){
    let respostaUsuario = confirm("Gostaria de inserir o nome dos jogadores?")
    
    captandoNomes(respostaUsuario)
    
    if(respostaUsuario){
    if(jogador1 != ""){
        tituloPlayer[0].textContent=jogador1
        tituloPlayer[2].textContent=jogador1
    }
    if(jogador2 != ""){
        tituloPlayer[1].textContent=jogador2
        tituloPlayer[3].textContent=jogador2
    }
    }
    }
    
    function captandoNomes(respostaUsuario){
        if (respostaUsuario) {
            jogador1 = prompt("Qual o nome do jogador 1?");
            jogador2 = prompt("Qual o nome do jogador 2?");
        }
}