// Array of image sources with and without "../"
const imageSourcesWithDotDot = [
    '../assets/images/logo_blue2.svg',
    '../assets/images/logo_green2.svg',
    '../assets/images/logo_pink2.svg',
    '../assets/images/logo_peach2.svg',
];

const imageSourcesWithoutDotDot = [
    'assets/images/logo_blue2.svg',
    'assets/images/logo_green2.svg',
    'assets/images/logo_pink2.svg',
    'assets/images/logo_peach2.svg',
];

const colors = [
    '#becaf8', // blue
    '#caf8be', // green
    '#F8BECA', // pink
    '#f8cfbe'  // peach
];

// Function to check if an image exists
function imageExists(src, callback) {
    const img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = src;
}

// Function to determine which image sources array to use
function getImageSources(callback) {
    imageExists(imageSourcesWithDotDot[0], (exists) => {
        if (exists) {
            callback(imageSourcesWithDotDot);
        } else {
            callback(imageSourcesWithoutDotDot);
        }
    });
}

// Function to cycle images and colors
function cycleImagesAndColors(imageSources) {
    const ybProjImg = document.querySelector('.ybProj');
    const h2Element = document.querySelector('.textContainer h2');
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        ybProjImg.src = imageSources[currentIndex];
        h2Element.style.color = colors[currentIndex];
    }, 2000); // Change image and color every 2 seconds
}

// Start cycling images and colors when the page loads
window.onload = () => {
    getImageSources(cycleImagesAndColors);
};