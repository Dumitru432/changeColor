let btn = document.querySelector('.first-button') 

let whereColoresIsChanged = document.querySelector('.containerForMyColor')

let colors = ['red', 'blue', 'yellow', 'green']  
console.log(colors.length)
let index = 0; // 4

btn.addEventListener('click', changeColor) 
function changeColor(){
    whereColoresIsChanged.style.backgroundColor = colors[index] // practic aici am deja colors[index = 0, de la linia 7]

    if (index >= colors.length - 1) { 
        index = 0; 
    } else {   
        index = (index + 1) // o sa fie index 1 si o sa afiseze culoarea blue
    }
}