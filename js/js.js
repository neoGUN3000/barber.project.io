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
      

    } )
  


