const input = document.getElementById("sena-input");
const area = document.getElementById("sena-list-body");

function showResult(msg, type) {
    const result = document.getElementById("result");
    result.textContent = msg;
    result.className = "result " + type;
}

async function loadSenas() {
    const res = await fetch("/senas");
    const senas = await res.json();

    area.innerHTML = "";

    senas.forEach(sena => {
        const row = document.createElement("div");
        row.className = "sena-row-balls";

        const numeros = sena.nros.trim().split(/\s+/);
        numeros.forEach(n => {
            const ball = document.createElement("div");
            ball.className = "sena-ball";
            ball.textContent = n;
            row.appendChild(ball);
        });

        area.appendChild(row);
    });
}

async function createSena() {
    const valor = input.value.trim().replace(/\s+/g, " ");
    const numeros = valor.split(" ");

    if (numeros.length !== 6) {
        showResult("Entre com 6 dezenas separadas por espaços.", "error");
        return;
    }

    showResult("Cadastrando...", "loading");

    const res = await fetch("/senas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nros: valor })
    });

    if (res.status === 201) {
        input.value = "";
        showResult("Jogo cadastrado com sucesso.", "success");
        loadSenas();
    } else {
        showResult("Erro ao cadastrar jogo.", "error");
    }
}

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") createSena();
});

loadSenas();