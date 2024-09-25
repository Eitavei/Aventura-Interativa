const avanca = document.querySelectorAll('.btn-proximo');

<!-- Isabelli da Silva Ferreira 3°D 23/09 -->
avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
