import { validarInput } from "./validar.js"

// só executa quando a página já estiver carregada;
window.onload = () => {
  //tornando meu app.js genérico;
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {

    if (input.dataset.tipo === "preco") {
      SimpleMaskMoney.setMask(input, {
          allowNegative: false,
          negativeSignAfter: false,
          prefix: "R$ ",
          fixed: true,
          fractionDigits: 2,
          decimalSeparator: ",",
          thousandsSeparator: ".",
          cursor: "end"
      });
    }
    
    input.addEventListener('input', () => {
      validarInput(input, false);
    });

    input.addEventListener('blur', () => {
      validarInput(input);
    });
  });
};