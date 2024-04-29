// alert('hello')
let sidebar = document.querySelector('.sidebar')
let nav = document.querySelector('.listM')
let container = document.querySelector('.container')

nav.addEventListener('click',()=>{
    sidebar.style.transform ='translate(0%)'
    container.style.transform ='translate(0%)'

})
container.addEventListener('click',()=>{
    sidebar.style.transform ='translate(-100%)'
    container.style.transform ='translate(-100%)'
})