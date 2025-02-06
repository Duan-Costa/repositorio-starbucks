let imgagem = document.querySelector(".imagem-copo")
let circulo = document.querySelector(".circulo")


function trocaimagem(endereco){

    imgagem.src = endereco 
}

function trocaCor(cor){

    circulo.style.background = cor
}