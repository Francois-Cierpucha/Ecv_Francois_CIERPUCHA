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
