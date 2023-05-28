console.log('Submódulo: Introdução ao Javascript II');
console.log('Usando estrutura de repetição para deixar seu código limpo (clean-code)');

const numeros = [1,2,3,4,5];

let soma = 0;
let multiplicacao = 1;

for(let i = 0; i < numeros.length; i++)
{
    soma += numeros[i];
}

for (let i in numeros) multiplicacao *= numeros[i];

console.log('O resultado da soma é: ', soma);
console.log('O resultado da multiplicação é de: ', multiplicacao);