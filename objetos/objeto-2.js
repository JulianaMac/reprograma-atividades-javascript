/*
Array para Object
Escreva uma função que receba um array 2d e retorne um objeto com cada par de elementos do array como um par chave-valor. Por exemplo:
const arr = [['fabricante', 'Ford'], ['modelo', 'Mustang'], ['ano', 1964]]
const obj = {
  fabricante : 'Ford',
  modelo : 'Mustang',
  ano : 1964
}
Escreva também uma função que faça o contrário. Transforme os pares de key-value de um object em um array 2d.
*/
const arrCarro = [['fabricante', 'Ford'], ['modelo', 'Mustang'], ['ano', 1964]]

function criarObjeto(arr){
    const obj = {}

    for(let index of arr){
        
        obj[index[0]] = index[1]
    }
    return obj
}
console.log(criarObjeto(arrCarro))
 
