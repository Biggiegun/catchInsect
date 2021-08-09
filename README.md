# catchInsect
Ejercicio Selección de insectos!!!

despliegue en GitHub pages: https://biggiegun.github.io/catchInsect/

Descripción del código

1. Las primeras 20 líneas de código quedan reservadas para declarar variables y asignarlas a los elementos del DOM correspondientes.

![imgen1](https://user-images.githubusercontent.com/63618372/128654011-23634126-5ddb-4334-a108-9a02639a6566.png)

2. La línea 21 inicia el juego al disparar un evento mediante un click en "start_btn"

![imgen2](https://user-images.githubusercontent.com/63618372/128653993-e2557b58-e620-4cf1-af40-700912f2e000.png)


3. en la línea 25 hasta la 46 sucede: "choose_insect_btns" tenemos guardado un array compuesto por elementos -insectos- a seleccionar del menú de juego!!
la función forEach() acá descrita ejecuta, para el insecto seleccionado código que gracias a "setTimeout()", "createInsect()", y startGame(), 
establece tiempos y modos de generación de insectos, e inicio del juego respectivamente.

![imgen3](https://user-images.githubusercontent.com/63618372/128654000-c00df0b0-8bc0-40ee-a1a0-d67d3bdc8f51.png)


4. El código entre las líneas 48 y 59 se encarga de "pintar" en el DOM un contador de tiempo, haciendo uso de Template Literals. (En ediciones anteriores 
de la especificación ES2015, solían llamarse "plantillas de cadenas de caracteres").

![imgen4](https://user-images.githubusercontent.com/63618372/128654030-0bd318c4-b12e-44c3-b895-0ecdcc421f1a.png)


5. Desde la línea 61 hasta la 75 se ejecuta el código que determina la forma como se crean los insectos, particularmente crea en pantalla un insecto dentro 
de un tag tipo "div" le añade los estilos de la clase 'insect'.

![imgen5](https://user-images.githubusercontent.com/63618372/128654039-59dfa0d8-0db3-4706-b997-bfed8fd40f63.png)


6. El código presente en las líneas 77 a 98 sirve para declarar las funciones getRandomLocation(), catchInsect(), y addInsects(), que en su orden se encargan 
de obtener una ubicación aleatoria para los insectos -haciendo uso de Math.random()-; ejecuta el código para incrementar el puntaje a medida que los insectos 
son "removidos"/"Reescalados" a un tamaño "0" en pantalla; y fijar los modos de generación de insectos de acuerdo a al método createInsect(), y al tiempo establecido
en ms.

![imgen6](https://user-images.githubusercontent.com/63618372/128654043-4173b799-0d1a-4df1-8380-2e15cdd1f562.png)


7. Finalmente se describe la forma como se aumenta el puntaje hasta que llega a "19" momento a partir del cual se muestra el mensaje: 
"Are you annoyed yet?  You are playing an impossible game !!"

![imgen7](https://user-images.githubusercontent.com/63618372/128654052-68d28971-75f0-4f39-967f-608362dd5d10.png)

