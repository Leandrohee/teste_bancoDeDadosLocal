export var respostaJson

export async function conectaApi(){
    const resposta = await fetch("http://localhost:3000/filhos")
    respostaJson = await resposta.json()

}

