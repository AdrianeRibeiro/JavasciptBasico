/*class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);

  }
}

//herança
class TodoList extends List {
  constructor() {
    super();
    this.usuario = "Diego";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.addTodo("Novo todo");
}

MinhaLista.mostraUsuario();

//métodos estáticos: não preciso estanciar a classe para chamar o método
class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 2));

const arr = [1, 3, 4, 5, 8, 9]

//map -> percorrer o vetor
const newArr = arr.map(function(item, index) {
  return item * 2;
});

console.log(newArr)

// next proximo valor
const sum = arr.reduce(function(total, next) {
  return total + next;
})

console.log(sum)

const filter = arr.filter(function(item) {
  return item % 2 === 0;
})

console.log(filter);

const find = arr.find(function(item) {
  return item === 4;
})

console.log(find)

const arr = [1, 3, 4, 5, 6];

// função anonima
const newArr = arr.map(function(item) {
  return item * 2
});
console.log(newArr);

//arrow function
const newArr2 = arr.map((item) => {
  return item * 2
});
console.log(newArr2);

//arrow function quando tem um retorno simples
const newArr3 = arr.map((item) => item * 2);
console.log(newArr3);

const teste = () => ({ nome: 'Diego'});

console.log(teste());

const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());
*/

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
}

console.log(usuario)
// desestruturação -> informe quais propriedades eu quero
const { nome, idade, endereco: {cidade}} = usuario;
console.log(nome, idade, cidade)

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);