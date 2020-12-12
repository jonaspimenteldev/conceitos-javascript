// const name = 'Jonas';

// Não podemos alterar valor
//name = 'Jonas';


// const user = {
//     name: 'Jonas'
// }

// Mas se for objeto, podemos trocar suas propriedades
// user.name = 'Outro nome';

// Não podemos fazer o objeto "apontar" para outro lugar
// user = {
//     name: 'Jonas'
// }

const persons = ['Jonas', 'Joao', 'José'];

// Podemos adicionar novos itens
persons.push('Daniel');
// const persons = ['Jonas', 'Joao', 'José'];

persons.shift();

persons[1] = "James";

console.log("\nArray após as alterações: ", persons);
//[ 'Joao', 'James', 'Daniel' ]