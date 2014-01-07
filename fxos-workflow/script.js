(function() {
  'use strict'
  var items = document.querySelectorAll('#workflow li');
  Array.prototype.forEach.call(items, function (el) {
    el.addEventListener('click', onclick);
  });

  function onclick(e) {
    var el = e.target;
    var activeEl = el.parentNode.querySelector('.active');
    if (activeEl) {
      activeEl.classList.remove('active');
    }
    el.classList.add('active');
  }
})();
