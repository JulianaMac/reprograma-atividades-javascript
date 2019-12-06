function validarCartao(numCartao){
    
    const arrNum = numCartao.split('');
    let arrConvertido =  arrNum.map(function(i){
        return parseInt(i)
    })
    const digito = arrNum.pop();
    console.log('Digito do cartao: ' + digito)
    console.log('Array sem o digito: ' + arrNum)

    arrNum.reverse();
    console.log('Array invertido: ' + arrNum)

    const arrMap = arrNum.map(function(i,index){

        if (index % 2 === 0){
            i *= 2
        } 
        if (i > 9){
            return i - 9
         }

        return i;
    });
    console.log(arrMap)
    
    let numFinal = arrMap.reduce(function(acum,atual){
        console.log('Numero Final: ' + numFinal)
        return acum + atual 
        
    }, 0)
}

validarCartao('4024007179089965')