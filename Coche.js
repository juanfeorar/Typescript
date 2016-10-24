/**
 * Coche
 */
var Coche = (function () {
    function Coche(modelo) {
        this.velicidad = 0;
        this.color = "Blanco";
        if (modelo != null) {
            this.modelo = "BMW Genérico";
        }
        else {
            this.modelo == modelo;
        }
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.serColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velicidad;
    };
    Coche.prototype.acelerar = function () {
        this.velicidad++;
    };
    Coche.prototype.frenar = function () {
        this.velicidad--;
    };
    return Coche;
}());
var coche = new Coche(null);
var coche1 = new Coche(null);
var coche2 = new Coche(null);
coche.serColor("Rojo");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El color del coche 0 es: " + coche.getColor() + " y la velocidad es: " + coche.getVelocidad());
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
coche1.serColor("Azul");
console.log("El color del coche 0 es: " + coche1.getColor() + " y la velocidad es: " + coche1.getVelocidad());
coche2.serColor("verde");
coche2.acelerar();
coche2.acelerar();
coche2.acelerar();
coche2.frenar();
console.log("El color del coche 0 es: " + coche2.getColor() + " y la velocidad es: " + coche2.getVelocidad());
var coche3 = new Coche("Renault clio");
console.log("El modelo es: " + coche3.getModelo());
