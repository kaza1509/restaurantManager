// slider
let bar = document.querySelector('.bar')
let close = document.querySelector('.close')
let overlay = document.querySelector('#overlay')
let sidebar = document.querySelector('#side__bar_mobile')

bar.addEventListener('click', (e) => {
    sidebar.style.transform = 'translateX(0%)'
    sidebar.style.transition = 'all .5s linear'
    overlay.style.display = 'block'
})

close.addEventListener('click', (e) => {
    sidebar.style.transform = 'translateX(-100%)'
    sidebar.style.transition = 'all .5s linear'
    overlay.style.display = 'none'
})

overlay.addEventListener('click', (e) => {
    sidebar.style.transform = 'translateX(-100%)'
    sidebar.style.transition = 'all .5s linear'
    overlay.style.display = 'none'
})

let check = document.querySelector('.checkbox')
let content1 = document.querySelector('#content')


check.addEventListener('change', (e) => {
    if(e.target.checked != true) {
        content.style.backgroundColor = '#fff'
    }
    else {
        content.style.backgroundColor = '#282C34'
    }
})

// đổi màu khi chọn từng mục ở slider
// let menuElement = document.querySelectorAll('#sidebar ul li')
// for (let i = 0; i < menuElement.length; i++) { 
//     menuElement[i].addEventListener('click', (e) => {

//         for (let j = 0; j < menuElement.length; j++) {
//             menuElement[j].style.backgroundColor = '#AAABB1'
//         } 

//         menuElement[i].style.backgroundColor = '#3141D6'
//         e.preventDefault()
//     })    
// }