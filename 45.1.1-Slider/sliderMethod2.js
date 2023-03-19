// Method 2

let imageIndex = 1;

const imgContainer = document.getElementById('imgContainer');
const carousel =  setInterval(() => {
    if (imageIndex === 9) {
        imageIndex = 1;
    }

    imgContainer.innerHTML = `<img src="images/pic-${imageIndex}.jpg" alt="Slide Image - ${imageIndex}">`;
    // console.log(imageIndex, imgUrl);
    imageIndex++;

}, 1000);