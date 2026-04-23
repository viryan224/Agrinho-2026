// Função interativa para calcular economia de água
function calcularAgua() {
    // Supondo economia de 30% de água com tecnologia de precisão
    const consumoAtual = 1000; // litros
    const economia = consumoAtual * 0.3;
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Com técnicas de precisão, você pode economizar ${economia} litros de água!`;
}
