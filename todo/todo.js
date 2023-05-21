let todoList = [];

function addItem(title){
    
    todoList.push({
        title : title,
        done  : false
    });
}

function refreshui(){
    
    let htmlData = '';

    for(var i=0; i < todoList.length; i++){

       // if(!todoList[i].done){
            htmlData += `
            <div>
                <label>
                     <input type = "checkbox" name= "done" value = "${todoList[i].done}" />
                     <span sttyle= "${todoList[i].done ? 'text-decoration: line-through' : ''}" >
                     ${todoList[i].title}
                     </span>
                </label>
            </div>       
            `;
       // }       
    }

    document.getElementById('todoList').innerHTML = htmlData;
}

addItem('Criar pagina HTML para exemplo de Lista de Tarefas')

window.addEventListener('load', function(){
    refreshui();
});