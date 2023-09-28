async function TryCatch() {
    try {
      const resultado = await operacaoAssincrona(2000, 'Resultado da operação assíncrona');
      console.log('Operação concluída com sucesso:', resultado);
      return resultado;
    } catch (erro) {
      console.error('Erro durante a operação assíncrona:', erro.message);
      throw erro;
    }
  }


TryCatch(); //chamano