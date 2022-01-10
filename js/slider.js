var slajd = 0,
    slajdy = document.querySelectorAll('#slides > img'),
    liczSlajdy = slajdy.length,

    obecnySlajd = function() {
      var item = Math.abs(slajd % liczSlajdy);
      [].forEach.call(slajdy, function(el) {
        el.classList.remove('slideActive')
      });
      slajdy[item].classList.add('slideActive');
      resetInterval();
    },
    nast = function() {
      slajd++;
      obecnySlajd();
    },
    resetInterval = function() {
      clearInterval(autonext);
      autonext = setInterval(function() {
        slajd++;
        obecnySlajd();
      }, 5000);
    },
    autonext = setInterval(function() {
      nast();
    }, 5000);
