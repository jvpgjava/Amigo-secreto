// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    inputAmigo.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a lista de amigos exibida
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Função para realizar o sorteio
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    const sorteados = [...amigos];
    const resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        const sorteado = sorteados.splice(Math.floor(Math.random() * sorteados.length), 1)[0];
        if (sorteado === amigos[i] && sorteados.length > 0) {
            // Reembaralhar caso o amigo tire ele mesmo
            sorteados.push(sorteado);
            i--;
        } else {
            resultado.push({ amigo: amigos[i], sorteado });
        }
    }

    exibirResultado(resultado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    resultado.forEach(par => {
        const li = document.createElement("li");
        li.textContent = `${par.amigo} tirou ${par.sorteado}`;
        listaResultado.appendChild(li);
    });
}
