import fs from "fs"
import chalk from "chalk"

function tratarErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code,"Texto do Erro"))
}

//FUNÇÃO ASSINCRONA COM THEN

function pegaArquivo (caminhoDoArquivo){
    const enconding ="utf-8"
    fs.promises
        fs.readFile(caminhoDoArquivo,enconding,)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(tratarErro)
}

//FUNÇÃO ASSINCRONA COM AWAIT

async function pegaArquivo (caminhoDoArquivo){
 try{
    const enconding = "utf-8"
    await fs.promises.readFile(caminhoDoArquivo, enconding,)
    console.log(chalk.green(texto))
 } catch(erro){
    tratarErro(erro)
 }
}




//FUNÇÃO SINCRONA

function pegaArquivo (caminhoDoArquivo){
    const enconding = "utf-8"
    fs.readFile(caminhoDoArquivo, enconding,(erro,texto)=>{
        if (erro) {
            tratarErro(erro)
        }

        console.log(chalk.green(texto))
    })
}

pegaArquivo("./Arquivos/texto.md")