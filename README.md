# Patrón de Diseño Observer - Programación Orientada a Objetos

## Autor

**Cristhoffer Manuel Fernández Álvarez**

## Descripción del Proyecto

Este proyecto implementa el patrón de diseño **Observer** utilizando TypeScript. El ejemplo simula una plataforma virtual universitaria donde un docente publica tareas y los estudiantes inscritos reciben notificaciones automáticas cuando se asigna una nueva actividad.

## Objetivo

Aplicar el patrón de diseño Observer para desacoplar la comunicación entre el curso y los estudiantes, permitiendo que múltiples observadores reciban actualizaciones automáticamente cuando ocurre un cambio de estado.

---

# Conceptos Utilizados

## Subject

Es la clase abstracta encargada de administrar los observadores. Contiene los métodos:

* attach(): registra observadores.
* detach(): elimina observadores.
* notify(): notifica cambios a los observadores.

## Observer

Es una interfaz que define el método:

* update(): recibe las actualizaciones enviadas por el Subject.

## ConcreteSubject

La clase `CursoProgramacion` representa el objeto observado. Mantiene el estado del sistema mediante la tarea actual y notifica a los estudiantes cuando se publica una nueva tarea.

## ConcreteObserver

La clase `Estudiante` representa a los observadores que reciben las notificaciones enviadas por el curso.

---

# Problema Planteado

Una universidad cuenta con una plataforma virtual donde los docentes publican tareas para sus estudiantes.

Cuando un docente publica una nueva tarea, todos los estudiantes inscritos en el curso deben recibir una notificación automática.

Sin el patrón Observer, el curso tendría que notificar manualmente a cada estudiante, generando un código difícil de mantener y extender.

Para solucionar este problema se implementa el patrón Observer.

---

# Proceso de Aplicación del Patrón Observer

## Paso 1: Crear la interfaz Observer

Se define la interfaz Observer con el método update(), el cual será implementado por todos los observadores.

## Paso 2: Crear la clase Subject

Se implementa la clase abstracta Subject para gestionar la suscripción, eliminación y notificación de observadores.

## Paso 3: Crear el ConcreteSubject

Se desarrolla la clase CursoProgramacion que hereda de Subject y almacena la tarea actual.

Cuando la tarea cambia mediante el método setState(), se ejecuta notify() para informar a todos los observadores registrados.

## Paso 4: Crear el ConcreteObserver

Se desarrolla la clase Estudiante que implementa la interfaz Observer.

Cada estudiante recibe la notificación mediante el método update().

## Paso 5: Registrar observadores

Los estudiantes se registran utilizando el método attach().

## Paso 6: Notificar cambios

Cuando el docente publica una nueva tarea, el curso actualiza su estado y ejecuta notify() para informar automáticamente a todos los estudiantes.

---

# Principios SOLID Aplicados

## Dependency Inversion Principle (DIP)

La clase Subject depende de la abstracción Observer y no de clases concretas como Estudiante.

## Open/Closed Principle (OCP)

Es posible agregar nuevos observadores sin modificar las clases existentes.

## Interface Segregation Principle (ISP)

La interfaz Observer contiene únicamente el método update(), evitando obligar a las clases a implementar métodos innecesarios.

---

# Conceptos de Programación Orientada a Objetos Utilizados

## Herencia

La clase CursoProgramacion hereda de Subject.

## Polimorfismo

Subject trabaja con objetos de tipo Observer sin importar su implementación concreta.

## Agregación

Subject mantiene una colección de observadores mediante el atributo observers.

## Encapsulamiento

El atributo tareaActual es privado y solo puede modificarse mediante métodos de la clase.

uncionamiento del patrón Observer mediante la notificación automática de múltiples observadores cuando cambia el estado del Subject.
