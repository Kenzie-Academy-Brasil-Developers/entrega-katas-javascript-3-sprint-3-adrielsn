const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResult(chamaResultado) {
    const resultados = document.getElementById("results")

    const paragraph = document.createElement("p")

    paragraph.innerText = chamaResultado

    resultados.appendChild(paragraph)
}



function kata1() {
    // implemente o código do kata 1 aqui
    let resposta = []
      
    for (let n=1;n<=25;n++) {
    resposta.push(n)
    }
    return resposta
  
}

showResult(kata1())

function kata2() {
    // implemente o código do kata 2 aqui
    let resposta = []
      
    for (let n=25;n>=1;n-=1) {
    resposta.push(n)
    }
    return resposta
  
}
showResult(kata2())

function kata3() {
    // implemente o código do kata 3 aqui
    let resposta = []
      
    for (let n=-1;n>=-25;n-=1) {
    resposta.push(n)
    }
    return resposta
  
}
showResult(kata3())

function kata4() {
    // implemente o código do kata 4 aqui
    let resposta = []
      
    for (let n=-25;n<=-1;n++) {
    resposta.push(n)
    }
    return resposta
}
showResult(kata4())

function kata5() {
    // implemente o código do kata 5 aqui
    let array = []
    let resposta = []
    
    for (let n=25; n>=-25; n-=1) {
        array.push(n)
        }
    
    for (let n=0; n<array.length; n++) {
            if (array[n] % 2 !== 0) {
                resultado.push(array[n])
            }           
       }
    return resultado
    
    
    for (let n=25;n>=-25;n-=1) {
    resposta.push(n)
    }
    return resposta
}
showResult(kata5())

function kata6() {
    // implemente o código do kata 6 aqui
    let resposta = []
      
    for (let n=3;n<=100;n+=3) {
    resposta.push(n)
    }
    return resposta
}
showResult(kata6())

function kata7() {
    // implemente o código do kata 7 aqui
    let resposta = []
      
    for (let n=7;n<=100;n+=7) {
    resposta.push(n)
    }
    return resposta
}
showResult(kata7())

function kata8() {
    // implemente o código do kata 8 aqui
    let array = []
    let resultado = []

    for (let n=100; n>=1; n-=1) {
        array.push(n)
        }
    
    for (let n=0; n<array.length; n++) {
            if (array[n] % 3 === 0 || array[n] % 7 === 0 ) {
                resultado.push(array[n])
            }           
       }
    return resultado
   
}
showResult(kata8())

function kata9() {
    // implemente o código do kata 9 aqui
    let resposta = []
      
    for (let n=5;n<=100;n+=10) {
    resposta.push(n)
    }
    return resposta
}
showResult(kata9())

function kata10() {
    // implemente o código do kata 10 aqui
    return sampleArray
    
}
showResult(kata10())

function kata11() {
    // implemente o código do kata 11 aqui

    let pares = []

    for (let n=0; n<sampleArray.length; n++) {
        if (sampleArray[n] % 2 === 0) {
            pares.push(sampleArray[n])
        }
    }
    return pares
}
showResult(kata11())

function kata12() {
    // implemente o código do kata 12 aqui
    
    let impares = []

    for (let n=0; n<sampleArray.length; n++) {
        if (sampleArray[n] % 2 !== 0) {
            impares.push(sampleArray[n])
        }
    }
    return impares

}
showResult(kata12())

function kata13() {
    // implemente o código do kata 13 aqui

    let divPor8 = []

    for (let n=0; n<sampleArray.length; n++) {
        if (sampleArray[n] % 8 === 0) {
            divPor8.push(sampleArray[n])
        }
    }
    return divPor8
}
showResult(kata13())

function kata14() {
    // implemente o código do kata 14 aqui

    let quadrado = []

    for (let n=0; n<sampleArray.length; n++) {
        quadrado.push(sampleArray[n]*sampleArray[n])
    }
    return quadrado
}
showResult(kata14())

function kata15() {
    // implemente o código do kata 15 aqui
    let resposta = []
    let soma = 0
    
    for (let n=1;n<=20;n++) {
    resposta.push(n)
    }

    for (let n=0;n<resposta.length;n++){
    soma += resposta[n]
    }
    return soma
}
showResult(kata15())

function kata16() {
    // implemente o código do kata 16 aqui

    let soma = 0
    
    for (let n=0; n<sampleArray.length; n++) {
        soma += sampleArray[n]
    }
    return soma
}
showResult(kata16())

function kata17() {
    // implemente o código do kata 17 aqui
    return sampleArray[7]
}
showResult(kata17())

function kata18() {
    // implemente o código do kata 18 aqui
    return sampleArray[18]
}
showResult(kata18())

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
