
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const image = document.querySelector('img')

const caroussel = document.querySelectorAll('.slide')

next.addEventListener('click', () => {
    let activeImage = 0;
    let nextImg;

    for (let i = 0; i < caroussel.length; i++) {
        let check = caroussel[i]

        if (check.classList.contains('active')) {
            activeImage = i;
            nextImg = activeImage + 1;
        }

        if (nextImg >= caroussel.length) {
            nextImg = 0;
        }
    }

    caroussel[activeImage].classList.remove('active')
    caroussel[nextImg].classList.add('active')
})

prev.addEventListener('click', () => {
    let activeImage = 0;
    let prevImg;

    for (let i = 0; i < caroussel.length; i++) {
        let check = caroussel[i]
        if (check.classList.contains('active')) {
            activeImage = i;
            prevImg = activeImage - 1;
        }

        if (prevImg < 0) {
            prevImg = caroussel.length - 1;
        }
    }
    
    caroussel[activeImage].classList.remove('active')
    caroussel[prevImg].classList.add('active')
})
