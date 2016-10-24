class Programa{
    protected nombre: string;
    protected version: number;

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getVersion(){
        return this.version;
    }

    setVersion(version:number){
        this.version = version;
    }
}

class EditarVideo extends Programa{
    public timeline: number;

    serTimeLine(timeline:number){
        this.timeline = timeline;
    }

    getTimeLine(){
        return this.timeline;
    }

    getAllData():string {
        return this.getNombre()+" - "+this.getVersion()+" - "+this.getTimeLine();
    }
}

var edito = new EditarVideo();

edito.setNombre("Camtasia Studio");
edito.setVersion(8);
edito.serTimeLine(400);

console.log(edito.getAllData());

/// Lógica del formulario

var programas = [];

function guardar(){
    var nombre: string = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);
    programas.push(programa);

    var list = "";
    for(var i=0; i< programas.length; i++){
        list = list+"<li>"+programas[i].getNombre()+"</li>";
    }

    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML = list;
    (<HTMLInputElement>document.getElementById("nombre")).value = null;
}