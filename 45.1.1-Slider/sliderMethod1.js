let imageIndex = 0;
const imgArr = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
];

const imgTag = document.getElementById('sliderImg');
const carousel =  setInterval(() => {
    if (imageIndex === imgArr.length) {
        imageIndex = 0;
    }
    const imgUrl = imgArr[imageIndex];

    imgTag.setAttribute('src', imgUrl);
    // console.log(imageIndex, imgUrl);
    imageIndex++;

}, 1000);

