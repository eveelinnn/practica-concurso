import { software } from "./software";

export class computador {
    constructor(
        public id: string,
        public softwareIntalado: software[]
    ){}
}
    