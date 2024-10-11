
let abrigos = [];


function cadastrarAbrigo() {
    let nome = prompt("Digite o nome do abrigo:");
    let endereco = prompt("Digite o endereço do abrigo:");
    let cidade = prompt("Digite a cidade do abrigo:");
    let telefone = prompt("Digite o telefone do abrigo:");
    let capacidade = prompt("Digite a capacidade de lotação do abrigo:");

    abrigos.push({
        nome,
        endereco,
        cidade,
        telefone,
        capacidade: parseInt(capacidade)
    });

    alert("Abrigo cadastrado com sucesso!");
}


function listarAbrigos() {
    if (abrigos.length === 0) {
        alert("Não há abrigos cadastrados.");
        return;
    }

    let lista = "===== Lista de Abrigos =====\n";
    abrigos.forEach((abrigo, index) => {
        lista += `${index + 1}. ${abrigo.nome} - ${abrigo.endereco}, ${abrigo.cidade}\n`;
    });
    alert(lista);
}


function procurarAbrigo() {
    let cidadeProcurada = prompt("Digite a cidade que você está procurando:");
    let encontrados = (abrigo => abrigo.cidade.toLowerCase());

    if (encontrados.length === 0) {
        alert("Nenhum abrigo encontrado na cidade especificada.");
        return;
    }

    let lista = "===== Abrigos Encontrados =====\n";
    encontrados.forEach((abrigo, index) => {
        lista += `${index + 1}. ${abrigo.nome} - ${abrigo.endereco}, Telefone: ${abrigo.telefone}, Capacidade: ${abrigo.capacidade}\n`;
    });
    alert(lista);
}


function menu() {
    while (true) {
        let opcao = prompt(`===== ABRIGOS TEMPORÁRIOS =====\n1. Cadastrar abrigo\n2. Listar abrigos\n3. Procurar abrigo\n4. Sair\nEscolha uma opção:`);

        switch (opcao) {
            case '1':
                cadastrarAbrigo();
                break;
            case '2':
                listarAbrigos();
                break;
            case '3':
                procurarAbrigo();
                break;
            case '4':
                alert("Saindo do programa.");
                return;
            default:
                alert("Esse comando não existe! Tente novamente.");
        }
    }
}


menu();








