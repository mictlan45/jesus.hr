const navLeft = document.querySelector(".left");
const navRight = document.querySelector(".right");

const images = document.querySelector(".images");
const colors = document.querySelector(".colored-backgrounds");

let index = 0;

function right() {
  transform((index = index < 3 ? ++index : 0));
}

function left() {
  transform((index = index > 0 ? --index : 3));
}

navLeft.addEventListener("click", left);
navRight.addEventListener("click", right);

function transform(index) {
  images.style.transform = `translateX(-${index * 100}%)`;
  colors.style.transform = `translateX(-${index * 100}%)`;
}

window.addEventListener('scroll', function(){
  let animacion = document.getElementById('animado');
  let posicionObj1 = animacion.getBoundingClientRect().top;
  console.log(posicionObj1);
  let tamañoDePantalla = window.innerHeight/1.1;
  
  if(posicionObj1 < tamañoDePantalla){
      animacion.style.animation = 'mover 10s ease-out'
  }
  
}
)

document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});
});