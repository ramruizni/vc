# Photomosaic
El siguiente foto-mosaico fué realizado en base a dos implementaciones. Una de ellas se desarrolló completamente en Javascript (Software), a través de la manipulación de imágenes, su redimensionamiento y ubicación el el canvas.

La segunda implementación utiliza la librería WebGL como el entorno visual, lo que permite a través de Hardware acelerar la visualización.


Como Webcrawler se optó por obtener las imágenes del api gratuito [Lorem Picsum](https://picsum.photos/) de la siguiente forma:

<pre><code>loadImage('https://picsum.photos/600', img => {
    image(img, 0, 0, 600, 600)
    picture = img
    draw()
})
</code></pre>

Éstas imágenes se utilizan como la base original del foto-mosaico a representar. Las que se emplean como bloques de color son otras que se han almacenado de forma local y se han codificado en base a sus colores en RGB de la siguiente forma:

<img src="https://i.ibb.co/72Nm5kQ/images-Codified.png" alt="5" border="0" width="200px">

El resultado es el siguiente:

## Software
{{< p5-iframe ver="1.4.0" sketch="/vc/shaders/photomosaic.js" width="620" height="620" >}}

## Hardware
{{< p5-iframe ver="1.4.0" sketch="/vc/shaders/photomosaicHardware.js" width="620" height="620" >}}

Para lograr un rendimiento aceptable en la visualización, se optó por restringir el máximo de imágenes posibles en la implementación del Software a un total de 100 por lado (10^4).

En cambio, el uso de WebGL nos muestra con fluidez un total de 1'000.000 por lado (10^12).
