// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado
//passo 1 - pegar os botões no JS pra poder verificar quando o usuario clicar em cima de um deles
//passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
//passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele

//OBJETIVO 2 -quando clicar no botão do personagem mostrar as informações do personagem
// passo1 - pegar os personagens no JS para poder mostrar ou esconder ele  
// passo2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
// passo3 - verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele

/**console.log(document.getElementById('chopper'));  // botao no f12 do console browser

const botao = document.getElementById('chopper');
console.log(botao) //funcoes no f12 do console browser

*/

//OB1-> passo 1 - pegar os botões no JS pra poder verificar quando o usuario clicar em cima de um deles
const botoes = document.querySelectorAll('.botao')

//OBJETIVO 2 -quando clicar no botão do personagem mostrar as informações do personagem
//passo 1 - pegar os personagens no JS para poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");
   

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        //OB1-> passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
        
        desselecionarBotao();
        
        //OB1 -> passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        botao.classList.add("selecionado");

        //OB2 -> passo3 - verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele
        desselecionarPersonagem();
        
        // OB2-> passo2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        personagens[indice].classList.add("selecionado");


    });
});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
//OBJETIVO 2 -quando clicar no botão do personagem mostrar as informações do personagem
    // passo1 - pegar os personagens no JS para poder mostrar ou esconder ele  
    // passo2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
    // passo3 - verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele