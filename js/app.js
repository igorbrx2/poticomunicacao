

// Botao volta ao topo

window.addEventListener('scroll', function(){
  let scroll = document.querySelector('.scrolltop')
      scroll.classList.toggle('active', window.scrollY > 250);
})

function backTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

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

slider('depoimentos', 2000);

// Slider (Trabalhamos para)

const clientes = [...document.querySelectorAll('#clientes')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

clientes.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})

// PAGINA AUDIOVISUAL

$(document).ready(function(){

var classActive = 'active';

$('#audiovisual a, .video-incorporado').first().addClass(classActive);

$('#audiovisual a').click(function(e){
  e.preventDefault();
  var itemId = $(this).attr('href');

  $('#audiovisual a, .video-incorporado').removeClass(classActive);

  $(this).addClass(classActive);
  $(itemId).addClass(classActive);
});
});


