document.addEventListener('DOMContentLoaded', () => {
    window.location.hash = '#CATALOG'
} );
document.addEventListener('DOMContentLoaded', () => {
    const targetScroll = document.querySelector('.contact-wraper');
    const goDownBtn = document.getElementById('goDown');
    const label = document.getElementsByName('label-for-btnGoes');
   
    goDownBtn.addEventListener('click', () => {
        
        if(goDownBtn.checked){
            label[0].classList.add('btnGoesDown');
            targetScroll.scrollIntoView({behavior: 'smooth'});
            }else{
                label[0].classList.remove('btnGoesDown');
                goDownBtn.scrollIntoView({behavior: 'smooth'});
            }
           
    })
      




    function distanceBetween(elementTT){
        const gettinElement = elementTT.getBoundingClientRect();
        const windheight = window.innerHeight;
          return  gettinElement.top < windheight; 
        } 
        window.addEventListener('touchstart', () => {
    
            const elementTT = document.querySelector('.contact-wraper');
            const result = distanceBetween(elementTT);
        console.log(result);
        if(result){
            label[0].classList.add('btnGoesDown');
            goDownBtn.checked = true; 
          
        }else{
            label[0].classList.remove('btnGoesDown');
            goDownBtn.checked = false; 
        }
        })






    } );



   


 
  


    
    