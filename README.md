# catchInsect
Ejercicio Selección de insectos!!!

despliegue en GitHub pages: https://biggiegun.github.io/catchInsect/

Descripción del código

1. Las primeras 20 líneas de código quedan reservadas para declarar variables y asignarlas a los elementos del DOM correspondientes.

![image](https://user-images.githubusercontent.com/63618372/128654164-1af2faa3-c20d-49e6-b5d4-c9885fe7aab6.png)

2. La línea 21 inicia el juego al disparar un evento mediante un click en "start_btn"

![image](https://user-images.githubusercontent.com/63618372/128654264-ed7cb4fc-4809-4031-81d8-7115141386a7.png)

3. en la línea 25 hasta la 46 sucede: "choose_insect_btns" tenemos guardado un array compuesto por elementos -insectos- a seleccionar del menú de juego!!
la función forEach() acá descrita ejecuta, para el insecto seleccionado código que gracias a "setTimeout()", "createInsect()", y startGame(), 
establece tiempos y modos de generación de insectos, e inicio del juego respectivamente.

![image](https://user-images.githubusercontent.com/63618372/128654241-28f7a6f4-beaa-485b-8d18-d3dc0d67c677.png)


4. El código entre las líneas 48 y 59 se encarga de "pintar" en el DOM un contador de tiempo, haciendo uso de Template Literals. (En ediciones anteriores 
de la especificación ES2015, solían llamarse "plantillas de cadenas de caracteres").

![image](https://user-images.githubusercontent.com/63618372/128654299-1becddd6-a30b-4211-9d45-3b915971d53b.png)


5. Desde la línea 61 hasta la 75 se ejecuta el código que determina la forma como se crean los insectos, particularmente crea en pantalla un insecto dentro 
de un tag tipo "div" le añade los estilos de la clase 'insect'.

![image](https://user-images.githubusercontent.com/63618372/128654326-24ee258a-5a02-4588-a5ff-c261bbcdee51.png)


6. El código presente en las líneas 77 a 98 sirve para declarar las funciones getRandomLocation(), catchInsect(), y addInsects(), que en su orden se encargan 
de obtener una ubicación aleatoria para los insectos -haciendo uso de Math.random()-; ejecuta el código para incrementar el puntaje a medida que los insectos 
son "removidos"/"Reescalados" a un tamaño "0" en pantalla; y fijar los modos de generación de insectos de acuerdo a al método createInsect(), y al tiempo establecido
en ms.

![image](https://user-images.githubusercontent.com/63618372/128654357-050f07c2-8bf3-4c15-b964-35565004db07.png)


7. Finalmente se describe la forma como se aumenta el puntaje hasta que llega a "19" momento a partir del cual se muestra el mensaje: 
"Are you annoyed yet?  You are playing an impossible game !!"

![image](https://user-images.githubusercontent.com/63618372/128654383-d816d8ac-07b4-48a7-b278-4f97de3eeabf.png)
