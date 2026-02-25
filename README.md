# 🔎 PEC 1 - Introducción al desarrollo front-end

Esta entrega contiene la resolución de la **PEC 1** de la asignatura **Desarrollo Front-end con Frameworks JavaScript** de la UOC. El objetivo principal es asentar las bases del desarrollo web moderno (HTML5, CSS3 y JavaScript ES6+) y configurar un entorno de trabajo profesional.

## 🚀 Despliegue
Puedes ver y probar los ejercicios funcionando en los siguientes enlaces:
* [Validador de formularios](https://srnatsu.github.io/DFJS-PEC1/PEC1_Ej2_1/)
* [Calculadora de cambio de divisa](https://srnatsu.github.io/DFJS-PEC1/PEC1_Ej2_2/)
* [Reserva de asientos de cine](https://srnatsu.github.io/DFJS-PEC1/PEC1_Ej2_3/)

## 📂 Estructura del repositorio

El proyecto sigue estrictamente la estructura de carpetas solicitada en el enunciado:

```text
PEC1/
├── PEC1_Ej1/
├── PEC1_Ej2_1/
├── PEC1_Ej2_2/
└── PEC1_Ej2_3/
```

## 📋 Descripción de los ejercicios

### 1. Ejercicio teórico (```PEC1_Ej1```)

Documento ```S01_PEC1_Solucion_Ejercicio_1.md``` con las respuestas razonadas sobre:

* Ventajas de HTML5 semántico y nuevas APIs (WebStorage, WebSockets Geolocation).
* Uso de preprocesadores CSS (SASS/LESS) y sourcemaps.
* Herramientas del ecosistema moderno: Git, NPM y Webpack.

### 2. Prácticas guiadas (```PEC1_Ej2```)

#### 🔹 2.1 Validador de formularios

Formulario de registro con validación en tiempo real utilizando JavaScript nativo.

* **Funcionalidades base:** Validación de campos obligatorios, formato email y coincidencia de contraseñas.
* **Mejoras implementadas:**
  * **Campo *Age*:** Se ha añadido un campo numérico que valida que la edad esté entre 0 y 1000.
  * **Contraseña segura:** Se ha implementado una Expresión Regular (Regex) estricta que obliga al usuario a usar mayúsculas, minúsculas, números y símbolos específicos (```~ $!Q\#\$\%\wedge\&^{*}()\_+-=\{\}|[]1:^"<>?,.$/```).

#### 💱 2.2 Calculadora de cambio de divisa

Aplicación que consume la API externa ```exchangerate-api``` para realizar conversiones en tiempo real.

* **Mejoras implementadas:**
  * **Feedback visual (*Loader*):** Se muestra un indicador de "Waiting for data..." mientras se resuelve la petición asíncrona (```fetch```).
  * **Gestión de errores:** Si la API falla o no hay conexión, se muestra un mensaje de error visual al usuario.
  * **Validación de input:** Se impide introducir números negativos en el campo de cantidad.

#### 🎬 2.3 Reserva de asientos de cine
Aplicación interactiva para seleccionar asientos, persistiendo el estado en el navegador mediante ```localStorage```.

* **Mejoras implementadas:**
  * Se ha integrado la lógica del ejercicio de divisas dentro de la reserva de cine.
  * El usuario puede cambiar la moneda global de la aplicación mediante un desplegable (```<select>```).
  * Al cambiar la moneda, se recalcula dinámicamente el precio total y, además, se actualizan los textos del desplegable de películas para mostrar el precio de la entrada en la divisa seleccionada.
