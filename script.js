let input=document.getElementById('input')
let button=document.getElementById('btn')
let todos=document.getElementById('todos')

button.addEventListener('click',display1)



let todo=[]

window.onload=()=>{
    let old=JSON.parse(localStorage.getItem('todo_list'))||[]
    old.forEach( (task) => {
       display(task)
       console.log(old)
    });
}

function display1(){
    let task=input.value
    display(task)
}

function display(task){
    let para=document.createElement('p')
    todos.appendChild(para)
    
    para.innerHTML=task
    todo.push(task)

    localStorage.setItem('todo_list',JSON.stringify(todo))
    input.value=''

    para.addEventListener('click',strike)
    function strike(){
      para.style.textDecoration='line-through'
      remove(task)
    }

    para.addEventListener('dblclick',complete)
    function complete(){
      todos.removeChild(para)
      remove(task)
    }
}
 
function remove(inp){
    let index = todo.indexOf(inp)
    console.log(todo)
    if(index > -1){
      todo.splice(index,1)
      localStorage.setItem('todo_list',JSON.stringify(todo))
    }
}



