( () => { const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value       
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}</p>`
 
    tarefa.innerHTML = conteudo

    lista.appendChild(tarefa)
    tarefa.appendChild(BotaoConclui())
    input.value = " "
}


const novaTarefa = document.querySelector('[data-form-button]')


novaTarefa.addEventListener('click', criarTarefa)

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui
}

const concluirTarefa = (evento) => {

    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement 

    tarefaCompleta.classList.toggle('done')
} 
})()