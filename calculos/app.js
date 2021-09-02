var listaPulsacion = [];

function CalcularPulsacion() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var identificacion = document.getElementById("identificacion").value;
    var sexo = document.getElementById("sexo").value;
    var edad = document.getElementById("edad").value;

    var pulsacion;
    if (sexo === 'm') {
        pulsacion = (210 - edad) / 10;
    } else if (sexo === "f") {
        pulsacion = (220 - edad) / 10;
    }

    document.getElementById("pulsacion").value = pulsacion;
    guardar_localStorage(nombre, apellido, identificacion, sexo, edad, pulsacion);
    obtener_localStorage();
    drawPulsacionTable();
}





function guardar_localStorage(nombre, apellido, identificacion, sexo, edad, pulsacion) {
    let persona = {
        "nombre": nombre,
        "apellido": apellido,
        "identificacion": identificacion,
        "sexo": sexo,
        "edad": edad,
        "pulsacion": pulsacion
    };
    console.log(persona);
    listaPulsacion.push(persona);
    localStoragePulsaciondList(listaPulsacion);
}

function obtener_localStorage() {
    var storelist = localStorage.getItem('localpulsacionlist');
    if (storelist === null) {
        listaPulsacion = [];
    } else {
        listaPulsacion = JSON.parse(storelist);
    }
    return listaPulsacion;
}

function localStoragePulsaciondList(plist) {
    localStorage.setItem('localpulsacionlist', JSON.stringify(plist));
}

function drawPulsacionTable() {
    var list = obtener_localStorage();
    tbody = document.querySelector('#pulsacionesTable tbody');

    tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i);
        var nameCell = row.insertCell(0),
            apellidoCell = row.insertCell(1),
            identificacionCell = row.insertCell(2),
            sexoCell = row.insertCell(3),
            edadCell = row.insertCell(4),
            pulsacionCell = row.insertCell(5);


        nameCell.innerHTML = list[i].nombre;
        apellidoCell.innerHTML = list[i].apellido;
        identificacionCell.innerHTML = list[i].identificacion;
        sexoCell.innerHTML = list[i].sexo;
        edadCell.innerHTML = list[i].edad;
        pulsacionCell.innerHTML = list[i].pulsacion;

        tbody.appendChild(row);
    }
}