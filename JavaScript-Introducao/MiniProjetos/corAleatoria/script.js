function mudaCor(){
    const colorR = Math.floor(Math.random()*256)
    const colorG = Math.floor(Math.random()*256)
    const colorB = Math.floor(Math.random()*256)
    
    
    
    printColor(colorR, colorB, colorG)

}

// Funções para converter Cor RGB para Cor HEX

function convertHex(numero){
    
    let numeroConvertHex1 = Math.floor(numero / 16)
    let numeroConvertHex2 = Math.floor(numero % 16)

    numeroConvertHex1 = ajusteHex(numeroConvertHex1)
    numeroConvertHex2 = ajusteHex(numeroConvertHex2)
    
    return `${numeroConvertHex1}${numeroConvertHex2}`
}

function ajusteHex(numeroConvertHex){
    const tableColor = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ]
    
    if (numeroConvertHex < 10) {
        return numeroConvertHex
    } else {
        return tableColor[numeroConvertHex-10]
    }
}

function printColor(colorR, colorG, colorB){
    const colorRGB = `(${colorR}, ${colorG}, ${colorB})`
    const colorHex = "#" + convertHex(colorR) + convertHex(colorG) + convertHex(colorB)

    document.querySelector("#rgb p").textContent = colorRGB
    document.querySelector("#hex p").textContent = colorHex
    
    document.querySelector("#bodyVisible").style.backgroundColor = colorHex
}