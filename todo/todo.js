let todoList = [];

function addItem(title)
{    
    todoList.push({
        title : title,
        done  : false
    });
}

function refreshUI()
{    
    let htmlData = '';

    let idx = 1;

    for(let i in todoList) // instrução foreach
    {
       let item = todoList[i];
       let checked = item.done ? 'checked' : '';
       htmlData += `
          <div>
            <label>
                <input type = "checkbox" ${checked} onclick = "this.checked ? doneClickHandler(${i}) : undoneClickHandler(${i})" name= "done" value = "${item.done}" />
                <span style= "${item.done ? 'text-decoration: line-through' : ''}" >
                ${idx}. ${item.title}
                </span>
            </label>
          </div>       
          `;            

          idx++;
    }

    document.getElementById('todoList').innerHTML = htmlData;
}

function doneClickHandler(idx)
{
    todoList[idx].done = true;
    refreshUI();
}

function undoneClickHandler(idx)
{
    todoList[idx].done = false;
    refreshUI();
}

function addItemClickHandler()
{
    addItem(document.getElementById('todo').value);
    refreshUI();
    document.getElementById('todo').value = '';
}

addItem('Criar pagina HTML para exemplo de Lista de Tarefas')

window.addEventListener('load', function(){
    refreshUI();
});