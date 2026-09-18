const titulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("botao");


botao.addEventListener("click", function() {

    mensagem.textContent = "Você clicou no botão!";
    titulo.textContent = "DOM funcionando!";
    titulo.style.color = "brown";

});
