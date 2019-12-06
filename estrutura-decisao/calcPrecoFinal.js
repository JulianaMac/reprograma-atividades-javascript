function calcularPrecoFinal(cod,qtd){

let total
let valor
let msg

switch (cod){
case 100:
    valor = 1.70
    total = valor * qtd
    msg = 'Produto: Cachorro Quente - Quantidade: ' + qtd + ' - Valor total: ' + total;
break;
case 101:
    valor = 2.30 
    total = valor * qtd
    msg = 'Produto: Bauru Simples - Quantidade: ' + qtd + ' - Valor total: ' + total;
break;
case 102:
    total = 2.60 
    total = valor * qtd
    msg = 'Produto: Bauru com Ovo - Quantidade: ' + qtd + ' - Valor total: ' + total;
break;
case 103:
    valor = 2.40 
    total = valor * qtd
    msg = 'Produto: Hamburguer - Quantidade: ' + qtd + ' - Valor total: ' + total;
break;
case 104:
    valor = 2.50
    total = valor * qtd
    msg = 'Produto: Cheeseburguer - Quantidade: ' + qtd + ' - Valor total: ' + total;
break;
case 105:
    valor = 1.0
    total = valor * qtd
    msg = 'Produto: Refrigerante - Quantidade: ' + qtd + ' - Valor total: ' + total;
break;
    default: 
    msg = 'Digite um código válido.'
}
 return msg
 return valor.toFixed(2)
}
console.log(calcularPrecoFinal(105,2));