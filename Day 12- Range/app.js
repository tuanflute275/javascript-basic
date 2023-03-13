var range = document.querySelector('.range')
var process = document.querySelector('.process')
var value = document.querySelector('.process span')

function updateProcess(percent){
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
}

// tinhs phan tram cua o input
range.addEventListener('mousemove', function(e){
    var processWidth = e.pageX - this.offsetLeft
    var percent = processWidth / this.offsetWidth * 100
    percent = Math.round(percent)
    updateProcess(percent)
})

// range cos san
var slider = document.querySelector('slider')

slider.addEventListener('change', function(val) {
    console.log(this.value);
})