function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let botaoGame = gameClicado.querySelector(".dashboard__item__button");
    let imagemGame = gameClicado.querySelector(".dashboard__item__img");
    let nomeGame = gameClicado.querySelector(".dashboard__item__name").textContent;

    if (imagemGame.classList.contains("dashboard__item__img--rented")) {
        confirm(`Tem certeza que irá devolver o jogo "${nomeGame}"?`);
    }

    botaoGame.classList.toggle("dashboard__item__button--return");
    imagemGame.classList.toggle("dashboard__item__img--rented");
    botaoGame.textContent = botaoGame.textContent === "Alugar" ? "Devolver" : "Alugar";

    verificaQtdeJogosAlugados();
}

function verificaQtdeJogosAlugados() {
    let todosOsGames = document.querySelectorAll(".dashboard__item__img");
    let listaDeTodosOsGames = Array.from(todosOsGames);
    let contador = 0;

    for (let i = 0; i < listaDeTodosOsGames.length; i++) {
        if (listaDeTodosOsGames[i].classList.contains("dashboard__item__img--rented")) contador++;
    }
    let mensagem = contador > 1 ? "jogos alugados" : "jogo alugado";
    console.log(`Há ${contador} ${mensagem}.`);
}

