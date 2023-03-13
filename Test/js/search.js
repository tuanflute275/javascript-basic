var btnElement = document.querySelector('.search-btn')
btnElement.addEventListener('click', function() {
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})