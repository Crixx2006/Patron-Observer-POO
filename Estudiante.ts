import { Observer } from "./Observer";

export class Estudiante
implements Observer {

    constructor(
        private nombre: string
    ) {}

    update(tarea: string): void {

        console.log(
            `${this.nombre} recibió la tarea: ${tarea}`
        );

    }

}