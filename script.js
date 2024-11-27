// Datos de ejemplo para cada día
const datos = [
    { salida: "Sí", acompanado: "No", donde: "Paseo", comentarios: "Todo fue normal", valoracion: "10" },
    { salida: "No", acompanado: "Sí", donde: "Trabajo", comentarios: "Mucho trabajo", valoracion: "7" },
    { salida: "Sí", acompanado: "No", donde: "Compras", comentarios: "Compré muchas cosas", valoracion: "8" },
    { salida: "Sí", acompanado: "Sí", donde: "Parque", comentarios: "Fui con amigos", valoracion: "9" },
    { salida: "No", acompanado: "No", donde: "Casa", comentarios: "Día tranquilo en casa", valoracion: "6" },
    // Añadir más días si es necesario
];

// Función para marcar los días con o sin datos
function marcarDias() {
    const dias = document.querySelectorAll('.day');

    // Recorremos todos los días del calendario
    dias.forEach(dia => {
        const numeroDia = parseInt(dia.textContent); // Obtenemos el número del día

        // Verificamos si ese día tiene datos
        const tieneDatos = datos[numeroDia - 1]; // Obtiene el objeto correspondiente al día

        if (tieneDatos) {
            // Si tiene datos, agregar la clase para el color verde
            dia.classList.add('day-con-datos');
            dia.classList.remove('day-sin-datos');
        } else {
            // Si no tiene datos, agregar la clase para el color rojo
            dia.classList.add('day-sin-datos');
            dia.classList.remove('day-con-datos');
        }
    });
}

// Función para actualizar la información en el modal
function abrirModal(dia) {
    // Mostrar el modal y actualizar el título
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-dia").textContent = "Detalles del día " + dia;

    // Obtener los datos del día seleccionado
    const diaDatos = datos[dia - 1];

    // Actualizar los detalles en el modal con íconos en Salida y Acompañado
    document.getElementById("salida").innerHTML = diaDatos.salida === "Sí" ? '<span class="checkmark">&#10003;</span>' : '<span class="cross">&#10007;</span>';
    document.getElementById("acompanado").innerHTML = diaDatos.acompanado === "Sí" ? '<span class="checkmark">&#10003;</span>' : '<span class="cross">&#10007;</span>';

    // Los demás campos mostrarán texto normal
    document.getElementById("donde").textContent = diaDatos.donde;
    document.getElementById("comentarios").textContent = diaDatos.comentarios;
    document.getElementById("valoracion").textContent = diaDatos.valoracion;
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Llamar la función para marcar los días al cargar la página
window.onload = function() {
    marcarDias(); // Marcar los días según los datos
};
