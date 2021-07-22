//1-capturar todos os meus gatinhos e guardar numa variavel
//2- percorrer essa lista de gatinhos
//3- ligar o click
  //3.1- criar uma condicionnal que torna o gatinho visivel ou invisivel



//querySelectorAll
//coleção array like para percorrer forEach


const meusGatos = document.querySelectorAll('.item__imagem')


meusGatos.forEach(function(gato){
    gato.addEventListener('click', function(evento){
        if(gato.classList.contains("invisivel")){
            gato.classList.remove("invisivel")
        }else{
            gato.classList.add("invisivel")
        }
    } )
})
