let greeting = document.querySelector("#greeting");
let greetingMessage = document.querySelector("#greeting").innerHTML;
let intro = document.querySelector("#intro");
let introMessage = document.querySelector("#intro").innerHTML;
let designation = document.querySelector("#designation");
let designationMessage = document.querySelector("#designation").innerHTML;


let greetingPosition = 0;
let introPosition = 0;
let designationPosition = 0;

let speed = 200;

const greetingWriter = () => {
    
    greeting.innerHTML = greetingMessage.substring(0, greetingPosition) + "<span id=\"blink\">\u007C</span>";

    if(greetingPosition++ != greetingMessage.length) {
        setTimeout(greetingWriter, speed);
    }
}

const introWriter = () => {
    
    intro.innerHTML = introMessage.substring(0, introPosition) + "<span id=\"blink\">\u007C</span>";

    if(introPosition++ != introMessage.length) {
        setTimeout(introWriter, speed);
    }
}

const designationWriter = () => {
    
    designation.innerHTML = designationMessage.substring(0, designationPosition) + "<span id=\"blink\">\u007C</span>";

    if(designationPosition++ != designationMessage.length) {
        setTimeout(designationWriter, speed);
    }
}
window.addEventListener('load',greetingWriter);
window.addEventListener('load',introWriter);
window.addEventListener('load',designationWriter);