const title = document.getElementById('titulo');
const conte = document.getElementById('contenedor');
console.log(typeof title);  //tipo de elemento
console.log(title.innerHTML); //texto interno de ese elemento
console.log(title.tagName); // ver el tipo de etiqueta
//typeOf
// InnerText


// getElementByClassName todos los que tengan esa clase

const toppins = document.getElementsByClassName('toppings');  //collecion html 4 elementos
console.log(toppins);
console.log(toppins.length); //tamaño del arreglo
console.log(toppins[0]); //accedo al indice 0 del arreglo topings

// Selecciono eleemntos por su etiqueta

const detalle = document.getElementsByTagName('li'); //seleccion en base a su etiqueta html
console.log(detalle);//se selecciona todos los elementos li

// Seleccionar por medio de clases css

const aceituna = document.querySelector('#aceitunas'); //selecciona por selector css
console.log(aceituna);
const primerToppingNaranja = document.querySelector('ul li.color-naranja');
console.log(primerToppingNaranja);
//seleccionar todos los elemntos que no tengn la clase fondo azul

const noFondoAzul = document.querySelector('ul li:not(color-blue)'); 
console.log('Selecciona el primer li que no tienen fondo Azul', noFondoAzul);

//QuerySelectorAll nos devuelve una collecion html como un arreglo
const toppingNaranja = document.querySelectorAll('.toppings.color-blue');  //todos los elementos que cumplen ese criterio 
console.log(toppingNaranja);  //devuelve una lista de nodo

// seleccionar el primer elemento

const firtsElement = document.querySelector('.toppings');
console.log(firtsElement.style); // ver las propiedades css 

//asignarle estilo al elemento seleccionado dependiendo la seleccion
firtsElement.style.backgroundColor = 'blue';
firtsElement.style.textTransform= 'uppercase';

const title2 = document.getElementById('titulo');
title.innerText = 'Cambio de texto';

const enlace = document.getElementsByTagName('a');
console.log(enlace[0].getAttribute('href'));  //obtengo el valor del href
console.log(enlace[0].removeAttribute()); //elimino el atributo del dom
console.log(enlace[0].setAttribute('href', 'https://google.com.it')); //actualizo el valor del href

// Agregar clases a elementos 
const firtsTop = document.querySelector('.toppings');
firtsTop.classList.add('mi-clase')  // agrego el nombre de la clase que quiero asignar
console.log(firtsTop.classList);


// Verificar si un elemento contiene una clase

const classContain = document.querySelector('.toppings');
console.log(classContain.classList.contains('fondo-marron')); //verifica si tiene una clase true or false
console.log(classContain.classList);