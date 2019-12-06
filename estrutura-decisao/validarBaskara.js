function validarBaskara(a,b,c){

    let delta = b**2 - 4*a*c;
    
    if (delta<0) {
        return 'A equação não tem raíz. Delta = ' + delta;
    }else if (delta===0){
        return 'A equação tem uma raíz. Delta = ' + delta;
    }else (delta>0)
        return 'A equação tem duas raízes. Delta = ' + delta;
}
console.log(validarBaskara(1,5,4))
