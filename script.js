// script.js
function guardarDatos() {
    for (let i = 1; i <= 30; i++) {
        let salida = document.getElementById(`salida${i}`).value;
        let donde = document.getElementById(`donde${i}`).value;
        let acompanado = document.getElementById(`acompanado${i}`).value;
        let comentarios = document.getElementById(`comentarios${i}`).value;
        let valoracion = document.getElementById(`valoracion${i}`).value;

        console.log(`Día ${i}:`);
        console.log(`Salida: ${salida}`);
        console.log(`Dónde: ${donde}`);
        console.log(`Acompañado: ${acompanado}`);
        console.log(`Comentarios: ${comentarios}`);
        console.log(`Valoración: ${valoracion}`);
    }
}

