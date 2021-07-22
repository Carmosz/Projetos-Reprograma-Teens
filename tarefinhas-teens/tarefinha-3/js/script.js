//1-capturar os elementos e guardar em variaveis
    //input
    // a palavra world
    //botao
//2-ligar o click do botao
//3- prevenir o comportamento padrao do navegador quando clico
//4- trocar a palavra world pela palavra digitada no input


let input = document.querySelector('input')

let world = document.querySelector('h2')

let button = document.querySelector('#botao')

console.log(input, world, button)


function cliquei(){
    event.preventDefault()
    world.innerHTML = input.value
}

//sem o onclick do html, mas usando o addEventListener
button.addEventListener('click', function(){
    event.preventDefault()
    world.innerHTML = input.value
})