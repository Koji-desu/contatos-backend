// Capturando o elemento h1.titulo
let elementoTitulo = document.querySelector('.titulo');

// Exibindo o elemento no console
console.log(elementoTitulo);

// Alterar o conteúdo do elementoTitulo
elementoTitulo.textContent = "Agora, sim!"

// Alterar o estilo dele 
elementoTitulo.style.color = "#F00"

// acrescentar uma classe ao elementoTitulo
elementoTitulo.classList.add('importante')

// Remover uma classe
elementoTitulo.classList.remove('titulo');

// Liga/Desliga uma classe
elementoTitulo.classList.toggle("importante")

// Criar um elemento main
let elementoMain = document.createElement('main');

// adicionar o elemento main ao body
 document.body.appendChild('elementoMain')

// Removendo o elemento do body depois de 3sec

 setTimeout(
    () => {document.body.removeChild(elementoMain)},
     3000
 )

// Removendo o elemento titulo após 5sec
 setTimeout (
    ()=>{elementoTitulo.remove()},
    5000
 )

// Capturar todos os elementos td

let arrayDeTds = document.querySelectorAll("td")

arrayDeTds.forEach(
    td => {
        td.style.border = "1px solid black"
        td.style.padding = "5px";
        td.style.backgroundColor = "#EEE"

    }
)

// Capturando um elemento pelo ID

let elementoLista = document.getElementById("listaDeLetras")
// * Equivale ao    document.querySelectior("#listaDeLetras")