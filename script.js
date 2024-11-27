// script.js
function abrirModal(dia) {
    // Mostrar el modal y actualizar el título
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-dia").textContent = dia;

    // Rellenar el formulario con datos predeterminados para el día
    document.getElementById("salida").value = ''; // Aquí puedes poner datos predeterminados
    document.getElementById("acompanado").value = '';
    document.getElementById("donde").value = '';
    document.getElementById("comentarios").value = '';
    document.getElementById("valoracion").value = '';
}

// Cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Prevenir que se recargue la página al enviar el formulario
document.getElementById("form-datos").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Datos guardados correctamente");
    cerrarModal();
});
