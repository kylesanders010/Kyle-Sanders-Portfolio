const elbuttonArray = document.getElementsByClassName('mobile');
const elsideBarArray = document.getElementsByClassName('sidebar');

const button = elbuttonArray[0];
const sidebar = elsideBarArray[0];

let flipped = false;

function triggerMenuButton(event) {
    if (flipped === false) {
        
        button.style.transform = 'rotate(90deg)';
        sidebar.style.transform = 'translate(67%)';
        flipped = true;
    } else {
        button.style.transform = 'rotate(0deg)';
        sidebar.style.transform = 'translate(167%)';
        flipped = false;
    }
    
    
    
}
button.addEventListener('click', triggerMenuButton);
