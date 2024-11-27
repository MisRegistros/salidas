// Datos de ejemplo para cada día (vacíos)
const datos = [
    { salida: "Si", acompanado: "No" },  // Día 1
    { salida: "No", acompanado: "Si" },  // Día 2
    { salida: "Si", acompanado: "Si" },  // Día 3
    { salida: "No", acompanado: "No" },  // Día 4
    { salida: "Si", acompanado: "No" }   // Día 5
];

// Función para actualizar la información en el modal
function abrirModal(dia) {
    // Mostrar el modal y actualizar el título
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-dia").textContent = "Detalles del día " + dia;

    // Obtener los datos del día seleccionado
    const diaDatos = datos[dia - 1];

    // Actualizar los detalles en el modal con íconos
    document.getElementById("salida").innerHTML = diaDatos.salida === "Si" ? '<span class="checkmark">&#10003;</span>' : '<span class="cross">&#10007;</span>';
    document.getElementById("acompanado").innerHTML = diaDatos.acompanado === "Si" ? '<span class="checkmark">&#10003;</span>' : '<span class="cross">&#10007;</span>';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
