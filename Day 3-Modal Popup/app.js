var btnElement = document.querySelector('.btn-1')
var modalElement = document.querySelector('.modal')
var iconClose = document.querySelector('.icon-close')
var btnClose = document.querySelector('.btn-close')

function toggleModal() {
    modalElement.classList.toggle('hide');
}
console.log(toggleModal);

btnElement.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)

// toggle modal dc thuc hien khi e.target == e.current target. current target la trong chuoi targte gan nhat
modalElement.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) {
        toggleModal()
    }
})



var btn = document.querySelector('.btn')
var btn = document.querySelector('.modal')

console.log(btn);



