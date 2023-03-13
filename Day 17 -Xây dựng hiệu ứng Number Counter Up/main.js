// var count=0;
// setInterval(() => {
//     count+=10;
//     var fb = document.querySelector('.fb h2')
//     var yt = document.querySelector('.ytb h2')
//     var ins = document.querySelector('.ins h2')

//     fb.innerHTML = count
//     yt.innerHTML = count
//     ins.innerHTML = count
    

// }, 1);

var listCounter = document.querySelectorAll('.counter')

function count(el){
    var numberEl = el.querySelector('.number')
    var to = parseInt(numberEl.innerText)
    var count = 0
    var time = 144
    var step = to / time

    let counting = setInterval(()=>{
        count += step
        if(count > to){
            clearInterval(counting)
            numberEl.innerText = to
        }else{
            numberEl.innerText = Math.round(count)
        }
    }, 1)
}

listCounter.forEach(item=>{
    count(item)
})