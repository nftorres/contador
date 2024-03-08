const contador = document.querySelector("#contador");

const btn_decrementar = document.querySelector("#decrementar");
const btn_resetear = document.querySelector("#resetear");
const btn_incrementar = document.querySelector("#incrementar");

btn_decrementar.addEventListener("click", () => {
    if (contador.textContent !== "0") {
        contador.textContent = eval(contador.textContent + "- 1");
    } else {
        contador.textContent = "0";
    }
});

btn_resetear.addEventListener("click", () => {
    contador.textContent = "0";
});

btn_incrementar.addEventListener("click", () => {
    contador.textContent = eval(contador.textContent + "+ 1");
});

contador.textContent = cuenta;
