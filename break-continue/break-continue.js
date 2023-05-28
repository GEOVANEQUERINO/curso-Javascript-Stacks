console.log('Sub modulo: Introdução ao Javascript II');
console.log('Quebrando fluxo de um laço');

// break; para a execução
// continue; pula para o proximo 

let listaCompras = ['Uva', 'Banana', 'Abacate'];

for (let i = 0; i < listaCompras; i++)
{
    if (i == 1){
        break;
    }

    console.log(`${i}. ${listaCompras[i]}`);
}