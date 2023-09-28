async function buscarDadosNaAPI() {
    const retorno = Math.random() < 0.8 ? 200 : 404; //SIMULAÇÃO
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (retorno === 200) {

          const dados = { resultado: 'Dados da API' };
          resolve(dados);
        } else {
          
          reject(new Error('Erro: Dados não encontrados na API'));
        }
      }, 1000);
    });
  }
  