$(document).ready(function() {

	urlUsuario = location.href;
	urlUsuarioSplit = urlUsuario.split("#");
	carroUsuario = urlUsuarioSplit[1];
	carMapping = 0;
	// console.info('URL DO USUÁRIO = ' + urlUsuario);

	carMappingSet();

	$("[carro = "+carroUsuario+"]").css({backgroundColor: "#004D92"});

	console.info('CARRO DO USUÁRIO = ' + carroUsuario);	
	console.info('CARRO DO USUÁRIO = ' + carMapping);

	$(".text-area-middle-oferta-detalhe-cont").text(carroUsuario);

	$.get("dados.xml", function(data) {
		// $(".result").html(data);
		// alert("XML CARREGADO COM SUCESSO");

		pushOfertas();

		$(".oferta-cont").click(function() {
			var thisVar = $(this);
			carroUsuario = this.getAttribute("carro");

			$(".oferta-cont").not(this).css({backgroundColor: "transparent"});
			$(this).css({backgroundColor: "#004D92"});
			
			carMappingSet();
			pushOfertas();

			// console.group();
			// 	console.log('carMapping = '+carMapping);
			// 	console.log('-new- CARRO DO USUÁRIO = ' + carroUsuario);
			// console.groupEnd();

		});

		function pushOfertas() {

			tagOfertas = data.getElementsByTagName("ofertas")[0];
			tagCarro = tagOfertas.getElementsByTagName("carro")[carMapping];
			idCarro = tagCarro.getAttribute("id-carro");

			foto = tagCarro.getElementsByTagName("img-big")[0].childNodes[0].nodeValue;
			motorizacao = tagCarro.getElementsByTagName("motorizacao")[0].childNodes[0].nodeValue;
			versao = tagCarro.getElementsByTagName("versao")[0].childNodes[0].nodeValue;
			ano = tagCarro.getElementsByTagName("ano")[0].childNodes[0].nodeValue;
			textoDe = tagCarro.getElementsByTagName("texto-de")[0].childNodes[0].nodeValue;
			precoDe = tagCarro.getElementsByTagName("preco-de")[0].childNodes[0].nodeValue;
			textoPor = tagCarro.getElementsByTagName("texto-por")[0].childNodes[0].nodeValue;
			precoPor = tagCarro.getElementsByTagName("preco-por")[0].childNodes[0].nodeValue;
			dotz = tagCarro.getElementsByTagName("dotz")[0].childNodes[0].nodeValue;
			opcionais = tagCarro.getElementsByTagName("opcionais")[0].childNodes[0].nodeValue;
			juridico = tagCarro.getElementsByTagName("juridico")[0].childNodes[0].nodeValue;

			$(".label-nome-carro").text(idCarro);
			$(".label-motor-carro").text(motorizacao);
			$(".label-versao-carro").text(versao);
			$(".label-ano-carro").text(ano);
			$(".label-preco-de").text(textoDe);
			$(".label-preco-de-rs").text(precoDe);
			$(".label-preco-por").text(textoPor);
			$(".label-preco-por-rs").text(precoPor);
			$(".dotz-text").text(dotz);
			$(".label-juridico-carro").text(juridico);

			if (textoDe == "-") {
				$(".label-preco-de").css({display: "none"});
				$(".label-preco-de-rs").css({display: "none"});
			} else {
				$(".label-preco-de").css({display: "block"});
				$(".label-preco-de-rs").css({display: "block"});
			}

			$(".foto-carro").html("<img src="+foto+" alt="+idCarro+" "+motorizacao+" "+versao+" "+ano+">");

			$(".label-opcionais-container").html('');
			opcLength = tagCarro.getElementsByTagName("opcionais")[0].getElementsByTagName("opc").length;
			for (var i = 0; i <= opcLength - 1; i++) {
				opc = tagCarro.getElementsByTagName("opcionais")[0].getElementsByTagName("opc")[i].childNodes[0].nodeValue;
				$(".label-opcionais-container").append('<div class="label-opcionais-carro"><li>'+opc+'</li></div>');
			};


			// groupNameCarro = ('DADOS DO CARRO '+carroUsuario);
			// console.group(groupNameCarro);
			// 	console.log(idCarro);
			// 	console.log(motorizacao);
			// 	console.log(versao);
			// 	console.log(ano);
			// 	console.log(precoDe);
			// 	console.log(precoPor);
			// 	console.log(dotz);
			// 	console.log(opcionais);
			// 	console.log(opc);
			// 	console.log(juridico);
			// console.groupEnd(groupNameCarro);

		}

	});

$(".form-modal").hide();

	$(".cta").click(function() {
		$("#form-append").html('<form onSubmit="return validar2();"  id="form-ofertas" name="form" method="post" action="http://www.grupoocp.com.br/azzurra/"><input type="hidden" name="origem" id="origem" style="width:273px; color:#000" value="Hotsite" /><input type="hidden" name="veiculo" id="veiculo" style="width:273px; color:#000" value="'+carroUsuario+'" /><input type="hidden" name="campanha" id="campanha" style="width:273px; color:#000" value="Jorlan Unificação" /><input type="hidden" name="opcao" id="opcao" style="width:273px; color:#000" value="A" /><input type="hidden" name="linkResposta" id="linkResposta" value="http://jorlan.com.br/novajorlan/contatoenviado.html" /><input type="hidden"  name="codempresa" id="codempresa" name="codempresa" value="4" style=" height:25px; color:#999;"><div class="inputname"><input  type="text" name="nome" id="nome" size="6" maxlenght="6" placeholder="Qual é o seu nome?" style="height:25px; color:#3b1616; background-color: #CE9767"  /></div><div class="inputemail"><input  type="text" name="email" id="email" placeholder="Qual é o seu email?" style=" height:25px; color:#3b1616; background-color: #CE9767"  /></div><div class="inputtel"><input  type="text" name="telefone" class="mask-fone" id="telefone" placeholder="Qual é o seu telefone?" style=" height:25px; color:#3b1616; background-color: #CE9767"/></div><div class="inputtxtarea"><input style=" color:#3b1616; height: 25px; background-color: #CE9767" name="mensagem" id="mensagem" placeholder="Mensagem"  /><div class="inputall"><select name="codempresa" id="codempresa" name="codempresa" style="width: 362px; margin-top: 10px; color:#848484;"><option value="4">Escolha uma concessionária:</option><option value="4">Jorlan Pedro II</option><option value="8">Jorlan Via Expressa</option><option value="2">Jorlan Belvedere</option></select></div><input name="charset" type="hidden" value="iso-8859-1" /><input type="submit" name="enviar" value="QUERO SABER MAIS" class="btn" /></div></form>');
		$(".form-modal").fadeIn();
	});

	$("#fechar, .form-modal-cor").click(function() {
		$(".form-modal").fadeOut();
	});

function carMappingSet() {
	if(carroUsuario == 'cruze')   {carMapping = 0;}
	else if(carroUsuario == 'classic')  {carMapping = 1;}
	else if(carroUsuario == 'onix') {carMapping = 2;}
	else if(carroUsuario == 'prisma') {carMapping = 3;}
	else if(carroUsuario == 'cobalt') {carMapping = 4;}
	else if(carroUsuario == 's10')  {carMapping = 5;}
	else{carroUsuario = 'cruze'}
}

});