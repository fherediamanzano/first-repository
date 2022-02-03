let 
a: number, 
b: string, 
c = 101, 
d: number,
recursos: string[] = ['memoria','disco','procesador'];

class Persona{
    readonly nombre:string;
    readonly apellido:string;
    private añoNac:number;
    constructor(nombre:string, apellido:string){
      this.nombre = nombre;
      this.apellido = apellido;
    }
    public toString():string
    {return this.nombre + this.apellido;
    }
    public edad(añoActual:number):number
    {
      return (añoActual - this.añoNac);
    }
  }