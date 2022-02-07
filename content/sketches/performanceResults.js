let datos = [3, 8, 18, 27, 43, 58, 89, 117, 285, 386];
let labels= [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let ancho_c = 600;
let alto_c = 400;
let anchobanda;

let margen = {derecha: 50, izquierda: 70, superior: 50, inferior: 50};
let ancho_g = ancho_c - margen.derecha - margen.izquierda;
let alto_g = alto_c - margen.superior - margen.inferior;

function setup() {
    createCanvas(ancho_c, alto_c);
    background(200);

    push();
    translate(margen.izquierda, margen.derecha);
    stroke(1);
    textSize(14);
    text("SOFTWARE - Cantidad de imágenes vs Milisegundos", ancho_g/8, -20);
    rect(0, 0, ancho_g, alto_g);
    ejex(datos);
    grafico(datos);
    ejey(labels);
    pop();
}

function barra(y, largo) {
    let padding = 5;
    noStroke();
    fill(3, 252, 73);
    rect(0, y, largo, anchobanda - padding);
}

function grafico(datos) {
    anchobanda = alto_g / datos.length;
    for (let i = 0; i < datos.length; i++) {
        let mapeo = map(datos[i], 0, max(datos), 0, ancho_g)
        barra(anchobanda * i, mapeo);
    }
}

function ejey(labels) {
    fill(0);
    stroke(1);
    textSize(16);
    for (let i = 0; i < labels.length; i++) {
        text(labels[i]+'img', -35, (i * anchobanda) + (anchobanda/2));
    }
}

function ejex(datos) {
    stroke(1);
    let ticks = 10;
    let dist_ticks = int(max(datos) / ticks);
    for (let i = 0; i < max(datos); i+=dist_ticks) {
        let mapeo = map(i, 0, max(datos), 0 , ancho_g);
        line(mapeo, 0, mapeo, alto_g);
        textAlign(CENTER);
        text(i+'ms', mapeo, alto_g + 20);
    }
}
