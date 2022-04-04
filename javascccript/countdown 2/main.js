let timeH = document.querySelector('h1');
let timeSecond = 5;
let startBTN = document.querySelector('.btn')




let clicked = false;
startBTN.addEventListener("click", () => {
    if (clicked == false) {

        const countDown = setInterval(() => {
            timeSecond--;
            displayTime(timeSecond)
            if (timeSecond <= 0 || timeSecond < 1) {
                endtime()
                clearInterval(countDown)}
        }, 1000)

        function displayTime(second) {
            const min = Math.floor(second / 60 );
            const sec = Math.floor(second % 60);
            const hour = Math.floor(second/60/60);
            timeH.innerHTML = `${hour}${min < 10 ? '0' : ''}:${min}:${sec < 10 ? '0': ''}${sec}`
        }
        function endtime(){
            timeH.innerHTML = 'TIME OUT'
        }
    }
    clicked = true;
})