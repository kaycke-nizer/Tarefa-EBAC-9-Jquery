const lista_tarefas = document.getElementById('lista_de_tarefas');
const botao = document.getElementById('botao');

var campo_escrever;

$('#botao').click(function(e) {
    e.preventDefault();

    const campo_escrever = $('#campo_escrever').val();

    const nova_nota = $(`
        <li class='nota'>
            ${campo_escrever}
        </li>
        `);

    $(nova_nota).appendTo('ol');
    $('#campo_escrever').val('');  


})

$('#lista_de_tarefas').on('click', '.nota', function(){
    $(this).toggleClass('completa');

});