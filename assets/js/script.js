// parallaxe
let ypos = 0;
let positionScroll;
let vitesse = 0.5; //Changer la valeur par la vitesse de défilement souhaitée
window.onload = function () {
document.onscroll = function() {
  positionScroll = window.pageYOffset;
  ypos = positionScroll *= -vitesse;
  document.querySelector('#parallaxe').style.backgroundPosition='0px ' + ypos + 'px';
  };
};
// apparition au scroll
$(function(){
  $(window).on('scroll', function () {
  let elmt = $('.left-showing, .right-showing, .top-showing');
  let topImg = $('.left-showing, .right-showing, .top-showing').offset().top;
  let scroll = $(window).scrollTop();
    $(elmt).each(function() {
      let topImg = $(this).offset().top - 800;
          if ( topImg < scroll ) {
            $(this).css('transform', 'translate(0,0)');
            $(this).css('opacity', '1');
          };
      });
  });
});
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/* slidebar */
/*
let content = document.getElementById('#hamburger-content');
let sidebarBody = document.getElementById('#hamburger-sidebar-body');
let button = document.getElementById('#hamburger-button');
let overlay = document.getElementById('#hamburger-overlay');
let activatedClass = 'hamburger-activated';
sidebarBody.innerHTML = content.innerHTML;
button.addEventListener('click', function(e) {
  e.preventDefalut();
  this.parentNode.classList.add(activatedClass);
});
button.addEventListener('keydown', function(e){
  if (this.parentNode.classList.contains(activatedClass)){
    if (e.repeat === false && e.wich === 27) {
      this.parentNode.classList.remove(activatedClass);
    }
  }
})
overlay.addEventListener('click', function(e) {
  e.preventDefalut();
  this.parentNode.classList.remove(activatedClass);
})*/
