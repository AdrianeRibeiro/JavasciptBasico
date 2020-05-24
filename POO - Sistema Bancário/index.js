import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js" 

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const conta1 = new ContaCorrente(cliente1, 101);
const conta2 = new ContaCorrente(cliente2, 102);

console.log(cliente1)
console.log(cliente2)
console.log(ContaCorrente.numeroDeContas)
console.log(Cliente.numeroDeClientes)

//Operações
conta1.depositar(-1);
console.log(conta1.saldo)
conta1.depositar(500);
console.log(conta1.saldo)
conta1.sacar(300);
console.log(conta1.saldo)
conta1.sacar(300);
console.log(conta1.saldo)

conta1.transferir(300, conta2)
conta1.transferir(100, conta2)

console.log(conta1.saldo)
console.log(conta2.saldo)



