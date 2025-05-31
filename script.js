$(document).ready(function () {
  $("#salarioForm").submit(function (event) {
    event.preventDefault();

    const nome = $("#nome").val();
    const idade = parseInt($("#idade").val());
    const salarioBruto = parseFloat($("#salario").val());
    const dependentes = parseInt($("#dependentes").val());

    const bonus = idade > 50 ? 300 : 200;
    const inss = salarioBruto * 0.08;
    const valeTransporte = salarioBruto * 0.05;
    const valorDependente = dependentes * 50;

    const salarioLiquido = salarioBruto - inss - valeTransporte + bonus + valorDependente;

    alert(
      `Nome: ${nome}\n` +
      `Número de Dependentes: ${dependentes}\n` +
      `Salário Bruto: R$ ${salarioBruto.toFixed(2)}\n` +
      `INSS: R$ ${inss.toFixed(2)}\n` +
      `Vale Transporte: R$ ${valeTransporte.toFixed(2)}\n` +
      `Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`
    );
  });
});