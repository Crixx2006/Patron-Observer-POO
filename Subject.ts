import { Observer } from "./Observer";

export abstract class Subject {

    protected observers: Observer[] = [];

    attach(observer: Observer): void {

        this.observers.push(observer);

    }

    detach(observer: Observer): void {

        this.observers =
            this.observers.filter(
                obs => obs !== observer
            );

    }

    notify(tarea: string): void {

        this.observers.forEach(
            observer => observer.update(tarea)
        );

    }

}