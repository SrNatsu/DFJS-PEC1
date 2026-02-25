# Ejercicio 1 - Preguntas teóricas

## La aparición de ```HTML5```/```CSS3```/```JS``` ha supuesto el nacimiento del desarrollo front-end moderno.

* **¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.**
  
  Las etiquetas semánticas mejoran la estructura web, facilitando la lectura a motores de búsqueda para un mejor posicionamiento, aumentando la accesibilidad para usuarios con discapacidades visuales y permitiendo a los desarrolladores crear código más claro, legible y mantenible.

  1. Mejor SEO.
  2. Mayor accesibilidad.
  3. Código más limpio y mantenible.

* **Cita al menos 3 ```APIs HTML5``` y explica brevemente su funcionalidad.**

  1. **WebStorage API:** Permite guardar configuraciones o preferencias del usuario localmente en el navegador.
  2. **WebSockets API:** Protocolo orientado a la comunicación bidireccional entre un cliente y un servidor, lo que permite mantener conexiones abiertas y enviar mensajes de un lado a otro en tiempo real.
  3. **Geolocation API:** Permite al usuario compartir su ubicación a las aplicaciones web si así lo desea.

* **Cita qué opción ofrece ```CSS3``` para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).**
  
  Las *Media queries* permiten aplicar estilos CSS según el tipo general de un dispositivo u otras características como la resolución de la pantalla o el ancho del *viewport* del navegador.

* **Cita al menos 4 de las características principales de ```TypeScript``` (importante superset de ```JavaScript``` que trataremos en el siguiente capítulo).**
  
  1. **Tipado estático:** Permite definir los tipos de datos de variables, parámetros de funciones y objetos durante el tiempo de diseño.
  2. **Superset de JavaScript:** Todo código JavaScript es compatible con TypeScript.
  3. **Compilación:** TypeScript no se ejecuta directamente en los navegadores; requiere ser convertido a JavaScript estándar mediante un compilador antes de su uso.
  4. **Interfaces y sistema de tipos avanzado:** Ofrece características orientadas a objetos como ```interfaces```, ```generics```, ```namespaces``` y ```decorators```, que estructuran el código para grandes proyectos.

## El lenguaje ```CSS``` es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores ```CSS```, que ofrecen evidentes ventajas.

* **Cita al menos 2 de estos preprocesadores.**
  
  1. **SASS**.
  2. **LESS**.

* **Cita al menos 4 ventajas que ofrecen estos preprocesadores.**

  1. **Variables:** Permiten definir valores reutilizables en un solo lugar, facilitando cambios rápidos y manteniendo la consistencia en todo el proyecto.
  2. **Anidamiento:** Permite estructurar el CSS de manera similar al HTML, lo que mejora la legibilidad y reduce la necesidad de repetir selectores.
  3. **Mixins y reutilización:** Los mixins permiten definir bloques de código CSS reutilizables, evitando la duplicación y facilitando la creación de estilos modulares.
  4. **Mantenibilidad y organización:** Facilitan el uso de módulos y la separación del código en múltiples archivos, lo que simplifica la gestión de hojas de estilo grandes o complejas.

* **Explica brevemente en qué consisten los sourcemaps.**
  
  Es un archivo que conecta el código fuente original con el código transformado, minificado o empaquetado que se ejecuta en el navegador.

* **Explica qué es un transpilador.**

  Herramienta de software que toma código fuente escrito en un lenguaje de programación y lo traduce a otro lenguaje de programación o a otra versión del mismo lenguaje.

## El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos.

* **Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.**
  
  * **Sistemas de control de versiones:**
    1. **Git**.
    2. **Subversion (SVN)**.
  * **Herramientas de gestión de módulos:**
    1. **APT (Advanced Package Tool)**.
    2. **NPM (Node Package Manager)**.

* **Cita y explica al menos 3 comandos de Git.**
  
  1. **```git init```:** Inicializa un nuevo repositorio local en la carpeta actual.
  2. **```git clone <url>```:** Clona un repositorio remoto existente.
  3. **```git status```:** Muestra el estado actual del directorio del trabajo.

* **Cita y explica brevemente las características más definitorias de ```WebPack```.**
  
  Empaquetador de módulos de código abierto para aplicaciones JavaScript modernas.

  1. **Empaquetado de módulos:** Analiza tu aplicación, detecta las dependencias y las agrupa en uno o varios archivos optimizados para el navegador.
  2. **Gestión de recursos:** No solo procesa JavaScript, sino que, mediante *loaders*, puede procesar ```CSS```, ```SASS```, imágenes, y fuentes, integrándolos en el mismo proceso de construcción.
  3. ***Loaders*:** Permiten preprocesar archivos.
  4. ***Plugins*:** Herramientas que extienden las capacidades de Webpack para realizar tareas complejas como optimización de paquetes, gestión de cachés, o inyección de variables de entorno.
  5. ***Entry* y *Output*:** Define un punto de entrada y un punto de salida.
  6. **Modos de desarrollo:** Permite configurar diferentes comportamientos, como la minificación automática y optimización máxima en producción, o la generación de *sourcemaps* detallados en desarrollo.
  7. ***Code splitting*:** Capacidad de dividir el *bundle* principal en trozos más pequeños que se cargan bajo demanda, mejorando la velocidad de carga inicial.