function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let botaoGame = gameClicado.querySelector(".dashboard__item__button");
    let imagemGame = gameClicado.querySelector(".dashboard__item__img");

    if (botaoGame.textContent == "Alugar") {
        botaoGame.textContent = "Devolver";
        botaoGame.classList.add("dashboard__item__button--return");
        imagemGame.classList.add("dashboard__item__img--rented");
    }
    else if (botaoGame.textContent == "Devolver") {
        botaoGame.textContent = "Alugar";
        botaoGame.classList.remove("dashboard__item__button--return");
        imagemGame.classList.remove("dashboard__item__img--rented");
    }
}

