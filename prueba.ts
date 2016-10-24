function holaMundo(nombre){
    return "Hola Mundo!!! soy " + nombre;
}
let nombre = "Juan Fernando Ordóñez";
var resultado = holaMundo(nombre);
var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = resultado;

var nombre1: String = "Julieta";
var edad: number = 2
var programado:boolean = true;
var lenguajes: Array<string> = ["php", "javascript", "css"];
etiqueta.innerHTML = nombre1+"-"+"edad";

alert("Hola mundo alert" + nombre);


///Funciones y tipado
function devuelveNumero(num:number):string{
    return "número devuelto: "+num;
}

function devuelveString(texto:String):/*number*/boolean{
    if(texto == "hola"){
        var num = true;
    }else{
        var num = false;
    }
    return num;
}
alert(devuelveString("hola"));
alert(devuelveNumero(34));

/**************CLASES EN TYPESCRIPT ************************/
