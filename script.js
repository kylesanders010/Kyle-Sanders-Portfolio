const elbuttonArray = document.getElementsByClassName('mobile');
const button = elbuttonArray[0];

let flipped = false;

function triggerMenuButton(event) {
    if (flipped === false) {
        button.style.transform = 'rotate(90deg)';
        flipped = true;
    } else {
        button.style.transform = 'rotate(0deg)';
        flipped = false;
    }
    
    
    
}

button.addEventListener('click', triggerMenuButton);
