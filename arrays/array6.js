function calcularArr(arr){
    const novoArr = []
    for (let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length; j++){

            if (arr.indexOf(arr[i]) != novoArr.indexOf(arr[j]))

                 novoArr.push(arr[j]);
            
            }
        }
       
    }
    return novoArr
}
console.log(calcularArr([ 45, 765, 23, 76, 43, 65, 2345, 677, 5, 34, 22, 546, 77, 4355, 5667, 45, 56, 7, 4, 755, 45]))