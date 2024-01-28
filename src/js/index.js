//botoes das plataformas para JS..............
const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//Abrir e fechar as plataformas.................................
botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo"); //refatoramento do if-else..........


    //const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
    // if(botaoEstaAberto){
    //     elementoPlataformas.classList.remove("ativo");
    // }else{
    //     elementoPlataformas.classList.add("ativo");
    // }
});






