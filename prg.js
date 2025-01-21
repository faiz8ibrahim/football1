let header = document.querySelector('header')
window.addEventListener('scroll' , ()=>{
    window.scrollY > 80 ? header.classList.add('sticky') : header.classList.remove('sticky')
})
