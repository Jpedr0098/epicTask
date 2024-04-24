document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")

    const tarefa = {
        title: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }

    validar(tarefa)

    salvar(tarefa)
})

function salvar(tarefa){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    window.location.href = "index.html"
}

function validar(tarefa){
    limparErros()
    
    if (tarefa.title.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "Titulo é obrigatório!"
        console.log("Ta no erro irmão...")
    }
    if (tarefa.descricao.trim() == "" || tarefa.descricao.lenght < 10){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText = "descricao deve ter no minimo 10 caracteres"
        console.log("Ta no erro irmão...")
    }
    if (tarefa.pontos <= 0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontos-erro").innerText = "Os pontos devem ser maiores que zero!"
        console.log("Ta no erro irmão...")
    }
}

function limparErros(){
    document.querySelectorAll("input.is-error, textarea.is-error")
    .forEach((input)=>{input.classList.remove("is-error")})

    document.querySelectorAll(".nes-field span")
    .forEach((span)=> span.innerText="")
}