$(document).ready(function() {

// MUDANÇA NA DIFICULDADE DO GAME

mudaDificuldade(1);
level = 1;
function mudaDificuldade(level){
	if (level == 1) {
		level = 1;
		$(".carro, .moto").css({display: "none"});
	};
	if (level == 2) {
		level = 2;
		$(".carro").css({display: "block"});
	};
	if (level == 3) {
		level = 3;
		$(".moto").css({display: "block"});
	};
}


TECLA = {
  W: 87,
  S: 83,
  A: 65,
  D: 68,
  U: 38,
  J: 40,
  H: 37,
  K: 39
};

gemea = {
	A: 'ANA',
	B: 'MARIA',
	C: 'LUISA'
};

jogo = {}; // Objeto
jogo.pressionou = []; // Array

$(document).keypress(function(e) {
    if(jogo.pressionou[TECLA.U] || jogo.pressionou[TECLA.S] || jogo.pressionou[TECLA.J] || jogo.pressionou[TECLA.A] || jogo.pressionou[TECLA.H] || jogo.pressionou[TECLA.D] || jogo.pressionou[TECLA.K]) {
    	$(".tela-de-carregamento").animate({opacity: '0'}, 600);
    	setTimeout(function() {
			$(".tela-de-carregamento").css({display: 'none'});
		}, 500);
    };
});

var ar=new Array(33,34,35,36,37,38,39,40);

$(document).keydown(function(e) {
     var key = e.which;
      //console.log(key);
      //if(key==35 || key == 36 || key == 37 || key == 39)
      if($.inArray(key,ar) > -1) {
          e.preventDefault();
          return false;
      }
      return true;
});

$(".tela-de-carregamento").click(function(){
    $(".tela-de-carregamento").animate({opacity: '0'}, 600);
    analyticsEventListener('Game Start', 'Game Start (Clicou no botão de início do game)', 'Usuário começou a jogar.');
    setTimeout(function() {
		$(".tela-de-carregamento").css({display: 'none'});
	}, 500);
});

// setTimeout(function() {
// 	$(".tela-de-carregamento").animate({opacity: '0'}, 600);
// 	setTimeout(function() {
// 		$(".tela-de-carregamento").css({display: 'none'});
// 	}, 500);
// }, 6000);

// MOVIMENTA PERSONAGEM ATIVO
faixaPersonagemAtivo = 1;
function movePersonagemAtivo() {

// PERSONAGEM QUE ESTÁ SENDO MOVIMENTADO PELO USUÁRIO 
personagemAtivo = $(".personagem-ativo");

// POSICAO DO PERSONAGEM ATIVO
posicaoPersonagemAtivoY = parseInt(personagemAtivo.css("top"));
posicaoPersonagemAtivoX = parseInt(personagemAtivo.css("left"));

// MOVIMENTO DO PERSONAGEM CONDICIONADO PELOS LIMITES DO CONTAINER DO JOGO
if (protecaoPersonagem == false) {
	if (posicaoPersonagemAtivoY > 69) {
		if (jogo.pressionou[TECLA.W] || jogo.pressionou[TECLA.U]) {
			personagemAtivo.css("top",parseInt(personagemAtivo.css("top")) - 1);
		}
	};
	if (posicaoPersonagemAtivoY < 402) {
		if (jogo.pressionou[TECLA.S] || jogo.pressionou[TECLA.J]) {
			personagemAtivo.css("top",parseInt(personagemAtivo.css("top")) + 1);
		}
	};
	if (posicaoPersonagemAtivoX > 0) {
		if (jogo.pressionou[TECLA.A] || jogo.pressionou[TECLA.H]) {
			personagemAtivo.css("left",parseInt(personagemAtivo.css("left")) - 1);
		}
	};
	if (posicaoPersonagemAtivoX < 733) {
		if (jogo.pressionou[TECLA.D] || jogo.pressionou[TECLA.K]) {
			personagemAtivo.css("left",parseInt(personagemAtivo.css("left")) + 1);
		}
	};	
};

// TROCA PERSONAGEM ATIVO DE FAIXA POSSIBILITANDO COLISAO CONDICIONAL
if (posicaoPersonagemAtivoY > 0 && posicaoPersonagemAtivoY < 37) {
	faixaPersonagemAtivo = 1;
};
if (posicaoPersonagemAtivoY > 37 && posicaoPersonagemAtivoY < 81) {
	faixaPersonagemAtivo = 2;
};
if (posicaoPersonagemAtivoY > 81 && posicaoPersonagemAtivoY < 125) {
	faixaPersonagemAtivo = 3;
};
if (posicaoPersonagemAtivoY > 125 && posicaoPersonagemAtivoY < 169) {
	faixaPersonagemAtivo = 4;
};
if (posicaoPersonagemAtivoY > 169 && posicaoPersonagemAtivoY < 213) {
	faixaPersonagemAtivo = 5;
};
if (posicaoPersonagemAtivoY > 213 && posicaoPersonagemAtivoY < 257) {
	faixaPersonagemAtivo = 6;
};
if (posicaoPersonagemAtivoY > 257 && posicaoPersonagemAtivoY < 301) {
	faixaPersonagemAtivo = 7;
};
if (posicaoPersonagemAtivoY > 301 && posicaoPersonagemAtivoY < 345) {
	faixaPersonagemAtivo = 8;
};
if (posicaoPersonagemAtivoY > 345 && posicaoPersonagemAtivoY < 389) {
	faixaPersonagemAtivo = 9;
};
if (posicaoPersonagemAtivoY > 389 && posicaoPersonagemAtivoY < 433) {
	faixaPersonagemAtivo = 10;
};

// DESAPARECE COM OS NOMES DAS PERSONAGENS
if (faixaPersonagemAtivo < 10 && faixaPersonagemAtivo > 3) {
	$(".personagem-ativo .personagem-arrow").css({opacity: "0.4"});
} else {$(".personagem-ativo .personagem-arrow").css({opacity: "1"});}

// DEFINE QUAIS CAMINHOES PODEM COLIDIR COM O PERSONAGEM ATIVO
if (faixaPersonagemAtivo == 4 || faixaPersonagemAtivo == 5 || faixaPersonagemAtivo == 6) {
	$(".cam-1.cam-l-1").addClass('caminhao-ativo-1');
	$(".cam-1.cam-l-2").addClass('caminhao-ativo-2');
	$(".cam-2").removeClass('caminhao-ativo-1');
	$(".cam-2").removeClass('caminhao-ativo-2');
};

if (faixaPersonagemAtivo == 7 || faixaPersonagemAtivo == 8 || faixaPersonagemAtivo == 9) {
	$(".cam-1").removeClass('caminhao-ativo-1');
	$(".cam-1").removeClass('caminhao-ativo-2');
	$(".cam-2.cam-l-1").addClass('caminhao-ativo-1');
	$(".cam-2.cam-l-2").addClass('caminhao-ativo-2');
};

// DEFINE QUAIS CARROS PODEM COLIDIR COM O PERSONAGEM ATIVO
if (faixaPersonagemAtivo == 3 || faixaPersonagemAtivo == 4 || faixaPersonagemAtivo == 5) {
	$(".car-1.car-l-1").addClass('carro-ativo-1');
	$(".car-1.car-l-2").addClass('carro-ativo-2');
	$(".car-1.car-l-3").addClass('carro-ativo-3');
	$(".car-2").removeClass('carro-ativo-1');
	$(".car-2").removeClass('carro-ativo-2');
	$(".car-2").removeClass('carro-ativo-3');
};

if (faixaPersonagemAtivo == 6 || faixaPersonagemAtivo == 7 || faixaPersonagemAtivo == 8) {
	$(".car-1").removeClass('carro-ativo-1');
	$(".car-1").removeClass('carro-ativo-2');
	$(".car-1").removeClass('carro-ativo-3');
	$(".car-2.car-l-1").addClass('carro-ativo-1');
	$(".car-2.car-l-2").addClass('carro-ativo-2');
	$(".car-2.car-l-3").addClass('carro-ativo-3');
};

// DEFINE QUAIS MOTOS PODEM COLIDIR COM O PERSONAGEM ATIVO
if (faixaPersonagemAtivo == 5 || faixaPersonagemAtivo == 6 || faixaPersonagemAtivo == 7) {
	$(".mot-1.mot-l-1").addClass('moto-ativo-1');
	$(".mot-1.mot-l-2").addClass('moto-ativo-2');
	$(".mot-1.mot-l-3").addClass('moto-ativo-3');
	$(".mot-1.mot-l-4").addClass('moto-ativo-4');
	$(".mot-2").removeClass('moto-ativo-1');
	$(".mot-2").removeClass('moto-ativo-2');
	$(".mot-2").removeClass('moto-ativo-3');
	$(".mot-2").removeClass('moto-ativo-4');
};

if (faixaPersonagemAtivo == 8 || faixaPersonagemAtivo == 9 || faixaPersonagemAtivo == 10) {
	$(".mot-1").removeClass('moto-ativo-1');
	$(".mot-1").removeClass('moto-ativo-2');
	$(".mot-1").removeClass('moto-ativo-3');
	$(".mot-1").removeClass('moto-ativo-4');
	$(".mot-2.mot-l-1").addClass('moto-ativo-1');
	$(".mot-2.mot-l-2").addClass('moto-ativo-2');
	$(".mot-2.mot-l-3").addClass('moto-ativo-3');
	$(".mot-2.mot-l-4").addClass('moto-ativo-4');
};


}

// CONFIGURACOES DE MOVIMENTO
	// MOTOS
	volocidadeMotos = 2;
	direcaoMotos = -1;
	movimentoMotos = volocidadeMotos * direcaoMotos;

	// CARROS
	volocidadeCarros = 1;
	direcaoCarros = 1;
	movimentoCarros = volocidadeCarros * direcaoCarros;

	// CAMINHOES
	volocidadeCaminhao = 1;
	direcaoCaminhao = -1;
	movimentoCaminhao = volocidadeCaminhao * direcaoCaminhao;

function moveCaminhoes(){
	// MOVIMENTO CAMINHOES C1
	caminhao1x1 = $(".cam-l-1");
	caminhao1x1Posicao = parseInt(caminhao1x1.css("left"));
	
	caminhao1x1.css({
		left: caminhao1x1Posicao-movimentoCaminhao
	});

	// MOVIMENTO CAMINHOES C2
	caminhao1x2 = $(".cam-l-2");
	caminhao1x2Posicao = parseInt(caminhao1x2.css("left"));
	
	caminhao1x2.css({
		left: caminhao1x2Posicao-movimentoCaminhao
	});
}

function moveCarros(){
	// MOVIMENTO CARROS C1
	carro1x1 = $(".car-l-1");
	carro1x1Posicao = parseInt(carro1x1.css("left"));
	
	carro1x1.css({
		left: carro1x1Posicao-movimentoCarros
	});

	// MOVIMENTO CARROS C2
	carro1x2 = $(".car-l-2");
	carro1x2Posicao = parseInt(carro1x2.css("left"));
	
	carro1x2.css({
		left: carro1x2Posicao-movimentoCarros
	});

	// MOVIMENTO CARROS C3
	carro1x3 = $(".car-l-3");
	carro1x3Posicao = parseInt(carro1x3.css("left"));
	
	carro1x3.css({
		left: carro1x3Posicao-movimentoCarros
	});
}

function moveMotos(){
	// MOVIMENTO MOTOS C1
	moto1x1 = $(".mot-l-1");
	moto1x1Posicao = parseInt(moto1x1.css("left"));
	
	moto1x1.css({
		left: moto1x1Posicao-movimentoMotos
	});

	// MOVIMENTO MOTOS C2
	moto1x2 = $(".mot-l-2");
	moto1x2Posicao = parseInt(moto1x2.css("left"));
	
	moto1x2.css({
		left: moto1x2Posicao-movimentoMotos
	});

	// MOVIMENTO MOTOS C3
	moto1x3 = $(".mot-l-3");
	moto1x3Posicao = parseInt(moto1x3.css("left"));
	
	moto1x3.css({
		left: moto1x3Posicao-movimentoMotos
	});

	// MOVIMENTO MOTOS C4
	moto1x4 = $(".mot-l-4");
	moto1x4Posicao = parseInt(moto1x4.css("left"));
	
	moto1x4.css({
		left: moto1x4Posicao-movimentoMotos
	});
}

// FAZ OS VEICULOS VOLTAREM PRA ORIGEM DO MOVIMENTO
function corrigeVeiculos() {
for (var i = 1; i <= 4; i++) {
  posicaoMoto = $(".mot-l-"+i);
  motoLeft = parseInt(posicaoMoto.css("left"));

	if (motoLeft < -37) {
		posicaoMoto.css({left: "753px"});
	};
	if (motoLeft > 753) {
		posicaoMoto.css({left: "-36px"});
	};
};
for (var i = 1; i <= 3; i++) {
  posicaoCarro = $(".car-l-"+i);
  carroLeft = parseInt(posicaoCarro.css("left"));

	if (carroLeft < -55) {
		posicaoCarro.css({left: "751px"});
	};
	if (carroLeft > 753) {
		posicaoCarro.css({left: "-45px"});
	};
};
for (var i = 1; i <= 2; i++) {
  posicaoCaminhao = $(".cam-l-"+i);
  caminhaoLeft = parseInt(posicaoCaminhao.css("left"));

	if (caminhaoLeft < -123) {
		posicaoCaminhao.css({left: "751px"});
	};
	if (caminhaoLeft > 753) {
		posicaoCaminhao.css({left: "-122px"});
	};
};
};

// DETECTANDO LIMITES DOS OBJETOS MOVEIS
primeiraColisao = false;
numeroDeVidas = 5;
protecaoPersonagem = false;
concessionariaAberta = 1;

function colisionDetector() {

// DETECTANDO LIMITES FISICOS DO PERSONAGEM ATIVO
personagemAtivo = $(".personagem-ativo");

personagemXRight = parseInt(personagemAtivo.css("left")) + parseInt(personagemAtivo.css("width"));
personagemXleft = parseInt(personagemAtivo.css("left"));
personagemYBottom = parseInt(personagemAtivo.css("top"));
personagemYTop = parseInt(personagemAtivo.css("top")) + parseInt(personagemAtivo.css("height"));

// DETECTANDO LIMITES FISICOS DOS CAMINHOES
posicaoCaminhao1 = $(".caminhao-ativo-1");
caminhao1XRight = parseInt(posicaoCaminhao1.css("left")) + parseInt(posicaoCaminhao1.css("width"));
caminhao1Xleft = parseInt(posicaoCaminhao1.css("left"));
caminhao1YBottom = parseInt(posicaoCaminhao1.css("top"));
caminhao1YTop = parseInt(posicaoCaminhao1.css("top")) + parseInt(posicaoCaminhao1.css("height"));

posicaoCaminhao2 = $(".caminhao-ativo-2");
caminhao2XRight = parseInt(posicaoCaminhao2.css("left")) + parseInt(posicaoCaminhao2.css("width"));
caminhao2Xleft = parseInt(posicaoCaminhao2.css("left"));
caminhao2YBottom = parseInt(posicaoCaminhao2.css("top"));
caminhao2YTop = parseInt(posicaoCaminhao2.css("top")) + parseInt(posicaoCaminhao2.css("height"));

// DETECTANDO LIMITES FISICOS DOS CARROS
posicaoCarro1 = $(".carro-ativo-1");
carro1XRight = parseInt(posicaoCarro1.css("left")) + parseInt(posicaoCarro1.css("width"));
carro1Xleft = parseInt(posicaoCarro1.css("left"));
carro1YBottom = parseInt(posicaoCarro1.css("top"));
carro1YTop = parseInt(posicaoCarro1.css("top")) + parseInt(posicaoCarro1.css("height"));

posicaoCarro2 = $(".carro-ativo-2");
carro2XRight = parseInt(posicaoCarro2.css("left")) + parseInt(posicaoCarro2.css("width"));
carro2Xleft = parseInt(posicaoCarro2.css("left"));
carro2YBottom = parseInt(posicaoCarro2.css("top"));
carro2YTop = parseInt(posicaoCarro2.css("top")) + parseInt(posicaoCarro2.css("height"));

posicaoCarro3 = $(".carro-ativo-3");
carro3XRight = parseInt(posicaoCarro3.css("left")) + parseInt(posicaoCarro3.css("width"));
carro3Xleft = parseInt(posicaoCarro3.css("left"));
carro3YBottom = parseInt(posicaoCarro3.css("top"));
carro3YTop = parseInt(posicaoCarro3.css("top")) + parseInt(posicaoCarro3.css("height"));

// DETECTANDO LIMITES FISICOS DAS MOTOS
posicaoMoto1 = $(".moto-ativo-1");
moto1XRight = parseInt(posicaoMoto1.css("left")) + parseInt(posicaoMoto1.css("width"));
moto1Xleft = parseInt(posicaoMoto1.css("left"));
moto1YBottom = parseInt(posicaoMoto1.css("top"));
moto1YTop = parseInt(posicaoMoto1.css("top")) + parseInt(posicaoMoto1.css("height"));

posicaoMoto2 = $(".moto-ativo-2");
moto2XRight = parseInt(posicaoMoto2.css("left")) + parseInt(posicaoMoto2.css("width"));
moto2Xleft = parseInt(posicaoMoto2.css("left"));
moto2YBottom = parseInt(posicaoMoto2.css("top"));
moto2YTop = parseInt(posicaoMoto2.css("top")) + parseInt(posicaoMoto2.css("height"));

posicaoMoto3 = $(".moto-ativo-3");
moto3XRight = parseInt(posicaoMoto3.css("left")) + parseInt(posicaoMoto3.css("width"));
moto3Xleft = parseInt(posicaoMoto3.css("left"));
moto3YBottom = parseInt(posicaoMoto3.css("top"));
moto3YTop = parseInt(posicaoMoto3.css("top")) + parseInt(posicaoMoto3.css("height"));

posicaoMoto4 = $(".moto-ativo-4");
moto4XRight = parseInt(posicaoMoto4.css("left")) + parseInt(posicaoMoto4.css("width"));
moto4Xleft = parseInt(posicaoMoto4.css("left"));
moto4YBottom = parseInt(posicaoMoto4.css("top"));
moto4YTop = parseInt(posicaoMoto4.css("top")) + parseInt(posicaoMoto4.css("height"));

// DETECTANDO LIMITES FISICOS DAS CONCESSIONARIAS
posicaoConces1 = $(".conces-1");
conces1XRight = parseInt(posicaoConces1.css("left")) + parseInt(posicaoConces1.css("width")) - 25;
conces1Xleft = parseInt(posicaoConces1.css("left")) + 55;
conces1YBottom = parseInt(posicaoConces1.css("top"));
conces1YTop = parseInt(posicaoConces1.css("top")) + parseInt(posicaoConces1.css("height"));

posicaoConces2 = $(".conces-2");
conces2XRight = parseInt(posicaoConces2.css("left")) + parseInt(posicaoConces2.css("width")) - 25;
conces2Xleft = parseInt(posicaoConces2.css("left")) + 55;
conces2YBottom = parseInt(posicaoConces2.css("top"));
conces2YTop = parseInt(posicaoConces2.css("top")) + parseInt(posicaoConces2.css("height"));

posicaoConces3 = $(".conces-3");
conces3XRight = parseInt(posicaoConces3.css("left")) + parseInt(posicaoConces3.css("width")) - 25;
conces3Xleft = parseInt(posicaoConces3.css("left")) + 55;
conces3YBottom = parseInt(posicaoConces3.css("top"));
conces3YTop = parseInt(posicaoConces3.css("top")) + parseInt(posicaoConces3.css("height"));

// PREVENDO E DETECTANDO COLISOES

if(protecaoPersonagem == false){
	if (personagemXRight >= caminhao1Xleft && personagemXleft <= caminhao1XRight && personagemYBottom <= caminhao1YTop && personagemYTop >= caminhao1YBottom) {
		perdeVida();};
	if (personagemXRight >= caminhao2Xleft && personagemXleft <= caminhao2XRight && personagemYBottom <= caminhao2YTop && personagemYTop >= caminhao2YBottom) {
		perdeVida();};
		if (level == 2 || level == 3) {
			if (personagemXRight >= carro1Xleft && personagemXleft <= carro1XRight && personagemYBottom <= carro1YTop && personagemYTop >= carro1YBottom) {
			perdeVida();};
			if (personagemXRight >= carro2Xleft && personagemXleft <= carro2XRight && personagemYBottom <= carro2YTop && personagemYTop >= carro2YBottom) {
				perdeVida();};
			if (personagemXRight >= carro3Xleft && personagemXleft <= carro3XRight && personagemYBottom <= carro3YTop && personagemYTop >= carro3YBottom) {
				perdeVida();};
			if (level == 3) {
				if (personagemXRight >= moto1Xleft && personagemXleft <= moto1XRight && personagemYBottom <= moto1YTop && personagemYTop >= moto1YBottom) {
					perdeVida();};
				if (personagemXRight >= moto2Xleft && personagemXleft <= moto2XRight && personagemYBottom <= moto2YTop && personagemYTop >= moto2YBottom) {
					perdeVida();};
				if (personagemXRight >= moto3Xleft && personagemXleft <= moto3XRight && personagemYBottom <= moto3YTop && personagemYTop >= moto3YBottom) {
					perdeVida();};
				if (personagemXRight >= moto4Xleft && personagemXleft <= moto4XRight && personagemYBottom <= moto4YTop && personagemYTop >= moto4YBottom) {
					perdeVida();};
			};
		};
	

if (concessionariaAberta == 1) {
	if (personagemXRight >= conces1Xleft && personagemXleft <= conces1XRight && personagemYBottom <= conces1YTop && personagemYTop >= conces1YBottom) {
		console.log("CONCESSIONARIA 1");
		numeroDeVidas++;
		protecaoPersonagem = true;
		$(".life-number").text(numeroDeVidas);
		$(".personagem-ativo").animate({left: '150px', top: '36px', opacity: '0'}, 1000);
		$(".personagem-img-ativo").removeAttr('style');
		setTimeout(function() {
			$(".conces-1").css({backgroundPosition: '-173px 0px'});
			$(".conces-2").css({backgroundPosition: '0px 0px'});
		}, 1100);
		setTimeout(function() {
			$(".pers-1").removeClass('personagem-ativo');
			$(".pers-img-1").removeClass('personagem-img-ativo');
			$(".aurea-1").removeClass('aurea-ativo');
			$(".arrow-1").removeClass('personagem-arrow-ativo');
			$(".pers-2").addClass('personagem-ativo');
			$(".pers-img-2").addClass('personagem-img-ativo');
			$(".aurea-2").addClass('aurea-ativo');
			$(".arrow-2").addClass('personagem-arrow-ativo');
			protecaoPersonagem = false;
		}, 1200);
		concessionariaAberta = 2;
		entrarConcessionaria('PRIMEIRA', 'JORLAN BELVEDERE');
    	analyticsEventListener('Etapa do game', '1ª fase (Completa)', 'Usuário levou a primeira gêmea para a concessionária. ');
    	mudaDificuldade(level = 2);
	};
};
if (concessionariaAberta == 2) {
	if (personagemXRight >= conces2Xleft && personagemXleft <= conces2XRight && personagemYBottom <= conces2YTop && personagemYTop >= conces2YBottom) {
		console.log("CONCESSIONARIA 2");
		numeroDeVidas++;
		protecaoPersonagem = true;
		$(".life-number").text(numeroDeVidas);
		$(".personagem-ativo").animate({left: '335px', top: '36px', opacity: '0'}, 1000);
		$(".personagem-img-ativo").removeAttr('style');
		setTimeout(function() {
			$(".conces-2").css({backgroundPosition: '-173px 0px'});
			$(".conces-3").css({backgroundPosition: '0px 0px'});
		}, 1100);
		setTimeout(function() {
			$(".pers-2").removeClass('personagem-ativo');
			$(".pers-img-2").removeClass('personagem-img-ativo');
			$(".aurea-2").removeClass('aurea-ativo');
			$(".arrow-2").removeClass('personagem-arrow-ativo');
			$(".pers-3").addClass('personagem-ativo');
			$(".pers-img-3").addClass('personagem-img-ativo');
			$(".aurea-3").addClass('aurea-ativo');
			$(".arrow-3").addClass('personagem-arrow-ativo');
			protecaoPersonagem = false;
			concessionariaAberta = 3;
		}, 1200);
		entrarConcessionaria('SEGUNDA', 'JORLAN VIA EXPRESSA');
    	analyticsEventListener('Etapa do game', '2ª fase (Completa)', 'Usuário levou a segunda gêmea para a concessionária. ');
    	mudaDificuldade(level = 3);
	};
};
if (concessionariaAberta == 3) {
	if (personagemXRight >= conces3Xleft && personagemXleft <= conces3XRight && personagemYBottom <= conces3YTop && personagemYTop >= conces3YBottom) {
		console.log("CONCESSIONARIA 3");
		numeroDeVidas++;
		protecaoPersonagem = true;
		$(".life-number").text(numeroDeVidas);
		$(".personagem-ativo").animate({left: '515px', top: '36px', opacity: '0'}, 1000);
		$(".personagem-img-ativo").removeAttr('style');
		setTimeout(function() {
			$(".conces-3").css({backgroundPosition: '-173px 0px'});
		}, 1100);
		gameOverGanhou()
	};
};
}

};

function perdeVida() {
	numeroDeVidas--;
	console.log('VIDAS >>>>> '+numeroDeVidas);
	$(".personagem-ativo").animate({top: "402px", left: "330px"}, 1000);
	$(".personagem-img-ativo").removeAttr('style');
	$(".aurea-ativo").fadeIn();
	$(".personagem-img-ativo").fadeOut(10).fadeIn(140).fadeOut(140).fadeIn(140).fadeOut(140).fadeIn(140).fadeOut(140).fadeIn(140).fadeOut(140).fadeIn(140).fadeOut(140).fadeIn(140);
	protecaoPersonagem = true;
	setTimeout(function() {
	    protecaoPersonagem = false;
		$(".aurea-ativo").fadeOut(400);
	}, 2000);
	if (numeroDeVidas == 0) {
		gameOverPerdeu();
	};
};

function atualizaVidas(){
	for (var i = 5; i >= 0; i--) {
		if (numeroDeVidas == i) {
			var posSpriteLife = -106 * i;
			$(".life").css({backgroundPosition: ''+posSpriteLife+'px 0px'});
		};
	};	
	if (numeroDeVidas == 6 || numeroDeVidas == 7 || numeroDeVidas == 8) {
		$(".life").css({backgroundPosition: '-530px 0px'});
	};
	$(".life-number").text(numeroDeVidas);
}

function entrarConcessionaria(ordemGemea ,concesName){
	$(".alert-onboard-enter").css({display: "block"});
	$(".alert-button").css({display: "none"});
	$(".alert-conces-text-1").text("PARABÉNS!");
	$(".alert-conces-text-2").html("VOCê LEVOU A "+ordemGemea+" TRIGêMEA ATé A <span>"+concesName+"</span> COM SEGURANÇA.");
	$(".alert-conces-text-2").html("Você levou a "+ordemGemea+" trigêmea até a <span>"+concesName+"</span> com segurança.");
	$(".alert-conces-1").animate({left: "50%"}, 400);
	$(document).keypress(function(e) {
	    if(e.which == 13) {
	    	$(".alert-conces-1").animate({left: "-30%"}, 400);
			setTimeout(function() {
				$(".alert-conces-1").css({left: "130%"});
			}, 3000);
	    };
	});
};

function gameOverPerdeu(){
	$(".alert-button").css({display: "block"});
	$(".alert-conces-text-1").text("UPS...");
	$(".alert-onboard-enter").css({display: "none"});
	$(".alert-conces-text-2").html("VOCê FICOU SEM VIDAS.");
	// $(".alert-conces").append('<div class="alert-button jogar-novamente">JOGAR NOVAMENTE</div><div class="alert-button compartilhar-2">COMPARTILHAR</div>')
	$(".alert-conces-1").animate({left: "50%"}, 400);
	$(".personagem").css({display: "none"});
    analyticsEventListener('Perdeu o game', 'Game Over', 'Usuário ficou sem nenhuma vida. ');
}

$(".jogar-novamente").click(function() {
	resetGame();
});

function resetGame(){
	$(".pers-1").addClass('personagem-ativo');
	$(".pers-img-1").addClass('personagem-img-ativo');
	$(".aurea-1").addClass('aurea-ativo');
	$(".pers-2").removeClass('personagem-ativo');
	$(".pers-img-2").removeClass('personagem-img-ativo');
	$(".aurea-2").removeClass('aurea-ativo');
	$(".pers-3").removeClass('personagem-ativo');
	$(".pers-img-3").removeClass('personagem-img-ativo');
	$(".aurea-3").removeClass('aurea-ativo');

	$("*").removeAttr("style");
	$(".personagem").css({display: "block"});
	primeiraColisao = false;
	numeroDeVidas = 5;
	protecaoPersonagem = false;
	concessionariaAberta = 1;
	level = 1;
}

$("#form").hide();

function gameOverGanhou(){
	$(".alert-conces-text-1").text("PARABÉNS, VOCÊ GANHOU!");
	$(".alert-conces-text-2").html("Preencha o formulário abaixo para imprimir o voucher de 100 Dotz.");
	// $(".alert-conces").append('<div class="alert-button pegar-premio">RECEBER PRêMIO</div><div class="alert-button compartilhar">COMPARTILHAR</div>');
	// $(".alert-form").append('<form onSubmit="return validar();"  id="form" name="form" method="post" action="http://www.grupoocp.com.br/azzurra/acoesEspeciais.php"><!--Origem do lead--><input type="hidden" name="origem" id="origem" style="width:273px; color:#000" value="Hotsite" /><!---Nome do veículo--><input type="hidden" name="veiculo" id="veiculo" style="width:273px; color:#000" value="" /><!--Tipo de campanha--><input type="hidden" name="campanha" id="campanha" style="width:273px; color:#000" value="Jorlan Unificação" /><!--Opção--><input type="hidden" name="opcao" id="opcao" style="width:273px; color:#000" value="A" /><!--Link de resposta--><input type="hidden" name="linkResposta" id="linkResposta" value="http://azzurradigital.com/orca-unificacao/" /><input type="hidden"  name="codempresa" id="codempresa" name="codempresa" value="4" style=" height:25px; color:#999;"><div class="inputname"><input  type="text" name="nome" id="nome" size="6" maxlenght="6" placeholder="Qual é o seu nome?" style="height:25px; color:#3b1616; background-color: #CE9767"  /></div><div class="inputemail"><input  type="text" name="email" id="email" placeholder="Qual é o seu email?" style=" height:25px; color:#3b1616; background-color: #CE9767"  /></div><div class="inputtel"><input  type="text" name="telefone" class="mask-fone" id="telefone" placeholder="Qual é o seu telefone?" style=" height:25px; color:#3b1616; background-color: #CE9767"/></div><div class="inputtxtarea"><input style=" color:#3b1616; height: 25px; background-color: #CE9767" name="mensagem" class="mask-cpf" id="mensagem" placeholder="Qual é o seu CPF?"  /> </div><div class="inputall"><input name="charset" type="hidden" value="iso-8859-1" /><input type="submit" name="enviar" value="QUERO O MEU PRêMIO" class="btn" /></div></form>')
	$("#form").show();
	$(".alert-form").animate({left: "50%"}, 400);
    analyticsEventListener('Ganhou o game', '3ª fase (Completa)', 'Usuário levou a última gêmea para a concessionária. ');
}

function loop() {
	movePersonagemAtivo();
	moveCaminhoes();
	moveCarros();
	moveMotos();
	colisionDetector();
	corrigeVeiculos();
	atualizaVidas();
}

tempoSegundos = 0
function timer() {
	tempoSegundos++;
	$(".timer").text(tempoSegundos);
}

$(function(){
	jogo.timer = setInterval(timer, 1000);
});

// MELHORIA DE SUAVIDADE NO MOVIMENTO
$(function(){

  // Executa o loop condicionalmente 
  // var botao = $("#botao")
  // botao.click(function() {
	  // console.log('START');
	  jogo.timer = setInterval(loop, 10); // Executa a função loop() a cada x milesegundos
  // });

  // Ao pressionar uma tecla
  $(document).keydown(function(e){
    jogo.pressionou[e.which] = true;
  });

  // Ao soltar uma tecla pressionada
  $(document).keyup(function(e){
    jogo.pressionou[e.which] = false;
  });

});

// ANALYTICS EVENT ORIGIN
function analyticsEventListener(eventName, eventDescription, eventNotification){
	var d = moment().lang('pt').format('MMMM Do YYYY, h:mm:ss a');
	ga('send', 'event', eventName, eventDescription, ''+eventNotification+' ('+d+')');
}

});
