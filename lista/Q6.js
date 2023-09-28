function primeiraPromiseResolvida(promises) {
    return new Promise((resolve, reject) => {
      let chamada = false;
  
      for (const promise of promises) {
        promise.then(resultado => {
          if (!chamada) {
            chamada = true;
            resolve(resultado);
          }
        })
        .catch(erro => {
          if (!chamada) {
            chamada = true;
            reject(erro);
          }
        });
      }
    });
  }
  
  //funcionando
const promise1 = new Promise(resolve => setTimeout(() => resolve('Primeira Promise'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Segunda Promise'), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Terceira Promise'), 3000));
  
primeiraPromiseResolvida([promise1, promise2, promise3])
.then(resultado => {
    console.log('A primeira Promise resolvida foi:', resultado);
})
.catch(erro => {
    console.error('Todas as Promises foram rejeitadas:', erro);
});