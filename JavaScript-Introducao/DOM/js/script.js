// alert("Eaí meu chapa!")

// document.getElementById("list").style.backgroundColor="orange"


function mudaEstilo(elementos, propriedade, oqMuda){
    let teste = document.querySelectorAll(elementos)

    for(let itemArrayJS = 0; itemArrayJS<teste.length;itemArrayJS++){

        teste[itemArrayJS].style[propriedade]=oqMuda
    }
}