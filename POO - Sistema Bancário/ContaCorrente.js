import { Cliente } from "./Cliente.js"

export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  // #nome_da_variavel -> proposta para atributo privado
  // underline indica atributo privado
  _cliente; 
  _saldo = 0;

  set cliente(novoValor) {
    if(novoValor instanceof Cliente) {
      this._cliente = novoValor
    } 
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  constructor(cliente, agencia){
    this.cliente = cliente;
    this.agencia = agencia;
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valor) {
    var sucesso = false;
    if(this._saldo >= valor) {
      this._saldo -= valor;
      sucesso = true
    } 

    var mensagem = sucesso ? `Operação realizada com sucesso. Seu saldo é R$ ${this._saldo}` : "Saldo inválido";
    console.log(mensagem);
  }

  depositar(valor) {
    var sucesso = false;
    if(valor > 0) {
      this._saldo += valor;
      sucesso = true;
    } 

    var mensagem = sucesso ? `Operação realizada com sucesso. Seu saldo é R$ ${this._saldo}` : "Valor inválido";
    console.log(mensagem);
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
