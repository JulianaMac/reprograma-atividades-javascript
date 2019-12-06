function calcularTemperatura(arr){


let maior = 0;
let menor = temp[0];
let media = 0;
let i = 0
let soma = 0

for (i = 0; i < arr.length; i++){

    soma += arr[i]

    if ( arr[i] > maior ) {
        maior = arr[i];

}   if ( arr[i] < menor ) {
        menor = arr[i];
}
    
}
media = soma / i

return 'O maior número é ' + maior + ' , o menor número é ' + menor + ' e a média é ' + media;

}
let temp = [1,2,3,4];
console.log(calcularTemperatura(temp));
