//seleção de seletores do html
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const messageFly = document.querySelector(".messageFly")
const inputClick = document.querySelector("#inputImg")
const btnReset = document.querySelector("#btnReset")

// adição de evento (função) de clique, tanto para firstScreen e para o reset
btnReset.addEventListener('click', handleResetClick)
inputClick.addEventListener('click', handleTryClick)

// chama a  função da frase aleatória e "impede" o envio do form para atualização da página
function handleTryClick (e) {
    e.preventDefault()
    changePhrase()
}

// ao clicar no botão na secondScreen, a função toggle será "chamada" para reset
function handleResetClick() {
    toggleScreen()
}

// gera um número aleatorio de 1 a 10 e o seleciona no switch (case) para exibir na tela
function changePhrase() {
    toggleScreen()
    let randomNumber = Math.round(Math.random() * 10)
    switch(randomNumber) {
    case 0:
        messageFly.querySelector("p").innerText = "Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.";
    break;
    case 1:
        messageFly.querySelector("p").innerText = 'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu';
    break;
    case 2:
        messageFly.querySelector("p").innerText = "Os problemas são oportunidades para se mostrar o que sabe.";
    break;
    case 3:
        messageFly.querySelector("p").innerText = "É em meio a dificuldade que se encontra a oportunidade.";
    break;
    case 4:
        messageFly.querySelector("p").innerText = "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos";
    break;
    case 5:
        messageFly.querySelector("p").innerText = "É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo.";
    break;
    case 6:
        messageFly.querySelector("p").innerText = "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.";
    break;
    case 7:
        messageFly.querySelector("p").innerText = "É parte da cura o desejo de ser curado";
    break;
    case 8:
        messageFly.querySelector("p").innerText = "Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos";
    break;
    case 9:
        messageFly.querySelector("p").innerText = "Os problemas são oportunidades para se mostrar o que sabe";
    break;
    case 10: 
        messageFly.querySelector("p").innerText = "Tente de novo. Fracasse de novo. Mas fracasse melhor";
    break;
    default:
    break;
}
}

//Alternar a tela com a toggle
function toggleScreen() {
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")

}