export async function conectaApi(){                                 //le os dados da api
    const resposta = await fetch("http://localhost:3000/filhos")
    const respostaJson = await resposta.json()

    return respostaJson
}

export async function addDadosApi(id,nome,idade,profissao){             //add dados na api
    const resposta = await fetch("http://localhost:3000/filhos",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            id: id,
            nome: nome,
            idade: idade,
            profissao: profissao,
        })
    })
}


export async function atualizaDadosApi(id,nome,idade,profissao){            //atualiza dados na api
    const resposta = await fetch(`http://localhost:3000/filhos/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            id: id,
            nome: nome,
            idade: idade,
            profissao: profissao,
        })
    })

}


