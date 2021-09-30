/*
funções
    funções do js
        alert()
        console.log()
    funções personalizadas
      -  funçoes criadas pela pessoa que está desenvolvendo.
      -  a função precisa ser chamada para ser executada
      -  para criar uma função usamos a palabra function
      function
      function abacaxi(){

      }


function EscreverFrases(texto){
    console.log(texto)
}

EscreverFrases("Tudo sei que nada sei")
EscreverFrases("Sozinho vou rápido, juntos vamos longe")

    console.log(399*5)
*/

// parseFloat --> converte de texto para decimal
// parseInt --> converte de texto para inteiro

function Converter(){
    // DOM - Document Object Model

    /** PEGAR O VALOR DO CAMPO */
    // let valorEmDolar = document.getElementById("valor").value
    let valorEmDolar = document.querySelector("#valor").value

    /** CONVERTER O VALOR DO CAMPO EM NÚMERO */
    let valorEmDolarNumerico = parseFloat(valorEmDolar)

    let cotacaoDolar = 5
    let valorEmReal = valorEmDolar * cotacaoDolar

    /** INSERIR O RESULTADO NA TELA */
    document.querySelector("#valorConvertido").innerHTML = "O resultado em real é R$" + valorEmReal.toFixed(2)
    
    let bitcoin = valorEmReal / 225000
    document.querySelector("#valorBitcoin").innerHTML = "O resultado em Bitcoin é " + bitcoin.toFixed(2)
}