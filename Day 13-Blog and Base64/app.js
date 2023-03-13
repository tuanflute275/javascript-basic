var upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')

upload.addEventListener('change', function(e) {
    var file = upload.files[0]
    if(!file) 
        return
    if(!file.name.endsWith('.jpg')) {
    error.innerHTML = `hinh anh khong phai dinh dang jpeg`
    return
    }else {
        error.innerHTML = ``
    }
    if(file.size / (1024 * 1024) > 5) {
    error.innerHTML = `chi duoc upload anh < 5mb`
    return
    }else {
        error.innerHTML = ``
    }
    var img = document.createElement('img')
    // base 64
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onloadend = function(e) {
    img.src = e.target.result
}

    // img.src = URL.createObjectURL(file)
    preview.appendChild(img)


})
