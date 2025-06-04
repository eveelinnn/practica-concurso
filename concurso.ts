import { Categoria } from "./categoria";
import { incripcion } from "./inscripcion";
import { laboratorio } from "./laboratotio";

export class concurso {
    inscripcion: incripcion[] = [];

    constructor(
        public Categoria: Categoria[],
        public laboratorio: laboratorio[],
        public nombre: string
    ){}
    agregarInscripcion(incripcion:incripcion): void {
        this.inscripcion.push(incripcion);
    }
    mostrarInscripcion(): void {
        this.inscripcion.forEach(i=>{console.log("---"); 
        });
    }

}

