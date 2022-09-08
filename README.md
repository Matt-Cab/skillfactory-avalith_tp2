# TP nro 2 para el curso de React de Avalith - Skillfactory

## Consigna
Recrear el primer tp hecho con html, css y js utilzando React y los conocimientos vistos en clase.

## Poner en funcionamiento el proyecto

Utilizar alguno de los siguientes comandos:

```
npm start

npm run start
```

---

### General

Aprobechando

### Form

En el caso del form he hutilizado regex para validar los valores ingresados en los campos.

### Users

Para la tabla de ususarios se utlizó un `fetch` con simples validaciones para manejo de errores (`try` y `catch`) y para el manejo de la asincronía `async` y `await`.

### Cards

Para los cards de Rick & Morty agregué un paginador con el cual se puede cambiar el conjunto de personajes que se pueden ver en la página.
Este paginador también contiene lógica que evita que se pueda cambiar a una página no válida (que no se encuentre dentro del rango que maneja la API).