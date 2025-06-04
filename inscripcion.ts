import{Categoria} from "./categoria";
import{estudiante} from "./estudiante";
import{software} from "./software";
import{laboratorio} from "./laboratotio";
import{computador} from "./computador";

export class incripcion {
    constructor(
        public categoria: Categoria,
        public estudiante: estudiante,
        public software: software[],
        public laboratorio: laboratorio,
        public computador: computador,  
    ){}
    mostrarDetalle(): void {
        console.log("computador:",this.computador.id);
        console.log("categoria:",this.categoria);
        console.log("estudiante:",this.estudiante);
        console.log("laboratorio:",this.laboratorio);
        console.log("software requerido:",this.software.map(s =>s.nombre).join(","));
     }

    }
