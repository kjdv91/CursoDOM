//obtengo las referencia de los inputs
const inputRed = document.getElementById('rojo');
const inputGreen = document.getElementById('verde');
const inputBlue = document.getElementById('azul');
//referencias a los textos
const redText = document.getElementById('texto-rojo');
const greenText = document.getElementById('texto-verde');
const blueText = document.getElementById('texto-azul');

//Extraigo los valores 
let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;
//Seteo en el texto lo valores obtenidos
redText.innerText = red;
greenText.innerText = green;
blueText.innerText = blue;

function updateColor(red,green,blue){
    const colorRGB = `rgb(${red},${green},${blue})`; //css
    document.body.style.backgroundColor = colorRGB;
}

//Actualizar el input rojo
inputRed.addEventListener('change', (e) =>{
    red= e.target.value; //obtengo el valor del input rojo
    redText.innerText = red;
    updateColor(red,green,blue);
    

});

inputGreen.addEventListener('change', (e) =>{  //escucha el evento cada ves que cambia
    green= e.target.value;//obtengo el valor del input
    greenText.innerText = green; //seteo ese valor 
    updateColor(red,green,blue);
    

});

inputBlue.addEventListener('change', (e) =>{ 
    blue= e.target.value; //obtengo el valor del input azul
    blueText.innerText = blue; //setea el valor en el texto segun el cambio del input
    updateColor(red,green,blue); //acyualiza el color
    

});

