const boton = document.getElementById('boton-color');
const color = document.getElementById('color');


function generarColorHexadecimal(){
    let digitos = '0123456789ABCDEF';
    let colorHexadecimal = '#';

    for (let i=0; i<6; i++){
        debugger;
        let indiceAleatorio = Math.floor(Math.random()*16);
        colorHexadecimal += digitos[indiceAleatorio];
        

    }

    return colorHexadecimal;

}

boton.addEventListener('click', function(){
    let colorAleatorio = generarColorHexadecimal();
    console.log(colorAleatorio);
    //Actualiza el color aleatorio
    color.textContent = colorAleatorio;
    //actualiza el color de fondo
    document.body.style.backgroundColor = colorAleatorio;




})