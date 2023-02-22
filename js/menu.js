const menuh = document.querySelector('.menu-principal');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(menuh)

menuh.addEventListener('click' ,()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != menuh){

        menu.classList.toggle("spread")
    }
})