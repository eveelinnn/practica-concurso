import { Categoria } from "./categoria";
import { computador } from "./computador";

export class laboratorio {
    constructor(
        public categoria: Categoria[],
        public computadora: computador[],
        public nombre: string,
    ){}
}