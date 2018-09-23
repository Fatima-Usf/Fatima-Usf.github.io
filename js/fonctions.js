$(window).scroll(function(){

    var scroll = $(this).scrollTop();
    if (scroll/4) {
        $('.al').css({
            'transform': 'skewY(20deg)',
            'transition': 'transform 2s'
        });
        $('.logo').css({
            'transform': 'translate(-50px, 0px)',
            'transition': 'transform 2s'
        })
       
        

      
    }
    
    
})