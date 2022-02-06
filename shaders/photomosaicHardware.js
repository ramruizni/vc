let mosaic
let symbol1
let myImage
let debug
let button
let slider
const WIDTH_PIXEL = 64
const HEIGHT_PIXEL = 64
const NUM_IMAGES = 70

function preload() {
    myImage = loadImage('/vc/shaders/images/mandrill.png')
    symbol1 = loadImage('/vc/shaders/images/concat_dataset.jpg')
    mosaic = loadShader('/vc/shaders/shader.vert', '/vc/shaders/hardwarePhotomosaic.frag')
}

function setup() {
    slider = createSlider(1, 6, 4, 1)
    button = createButton('CHANGE IMAGE')
    slider.position(10, 590)
    slider.style('width: 600px; background: #000')

    button.position(10, 560)
    button.style('background: #222; color: #fff; border-radius: 20px; padding: 5px; font-weight: 600')
    button.mousePressed(() => {
        loadImage('https://picsum.photos/600', img => {
            mosaic.setUniform('image', img)
        })
    })

    createCanvas(600, 600, WEBGL)
    textureMode(NORMAL)
    noStroke()
    shader(mosaic)
    mosaic.setUniform('image', myImage)
    mosaic.setUniform('WIDTH_PIXEL', WIDTH_PIXEL)
    mosaic.setUniform('NUM_IMAGES', NUM_IMAGES)
    mosaic.setUniform('HEIGHT_PIXEL', HEIGHT_PIXEL)
    debug = true
    mosaic.setUniform('debug', debug)
    mosaic.setUniform('symbol1', symbol1)
}

function draw() {
    mosaic.setUniform('resolution', Math.pow(10, slider.value()))

    background(33)
    cover(true)
}

function cover(texture = false) {
    beginShape()
    if (texture) {
        //texture(img);
        vertex(-width / 2, -height / 2, 0, 0, 0)
        vertex(width / 2, -height / 2, 0, 1, 0)
        vertex(width / 2, height / 2, 0, 1, 1)
        vertex(-width / 2, height / 2, 0, 0, 1)
    } else {
        vertex(-width / 2, -height / 2, 0)
        vertex(width / 2, -height / 2, 0)
        vertex(width / 2, height / 2, 0)
        vertex(-width / 2, height / 2, 0)
    }
    endShape(CLOSE)
}

function keyPressed() {
    if (key === 'd') {
        debug = !debug
        mosaic.setUniform('debug', debug)
    }
}
