const lista_tarefas = document.getElementById('lista_de_tarefas');
const botao = document.getElementById('botao');

var campo_escrever;

botao.addEventListener('click', adicionar)

function adicionar(e) {
    e.preventDefault();

    campo_escrever = document.getElementById('campo_escrever').value;

    lista_tarefas.innerHTML += `<li>${campo_escrever}</li>`;
}