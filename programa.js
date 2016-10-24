var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Programa = (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
var EditarVideo = (function (_super) {
    __extends(EditarVideo, _super);
    function EditarVideo() {
        _super.apply(this, arguments);
    }
    EditarVideo.prototype.serTimeLine = function (timeline) {
        this.timeline = timeline;
    };
    EditarVideo.prototype.getTimeLine = function () {
        return this.timeline;
    };
    EditarVideo.prototype.getAllData = function () {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine();
    };
    return EditarVideo;
}(Programa));
var edito = new EditarVideo();
edito.setNombre("Camtasia Studio");
edito.setVersion(8);
edito.serTimeLine(400);
console.log(edito.getAllData());
/// Lógica del formulario
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("nombre").value = null;
}
