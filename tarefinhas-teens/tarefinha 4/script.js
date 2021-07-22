let botao = document.getElementById("botao_filme")
let container = document.getElementById("container")
let body = document.querySelector('body')

console.log(botao)

// fazer o botao escutar o clique


botao.addEventListener('click', function () {
    // prevenir o comportamento padrão do navegador
    
    event.preventDefault()

    // mudar a cor de fundo (background)

    body.style.backgroundColor = 'blue'

    // criar titulo

    let titulo = document.createElement("h1")

    // inserir conteudo no titulo

    titulo.textContent = "Moonlight"

    // colocar o titulo na div

    container.appendChild(titulo)

    // criar paragrafo 

    let paragrafo = document.createElement("p")

    // colocar texto no paragrafo

    paragrafo.textContent = "Três momentos da vida de Chiron, um jovem negro morador de uma comunidade pobre de Miami. Do bullying na infância, passando pela crise de identidade da adolescência e a tentação do universo do crime e das drogas, este é um poético estudo de personagem."

    // esse metodo faz o conteudo aparecer na tela

    container.appendChild(paragrafo)



    // criar imagem

    let img = document.createElement("img")

    // inserir conteudo na img setando atributo src

    img.setAttribute("src", "https://tse2.mm.bing.net/th?id=OIP.TdX5mamLWS2DAQV5epbwPwHaKu&pid=Api&P=0&w=300&h=300")

    // fazendo aparecer na tela

    container.appendChild(img)


})
