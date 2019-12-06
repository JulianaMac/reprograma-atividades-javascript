// Escreva uma função comprimentoMedioPalavras que receba duas strings e devolva o comprimento médio de ambas as strings.
// Exemplo de entrada:
// console.log(comprimentoMedioPalavras('xuxu', 'bananada')); // --> 6

function comprimentoMedioPalavras(str1,str2){

    let media = (str1.length + str2.length) / 2
    return media
}
console.log(comprimentoMedioPalavras("xuxu","bananada"))