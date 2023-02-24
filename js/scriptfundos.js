let tela = document.querySelector('main')

function trocarFundo(imagem) {
    tela.classList.remove("tela2", "tela3", "tela4", "tela5", "tela6", "tela7", "tela8", "tela9", "tela10", "tela11");
    switch (imagem) {
        case 'img2':
            tela.classList.add("tela2");
            break;
        case 'img3':
            tela.classList.add("tela3");
            break;
        case 'img4':
            tela.classList.add("tela4");
            break;
        case 'img5':
            tela.classList.add("tela5");
            break;
        case 'img6':
            tela.classList.add("tela6");
            break;
        case 'img7':
            tela.classList.add("tela7");
            break;
        case 'img8':
            tela.classList.add("tela8");
            break;
        case 'img9':
            tela.classList.add("tela9");
            break;
        case 'img10':
            tela.classList.add("tela10");
            break;
        case 'img11':
            tela.classList.add("tela11");
            break;
    }
}