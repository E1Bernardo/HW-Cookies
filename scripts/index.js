var circleCount = 0;
const container = document.querySelector('.circle-container');
const deleteBtn = document.getElementById('del-circle');
deleteBtn.style.backgroundColor = '#4343437e';
deleteBtn.style.cursor = 'none'

if(document.cookie == ''){
    circleCount = 3;
    createStartCircle(circleCount);
    document.cookie = "current=3";
}

document.getElementById('add-circle').addEventListener('click', () =>{
    let element = document.createElement('div');
    element.className = 'circle';
    container.appendChild(element);
    deleteBtn.style.backgroundColor = 'white';
    deleteBtn.style.cursor = 'pointer'
});

document.getElementById('del-circle').addEventListener('click', () =>{
    if(container.children.length != 0){
        var circles = container.lastChild.remove();
    }
    if(container.children.length == 0){
        deleteBtn.style.backgroundColor = '#4343437e';
        deleteBtn.style.cursor = 'none'
    }
});

function createStartCircle(count){
    for(let i = 0; i < count; i++){
        let element = document.createElement('div');
        element.className = 'circle';
        container.appendChild(element);
    }
}


