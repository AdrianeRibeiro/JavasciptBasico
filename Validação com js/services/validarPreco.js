export const validarPreco = (input) => {
  const preco = input.formatToNumber();
  console.log("teste produto")
  if(preco === 0) {
    input.setCustomValidity("O valor do produto deve ser maior que R$ 0");
    return;
  }

  input.setCustomValidity("");
  return;
}