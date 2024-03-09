const contador = document.querySelector("#contador");

const btn_decrementar = document.querySelector("#decrementar");
const btn_resetear = document.querySelector("#resetear");
const btn_incrementar = document.querySelector("#incrementar");

btn_decrementar.addEventListener("click", () => {
    decrementarContador();
});

btn_resetear.addEventListener("click", () => {
    resetearContador();
});

btn_incrementar.addEventListener("click", () => {
    incrementarContador();
});

function decrementarContador() {
    if (contador.textContent !== "0") {
        contador.textContent = eval(contador.textContent + "- 1");
    } else {
        contador.textContent = "0";
    }
}

function resetearContador() {
    contador.textContent = "0";
}

function incrementarContador() {
    contador.textContent = eval(contador.textContent + "+ 1");
}
