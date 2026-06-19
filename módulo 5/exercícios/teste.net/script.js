function abrirMenu() {
    const menu = document.getElementById('menu');

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}


// Fecha o menu ao clicar em um link (mobile)

const links = document.querySelectorAll('#menu a');

links.forEach(link => {
    link.addEventListener('click', () => {

        if (window.innerWidth <= 768) {
            document.getElementById('menu').style.display = 'none';
        }

    });
});


// Mantém o menu visível quando voltar para desktop

window.addEventListener('resize', () => {

    const menu = document.getElementById('menu');

    if (window.innerWidth > 768) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }

});