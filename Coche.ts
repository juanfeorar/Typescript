interface CocheBase{
    getModelo():string;
    getVelocidad():number;

}
/**
 * Coche
 */
class Coche implements CocheBase{
    private color: string;
    private modelo: string;
    private velicidad: number;
    
    constructor(modelo:any) {
        this.velicidad = 0;
        
        this.color = "Blanco";
        if(modelo != null){
            this.modelo = "BMW Genérico";
        }else{
            this.modelo == modelo;
        }
    }


    public getColor(){
        return this.color;
    }

    public serColor(color: string){
        this.color = color;
    }

    public getModelo(){
        return this.modelo;
    }

    public setModelo(modelo: string){
        this.modelo = modelo;
    }

    public getVelocidad(){
        return this.velicidad;
    }

    public acelerar(){
        this.velicidad++;
    }

    public frenar(){
        this.velicidad--;
    }
}

var coche = new Coche(null);
var coche1 = new Coche(null);
var coche2 = new Coche(null);
coche.serColor("Rojo");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El color del coche 0 es: "+coche.getColor() +" y la velocidad es: "+coche.getVelocidad());

coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
coche1.serColor("Azul");
console.log("El color del coche 0 es: "+coche1.getColor()+" y la velocidad es: "+coche1.getVelocidad());


coche2.serColor("verde");
coche2.acelerar();
coche2.acelerar();
coche2.acelerar();
coche2.frenar();
console.log("El color del coche 0 es: "+coche2.getColor()+" y la velocidad es: "+coche2.getVelocidad());

var coche3 = new Coche("Renault clio");
console.log("El modelo es: " + coche3.getModelo());
