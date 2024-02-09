export class Empleado{
    legajo: number;
    nombre: string;
    apellido: string;
    sexo: string;
    salario: number;

    constructor(legajo: number, nombre: string, apellido: string, sexo: string, salario: number){
        this.legajo=legajo;
        this.apellido=apellido;
        this.nombre=nombre;
        this.sexo=sexo;
        this.salario=salario;
    }
}