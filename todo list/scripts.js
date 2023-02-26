let add = document.getElementsByClassName('add_btn')[0];
let task_content;
let taskContentArr = [];
let task_list = document.getElementsByClassName('list')[0];
let delete_item = document.getElementsByClassName('delete_item')


add.addEventListener('click', (event) => {
    task_content = document.getElementsByClassName('task_input')[0].value;
    createTask();
})



function createTask() {
    let list_item = document.createElement('div');
    list_item.classList.add('list_item');
    let content = document.createElement('div');
    content.innerText = task_content;
    content.classList.add('content');
    content.title=task_content;
    let delete_item = document.createElement('span');
    delete_item.classList.add('delete_item');
    delete_item.title='Delete Task';
 
    let img=document.createElement('img');
    img.src='./icons/delete.png';
    img.addEventListener('click', (event) => {
        deleteTask(event);
    });
    delete_item.appendChild(img);
    list_item.appendChild(content);
    list_item.appendChild(delete_item);
    task_list.appendChild(list_item);
    document.getElementsByClassName('task_input')[0].value = '';
}

function deleteTask(event) {
    let deleteContent=event.target.parentNode.previousSibling.innerText;
    console.log(event.target.parentNode.previousSibling.innerText);
    let item = document.getElementsByClassName('list_item');
    for(let i=0;i<item.length;i++){
        let temp=item[i].childNodes[0].innerText;
        if(temp===deleteContent){
            task_list.removeChild(item[i])
        }
    }
 
}