const container = document.querySelector('.circle-container');
const deleteBtn = document.getElementById('del-circle');
deleteBtn.style.backgroundColor = '#4343437e';
deleteBtn.style.cursor = 'none'

if(navigator.cookieEnabled === false){
    alert('Cookies off')
}

document.cookie = "name=JonSnow;max-age=9000;path=/";
document.cookie = "name=Bolton;max-age=9000;path=/";
document.cookie = "name=Dog;max-age=9000;path=/";

console.log('***');
console.log(document.cookie);


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


