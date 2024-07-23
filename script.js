const display = document.getElementById("display")

function appendToDisplay (input) {
    display.value += input
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
        
    }
    
}

document.querySelector("body").addEventListener("mousemove", eyeball)

function eyeball() {
    const eye = document.querySelectorAll(".eye")
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left)+(eye.clientWidth/2);
        
        let y = (eye.getBoundingClientRect().top)+(eye.clientHeight/2);

        let radian = Math.atan2(event.pageX-x, event.pageY-y);

        let rotation = (radian*(180/Math.PI)*-1)+270;

        eye.style.transform = "rotate("+rotation+"deg)"
    })
    
}

const body = document.getElementById("body")
setTimeout(() => {
    body.style.opacity = "100%"
    body.style.transitionDuration = "5s"
    body.style.transitionTimingFunction = "linear"

}, 500);