window.addEventListener('DOMContentLoaded' , function() {
  document.querySelector('#burger').addEventListener('click' , function() {
    document.querySelector('#header__menu').classList.add('is-active')
    var offsetHeightHeader = document.querySelector('.header').offsetHeight
    var offsetHeightHero = document.querySelector('.section-hero').offsetHeight
    var burgerHeight = offsetHeightHero + offsetHeightHeader;
    document.querySelector(".header-menu").style.height = burgerHeight + "px";

    document.querySelectorAll('.header__link').forEach(function(tabContent) {
      tabContent.classList.toggle('voiceover-hidden')
    })
    document.querySelector('#header-menu__cross-sign').classList.toggle('voiceover-hidden')

  })

  document.querySelector('#header-menu__cross-sign').addEventListener('click', function() {
    document.querySelector('#header__menu').classList.remove('is-active'); 
    document.querySelectorAll('.header__link').forEach(function(tabContent) {
      tabContent.classList.toggle('voiceover-hidden')
    })
    document.querySelector('#header-menu__cross-sign').classList.toggle('voiceover-hidden')
  })

})
