let arr = [4,30,22,60,80];
let maior = 0;

for (let i = 0; i < arr.length; i++){
    if ( arr[i] > maior ) {
        maior = arr[i];
}
}
console.log(maior)