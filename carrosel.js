const images = document.getElementById('produtos')
const image = document.querySelectorAll('#produtos img')

let idx = 0;

function carrossel(){
    idx++

    if(idx > image.length -1){
        idx = 0
    }

    images.style.transform = `translateX(${-idx * 700}px)`
}

setInterval(carrossel, 1500)

