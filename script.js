// script.js

// Datos de ejemplo para cada día (vacíos por defecto)
const datos = [
    { salida: "Sí", acompanado: "No", donde: "Paseo", comentarios: "Todo fue normal", valoracion: "10" },
    { salida: "No", acompanado: "Sí", donde: "Trabajo", comentarios: "Mucho trabajo", valoracion: "7" },
    { salida: "Sí", acompanado: "No", donde: "Compras", comentarios: "Compré muchas cosas", valoracion: "8" },
    { salida: "Sí", acompanado: "Sí", donde: "Parque", comentarios: "Fui con amigos", valoracion: "9" },
    { salida: "No", acompanado: "No", donde: "Casa", comentarios: "Día tranquilo en casa", valoracion: "6" },
    // El resto de los días inicializados como vacíos
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}
];

function abrirModal(dia) {
    // Mostrar el modal y actualizar el título
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-dia").textContent = dia;

    // Obtener los datos del día seleccionado
    const diaDatos = datos[dia - 1] || {};

    // Actualizar los detalles en el modal, dejando vacío si no hay datos
    document.getElementById("salida").value = diaDatos.salida || "";
    document.getElementById("acompanado").value = diaDatos.acompanado || "";
    document.getElementById("donde").value = diaDatos.donde || "";
    document.getElementById("comentarios").value = diaDatos.comentarios || "";
    document.getElementById("valoracion").value = diaDatos.valoracion || "";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
