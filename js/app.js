function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let botaoGame = gameClicado.querySelector(".dashboard__item__button");
    let imagemGame = gameClicado.querySelector(".dashboard__item__img");

    botaoGame.classList.toggle("dashboard__item__button--return");
    imagemGame.classList.toggle("dashboard__item__img--rented");
    botaoGame.textContent = botaoGame.textContent === "Alugar" ? "Devolver" : "Alugar";
}

