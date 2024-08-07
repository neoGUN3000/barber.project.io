let closer = document.getElementsByClassName('closer'); 
let opener = document.getElementsByClassName('opener');
let swicher = document.getElementById('nav-menu-opener');



closer.addEventListener('click', () =>{

    let closeMenu = closer[0];
    let openMenu = opener[0];


    if(swicher){
   openMenu.classList.add('.hidden');
   closeMenu.classList.add('.showing');
    }else{
    closeMenu.classList.add('.showing');
    }

})



