import { conectaApi, addDadosApi, atualizaDadosApi } from "./conectApi.js"

const formulario = document.querySelector(".formulario")
var tabela = document.querySelector(".tabela")

//conexao com a api
const conexaoApi = await conectaApi()
const eApi = conexaoApi.length
const proximoId = eApi +1

// Add novo dado pelo formulario
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    const inputnome = document.querySelector('.nome').value
    const inputidade = document.querySelector('.idade').value
    const inputprofissao = document.querySelector('.profissao').value

    addDadosApi(proximoId,inputnome,inputidade,inputprofissao)
})


//mostra a tabela atualizada
conexaoApi.forEach(element => {
    tabela.innerHTML = tabela.innerHTML + `
        <tr data-id=${element.id}>
            <td>${element.nome}</td>
            <td>${element.idade} anos</td>
            <td>${element.profissao}</td>
            <td><input data-inputnomeedit${element.id} placeholder="nome" type="text"></td>
            <td><input data-inputidadeedit${element.id} placeholder="idade" type="text"></td>
            <td><input data-inputprofissaoedit${element.id} placeholder="profissao" type="text"></td>
            <td><button class="btn-edit">editar</button></td>
        </tr>
    `
});


//Edita os dados
const btnseditar = document.querySelectorAll(".btn-edit")
btnseditar.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
        const idreferente = e.target.parentNode.parentNode.dataset.id
        const inputnomereferente =  document.querySelector(`[data-inputnomeedit${idreferente}]`).value
        const inputidadereferente = document.querySelector(`[data-inputidadeedit${idreferente}]`).value
        const inputprofissaoreferente = document.querySelector(`[data-inputprofissaoedit${idreferente}]`).value

        console.log(idreferente)
        console.log(inputnomereferente)
        console.log(inputidadereferente)
        console.log(inputprofissaoreferente)

        atualizaDadosApi(
            idreferente,
            inputnomereferente,
            inputidadereferente,
            inputprofissaoreferente
            )
    })
})