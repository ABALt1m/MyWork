let i = 0;
let images = [];

images[0] = 'img1.jpg'
images[1] = 'img2.jpg'
images[2] = 'img3.jpg'
images[3] = 'img4.jpg'
images[4] = 'img5.jpg'

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++
    }
    else{
        i = 0
    }
}

function previousImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i--
    }
    else{
        i = 0
    }
}

let next = document.querySelector('.nxt')
let previous = document.querySelector('.prev')

next.addEventListener('click', changeImg)
previous.addEventListener('click', previousImg)

window.onload = changeImg;