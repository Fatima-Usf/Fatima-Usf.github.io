$(window).scroll(function(){

    var scroll = $(this).scrollTop();
    if (scroll/2) {
        $('.al').css({
            'transform': 'skewY(180deg)',
            'transition': 'transform 2s'
        })
     /*   $('.logo').css({
            'transform': 'translate(-200px, 0px)',
            'transition': 'transform 2s'
        })
       
        
*/
      
    }
    
    
})