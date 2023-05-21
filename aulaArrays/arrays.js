console.log(`Introdução aos Arrays em JavaScript`);

let listaCompras = ['Morango','Manga','Goiaba','Cenoura','Beterraba','Couve-flor'];

function adicionarItem(item){
    listaCompras.push(item);
}

function removerUltimoItem(){
    listaCompras.pop();
}

function adicionarItemNoInicio(item){
    listaCompras.unshift(item);
}

function removerItemNoInicio(item){
    listaCompras.shift(item);
}


adicionarItem('Açucar');
removerUltimoItem();
adicionarItemNoInicio('Sucrilhos');
removerItemNoInicio('Sucrilhos');
listaCompras.splice(1,1,'Uva','Abacaxi');

console.log(listaCompras);