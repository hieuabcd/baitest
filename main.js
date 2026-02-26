let text = document.getElementById('title');
let position = window.innerWidth;

setInterval(function () {
    position -= 2; 
    text.style.left = position + 'px';
    
    if (position <- text.offsetWidth) {
        position = window.innerWidth;
    }
},20)

