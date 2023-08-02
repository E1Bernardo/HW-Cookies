var circleCount = 0;
const container = document.querySelector('.circle-container');
const deleteBtn = document.getElementById('del-circle');

if(getCookie('current') == '0'){
    deleteBtn.style.backgroundColor = '#4343437e';
    deleteBtn.style.cursor = 'none'
}

if(document.cookie == ''){
    circleCount = 3;
    createStartCircle(circleCount);
    document.cookie = `current=3;max-age=${24*60*60}`;
}
if(document.cookie != ''){
    circleCount = getCookie('current');
    createStartCircle(circleCount);
}

document.getElementById('add-circle').addEventListener('click', () =>{
    let element = document.createElement('div');
    element.className = 'circle';
    container.appendChild(element);
    deleteBtn.style.backgroundColor = 'white';
    deleteBtn.style.cursor = 'pointer'
    document.cookie = `current=${++circleCount}`;
});

document.getElementById('del-circle').addEventListener('click', () =>{
    if(container.children.length != 0){
        var circles = container.lastChild.remove();
        document.cookie = `current=${--circleCount}`;
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

function getCookie(key){
    let cookies = {};
    let tempCookiesStrings = document.cookie.split('; ');
    for(let el of tempCookiesStrings){
        let pare = el.split('=');
        cookies[pare[0]] = pare[1];
    }
    return cookies[key];
}