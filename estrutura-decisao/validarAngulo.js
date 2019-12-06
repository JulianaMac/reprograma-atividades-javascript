function validarAngulo(a1,a2,a3){

    if (a1+a2+a3 === 180){
        return 'É um triângulo.'
    }else{
        return 'Não é um triângulo.'
    }
}
console.log(validarAngulo(90,20,70))