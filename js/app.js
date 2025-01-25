function alterarStatus(game) {
    let idGame = `#game-${game}`;
    let botaoGame = document.querySelector(`${idGame} a`);
    let imagemGame = document.querySelector(`${idGame} div`);

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

