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
    let i = 0;

   // for(var i = 0; i < todoList.length; i++)
   while (i < todoList.length)
    {
       htmlData += `
          <div>
            <label>
                <input type = "checkbox" name= "done" value = "${todoList[i].done}" />
                <span style= "${todoList[i].done ? 'text-decoration: line-through' : ''}" >
                ${todoList[i].title}
                </span>
            </label>
          </div>       
          `;            

          i++;
    }

    document.getElementById('todoList').innerHTML = htmlData;
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