/* dependendo dos valores que uma variável guarda o JS trata ela de forma diferente. Passando ela como uma cópia de seu valor ou como uma referência ao espaço de memória onde ela está guardada. Ele faz isso baseado justamente nos valores que a variável guarda. Tipos primitivos são sempre passados como um valor, enquanto que tipos não primitivos sempre são passados por referência.

Um tipo primitivo é simplesmente um valor em sua forma mais simples de representação. Eles também são imutáveis, uma vez declarados seu valor nunca muda.

Em Javascript os tipos primitivos são: String (texto), Number (número), Boolean, Null, undefined e Symbol 

Objetos, Arrays, etc... não são tipos primitivos e por isso o JS trata eles de forma diferente. Variáveis que não são primitivas são mutáveis por natureza e podem conter uma estrutura de dados grande e complexa o que tornaria a operação de cópia desses valores ineficiente.

Quando criamos um objeto dentro do JS ele reserva um espaço de memória no local que chamamos de Heap, ao fazer isso o que ele guarda na variável que criamos não é o valor do Objeto que criamos e sim o endereço de memória onde os valores estão salvos.

Isso torna a operação muito mais eficiente mas causa um problema. Qualquer alteração feita naquele endereço de memória afeta todas as variáveis que referenciam ele.
*/