burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')

burger.addEventListener('click' , ()=>{
    navbar.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
})
