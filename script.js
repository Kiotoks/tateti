let jugadorUno = true;
let celdas = document.getElementsByClassName("cell");
const botonReiniciar = document.querySelector('#reiniciar');
botonReiniciar.addEventListener('click', reiniciar);

for (let index = 0; index < celdas.length; index++) {
   celdas[index].addEventListener("click", llenarCelda);
}

function reiniciar(){
   terminar("")
   for (let i = 0; i < celdas.length; i++) {
      celdas[i].innerHTML = "";
      celdas[i].addEventListener("click", llenarCelda);
   }
   jugadorUno = true;
}

function llenarCelda(e) {
   let cellValue = e.target.innerHTML;
   if (!cellValue.length) {
      e.target.innerHTML = jugadorUno ? "X" : "O";
      jugadorUno = !jugadorUno;

      ganar(0, 1, 2);
      ganar(3, 4, 5);
      ganar(6, 7, 8);
      ganar(0, 3, 6);
      ganar(1, 4, 7);
      ganar(2, 5, 8);
      ganar(0, 4, 8);
      ganar(6, 4, 2);
   }
}

function ganar(c1, c2, c3) {
   if (
      celdas[c1].innerHTML.length &&
      celdas[c1].innerHTML == celdas[c2].innerHTML &&
      celdas[c2].innerHTML == celdas[c3].innerHTML
   ) {
      terminar("Gano: " + celdas[c1].innerHTML);
   }
}

function terminar(player) {
   document.querySelector("#resultado").innerHTML = player;
   for (let index = 0; index < celdas.length; index++) {
      celdas[index].removeEventListener("click", llenarCelda);
   }
   
}
