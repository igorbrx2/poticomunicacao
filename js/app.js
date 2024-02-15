// scroll suave

$(".historiamanifesto a").click(function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset - 85,
    },
    500
  );
});

// Slider (depoimentos)

function slider(sliderName, velocidade) {
  var sliderClass ='.' + sliderName,
      activeClass = 'active';
      rotate = setInterval(rotateSlide, velocidade);
$(sliderClass + ' > :first').addClass(activeClass);

$(sliderClass).hover(function(){
clearInterval(rotate);
}, function(){
  setInterval(rotateSlide, velocidade);
});

function rotateSlide() {
  var activeSlide = $(sliderClass +  '> .' + activeClass),
      nextSlide = activeSlide.next();

  if(nextSlide.length == 0) {
    nextSlide = $(sliderClass + ' > :first');
  }
  activeSlide.removeClass(activeClass);
  nextSlide.addClass(activeClass);
}
}

slider('depoimentos', 4000);


