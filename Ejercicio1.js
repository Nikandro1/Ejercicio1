function validar() {
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var email = document.getElementById("mail").value
    var pais = document.getElementById("pais").value
    var fecha = document.getElementById("fecha").value;
    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert("Campo Nombre incompleto");
        return false
    }
    if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
        alert("Campo apellido incompleto");
        return false
    }
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))) {
        alert("Campo email incompleto o incorrecto");
        return false;
    }
    if (fecha === "") {
        alert("Fecha de nacimiento incorrecta");
        return false;
    }

    if (pais == "") {
        alert("Seleccione un país");
        return false;
    }
    else {
        alert("Se han guardado tus datos");
    }
}
document.getElementById('boton').addEventListener('click', () => {
    const miDiv = document.getElementById('formu');
    const miBody = document.getElementById('body');
    
    // Alternamos entre las clases formulario y formularioOscuro
    if (miDiv.classList.contains('formulario')) {
        miDiv.classList.remove('formulario');
        miDiv.classList.add('formularioOscuro');
        miBody.classList.remove('body');
        miBody.classList.add('bodyOscuro');
    } else {
        miDiv.classList.remove('formularioOscuro');
        miDiv.classList.add('formulario');
        miBody.classList.remove('bodyOscuro');
        miBody.classList.add('body');
    }
});