const satanas = {
    nome: 'Satanás',
    idade: 6, //data de nascimento!
    castrado: true,
    cores: ['preto', 'branco']
  };
  
  const churrumina = {
    nome: 'Churrumina',
    idade: 1,
    castrado: true,
    cores: ['branca', 'creme', 'cinza']
  };
  
  const odo = {
    nome: 'Odo',
    idade: 2,
    castrado: true,
    cores: ['branco', 'marrom', 'preto']
  };
  
  const ford = {
    nome: 'Ford Prefect',
    idade: 3,
    castrado: true,
    cores: ['rajado']
  };
  
  const gatos = [satanas, churrumina, odo, ford]

  for (let gato of gatos){
      console.log('Nome: ' + gato.nome)
  for(let cor of gato.cores){
      console.log('Cor: ' + cor)
  }
  console.log('===================')
}

  