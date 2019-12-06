function classificarProduto(codProduto){
  if(codProduto === 1){
    return 'Alimento não perecível';
  }else if(codProduto >=2 && codProduto <=4){
    return 'Alimento perecível';
  }else if(codProduto === 5 || codProduto === 6){
    return 'Vestuário';
  }else if(codProduto === 7){
    return 'Higiene Pessoal';
  }else if(codProduto >=8 && codProduto <=15){
    return 'Limpeza e Utensílios Domésticos';
  }else{
    return 'Código Inválido';
  }
}
console.log(classificarProduto(1))