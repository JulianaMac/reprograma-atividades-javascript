// Escreva uma função chamada pegaElemento.
// Dado um array e um inteiro, pegaElemento devolve o valor de acordo com o inteiro dado, dentro do array fornecido.
// Se o array tiver um comprimento de 0, ele deve retornar undefined.

// Exemplo de entrada:
// console.log(pegaElemento([1, 3, 5], 1);

function pegaElemento(arr,num){

    if (arr.length === 0){
        return 'undefined';
    }else {
    return arr[num]
    }

}
console.log(pegaElemento([1,2,3,4], 3))