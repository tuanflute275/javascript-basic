var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')


function changeWeather (capitalSearch) {
    // let capitalSearch = search.value.trim()
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    let data = await fetch(apiURL).then(res=> res.json())
    console.log(data);
    if(data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round((data.main.temp - 27.135))
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main: ''
        time.innerText = new Date().toLocaleDateString('vi')
        
        body.setAttribute('class', 'hot')
        if( temp < 25) {
        body.setAttribute('class', 'hot')
        }
        if(temp <= 27) {
        body.setAttribute('class', 'warn')
        }
        if(temp <= 19) {
        body.setAttribute('class', 'cold')
        }
    }else{
        content.classList.add('hide')
    }
}
changeWeather('aaaa')
search.addEventListener('keypress', e=>{
    if(e.code === 'enter') {
        let capitalSearch = search.value.trim()
        changeWeather(capitalSearch)
    }
})
changeWeather('ha noi')