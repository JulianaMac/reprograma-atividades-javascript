function maiorNumero (n1,n2){
    if (n1 > n2){
    return n1 + ' é maior que ' + n2;
    } else if(n2 > n1){
    return n2 + ' é maior que ' + n1;
    } else{
       return n1 + ' é igual a ' + n2;
    }
}
console.log(maiorNumero(14,8))