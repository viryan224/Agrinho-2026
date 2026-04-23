/**
 * Função para interatividade dos cards
 * @param {string} tema - O ID do tema clicado
 */
function mostrarDica(tema) {
    let mensagem = "";

    // Lógica de decisão baseada no tema
    switch (tema) {
        case 'html':
            mensagem = "Dica: Sempre use <main>, <article> e <section> para que o Google entenda seu conteúdo!";
            break;
        case 'css':
            mensagem = "Dica: O Flexbox é excelente para alinhar itens em uma dimensão, e o Grid para duas!";
            break;
        case 'js':
            mensagem = "Dica: Use sempre 'const' e 'let' em vez de 'var' para evitar problemas de escopo.";
            break;
        case 'resp':
            mensagem = "Dica: Pense sempre em 'Mobile First' — comece o design pela tela menor.";
            break;
        default:
            mensagem = "Explore os tópicos para aprender mais!";
    }

    // Alerta interativo (pode ser substituído por um modal)
    alert(mensagem);
    
    // Log no console para fins de depuração (requisito de boas práticas)
    console.log(`Interação realizada no tópico: ${tema}`);
}

// Exemplo de manipulação de DOM ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Site carregado com sucesso. Nível 4 ativo!");
});
