
//FUNCION PARA LA ESCRITURA AUTOMÁTICA
const escritura = new Typed('.typed', {
	strings : ['nada','Html, Css, JavaScript...','¡Démosle vida a tus ideas!.'],

	typeSpeed: 75,
	startDelay: 1300,
	backSpeed: 75,
	smartBackspace: true,
	loop: true,
	backDelay: 1500,
	contentType: 'html',

})


//FUNCION PARA LA ANIMACIÓN DEL HEADER
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
	let Desplazamiento = window.pageYOffset;
	if(ubicacionPrincipal >= Desplazamiento){
		document.getElementById('navbar').style.top= '0';
	}else{
		document.getElementById('navbar').style.top = '-100px', backgroundColor = '#000';
	}
	ubicacionPrincipal = Desplazamiento;
}
window.addEventListener("scroll",function(){
	var nav = document.querySelector('nav');
	nav.classList.toggle("abajo",window.scrollY>0)

	
})

//MENU DESPLEGABLE PARA LOS RESPONSIVE DESIGNS

var btnMenu = document.querySelector("#btnMenu"); //BOTON MENU
var menu = document.querySelector("#menu"); //MENU

btnMenu.addEventListener("click",function(){
	menu.classList.toggle("mostrar");
});