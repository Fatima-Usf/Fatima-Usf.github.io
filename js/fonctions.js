document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function (event) {
    var scroll = window.pageYOffset;
    var h2Element = document.querySelector('h2');
    var logoPictures = document.querySelector('.logos-pics');
    var backTo = document.querySelector('.back-two');
    var footer = document.querySelector('footer');
    var blogs = document.querySelector('.blogs');

    if (scroll / 2) {
      h2Element.style.transform = 'skewY(180deg)';
      h2Element.style.transition = 'transform 2s';

      if (scroll > logoPictures.getBoundingClientRect().top - (window.innerHeight / 1.2)) {
        document.querySelectorAll('.logos-pics figure').forEach(function (elm, index) {
          setTimeout(function () {
            elm.classList.add('show');
          }, 170 * (index + 1));
        });
      }
    }

    if (scroll > backTo.getBoundingClientRect().top - window.innerHeight) {
      backTo.style.backgroundPosition = 'center ' + (scroll - backTo.getBoundingClientRect().top) + 'px';

      var opacity = (scroll - backTo.getBoundingClientRect().top + 400) / (scroll / 5);
      document.querySelector('.love').style.opacity = opacity;
      footer.style.position = 'fixed';
    } else if (scroll < backTo.getBoundingClientRect().top - window.innerHeight) {
      footer.style.position = 'relative';
    }


    if (scroll > blogs.getBoundingClientRect().top - window.innerHeight) {
      var offset = Math.min(0, scroll - blogs.getBoundingClientRect().top + window.innerHeight - 360);
      document.querySelector('.post1').style.transform = 'translate(' + offset + 'px, 20px)';
      document.querySelector('.post3').style.transform = 'translate(' + Math.abs(offset) + 'px, 20px)'
    }
  });

});