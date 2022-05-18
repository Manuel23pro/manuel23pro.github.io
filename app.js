 // esto captura el evento del boton 
 let boton = document.getElementById('boton').addEventListener('click',resibirDatos);

 async function resibirDatos(){

    let datos = await fetch('https://api.adviceslip.com/advice');

    let respuesta = await datos.json();

    let id = document.getElementById('id');

    //id.innerHTML = '';
    id.innerHTML = `#${respuesta.slip.id}`;


    let parrafo = document.getElementById('texto')  

    parrafo.innerHTML = '';

    parrafo.innerHTML = `${await respuesta.slip.advice}`;

 }



 