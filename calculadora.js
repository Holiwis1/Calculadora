// pantalla
const pantalla = document.querySelector('.screen');

//  botones 
const botones = document.querySelectorAll('.btn, .operator');



// Agrega un  click a cada botón 
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', function() {
    // Obtiene el numero actual de la pantalla
    let valorPantalla = pantalla.value;
    
    // Obtiene el numero del botón presionado
    let valorBoton = botones[i].value;
    
    // borra la pantalla si pulsa C
    if (valorBoton === 'C') {
      pantalla.value = '';
    }
    // Si se presiona el botón = realiza la operacion de la pantalla
    else if (valorBoton === '=') {
      pantalla.value = eval(valorPantalla);
    }
    // Si se presiona el botón % divide el valor actual entre 100
    else if (valorBoton === '%') {
      pantalla.value = parseFloat(valorPantalla) / 100;
    }
    // Si se presiona el botón  √ calcula la raíz cuadrada 
    else if (valorBoton === '√') {
      pantalla.value = Math.sqrt(parseFloat(valorPantalla));
    }
    // Si se presiona cualquier otro botón agrega su valor a la pantalla
    else {
      pantalla.value += valorBoton;
    }
  });
}
