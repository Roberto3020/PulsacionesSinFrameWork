function CalcularPulsacion() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var identificacion = document.getElementById("identificacion").value;
    var sexo = document.getElementById("sexo").value;
    var edad = document.getElementById("edad").value;

    var pulsacion;
    if (sexo === 'm') {
        pulsacion = (220 - edad) / 10;
    } else if (sexo === "f") {
        pulsacion = (210 - edad) / 10;
    }

    document.getElementById("pulsacion").value = pulsacion;
}