// Capturando o elemento h1.titulo
let elementoTitulo = document.querySelector('.titulo');

// Exibindo o elemento no console
console.log(elementoTitulo);

// Alterar o conteúdo do elementoTitulo
elementoTitulo.textContent = "Agora, tá tudo dominado!"

// Alterar o estilo dele
elementoTitulo.style.color = "#F00";

// Acrescentar uma classe ao elementoTitulo
elementoTitulo.classList.add("importante");

// Remover uma classe do elementoTitulo
elementoTitulo.classList.remove("titulo");

// Liga/Desliga uma classe
elementoTitulo.classList.toggle("importante");

// Criar um elemento main
let elementoMain = document.createElement("main");

// Adicionando o elemento ao body
document.body.appendChild(elementoMain);

// Removendo o elemento do body depois de 3 segundos;
setTimeout (
    () => {document.body.removeChild(elementoMain)},
    3000
)

// Removendo o elemento título depois de 5 segundos
setTimeout (
    () => {elementoTitulo.remove()},
    5000
)

// Capturar todos os elementos td
let arrayDeTds = document.querySelectorAll("td");
arrayDeTds.forEach(
    td => {
        td.style.border = "1px black solid";
        td.style.padding = "5px";
        td.style.backgroundColor = "#EEE";
    }
)

// Capturando um elemento pelo ID
let elementoLista = document.getElementById("listaDeLetras");
// *    equivale ao document.querySelector("#listaDeLetras");

let campoSenha = document.getElementsByName("senha")[0];
campoSenha.value = "123456";

// Fazer com que a opção portugal seja selecionada
// aqui pelo javascript!