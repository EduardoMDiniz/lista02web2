import fs from "fs";

async function ler_arquivo(arquivo) {
  return fs.readFile(arquivo, 'utf-8');
}

const ms = 2000;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
delay(ms)
.then(() => ler_arquivo(arquivo))
.then(arquivo => {
    console.log('Conteúdo do arquivo:', arquivo);
})
.catch(erro => {
    console.error(erro);
});

//SO VI QUE O SENHOR JA TINHA RESPONDIDO DPS KKK, TINHA CRIADO ATÉ UMA READFILE PRA CHAMAR
// kkkkkkkkkkkkkkkkkkkkkkkkkkkk