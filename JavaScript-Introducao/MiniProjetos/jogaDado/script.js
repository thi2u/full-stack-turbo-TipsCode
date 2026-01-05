function iniciarJogo(){
    let abaPrincipal = document.querySelector(".abaPrincipal")
    let tituloPlayer = abaPrincipal.querySelectorAll(".tituloPlayer")
    console.log(tituloPlayer)
    
    let respostaUsuario = confirm("Gostaria de inserir o nome dos jogadores?")

    nomePlayers(respostaUsuario)
    
    if(respostaUsuario === true){
    if(jogador1 != ""){
        tituloPlayer[0].textContent=jogador1
    }
    if(jogador2 != ""){
        tituloPlayer[1].textContent=jogador2
    }
    }
}

function nomePlayers(respostaUsuario){
    if (respostaUsuario) {
        jogador1 = prompt("Qual o nome do jogador 1?");
        jogador2 = prompt("Qual o nome do jogador 2?");
    }
}