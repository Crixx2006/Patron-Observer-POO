import { Subject } from "./Subject";

export class CursoProgramacion extends Subject {

    private tareaActual: string = "";

    getState(): string {

        return this.tareaActual;

    }

    setState(tarea: string): void {

        this.tareaActual = tarea;

        console.log(
            `Nueva tarea publicada: ${tarea}`
        );

        this.notify(tarea);

    }

}