
// Dada uma lista de inteiros não negativos e o resultado desejado de uma soma, 
//encontre dois números na lista cuja soma seja o resultado desejado.

// Exemplo:
// console.log(encontrarParDaSoma([3, 34, 4, 12, 5, 2], 9); // --> [4, 5]

function encontrarParDaSoma(arr,int){

    

    for (let i = 0; i < arr.length; i++){

        for(let j = 1; j < arr.length; j++){
            
            if (arr[i] + arr[j] === int){
                
                 arr.push(arr);
                
            }
            
        }
        
    }
    return arr;
}
console.log(encontrarParDaSoma([1,2,2,4], 4));