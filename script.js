// Datos de ejemplo para cada día
const datos = [
  { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 1
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 2
    { salida: "Sí", acompanado: "Sí", donde: "Tirar basura", comentarios: "Todo fue normal", valoracion: "7" },  // Día 3
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 4
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 5
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 6
    { salida: "Sí", acompanado: "Sí", donde: "Compra Navidad", comentarios: "3 horas, encuentro familia", valoracion: "9.5" },  // Día 7
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 8
    { salida: "Sí", acompanado: "Sí", donde: "Tirar basura", comentarios: "Sobre las 23:30", valoracion: "6" },  // Día 9
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 10
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 11
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 12
    { salida: "Sí", acompanado: "No", donde: "Al portal", comentarios: "A recoger un paquete", valoracion: "10" },  // Día 13
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 14
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 15
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 16
    { salida: "Sí", acompanado: "No", donde: "Al portal", comentarios: "Bajé solo, me quedé abajo un rato", valoracion: "10" },  // Día 17
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 18
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 19
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 20
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 25
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 22
    { salida: "Sí", acompanado: "Sí", donde: "Tirar basura", comentarios: "A las 0:16, todo tranquilo", valoracion: "5" },  // Día 21
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 24
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 25
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 26666
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 27
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 28
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },  // Día 29
    { salida: "", acompanado: "", donde: "", comentarios: "", valoracion: "" },   // Día 30
];
// Función para marcar los días con o sin datos
function marcarDias() {
    const dias = document.querySelectorAll('.day');

    // Recorremos todos los días del calendario
    dias.forEach(dia => {
        const numeroDia = parseInt(dia.textContent); // Obtenemos el número del día

        // Obtener el objeto correspondiente al día
        const diaDatos = datos[numeroDia - 1];

        // Verificar si todas las propiedades del objeto están vacías
        const tieneDatos = diaDatos.salida || diaDatos.acompanado || diaDatos.donde || diaDatos.comentarios || diaDatos.valoracion;

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
    // Obtener los datos del día seleccionado
    const diaDatos = datos[dia - 1];

    // Verificar si hay datos para el día
    const tieneDatos = diaDatos.salida || diaDatos.acompanado || diaDatos.donde || diaDatos.comentarios || diaDatos.valoracion;

    // Si no hay datos, no hacer nada
    if (!tieneDatos) {
        return;
    }

    // Si hay datos, mostrar el modal y actualizar el título
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-dia").textContent = "" + dia;

    // Actualizar los detalles en el modal con íconos en Salida y Acompañado
    document.getElementById("salida").innerHTML = diaDatos.salida ? (diaDatos.salida === "Sí" ? '<span class="checkmark">&#10003;</span>' : '<span class="cross">&#10007;</span>') : '';
    document.getElementById("acompanado").innerHTML = diaDatos.acompanado ? (diaDatos.acompanado === "Sí" ? '<span class="checkmark">&#10003;</span>' : '<span class="cross">&#10007;</span>') : '';

    // Los demás campos mostrarán texto normal (vacío si no hay datos)
    document.getElementById("donde").textContent = diaDatos.donde || '';
    document.getElementById("comentarios").textContent = diaDatos.comentarios || '';
    document.getElementById("valoracion").textContent = diaDatos.valoracion || '';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Llamar la función para marcar los días al cargar la página
window.onload = function() {
    marcarDias(); // Marcar los días según los datos
};
