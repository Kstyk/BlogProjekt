var slide = 0,
    slides = document.querySelectorAll('#slides > img'),
    numSlides = slides.length,

    currentSlide = function() {
      var itemToShow = Math.abs(slide % numSlides);
      [].forEach.call(slides, function(el) {
        el.classList.remove('slideActive')
      });
      slides[itemToShow].classList.add('slideActive');
      resetProgress();
      resetInterval();
    },
    next = function() {
      slide++;
      currentSlide();
    },
    prev = function() {
      slide--;
      currentSlide();
    },
    resetslide = function() {
      var elm = document.querySelector('#slides > li'),
          newone = elm.cloneNode(true),
          x = elm.parentNode.replaceChild(newone, elm);
    },
    resetInterval = function() {
      clearInterval(autonext);
      autonext = setInterval(function() {
        slide++;
        currentSlide();
      }, 5000);
    },
    autonext = setInterval(function() {
      next();
    }, 5000);
