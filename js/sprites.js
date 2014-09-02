$(document).ready(function() {

// PREVENI SCROLL DA PÁGINA PELA SETAS DIRECIONAIS
// window.addEventListener("keydown", function(e) {
//     // space and arrow keys
//     if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
//         e.preventDefault();
//     }
// }, false);

// var TECLA = {
//   W: 87,
//   S: 83,
//   A: 65,
//   D: 68,
//   U: 38,
//   J: 40,
//   H: 37,
//   K: 39
// };

var jogo = {}; // Objeto
jogo.pressionou = []; // Array

passoPersonagem = 1;

function spritePersonagem() {

// TROCA DE POSICAO DO PERSONAGEM
	
//    |x1|x2|x3|x4|
// |y1|--|--|--|--|
// |y2|--|--|--|--|
// |y3|--|--|--|--|
// |y4|--|--|--|--|
	
	x1 = 0; x2 = -15; x3 = -30; x4 = -45;
	y1 = 0; y2 = -38; y3 = -76; y4 = -114;

	if (jogo.pressionou[TECLA.W] || jogo.pressionou[TECLA.U]) {
		
		if(passoPersonagem == 4){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x1+'px '+y1+'px'});
			passoPersonagem = 5;
		}
		if(passoPersonagem == 3){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x2+'px '+y1+'px'});
			passoPersonagem = 4;
		}
		if(passoPersonagem == 2){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x3+'px '+y1+'px'});
			passoPersonagem = 3;
		}
		if(passoPersonagem == 1 || passoPersonagem == 5){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x4+'px '+y1+'px'});
			passoPersonagem = 2;
		}
		
	}

	if (jogo.pressionou[TECLA.S] || jogo.pressionou[TECLA.J]) {

		if(passoPersonagem == 4){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x1+'px '+y2+'px'});
			passoPersonagem = 5;
		}
		if(passoPersonagem == 3){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x2+'px '+y2+'px'});
			passoPersonagem = 4;
		}
		if(passoPersonagem == 2){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x3+'px '+y2+'px'});
			passoPersonagem = 3;
		}
		if(passoPersonagem == 1 || passoPersonagem == 5){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x4+'px '+y2+'px'});
			passoPersonagem = 2;
		}

	}

	if (jogo.pressionou[TECLA.A] || jogo.pressionou[TECLA.H]) {

		if(passoPersonagem == 4){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x1+'px '+y3+'px'});
			passoPersonagem = 5;
		}
		if(passoPersonagem == 3){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x2+'px '+y3+'px'});
			passoPersonagem = 4;
		}
		if(passoPersonagem == 2){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x3+'px '+y3+'px'});
			passoPersonagem = 3;
		}
		if(passoPersonagem == 1 || passoPersonagem == 5){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x4+'px '+y3+'px'});
			passoPersonagem = 2;
		}

	}

	if (jogo.pressionou[TECLA.D] || jogo.pressionou[TECLA.K]) {

		if(passoPersonagem == 4){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x1+'px '+y4+'px'});
			passoPersonagem = 5;
		}
		if(passoPersonagem == 3){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x2+'px '+y4+'px'});
			passoPersonagem = 4;
		}
		if(passoPersonagem == 2){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x3+'px '+y4+'px'});
			passoPersonagem = 3;
		}
		if(passoPersonagem == 1 || passoPersonagem == 5){
			$(".personagem-img-ativo").css({backgroundPosition: ''+x4+'px '+y4+'px'});
			passoPersonagem = 2;
		}

	}

}

function spritesMove() {
	spritePersonagem();
}

$(function(){
	  jogo.timer = setInterval(spritesMove, 100); // Executa a função loop() a cada x milesegundos

  // Ao pressionar uma tecla
  $(document).keydown(function(e){
    jogo.pressionou[e.which] = true;
  });

  // Ao soltar uma tecla pressionada
  $(document).keyup(function(e){
    jogo.pressionou[e.which] = false;
  });

});

});