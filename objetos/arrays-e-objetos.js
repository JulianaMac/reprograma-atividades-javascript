
const comidas = [
 'Batata frita',
 'Hamburguer',
 'Sorvete de chocolate',
 'Saladinha delicia'
]
 
// 01: Selecione apenas a batatinha

const batatinha = comidas.find(comida => comida === "Batata frita")
console.log('Comida:', batatinha)
 
// 02: Selecione apenas as comidas que comecem com `s` ou `b`

const comidasComSOuB = comidas.filter(c => (/^s|^b/i).test(c))
console.log('Comidas que iniciam com S ou B:', comidasComSOuB)
 
// 03: transforme a lista de comidas em comidas divertidas (adicione uma carinha feliz nelas)
 
const comidas2 = [
 { nome: 'Batata frita', vegano: true },
 { nome: 'Hamburguer', vegano: false },
 { nome: 'Sorvete de chocolate', vegano: false },
 { nome: 'Saladinha delicia', vegano: true }
]

const comidasDivertidas = comidas.map(c => c + ' :D ')
console.log(comidasDivertidas)
 
// 04: Selecione apenas as comidinhas veganas.
 
// 05: Selecione apenas a primeira comidinhas vegana do cardápio.

