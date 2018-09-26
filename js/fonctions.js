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
    /** si le scroll de la feneitre est plus grand que le débaut des images en haut */
    if (scroll > $('.logos-pics').offset().top -($(window).height() / 1.2)) { //pour ne pas pas trop attendre je vais soustraire la moitié de la page sur n'importe quel navigateur
        //selectionné chaque figure(contient une photo) individuellement 
        $('.logos-pics figure').each(function(i){
            
            setTimeout(function(){
                // ne fais rien pour un moment ensuite pour la figure i ajoute la classe show que je vais faire son style
                $('.logos-pics figure').eq(i).addClass('show'); 
            }, 170 *(i+1));
           
        });
    }

    }
    
    if(scroll > $('.back-two').offset().top -$(window).height()){
        $('.back-two').css({ 'background-position': 'center' + (scroll - $('.back-two').offset().top) +'px'})
        
        var opacity = (scroll - $('.back-two').offset().top +400 ) / (scroll /5 )

        $('.love').css({'opacity': opacity})
    }
})