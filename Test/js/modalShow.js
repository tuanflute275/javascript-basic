var btnE = document.querySelector('.btn-1')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.icon-close')
var btnClose = document.querySelector('.btn-close')

function show() {
    modal.classList.toggle('hide')
}

btnE.addEventListener('click', show)
iconClose.addEventListener('click', show)
btnClose.addEventListener('click', show)
