function calcularMesDias(mes){

    switch(mes){
        case 1:
            return 'Mês: Janeiro. Dias: 31.'
        case 2:
            return 'Mês: Fevereiro. Dias: 28 ou 29.'
        case 3:
            return 'Mês: Março. Dias: 31.'
        case 4:
            return 'Mês: Abril. Dias: 30.'
        case 5:
            return 'Mês: Maio. Dias: 31.'
        case 6:
            return 'Mês: Junho. Dias: 30.'
        case 7:
            return 'Mês: Julho. Dias: 31.'
        case 8:
            return 'Mês: Agosto. Dias: 31.'
        case 9:
            return 'Mês: Setembro. Dias: 30.'
        case 10:
            return 'Mês: Outubro. Dias: 31'
        case 11:
            return 'Mês: Novembro. Dias: 30'
        case 12:
            return 'Mês: Dezembro. Dias: 31.'
        default:
            return 'Inválido. Digite um número de 1 a 12 para exibir o mês e quantidade de dias.'
    }   
}
console.log(calcularMesDias(8))