// ======================================
// SIMULADOR AGRO FORTE E SUSTENTÁVEL
// ======================================

function calcularProjeto() {

  // Captura os valores do formulário
  const area = Number(document.getElementById("area").value);
  const tecnologia = document.getElementById("tecnologia").value;

  // Área onde o resultado será exibido
  const resultado = document.getElementById("resultado");

  // ======================================
  // VALIDAÇÃO
  // ======================================

  if (area <= 0 || isNaN(area)) {

    resultado.innerHTML = `
      <div class="result-highlight">
        Informe uma área válida.
      </div>
    `;

    return;
  }

  // ======================================
  // CONFIGURAÇÕES DO CÁLCULO
  // ======================================

  // Custo base por hectare
  const custoBasePorHectare = 2500;

  // Variáveis de cálculo
  let fatorTecnologia = 1;
  let economia = 0;
  let produtividade = 0;

  // ======================================
  // LÓGICA DA TECNOLOGIA
  // ======================================

  if (tecnologia === "sustentavel") {

    // Tecnologia sustentável:
    // maior investimento inicial
    // porém maior economia futura

    fatorTecnologia = 1.35;

    economia = area * 1200;

    produtividade = area * 1.45;

  } else {

    // Tecnologia tradicional

    fatorTecnologia = 1;

    economia = area * 350;

    produtividade = area * 1.0;
  }

  // ======================================
  // CÁLCULOS
  // ======================================

  const investimento =
    area * custoBasePorHectare * fatorTecnologia;

  // ======================================
  // FORMATAÇÃO DOS VALORES
  // ======================================

  const investimentoFormatado =
    investimento.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  const economiaFormatada =
    economia.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  const produtividadeFormatada =
    produtividade.toFixed(2);

  // ======================================
  // EXIBIÇÃO DO RESULTADO
  // ======================================

  resultado.innerHTML = `
  
    <div class="result-highlight">
      Investimento estimado:
      <br>
      ${investimentoFormatado}
    </div>

    <div class="economy">
      Economia projetada:
      <br>
      ${economiaFormatada}
    </div>

    <div class="economy">
      Produtividade estimada:
      <br>
      ${produtividadeFormatada} toneladas/hectare
    </div>

  `;
}