function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let botaoGame = gameClicado.querySelector(".dashboard__item__button");
    let imagemGame = gameClicado.querySelector(".dashboard__item__img");
    let nomeGame = gameClicado.querySelector(".dashboard__item__name").textContent;

    if(imagemGame.classList.contains("dashboard__item__img--rented")){
        confirm(`Tem certeza que irá devolver o jogo "${nomeGame}"?`);
    }

    botaoGame.classList.toggle("dashboard__item__button--return");
    imagemGame.classList.toggle("dashboard__item__img--rented");
    botaoGame.textContent = botaoGame.textContent === "Alugar" ? "Devolver" : "Alugar";
}

