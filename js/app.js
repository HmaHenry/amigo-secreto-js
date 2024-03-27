let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');

    if (amigo.value.trim() === '') {
        alert('Digite um nome de amigo válido.');
        return;
    }

    let nomeNormalizado = amigo.value.toLowerCase();

    if (amigos.map(amigos => amigos.toLowerCase()).includes(nomeNormalizado)) {
        alert('Amigo já adicionado!');
        return;
    }

    amigos.push(amigo.value);
    atualizarLista();
    amigo.value = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        // Adiciona um botão de exclusão para cada amigo
        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click', function() {
            excluirAmigo(i);
        });

        paragrafo.appendChild(botaoExcluir);
        lista.appendChild(paragrafo);
    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos.');
        return;
    }
    
    if (document.getElementById('lista-sorteio').innerHTML.trim() !== '') {
        alert('Já foi sorteado. Reinicie para sortear novamente.');
        return;
    }

    embaralhar(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}