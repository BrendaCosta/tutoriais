const news_pontos = document.querySelector(".news_pontos")

const card_meu_carrinho = document.querySelector(".meu-carrinho")


const icone_menu_mobile = document.querySelector(".icone_menu_mobile")
const nav = document.querySelector("nav")









const carrinho = document.querySelector("#carrinho")


icone_menu_mobile.addEventListener("click", function( event ) {
    nav.classList.toggle("ativo-menu")
})



carrinho.addEventListener("mouseover", function() {
    card_meu_carrinho.classList.toggle("ativo")
    console.log("aqui")
})


carrinho.addEventListener("click", function(event) {
    card_meu_carrinho.classList.toggle("ativo")
    console.log("aqui 2")
})



function closed(){
     news_pontos.style.display ="none"
 }


