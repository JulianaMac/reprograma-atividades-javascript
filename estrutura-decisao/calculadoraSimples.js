function calculadoraSimples(n1,cod,n2){
    switch(cod){
        case '+':
            return 'Resultado = ' + (n1+=n2);
        case '-':
            return 'Resultado = ' + (n1-=n2);
        case '*':
            return 'Resultado = ' + (n1*=n2);
        case '/':
            return 'Resultado = ' + (n1/=n2);
        default:
            return 'Valor inválido.'
    }
}
console.log(calculadoraSimples(16,'*',6))