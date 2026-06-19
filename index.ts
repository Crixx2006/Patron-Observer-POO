import { CursoProgramacion }from "./CursoProgramacion";

import { Estudiante } from "./Estudiante";

const curso =
new CursoProgramacion();

const juan =
new Estudiante("Juan");

const maria =
new Estudiante("María");

const pedro =
new Estudiante("Pedro");

curso.attach(juan);
curso.attach(maria);
curso.attach(pedro);

curso.setState(
    "Investigar el patrón Observer"
);