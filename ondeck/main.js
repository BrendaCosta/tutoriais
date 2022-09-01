const buttonProdutos = document.querySelector(".produtos")
const menu_suspenso = document.querySelector(".menu-suspenso")
const icone_menu = document.querySelector(".icone-menu")
const menu_mobile = document.querySelector(".menu-produtos-mobile")
const icone_fechar = document.querySelector(".fechar")

buttonProdutos.addEventListener("click", abrirProdutos)
icone_menu.addEventListener("click", abrirMenuMobile)
icone_fechar.addEventListener("click", fecharCard)

function abrirProdutos(){
    menu_suspenso.classList.toggle('ativo') 
}

function abrirMenuMobile(){
    menu_mobile.classList.toggle('ativo') 
    
}

function fecharCard(){
    menu_mobile.classList.remove('ativo') 
    
}