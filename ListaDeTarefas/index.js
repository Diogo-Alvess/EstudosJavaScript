const inputTarefa = document.querySelector('.input-tar');
const btnTarefa = document.querySelector('.but-tar');
const tarefas = document.querySelector('.tarefas');

function criaLi()  // cria elementos li
{
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){  // coloca add no enter
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    }
});

function limpaInput() // coloca o cursor no input ao remover
{
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li)  // coloca um batao ao lado do li 
{   li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) // cria o li da lista
{
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(e){  // acção click
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e) // encontra o click apaga
{
    const el = e.target;
    if (el.classList.contains('apagar'))
    {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() // salva as tarefas em uma string  
{
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas)
    {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // converte em string 
    localStorage.setItem('tarefas', tarefasJSON);
}

function adcionaTarefasSalvas() 
{
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // Converte para uma array

    for(let tarefa of tarefas)
    {
        criaTarefa(tarefa);
    }
}

adcionaTarefasSalvas();