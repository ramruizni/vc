let picture;
let w_scaled;
let h_scaled;
let ownDataset = [];
let ownLoadedImages = {};
let scaleFactor = 50;
const datasetSize = 105;

let slider;

let availableColors;

function preload() {
    picture = loadImage('/vc/shaders/images/mandrill.png');
    loadStrings('/vc/shaders/images/availableColors.txt', loadDataset)
}

function setup() {
    slider = createSlider(10, 100, 50, 10);
    slider.position(10, 10);
    slider.style('width', '600px');

    picture.resize(600, 600);
    createCanvas(600, 600);

    //image(picture, 0, 0, 600, 600)

    button = createButton('CHANGE IMAGE')
    button.position(10, 30)
    button.style('background: #222; color: #fff; border-radius: 20px; padding: 5px; font-weight: 600')
    button.mousePressed(() => {
        loadImage('https://picsum.photos/600', img => {
            image(img, 0, 0, 600, 600)
            picture = img
            draw()
        })
    })
}

async function draw() {
    if (slider.value() != scaleFactor) {
        background(33);
        scaleFactor = slider.value();
        await reloadData();
    }

    w_scaled = Math.floor(picture.width / scaleFactor);
    h_scaled = Math.floor(picture.height / scaleFactor);

    for (let x = 0; x < picture.width; x += w_scaled) {
        for (let y = 0; y < picture.height; y += h_scaled) {
            const [r, g, b] = picture.get(x, y);
            const index = closestColor(r, g, b);
            const pixelImage = ownLoadedImages[index];

            image(pixelImage, x, y);
        }
    }
    valueDisplayer.html('The value is ' + slider.value())

}

function closestColor(r, g, b) {
    let minDistance = -1;
    let index;
    for (let i = 0; i < datasetSize; ++i) {
        const img_i = ownDataset[i];
        let distance = dist(r, g, b, img_i[0], img_i[1], img_i[2]);
        if (minDistance == -1 || distance < minDistance) {
            minDistance = distance;
            index = `${img_i[0]}${img_i[1]}${img_i[2]}`;
        }
    }
    return index;
}

async function loadDataset(colorsLoaded) {
    availableColors = colorsLoaded.slice(0, datasetSize);
    await reloadData();
}

async function reloadData() {
    w_scaled = Math.floor(picture.width / scaleFactor);
    h_scaled = Math.floor(picture.height / scaleFactor);

    let dataset = [];
    let loadedImages = {};
    for (let i = 0; i < datasetSize; i++) {
        const r = parseInt(availableColors[i].substring(0, 3), 10);
        const g = parseInt(availableColors[i].substring(4, 7), 10);
        const b = parseInt(availableColors[i].substring(8, 11), 10);
        dataset[i] = [r, g, b];
        loadImage(`/vc/shaders/images/dataset/${availableColors[i]}`, il => {
            il.resize(w_scaled, h_scaled);
            loadedImages[`${r}${g}${b}`] = il;

            if (i == datasetSize - 1) {
                ownDataset = dataset;
                ownLoadedImages = loadedImages;
            }
        })
    }
}
