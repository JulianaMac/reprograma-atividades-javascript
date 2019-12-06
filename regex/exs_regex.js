// 01: faça uma função que retorne se uma dada string contém a letra h nela


// function retornarString (palavra){
//     const regex = /h/
//     return regex.test(palavra)
// }

// const resultado = retornarString('baby shark')
// console.log(resultado)

// 02: altere sua função para que ela aceite maiuscula e minuscula (case insensitive)
// function retornarString (palavra){
//     const regex = /h/i
//     return regex.test(palavra)
// }

// const resultado = retornarString('baby shark')
// console.log(resultado)

// 03: altere sua função para que ela retorne se a string
// termina com `a` ou comece com `b`
// aceitando maiuscula e minuscula tambem

// function retornarString (palavra){
//     const regex = /a$|^b/i
//     return regex.test(palavra)
// }

// const resultado = retornarString('baby shark')
// console.log(resultado)
 
// DESAFIO: altere sua função pra verificar a string contem números


function retornarString (palavra){
    const regex = /\d+/
    return regex.test(palavra)
}

const resultado = retornarString('Ju 22')
console.log(resultado)

