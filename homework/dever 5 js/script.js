console.log("esta funcionando")

let entrar = document.getElementById("entrar")
let entrar1 = document.getElementById("entrar1")
let botao = document.getElementById("botao")

console.log(botao)

botao.addEventListener('click', function () {

    event.preventDefault()

    let entrar = document.getElementById("entrar")
    let entrar1 = document.getElementById("entrar1")
    let string = `Olá!, ${entrar.value}, seu email ${entrar1.value} foi cadastrado com sucesso!`;
    alert(string);


})
