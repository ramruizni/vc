# Ray Casting

{{< p5-iframe ver="1.4.0" sketch="../../../../sketches/taller2/punto1.js" width="420" height="420" >}}


Es un método sencillo de renderización de modelos de geometría constructiva de sólidos.
 
Ray casting puede referirse a una variedad de problemas y técnicas:
 
.El problema general de determinar el primer objeto interceptado por un rayo

.Una técnica para determinación de las caras ocultas (HSR por sus siglas en inglés), también conocida como determinación de las superficies visibles (VSD), basada en buscar la primera intersección de un rayo lanzado desde el observador a través de cada pixel de una imagen.

·Un algoritmo no recursivo de renderización ray-tracing que sólo lanza rayos primarios.

·Un método directo de renderización de volúmenes llamado también volume ray casting, en que el rayo es "empujado a través" del objeto y el campo escalar en 3D de interés es muestreado a lo largo del rayo dentro del objeto. En este método no son expandidos rayos secundarios.
    
Los rayos geométricos son trazados desde el ojo del observador (trazado hacia atrás) para calcular la radiancia que viaja hacia el observador en la dirección del rayo. La rapidez y simplicidad del trazado de los rayos provienen de computar el color de la luz sin trazar recursivamente rayos adicionales para obtener la radiancia incidente en el punto donde el rayo intercepta. Esto elimina la posibilidad de renderizar con exactitud las reflexiones, refracciones, y las sombras.
Aun así, todos estos elementos pueden ser simulados en un cierto grado, con el uso ingenioso de mapas de textura u otros métodos. La velocidad de cómputo del ray casting lo convirtió en un método práctico de renderizado para los primeros videojuegos de 3D con renderización de escenas en tiempo real.

Fases en el algoritmo de ray casting

Siguiendo la pista de los fotones partiendo del punto de visión hacia los objetos y fuentes de luz, los pasos que ha de dar el algoritmo de ray casting son los siguientes:

Paso 1:
Suponiendo que llegasen fotones al punto de visión siguiendo la trayectoria de un rayo dado, es preciso saber de dónde viene dicha luz, es decir, cuál es su punto de partida o procedencia. Los puntos de procedencia pueden encontrarse en las superficies de los objetos, en las fuentes de luz o ser luz de fondo, es decir, carente de un punto concreto de procedencia.

Paso 2:
En la fase anterior hemos supuesto que llega luz al punto de visión, pero no sabemos si realmente llega. Entonces, para una trayectoria dada, una vez que se conoce el punto de procedencia, se ha de averiguar si existen fotones que recorran el camino del rayo. Si al punto de procedencia llega luz desde de cualquier lugar, cabe la posibilidad de que parte de esa luz alcance también el punto de visión, siguiendo la trayectoria del rayo. Por tanto, es necesario averiguar si llega luz al punto de procedencia y, en caso afirmativo, cuánta llega y de qué color.

Paso 3:
Una vez que se conoce la intensidad y color de la luz que llega al punto de procedencia, la última cuestión que ha de resolver el algoritmo es averiguar qué cantidad de esta luz llega al observador, y cuál es su color.
Necesito determinar si una línea y otra línea se intersectan y cúal es ese punto de intersección. Para esto necesito calcular dos  valores T y U. Si T está entre 0 y 1 y U es mayor a 0 las líneas se intersectan.
