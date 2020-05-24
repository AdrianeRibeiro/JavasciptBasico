export class Cliente {
  nome;
  _cpf;
  static numeroDeClientes = 0;

  get cpf() {
    return this._cpf;
  }

  constructor(nome, cpf){
    this.nome = nome;
    this._cpf = cpf;
    Cliente.numeroDeClientes += 1;
  }
}

//v13.5.0 desse projeto
