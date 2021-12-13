# Algoritmo de Xiaolin Wu

Para abordar adecuadamente este algoritmo, primero se analizará el algoritmo de Bresenham

## Bresenham’s Line Generation Algorithm

Dada la coordenada de dos puntos A (x0, y0) y B (x1, y1). La tarea de encontrar todos los puntos intermedios necesarios para dibujar la línea AB en la pantalla con píxeles. Cada píxel tiene coordenadas enteras.

<img src="https://i.ibb.co/0h5JYSH/1.png" alt="1" border="0">

Considerese la figura que se muestra a continuación, que se dibuja utilizando el algoritmo de generación de líneas de Bresenham. Tomese un segmento y su coordenada inicial x. En un loop se agrega en cada paso un valor de 1 a x. Así mismo, se calcula un error. Si el error no supera la mitad de la altura de la celda, se rellena el pixel actual.

<a href="https://ibb.co/F0GTqdr"><img src="https://i.ibb.co/RBLw4JF/3.png" alt="3" border="0"></a>

Una linea completa quedaría de la siguiete forma:

<a href="https://ibb.co/Sxcdz6Y"><img src="https://i.ibb.co/wL7wfdG/2.png" alt="2" border="0"></a>

El algoritmo de línea de Xiaolin Wu se caracteriza por el hecho de que en cada paso del cálculo se realiza para los dos más cercanos a la línea de píxeles, y se colorean con diferente intensidad, según la distancia

<a href="https://ibb.co/g3yhV3N"><img src="https://i.ibb.co/c1JVL10/4.png" alt="4" border="0"></a>

Una ilustración didáctica de éste algoritmo se puede ver a continuación

{{< p5-iframe ver="1.4.0" sketch="../../../../sketches/taller2/punto2.js" width="620" height="620" >}}
