async function jogandonoarray(entradas) {
    try {
        //CRIANDO O ARRAY
      const promises = entradas.map(entrada => jogandonoarray(entrada));
      
      const resultados = await Promise.all(promises);
  
      return resultados;
    } catch (erro) {
      console.error(erro.message);
      throw erro; // Propaga o erro se ocorrer algum problema
    }
  }

//console.log(resultados)