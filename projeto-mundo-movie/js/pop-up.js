document.addEventListener('DOMContentLoaded', function () {
    // Obter elementos
    var popup = document.getElementById('popup');
    var closeBtn = document.querySelector('.close');

    // Mostrar o pop-up quando a página carregar
    popup.style.display = 'block';

    // Fechar o pop-up quando o usuário clicar no botão de fechar
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Fechar o pop-up se o usuário clicar fora do conteúdo
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});