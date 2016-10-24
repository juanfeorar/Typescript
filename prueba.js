function holaMundo(nombre) {
    return "Hola Mundo!!! soy " + nombre;
}
var nombre = "Juan Fernando Ordóñez";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
var nombre1 = "Julieta";
var edad = 2;
var programado = true;
var lenguajes = ["php", "javascript", "css"];
etiqueta.innerHTML = nombre1 + "-" + "edad";
alert("Hola mundo alert" + nombre);
///Funciones y tipado
function devuelveNumero(num) {
    return "número devuelto: " + num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = true;
    }
    else {
        var num = false;
    }
    return num;
}
alert(devuelveString("hola"));
alert(devuelveNumero(34));
/**************CLASES EN TYPESCRIPT ************************/
