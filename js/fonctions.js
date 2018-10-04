
$(document).ready(function () {
    $(window).scroll(function(){
        var showidth = $(window).width();
        var scroll = $(this).scrollTop();
       // console.log(showidth)

        if (scroll/2) {
            $('h2').css({
                'transform': 'skewY(180deg)',
                'transition': 'transform 2s'
            })
        /*   $('.logo').css({
                'transform': 'translate(-200px, 0px)',
                'transition': 'transform 2s'
            })+67223
            747
        */
      
        }
        
        if(scroll > $('.back-two').offset().top -$(window).height()){
            $('.back-two').css({ 'background-position': 'center' + (scroll - $('.back-two').offset().top) +'px'})
            
            var opacity = (scroll - $('.back-two').offset().top +400 ) / (scroll /5 )
             console.log( scroll )
            $('.love').css({'opacity': opacity})
            $('footer').css({ 'position': 'fixed' });
        } else if (scroll < $('.back-two').offset().top - $(window).height()) {
            $('footer').css({ 'position': 'relative' });  }

        if (showidth > 864) {
            /** si le scroll de la feneitre est plus grand que le débaut des images en haut */
            if (scroll > $('.logos-pics').offset().top - ($(window).height() / 1.2)) { //pour ne pas pas trop attendre je vais soustraire la moitié de la page sur n'importe quel navigateur
                //selectionné chaque figure(contient une photo) individuellement 
                $('.logos-pics figure').each(function (i) {

                    setTimeout(function () {
                        // ne fais rien pour un moment ensuite pour la figure i ajoute la classe show que je vais faire son style
                        $('.logos-pics figure').eq(i).addClass('show');
                    }, 170 * (i + 1));

                });
            }
            if (scroll > $('.blogs').offset().top - $(window).height()) {
                var offset = Math.min(0, scroll - $('.blogs').offset().top + $(window).height() - 300);

                $('.post1').css({ 'transform': 'translate(' + offset + 'px, 20px)' });
                $('.post3').css({ 'transform': 'translate(' + Math.abs(offset) + 'px, 20px)' });

            }
        }
        
      
       

    })
   
});

var myText = "Hello there..";

var myArray = myText.split("");


var timeboucle;
function loop() {


  if (myArray.length > 0) {
    document.getElementById("container").innerHTML += myArray.shift();

  } else {
    clearTimeout(timeboucle);
  }
  timeboucle = setTimeout('loop()', 90);

}
loop();