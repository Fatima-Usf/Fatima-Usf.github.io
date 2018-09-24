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
    if (scroll > $('.logos-pics').offset().top -($(window).height() / 1.2)) {
        
        $('.logos-pics figure').each(function(i){

            setTimeout(function(){
                $('.logos-pics figure').eq(i).addClass('show'); 
            }, 150 *(i+1));
           
        });
    }

    }
    
    
})