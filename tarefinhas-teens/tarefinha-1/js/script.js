//Exemplo 1: Passo a passo

//1- criar um array com os nomes de algumas alunas da turma teens - ok
//2- capturar a ul - ok
//3- guardar a ul numa variavel- ok
//4- usar um laço de repetição - ok
 //   4.1 criar o elemento li -ok
//    4.2 inserir o conteúdo dentro de li - ok
//    4.3 colocar o li dentro do ul - ok
//    4.4  fazer o li aparecer na tela - ok 

let alunas = ["Rhaiany", "Jeniffer", "Tarsila","Júlia", "Isabela", "Natascha", "Kristhel", "Mariana", "Laize", "Fernanda", "Lauras", "Amanda"]


//getElementById
// let lista = document.getElementById("lista-alunas")
// console.log(lista) //<ul id="lista-alunas" class="lista"></ul>


//querySelector - coringa de selecionar ou capturar elementos no HTML
let lista = document.querySelector('#lista-alunas')
// console.log(lista) //<ul id="lista-alunas" class="lista"></ul>


//percorrer o array e pegar os indices para imprimir na tela dentro de li

for(let i = 0; i <alunas.length; i++){
    let item = document.createElement('li')
    item.textContent = alunas[i]
    lista.appendChild(item)
}

