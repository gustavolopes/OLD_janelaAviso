//Declara��o de vari�veis globais
var strTituloGlobalJanelaAviso;
var strCaminhoPadraoArquivosFontesJanelaAviso;
var strCaminhoPadraoArquivosEstilosJanelaAviso;
var strCaminhoPadraoArquivosImagensJanelaAviso;

//Declara��o de constates globais
var cstSufixoPixelJanelaAviso = "px";
var cstElementoPaginaTipoBotaoJanelaAviso = "BUTTON";
var cstElementoPaginaTipoTextoJanelaAviso = "TEXT";
var cstElementoPaginaTipoRadioJanelaAviso = "RADIO";
var cstElementoPaginaTipoCheckboxJanelaAviso = "CHECKBOX";
var cstElementoPaginaTipoSelectJanelaAviso = "SELECT-ONE";
var cstElementoPaginaTipoBotaoSubmitJanelaAviso = "SUBMIT";
var cstVariavelTipoUndefinedJanelaAviso = "UNDEFINED";

function apiJanelaAviso(strNomeObjetoAPI) {
	try {
		//Declara��o de vari�veis
		var objJanelaAviso;
		var objEventoGlobalJanelaAviso;
		var strEscondeRedimensionarJanelaAviso;
		var fltPosicaoInicialTopoJanelaAviso;
		var fltPosicaoInicialEsquerdaJanelaAviso;
		var strStyleAlinhamentoBotoesJanelaAviso;
		var fltAlturaAtualJanelaAviso;
		var fltLarguraAtualJanelaAviso;
		var fltAlturaAtualMaximizarJanelaAviso;
		var fltLarguraAtualMaximizarJanelaAviso;
		var strEstiloVisibilityMinimizarPersonalizadoJanelaAviso;
		var strEstiloVisibilityMaximizarPersonalizadoJanelaAviso;
		
		//Declara��o de constates
		var cstTipoAlertJanelaAviso = "ALERT";
		var cstTipoConfirmJanelaAviso = "CONFIRM";
		var cstTipoJanelaJanelaAviso = "JANELA";
		var cstNomePropriedadeResizableJanelaAviso = "RESIZABLE";
		var cstNomePropriedadeTopJanelaAviso = "TOP";
		var cstNomePropriedadeLeftJanelaAviso = "LEFT";
		var cstNomePropriedadeWidthJanelaAviso = "WIDTH";
		var cstNomePropriedadeHeightJanelaAviso = "HEIGHT";
		var cstNomePropriedadeCenterJanelaAviso = "CENTER";
		var cstModoNormalJanelaAviso = "NORMAL";
		var cstModoMinimizadaJanelaAviso = "MINIMIZADA";
		var cstModoMaximizarJanelaAviso = "MAXIMIZAR";
		var cstNomeAlinhamentoEsquerdaBotoesJanelaAviso = "ESQUERDA";
		var cstNomeAlinhamentoDireitaBotoesJanelaAviso = "DIREITA";
		var cstNomeAlinhamentoCentroBotoesJanelaAviso = "CENTRO";
		
		this.inicializarAPIJanelaAviso = function() {
			//CONFIGUR���ES GERAIS
			/***********************************************************************************************************/
			//Armazena o local onde se encontram os arquivos JavaScript para a utiliza��o da API
			strCaminhoPadraoArquivosFontesJanelaAviso = this.strCaminhoPadraoArquivosFontesJanelaAviso;
			//Armazena o local onde se encontram os arquivos CSS (Estilos) para a utiliza��o da API
			strCaminhoPadraoArquivosEstilosJanelaAviso = this.strCaminhoPadraoArquivosEstilosJanelaAviso;
			//Armazena o local onde se encontram os arquivos Imagens (Fotos, �cones e etc) para a utiliza��o da API
			strCaminhoPadraoArquivosImagensJanelaAviso = this.strCaminhoPadraoArquivosImagensJanelaAviso;
			//Verifica se n�o foi definido o local onde ser� criada a Janela Aviso, ent�o usa-se o local padr�o
			if(typeof(this.objLocalJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.objLocalJanelaAviso == null || this.objLocalJanelaAviso == "") {
				this.objLocalJanelaAviso = document.getElementsByTagName("body")[0];
			}
			//Verifica se n�o foi definida a largura da Janela de Aviso, ent�o usa-se um valor padr�o
			if(typeof(this.fltLarguraJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.fltLarguraJanelaAviso == null || this.fltLarguraJanelaAviso.replace(cstSufixoPixelJanelaAviso,"") == "") {
				this.fltLarguraJanelaAviso = "410";
			}		
			//Verifica se n�o foi definida a altura da Janela de Aviso, ent�o usa-se um valor padr�o
			if(typeof(this.fltAlturaJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.fltAlturaJanelaAviso == null || this.fltAlturaJanelaAviso.replace(cstSufixoPixelJanelaAviso,"") == "") {
				this.fltAlturaJanelaAviso = "125";
			}
			//Verifica se n�o foi informado o caminho para o arquivo de estilo da Janela de Aviso, ent�o o nome padr�o do mesmo
			if(typeof(this.strNomeArquivoEstiloPadraoJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.strNomeArquivoEstiloPadraoJanelaAviso == null || this.strNomeArquivoEstiloPadraoJanelaAviso == "") {
				this.strNomeArquivoEstiloPadraoJanelaAviso = "estiloJanelaAviso.css";
			}
			//Verifica se n�o foi definido para bloquear a p�gina ao fundo
			if(typeof(this.blnBloquearPaginaFundoJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.blnBloquearPaginaFundoJanelaAviso == null) {
				this.blnBloquearPaginaFundoJanelaAviso = false;
			}		
			//Verifica se n�o foi definido o local da p�gina a ser bloqueada, ent�o utiliza-se de um valor padr�o para o local
			if(typeof(this.objLocalPaginaBloquearJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.objLocalPaginaBloquearJanelaAviso == null || this.objLocalPaginaBloquearJanelaAviso == "") {
				this.objLocalPaginaBloquearJanelaAviso = document;
			}
			//Verifica se n�o foi definido o objeto do formul�rio utilizado
			if(typeof(this.objFormularioUtilizadoJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.objFormularioUtilizadoJanelaAviso == null) {
				this.objFormularioUtilizadoJanelaAviso = "";
			}
			//Verifica se n�o foi informado o alinhamento dos bot�es da Janela Aviso
			if(typeof(this.strAlinhamentoBotoesJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.strAlinhamentoBotoesJanelaAviso == null || this.strAlinhamentoBotoesJanelaAviso == "") {
				this.strAlinhamentoBotoesJanelaAviso = "center";
			}
			else {
				switch(this.strAlinhamentoBotoesJanelaAviso.toUpperCase()) {
					case cstNomeAlinhamentoEsquerdaBotoesJanelaAviso:
						this.strAlinhamentoBotoesJanelaAviso = "left";
						break;
					case cstNomeAlinhamentoDireitaBotoesJanelaAviso:
						this.strAlinhamentoBotoesJanelaAviso = "right";
						break;
					case cstNomeAlinhamentoCentroBotoesJanelaAviso:
						this.strAlinhamentoBotoesJanelaAviso = "center";
						break;
					default:
						this.strAlinhamentoBotoesJanelaAviso = this.strAlinhamentoBotoesJanelaAviso.toLowerCase();
						break;
				}
			}				
			/***********************************************************************************************************/
			
			//CONFIGUR���ES ALERT
			/***********************************************************************************************************/
			//Verifica se n�o foi definido um novo nome para o bot�o OK da Janela do tipo ALERT, ent�o ser� usado o padr�o
			if(typeof(this.strNomeBotaoOkAlertJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.strNomeBotaoOkAlertJanelaAviso == null || this.strNomeBotaoOkAlertJanelaAviso == "") {
				this.strNomeBotaoOkAlertJanelaAviso = "OK";				
			}
			//Verifica se n�o foi informado o arquivo de imagem para o �cone da Janela Aviso do tipo ALERT
			if(typeof(this.strNomeArquivoIconeAlertJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.strNomeArquivoIconeAlertJanelaAviso == null || this.strNomeArquivoIconeAlertJanelaAviso == "") {
				this.strNomeArquivoIconeAlertJanelaAviso = "";
			}
			/***********************************************************************************************************/
			
			//CONFIGUR���ES CONFIRM
			/***********************************************************************************************************/
			//Verifica se n�o foi definido um novo nome para o bot�o OK da Janela do tipo CONFIRM, ent�o utiliza-se o nome padr�o
			if(typeof(this.strNomeBotaoOkConfirmJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.strNomeBotaoOkConfirmJanelaAviso == null || this.strNomeBotaoOkConfirmJanelaAviso == "") {
				this.strNomeBotaoOkConfirmJanelaAviso = "OK";
			}
			//Verifica se n�o foi definido um novo nome para o bot�o CANCELAR da Janela do tipo CONFIRM, ent�o utiliza-se o nome padr�o
			if(typeof(this.strNomeBotaoCancelarConfirmJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.strNomeBotaoCancelarConfirmJanelaAviso == null || this.strNomeBotaoCancelarConfirmJanelaAviso == "") {
				this.strNomeBotaoCancelarConfirmJanelaAviso = "Cancelar";
			}
			//Verifica se n�o foi informado o nome do arquivo de imagem para o �cone da Janela Aviso do tipo CONFIRM
			if(typeof(this.strNomeArquivoIconeConfirmJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.strNomeArquivoIconeConfirmJanelaAviso == null || this.strNomeArquivoIconeConfirmJanelaAviso == "") {
				this.strNomeArquivoIconeConfirmJanelaAviso = "";
			}
			/***********************************************************************************************************/
			
			//CONFIGUR���ES JANELA
			/***********************************************************************************************************/
			//Verifica se deve redimensionar a Janela Aviso do tipo janela, o padr�o � sim/true
			if(typeof(this.blnRedimensionarJanelaJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.blnRedimensionarJanelaJanelaAviso == null) {
				this.blnRedimensionarJanelaJanelaAviso = true;	
			}
			//Verifica se n�o foi informado o nome do arquivo de imagem para o �cone da Janela Aviso do tipo JANELA
			if(typeof(this.strNomeArquivoIconeJanelaJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.strNomeArquivoIconeJanelaJanelaAviso == null || this.strNomeArquivoIconeJanelaJanelaAviso == "") {
				this.strNomeArquivoIconeJanelaJanelaAviso = "";
			}
			/***********************************************************************************************************/

			//CONFIGUR���ES PERSONALIZADO
			/***********************************************************************************************************/			
			//Verifica se n�o foi informado o nome do arquivo de imagem para o �cone da Janela Aviso do tipo PERSONALIZADO
			if(typeof(this.strNomeArquivoIconePersonalizadoJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.strNomeArquivoIconePersonalizadoJanelaAviso == null || this.strNomeArquivoIconePersonalizadoJanelaAviso == "") {
				this.strNomeArquivoIconePersonalizadoJanelaAviso = "";
			}  
			//Verifica se foi preenchida a vari�vel que define a exibi��o ou n�o do bot�o de minimizar								
			if(typeof(this.blnExibirBotoaMinimizarPersonalizadoJanelaAviso) != cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.blnExibirBotoaMinimizarPersonalizadoJanelaAviso != null) {
				if(this.blnExibirBotoaMinimizarPersonalizadoJanelaAviso) {
					strEstiloVisibilityMinimizarPersonalizadoJanelaAviso = "style='visibility: show;'";
				}
				else {
					strEstiloVisibilityMinimizarPersonalizadoJanelaAviso = "style='visibility: hidden;'";
				}
			}
			//Verifica se foi preenchida a vari�vel que define a exibi��o ou n�o do bot�o de maximizar
			if(typeof(this.blnExibirBotoaMaximizarPersonalizadoJanelaAviso) != cstVariavelTipoUndefinedJanelaAviso.toLowerCase() || this.blnExibirBotoaMaximizarPersonalizadoJanelaAviso != null) {
				if(this.blnExibirBotoaMaximizarPersonalizadoJanelaAviso) {
					strEstiloVisibilityMaximizarPersonalizadoJanelaAviso = "style='visibility: show;'";
				}
				else {
					strEstiloVisibilityMaximizarPersonalizadoJanelaAviso = "style='visibility: hidden;'";
				}
			}
			/***********************************************************************************************************/
		}
		
	 	this.montaJanelaAviso = function(strNomeTipoJanelaAviso, strTituloJanelaAviso, strConteudoJanelaAviso, strConfiguracoesExtras) {	
	 		try {
				debugger;				
	 			//Chamada da fun��o respons�vel pela inicializa��o das configura��es definidas para a API
	 			this.inicializarAPIJanelaAviso();

	 			//Armazena o tipo atual da Janela Aviso
	 			var strNomeTipoAtualJanelaAviso = strNomeTipoJanelaAviso.toUpperCase();
	 			
	 			//Armazena de forma global o t�tulo da Janela Aviso
	 			strTituloGlobalJanelaAviso = strTituloJanelaAviso;
				
				//Verifica��o para quando o conte�do passado for um objeto
				if(typeof(strConteudoJanelaAviso) == "object") {
					var strTipoElementoPagina = strConteudoJanelaAviso.type;
	        		if(strTipoElementoPagina == cstElementoPaginaTipoBotaoJanelaAviso.toLowerCase() || strTipoElementoPagina == cstElementoPaginaTipoTextoJanelaAviso.toLowerCase() || strTipoElementoPagina == cstElementoPaginaTipoRadioJanelaAviso.toLowerCase() || strTipoElementoPagina == cstElementoPaginaTipoCheckboxJanelaAviso.toLowerCase() || strTipoElementoPagina == cstElementoPaginaTipoBotaoSubmitJanelaAviso.toLowerCase()) {
	        			strConteudoJanelaAviso = strConteudoJanelaAviso.value;
	        		}
	        		else if(strTipoElementoPagina == cstElementoPaginaTipoSelectJanelaAviso.toLowerCase()) {
	        			strConteudoJanelaAviso = strConteudoJanelaAviso.options[strConteudoJanelaAviso.selectedIndex].text;
	        		}
	        		else {
	        			strConteudoJanelaAviso = strConteudoJanelaAviso.innerHTML;
	        		}
	 			}
	 			
	 			if(strNomeTipoAtualJanelaAviso != cstTipoJanelaJanelaAviso) {
	 				this.strFuncoesAExecutar = strConfiguracoesExtras;
					if(this.strAlinhamentoBotoesJanelaAviso.toUpperCase() == cstNomePropriedadeCenterJanelaAviso) {
	 					strStyleAlinhamentoBotoesJanelaAviso = "style='text-align:" + this.strAlinhamentoBotoesJanelaAviso + "; float:right;'";
	 				} 
	 				else {
	 					strStyleAlinhamentoBotoesJanelaAviso = "style='text-align:" + this.strAlinhamentoBotoesJanelaAviso + "; float:" + this.strAlinhamentoBotoesJanelaAviso + ";'";
	 				}
	 			}
	 			else {
 	 				var strURLPagina = strConteudoJanelaAviso;
	 				var strEscondeRedimensionarJanelaAviso = this.blnRedimensionarJanelaJanelaAviso? "" : "style='display: none;'";
	 				
	 				if(strConfiguracoesExtras.indexOf(",") >= 0) {
	 					var arrConfiguracaoJanela = strConfiguracoesExtras.split(",");
	 					for(i = 0; i < arrConfiguracaoJanela.length; i++) {
	 						if(arrConfiguracaoJanela[i].indexOf("=")) {
	 							var arrPropriedadeJanela = arrConfiguracaoJanela[i].split("=");
	 							var strNomePropriedadeAtual = arrPropriedadeJanela[0].toString();
	 							if(strNomePropriedadeAtual.toUpperCase() == cstNomePropriedadeResizableJanelaAviso) {
 									if(arrPropriedadeJanela[1] == "0" || arrPropriedadeJanela[1] == "no") {
 										strEscondeRedimensionarJanelaAviso = "style='display: none;'";
 									}
 									else {
 										strEscondeRedimensionarJanelaAviso = "";
 									}
 								}
 								else if(strNomePropriedadeAtual.toUpperCase() == cstNomePropriedadeTopJanelaAviso) {
 									if(!isNaN(arrPropriedadeJanela[1]) && parseFloat(arrPropriedadeJanela[1]) >= 0) {
										fltPosicaoInicialTopoJanelaAviso = parseFloat(arrPropriedadeJanela[1]);
 									}
 								}
 								else if(strNomePropriedadeAtual.toUpperCase() == cstNomePropriedadeLeftJanelaAviso) {
 									if(!isNaN(arrPropriedadeJanela[1]) && parseFloat(arrPropriedadeJanela[1]) >= 0) {
										fltPosicaoInicialEsquerdaJanelaAviso = parseFloat(arrPropriedadeJanela[1]);
 									}
 								}
 								else if(strNomePropriedadeAtual.toUpperCase() == cstNomePropriedadeWidthJanelaAviso) {
 									if(!isNaN(arrPropriedadeJanela[1]) && parseFloat(arrPropriedadeJanela[1]) >= 0) {
										this.fltLarguraJanelaAviso = parseFloat(arrPropriedadeJanela[1]);
 									}
 								}
 								else if(strNomePropriedadeAtual.toUpperCase() == cstNomePropriedadeHeightJanelaAviso) {
 									if(!isNaN(arrPropriedadeJanela[1]) && parseFloat(arrPropriedadeJanela[1]) >= 0) {
										this.fltAlturaJanelaAviso = parseFloat(arrPropriedadeJanela[1]);
 									}
 								}
		 					}
	 					}
	 				}
	 				else {
						if(strConfiguracoesExtras.indexOf("=") >= 0) {
	 						var arrPropriedadeJanela = strConfiguracoesExtras.split("=");
	 						var strNomePropriedadeAtual = arrPropriedadeJanela[0].toString();
	 						
 							if(strNomePropriedadeAtual.toUpperCase() == cstNomePropriedadeResizableJanelaAviso) {	
 								if(arrPropriedadeJanela[1] == "0" || arrPropriedadeJanela[1] == "no") {
 									strEscondeRedimensionarJanelaAviso = "style='display: none;'";
 								}
 								else {
 									strEscondeRedimensionarJanelaAviso = "";
 								}
 							}
							else if(strNomePropriedadeAtual.toUpperCase() == cstNomePropriedadeTopJanelaAviso) {
								if(!isNaN(arrPropriedadeJanela[1]) && parseFloat(arrPropriedadeJanela[1]) >= 0) {
									fltPosicaoInicialTopoJanelaAviso = parseFloat(arrPropriedadeJanela[1]);
								}
							}
							else if(strNomePropriedadeAtual.toUpperCase() == cstNomePropriedadeLeftJanelaAviso) {
								if(!isNaN(arrPropriedadeJanela[1]) && parseFloat(arrPropriedadeJanela[1]) >= 0) {
									fltPosicaoInicialEsquerdaJanelaAviso = parseFloat(arrPropriedadeJanela[1]);
								}
							}
							else if(strNomePropriedadeAtual.toUpperCase() == cstNomePropriedadeWidthJanelaAviso) {
								if(!isNaN(arrPropriedadeJanela[1]) && parseFloat(arrPropriedadeJanela[1]) >= 0) {
									this.fltLarguraJanelaAviso = parseFloat(arrPropriedadeJanela[1]);
								}
							}
							else if(strNomePropriedadeAtual.toUpperCase() == cstNomePropriedadeHeightJanelaAviso) {
								if(!isNaN(arrPropriedadeJanela[1]) && parseFloat(arrPropriedadeJanela[1]) >= 0) {
									this.fltAlturaJanelaAviso = parseFloat(arrPropriedadeJanela[1]);
								}
							}							
		 				}	 					
	 				}
	 			}
	 			modalJanelaAviso(this.blnBloquearPaginaFundoJanelaAviso, this.objLocalPaginaBloquearJanelaAviso);
	    		
	    		if(!document.getElementById("divJanelaAviso" + strNomeTipoAtualJanelaAviso)) {
	 				objJanelaAviso = document.createElement("div");
					objJanelaAviso.setAttribute("id","divJanelaAviso" + strNomeTipoAtualJanelaAviso);
		  			this.objLocalJanelaAviso.appendChild(objJanelaAviso);
	 			}
	 			else {
	 				objJanelaAviso = document.getElementById("divJanelaAviso" + strNomeTipoAtualJanelaAviso);
	 			}
				objJanelaAviso.style.zIndex = "9999999";
				objJanelaAviso.style.position = "absolute";
				objJanelaAviso.style.display = "block";
				if(document.all) {
					objJanelaAviso.style.filter = "alpha(opacity=100)";
				}
				else {
		   			objJanelaAviso.style.MozOpacity = ((100/100));
		   		}
		   		
		   		//Chamada da fun��o que realiza o include dos estilos para a API
	        	this.includeEstiloJanelaAviso();
				
	        	switch(strNomeTipoAtualJanelaAviso) {
	        		case cstTipoAlertJanelaAviso:
						objJanelaAviso.innerHTML = "<iframe frameborder='0' id='janelaAvisoIframeSobreposicao" + cstTipoAlertJanelaAviso + "' style='width:" + this.fltLarguraJanelaAviso + cstSufixoPixelJanelaAviso + "; height:" + this.fltAlturaJanelaAviso + cstSufixoPixelJanelaAviso + ";'></iframe>" +
													"<table border='0' cellspacing='0' cellpadding='0' id='janelaAviso" + cstTipoAlertJanelaAviso + "' class='janelaAvisoTabela' style='width:" + this.fltLarguraJanelaAviso + cstSufixoPixelJanelaAviso + "; height:" + this.fltAlturaJanelaAviso + cstSufixoPixelJanelaAviso + "; z-index: 9999999; position: absolute;'>" +
			 										"	<tr>" +
													"		<td colspan='5' id='janelaAvisoCabecalho" + cstTipoAlertJanelaAviso + "' class='janelaAvisoCabecalho' modoExibicaoJanelaAviso='normal'>" +
													"			<span id='iconeCabecalhoJanelaAviso" + cstTipoAlertJanelaAviso + "' class='janelaAvisoCabecalhoIcone' onmousedown=\"iniciarMovimentoElementoJanelaAviso(event,'" + objJanelaAviso.id + "');\" onselectstart='return false;'>" + 
													"			</span>" + 
			     									"			<span id='tituloCabecalhoJanelaAviso" + cstTipoAlertJanelaAviso + "' class='janelaAvisoCabecalhoTitulo' onmousedown=\"iniciarMovimentoElementoJanelaAviso(event,'" + objJanelaAviso.id + "');\" onselectstart='return false;'>" + 
			     									"				" + strTituloJanelaAviso + "" +
			     									"			</span>" +
			     									"			<span id='botoesCabecalhoJanelaAviso" + cstTipoAlertJanelaAviso + "' class='janelaAvisoCabecalhoBotoes' onselectstart='return false;'>" +
													"				<input type='image' name='btnFechar' value='Fechar' src='" + strCaminhoPadraoArquivosImagensJanelaAviso + "IconeFechar.gif' title='Fechar' onclick='" + strNomeObjetoAPI + ".fecharJanelaAviso(\"" + cstTipoAlertJanelaAviso + "\");' tabindex='3'>" +
													"			</span>" +
			   										"		</td>" +
			  										"	</tr>" +													
			  										"   <tr>" +
		   											"		<td colspan='5' id='janelaAvisoConteudo' class='janelaAvisoConteudo'>" +
												    "			<span id='janelaAvisoConteudoTexto' class='janelaAvisoTextoAlert'>" + strConteudoJanelaAviso + "</span>" +
												   	"		</td>" +
		  											"	</tr>" +
		  											"	<tr>" +
													"		<td colspan='5' id='janelaAvisoConteudo' class='janelaAvisoConteudo'>" +
													"			<table border='0' cellspacing='0' cellpadding='0' style='width:100%;'>" +
		        									"				<tr>" +
													"					<td id='janelaAvisoConteudoBotoes' class='janelaAvisoConteudoBotoes' " + strStyleAlinhamentoBotoesJanelaAviso + ">" +
													"						<input type='button' name='btnOKAlertJanelaAviso' id='btnOKAlertJanelaAviso' value='" + this.strNomeBotaoOkAlertJanelaAviso + "' onclick='" + strNomeObjetoAPI + ".fecharJanelaAviso(\"" + cstTipoAlertJanelaAviso + "\");' class='inputBotao'>" +											
													"					</td>" +
													"				</tr>" +
		        									"			</table>" +																																							
		   											"		</td>" +
		  											"	</tr>" +	
													"</table>";
						this.redimensionarBotaoJanelaAviso(cstTipoAlertJanelaAviso);
						this.exibirImagemIconeJanelaAviso(this.strNomeArquivoIconeAlertJanelaAviso, cstTipoAlertJanelaAviso);
		        		break;
		        		
		        	case cstTipoConfirmJanelaAviso:
						objJanelaAviso.innerHTML = "<iframe frameborder='0' id='janelaAvisoIframeSobreposicao" + cstTipoConfirmJanelaAviso + "' style='width:" + this.fltLarguraJanelaAviso + cstSufixoPixelJanelaAviso + "; height:" + this.fltAlturaJanelaAviso + cstSufixoPixelJanelaAviso + ";'></iframe>" +
													"<table border='0' cellspacing='0' cellpadding='0' id='janelaAviso" + cstTipoConfirmJanelaAviso + "' class='janelaAvisoTabela' style='width:" + this.fltLarguraJanelaAviso + cstSufixoPixelJanelaAviso + "; height:" + this.fltAlturaJanelaAviso + cstSufixoPixelJanelaAviso + "; z-index: 9999999; position: absolute;'>" +
			 										"	<tr>" +
													"		<td colspan='5' id='janelaAvisoCabecalho" + cstTipoConfirmJanelaAviso + "' class='janelaAvisoCabecalho' modoExibicaoJanelaAviso='normal'>" +
			     									"			<span id='iconeCabecalhoJanelaAviso" + cstTipoConfirmJanelaAviso + "' class='janelaAvisoCabecalhoIcone' onmousedown=\"iniciarMovimentoElementoJanelaAviso(event,'" + objJanelaAviso.id + "');\" onselectstart='return false;'>" + 
													"			</span>" +
			     									"			<span id='tituloCabecalhoJanelaAviso" + cstTipoConfirmJanelaAviso + "' class='janelaAvisoCabecalhoTitulo' onmousedown=\"iniciarMovimentoElementoJanelaAviso(event,'" + objJanelaAviso.id + "');\" onselectstart='return false;'>" + 
			     									"				" + strTituloJanelaAviso + "" +
			     									"			</span>" +
			     									"			<span id='botoesCabecalhoJanelaAviso" + cstTipoConfirmJanelaAviso + "' class='janelaAvisoCabecalhoBotoes' onselectstart='return false;'>" +
													"				<input type='image' name='btnFechar' value='Fechar' src='" + strCaminhoPadraoArquivosImagensJanelaAviso + "IconeFechar.gif' title='Fechar' onclick='" + strNomeObjetoAPI + ".fecharJanelaAviso(\"" + cstTipoConfirmJanelaAviso + "\");' tabindex='3'>" +
													"			</span>" +
			   										"		</td>" +
			  										"	</tr>" +			  										
			  										"   <tr>" +
		   											"		<td colspan='5' id='janelaAvisoConteudo' class='janelaAvisoConteudo'>" +
												    "			<span id='janelaAvisoConteudoTexto' class='janelaAvisoTextoConfirm'>" + strConteudoJanelaAviso + "</span>" +
												   	"		</td>" +
		  											"	</tr>" +
		  											"	<tr>" +
													"		<td colspan='5' id='janelaAvisoConteudo' class='janelaAvisoConteudo'>" +
													"			<table border='0' cellspacing='0' cellpadding='0' style='width:100%;'>" +
		        									"				<tr>" +
													"					<td id='janelaAvisoConteudoBotoes' " + strStyleAlinhamentoBotoesJanelaAviso + ">" +
													"						<input type='button' name='btnOKConfirmJanelaAviso' id='btnOKConfirmJanelaAviso' value='" + this.strNomeBotaoOkConfirmJanelaAviso + "' onclick='" + strNomeObjetoAPI + ".fecharJanelaAviso(\"" + cstTipoConfirmJanelaAviso + "\");' class='inputBotao'>" +											
													"						&nbsp;&nbsp;" +
													"						<input type='button' name='btnCancelarConfirmJanelaAviso' id='btnCancelarConfirmJanelaAviso' value='" + this.strNomeBotaoCancelarConfirmJanelaAviso + "' onclick='" + strNomeObjetoAPI + ".fecharJanelaAviso(\"" + cstTipoConfirmJanelaAviso + "\");' class='inputBotao'>" +																							
													"					</td>" +
													"				</tr>" +
		        									"			</table>" +																																																				
		   											"		</td>" +
		  											"	</tr>" +	
													"</table>";
						this.redimensionarBotaoJanelaAviso(cstTipoConfirmJanelaAviso);
						this.exibirImagemIconeJanelaAviso(this.strNomeArquivoIconeConfirmJanelaAviso, cstTipoConfirmJanelaAviso);
		        		break;
		        			        		
		        	case cstTipoJanelaJanelaAviso:
						objJanelaAviso.innerHTML = "<iframe frameborder='0' id='janelaAvisoIframeSobreposicao" + cstTipoJanelaJanelaAviso + "' style='width:" + this.fltLarguraJanelaAviso + cstSufixoPixelJanelaAviso + "; height:" + this.fltAlturaJanelaAviso + cstSufixoPixelJanelaAviso + ";'></iframe>" +
													"<table border='0' cellspacing='0' cellpadding='0' id='janelaAviso" + cstTipoJanelaJanelaAviso + "' class='janelaAvisoTabela' style='width:" + this.fltLarguraJanelaAviso + cstSufixoPixelJanelaAviso + "; height:" + this.fltAlturaJanelaAviso + cstSufixoPixelJanelaAviso + "; z-index: 9999999; position: absolute;'>" +
			 										"	<tr>" +
													"		<td colspan='5' id='janelaAvisoCabecalho" + cstTipoJanelaJanelaAviso + "' class='janelaAvisoCabecalho' modoExibicaoJanelaAviso='normal'>" +
			     									"			<span id='iconeCabecalhoJanelaAviso" + cstTipoJanelaJanelaAviso + "' class='janelaAvisoCabecalhoIcone' onmousedown=\"iniciarMovimentoElementoJanelaAviso(event,'" + objJanelaAviso.id + "');\" onselectstart='return false;'>" + 
													"			</span>" +
			     									"			<span id='tituloCabecalhoJanelaAviso" + cstTipoJanelaJanelaAviso + "' class='janelaAvisoCabecalhoTitulo' onmousedown=\"iniciarMovimentoElementoJanelaAviso(event,'" + objJanelaAviso.id + "');\" onselectstart='return false;'>" + 
			     									"				" + strTituloJanelaAviso + "" +
			     									"			</span>" +
			     									"			<span id='botoesCabecalhoJanelaAviso" + cstTipoJanelaJanelaAviso + "' class='janelaAvisoCabecalhoBotoes' onselectstart='return false;'>" +
													"				<input type='image' name='btnMinimizar' id='btnMinimizar' value='Minimizar' src='" + strCaminhoPadraoArquivosImagensJanelaAviso + "IconeMinimizar.gif' title='Minimizar' tipo='minimizar' onclick='" + strNomeObjetoAPI + ".minimizarJanelaAviso(\"" + cstTipoJanelaJanelaAviso + "\");' tabindex='1'>" +
													"				<input type='image' name='btnMaximizar' id='btnMaximizar' value='Maximizar' src='" + strCaminhoPadraoArquivosImagensJanelaAviso + "IconeMaximizar.gif' title='Maximizar' tipo='maximizar' onclick='" + strNomeObjetoAPI + ".maximizarJanelaAviso(\"" + cstTipoJanelaJanelaAviso + "\");' tabindex='2' " + strEscondeRedimensionarJanelaAviso + ">" +												
													"				<input type='image' name='btnFechar' value='Fechar' src='" + strCaminhoPadraoArquivosImagensJanelaAviso + "IconeFechar.gif' title='Fechar' onclick='" + strNomeObjetoAPI + ".fecharJanelaAviso(\"" + cstTipoJanelaJanelaAviso + "\");' tabindex='3'>" +
													"			</span>" +
			   										"		</td>" +
			  										"	</tr>" +
			  										"   <tr id='janelaAvisoCorpo" + cstTipoJanelaJanelaAviso + "'>" +
			  										"		<td colspan='5' id='janelaAvisoConteudo' class='janelaAvisoConteudo' style='width: 100%; height: 100%;'>" +
		        									"			<iframe name='" + objJanelaAviso.id + "Iframe' id='" + objJanelaAviso.id + "Iframe' src='" + strURLPagina + "' frameborder='0' width='100%' height='100%' scrolling='yes' onload='document.getElementById(\"informacoesRodapeBarraStatusJanelaAviso" + cstTipoJanelaJanelaAviso + "\").innerHTML=\"Conclu�do\";'></iframe>" +
		        									"		</td>" +
		        									"   </tr>" +
		        									"	<tr id='janelaAvisoRodape" + cstTipoJanelaJanelaAviso + "' class='janelaAvisoRodape'>" +
		        									"		<td id='janelaAvisoRodapeBarraStatus' class='janelaAvisoRodapeBarraStatus' width='100%' colspan='5' onselectstart='return false;'>" +
		        									"			<table border='0' cellspacing='0' cellpadding='0' style='width:100%;'>" +
		        									"				<tr>" +
		        									" 					<td id='iconeRodapeBarraStatusJanelaAviso" + cstTipoJanelaJanelaAviso + "' class='janelaAvisoIconeRodapeBarraStatus'>" +
		        									" 					</td>" +
		        									" 					<td id='informacoesRodapeBarraStatusJanelaAviso" + cstTipoJanelaJanelaAviso + "' class='janelaAvisoInformacoesRodapeBarraStatus'>" +
		        									"						Abrindo p�gina: " + strURLPagina + "" +
		        									" 					</td>" +
		        									" 					<td id='redimensionarIconeRodapeJanelaAviso" + cstTipoJanelaJanelaAviso + "' class='janelaAvisoRedimensionarIconeRodapeBarraStatus' " + strEscondeRedimensionarJanelaAviso +">" +
		        									"						<img src='" + strCaminhoPadraoArquivosImagensJanelaAviso + "IconeRedimensionar.gif' onmousedown=\"" + strNomeObjetoAPI + ".redimensionarJanelaAviso(event, '" + cstTipoJanelaJanelaAviso + "');\" ondragstart='return false;' style='vertical-align: bottom;'>" +
		        									"					</td>" +
		        									"				</tr>" +
		        									"			</table>" +
		        									"		</td>" +
		        									"	</tr>" +
													"</table>";	        									
		        		this.exibirImagemIconeJanelaAviso(this.strNomeArquivoIconeJanelaJanelaAviso, cstTipoJanelaJanelaAviso);
		        		break;
		        		
		        	default:
						objJanelaAviso.innerHTML = "<iframe frameborder='0' id='janelaAvisoIframeSobreposicao' style='width:" + this.fltLarguraJanelaAviso + cstSufixoPixelJanelaAviso + "; height:" + this.fltAlturaJanelaAviso + cstSufixoPixelJanelaAviso + ";'></iframe>" +
													"<table border='0' cellspacing='0' cellpadding='0' id='janelaAviso' class='janelaAvisoTabela' style='width:" + this.fltLarguraJanelaAviso + cstSufixoPixelJanelaAviso + "; height:" + this.fltAlturaJanelaAviso + cstSufixoPixelJanelaAviso + "; z-index: 9999999; position: absolute;'>" +
			 										"	<tr>" +
			   										"		<td colspan='5' id='janelaAvisoCabecalho' class='janelaAvisoCabecalho' modoExibicaoJanelaAviso='normal'>" +
			     									"			<span id='iconeCabecalhoJanelaAviso' class='janelaAvisoCabecalhoIcone' onmousedown=\"iniciarMovimentoElementoJanelaAviso(event,'" + objJanelaAviso.id + "');\" onselectstart='return false;'>" + 
													"			</span>" +
			     									"			<span id='tituloCabecalhoJanelaAviso' class='janelaAvisoCabecalhoTitulo' onmousedown=\"iniciarMovimentoElementoJanelaAviso(event,'" + objJanelaAviso.id + "');\" onselectstart='return false;'>" + 
			     									"				" + strTituloJanelaAviso + "" +
			     									"			</span>" +
			     									"			<span id='botoesCabecalhoJanelaAviso' class='janelaAvisoCabecalhoBotoes' onselectstart='return false;'>" +
													"				<input type='image' name='btnMinimizar' id='btnMinimizar' value='Minimizar' src='" + strCaminhoPadraoArquivosImagensJanelaAviso + "IconeMinimizar.gif' title='Minimizar' tipo='minimizar' onclick='" + strNomeObjetoAPI + ".minimizarJanelaAviso(\"\");' tabindex='1' " + strEstiloVisibilityMinimizarPersonalizadoJanelaAviso + ">" +
													"				<input type='image' name='btnMaximizar' id='btnMaximizar' value='Maximizar' src='" + strCaminhoPadraoArquivosImagensJanelaAviso + "IconeMaximizar.gif' title='Maximizar' tipo='maximizar' onclick='" + strNomeObjetoAPI + ".maximizarJanelaAviso(\"\");' tabindex='2' " + strEstiloVisibilityMaximizarPersonalizadoJanelaAviso + ">" +												
													"				<input type='image' name='btnFechar' value='Fechar' src='" + strCaminhoPadraoArquivosImagensJanelaAviso + "IconeFechar.gif' title='Fechar' onclick='" + strNomeObjetoAPI + ".fecharJanelaAviso(\"\");' tabindex='3'>" +
													"			</span>" +
			   										"		</td>" +
			  										"	</tr>" +
			  										"	<tr id='janelaAvisoCorpo'>" +
			  										"		<td colspan='5' id='janelaAvisoConteudo' class='janelaAvisoConteudo'>" +
			  										"			<div id='janelaAvisoConteudoPersonalizado' class='janelaAvisoConteudoPersonalizado'>" +
			  										"				" + strConteudoJanelaAviso + "" +
			  										"			</div>" +
			  										"		</td>" +
			  										"	</tr>" +
													"</table>";
						this.exibirImagemIconeJanelaAviso(this.strNomeArquivoIconePersonalizadoJanelaAviso, "");
						break;
				}
				
				objJanelaAviso.style.width = parseFloat(this.fltLarguraJanelaAviso) + cstSufixoPixelJanelaAviso;
				objJanelaAviso.style.height = parseFloat(this.fltAlturaJanelaAviso) + cstSufixoPixelJanelaAviso;
				
				if(typeof(fltPosicaoInicialTopoJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase() && typeof(fltPosicaoInicialEsquerdaJanelaAviso) == cstVariavelTipoUndefinedJanelaAviso.toLowerCase()) {
					centralizarJanelaAviso(objJanelaAviso);
				}
				else {
					objJanelaAviso.style.top = fltPosicaoInicialTopoJanelaAviso + cstSufixoPixelJanelaAviso;
					objJanelaAviso.style.left = fltPosicaoInicialEsquerdaJanelaAviso + cstSufixoPixelJanelaAviso;
				}
				
				//Verifica se o tamanho est� de acordo com a sua �rea, caso contr�rio ele ser� ...
				this.verificaTamanhoTextoTituloJanelaAviso(strTituloJanelaAviso, strNomeTipoAtualJanelaAviso);
				
				return objJanelaAviso;
			}
			catch(strErro) {
				switch(strNomeTipoAtualJanelaAviso) {
	        		case cstTipoAlertJanelaAviso:
	        			alert(strConteudoJanelaAviso);
	        			eval(strConfiguracoesExtras);
	        			break;
	        		case cstTipoConfirmJanelaAviso:
	        			confirm(strConteudoJanelaAviso);
	        			eval(strConfiguracoesExtras);
	        			break;
	        		case cstTipoJanelaJanelaAviso:
	        			window.open("" + strURLPagina + "", "objJanelaAviso", "" + strConfiguracoesExtras + ", status=yes, scrollbars=yes, width=" + this.fltLarguraJanelaAviso + cstSufixoPixelJanelaAviso + ", height=" + this.fltAlturaJanelaAviso + cstSufixoPixelJanelaAviso + "");
	        			break;
	        	}
			}
		}
		
		this.includeEstiloJanelaAviso = function() {
			try {
				var objEstiloJanelaAviso = document.createElement("link");
				objEstiloJanelaAviso.setAttribute("rel","stylesheet");
				objEstiloJanelaAviso.setAttribute("type","text/css");
		  		objEstiloJanelaAviso.setAttribute("href", strCaminhoPadraoArquivosEstilosJanelaAviso + this.strNomeArquivoEstiloPadraoJanelaAviso);
		  		try {
		  			document.getElementsByTagName("head")[0].appendChild(objEstiloJanelaAviso);
		  		}
		  		catch(strErro) {
		  			try {
		  				document.getElementsByTagName("body")[0].appendChild(objEstiloJanelaAviso);
		  			}
		  			catch(strErro) {
		  			}	
		  		}
			}
			catch(strErro) {
				var strMsgErro = "Ocorreu um erro com a API Janela de Aviso - includeEstiloJanelaAviso. ";
				strMsgErro = strMsgErro + "Erro: " + strErro.description + " ";
				window.status = strMsgErro;
				return true;				
			}			
		}
		
		this.redimensionarJanelaAviso = function(objEvento, strNomeTipoJanelaAviso) {
			try {
				var objJanelaAviso = document.getElementById("divJanelaAviso" + strNomeTipoJanelaAviso);
				
				objEventoGlobalJanelaAviso = objEvento? objEvento : window.event;
				
				var fltAlturaPadraoJanelaAviso = parseFloat(this.fltAlturaJanelaAviso.replace(cstSufixoPixelJanelaAviso,""));
				var fltLarguraPadraoJanelaAviso = parseFloat(this.fltLarguraJanelaAviso.replace(cstSufixoPixelJanelaAviso,""));
				fltAlturaAtualJanelaAviso = parseFloat(objJanelaAviso.style.height.replace(cstSufixoPixelJanelaAviso,""));
				fltLarguraAtualJanelaAviso = parseFloat(objJanelaAviso.style.width.replace(cstSufixoPixelJanelaAviso,""));
				var arrPosicaoPonteiroMouse = pegarPosicaoPonteiroMouseJanelaAviso(objEventoGlobalJanelaAviso);
				var intMouseXInicial = arrPosicaoPonteiroMouse[0];
				var intMouseYInicial = arrPosicaoPonteiroMouse[1];
				var objLocalEventoRedimensionar;
				
				if(document.all) {
					adicionarEventoJanelaAviso(document, "drag", iniciarRedimensionamentoJanelaAviso, false);
				}
				adicionarEventoJanelaAviso(document, "mousemove", iniciarRedimensionamentoJanelaAviso, false);
				adicionarEventoJanelaAviso(document, "mouseup", pararRedimensionamentoJanelaAviso, false);
				
				function iniciarRedimensionamentoJanelaAviso() {
					arrPosicaoPonteiroMouse = pegarPosicaoPonteiroMouseJanelaAviso(objEventoGlobalJanelaAviso);
					var fltRedimensionaXJanelaAviso = parseFloat(arrPosicaoPonteiroMouse[0] - intMouseXInicial);
					var fltRedimensionaYJanelaAviso = parseFloat(arrPosicaoPonteiroMouse[1] - intMouseYInicial);
					
					/*if(document.getElementById("LocalLarguraAtualJanelaAviso") && document.getElementById("LocalAlturaAtualJanelaAviso")) {
						document.getElementById("LocalLarguraAtualJanelaAviso").value = (fltLarguraAtualJanelaAviso + fltRedimensionaXJanelaAviso) + cstSufixoPixelJanelaAviso;
						document.getElementById("LocalAlturaAtualJanelaAviso").value = (fltAlturaAtualJanelaAviso + fltRedimensionaYJanelaAviso) + cstSufixoPixelJanelaAviso;
					}*/
					
					if( (fltAlturaAtualJanelaAviso + fltRedimensionaYJanelaAviso) >  fltAlturaPadraoJanelaAviso ) {
						//Redimensiona a altura da DIV
						objJanelaAviso.style.height = (fltAlturaAtualJanelaAviso + fltRedimensionaYJanelaAviso) + cstSufixoPixelJanelaAviso;
						//Redimensiona a altura do IFRAME respons�vel pela sobreposi��o de elementos como combobox
						document.getElementById("janelaAvisoIframeSobreposicao" + strNomeTipoJanelaAviso).style.height = (fltAlturaAtualJanelaAviso + fltRedimensionaYJanelaAviso) + cstSufixoPixelJanelaAviso;					
						//Redimensiona a altura da TABELA
						document.getElementById("janelaAviso" + strNomeTipoJanelaAviso).style.height = (fltAlturaAtualJanelaAviso + fltRedimensionaYJanelaAviso) + cstSufixoPixelJanelaAviso;
					}
					if( (fltLarguraAtualJanelaAviso + fltRedimensionaXJanelaAviso) > fltLarguraPadraoJanelaAviso ) {
						//Redimensiona a largura da DIV
						objJanelaAviso.style.width = (fltLarguraAtualJanelaAviso + fltRedimensionaXJanelaAviso) + cstSufixoPixelJanelaAviso;	
						//Redimensiona a largura do IFRAME respons�vel pela sobreposi��o de elementos como combobox
						document.getElementById("janelaAvisoIframeSobreposicao" + strNomeTipoJanelaAviso).style.width = (fltLarguraAtualJanelaAviso + fltRedimensionaXJanelaAviso) + cstSufixoPixelJanelaAviso;					
						//Redimensiona a largura da TABELA
						document.getElementById("janelaAviso" + strNomeTipoJanelaAviso).style.width = (fltLarguraAtualJanelaAviso + fltRedimensionaXJanelaAviso) + cstSufixoPixelJanelaAviso;
					}
				}
				
				function pararRedimensionamentoJanelaAviso() {
					if(document.all) {
						removerEventoJanelaAviso(document, "drag", iniciarRedimensionamentoJanelaAviso, false);
					}
					removerEventoJanelaAviso(document, "mousemove", iniciarRedimensionamentoJanelaAviso, false);
					removerEventoJanelaAviso(document, "mouseup", pararRedimensionamentoJanelaAviso, false);
				}
			}
			catch(strErro) {
				var strMsgErro = "Ocorreu um erro com a API Janela de Aviso - redimensionarJanelaAviso. ";
				strMsgErro = strMsgErro + "Erro: " + strErro.description + " ";
				window.status = strMsgErro;
				return true;				
			}
		}
		
		this.minimizarJanelaAviso = function(strNomeTipoJanelaAviso) {
			try {
				var objJanelaAviso = document.getElementById("divJanelaAviso" + strNomeTipoJanelaAviso);
				var objCabecalhoJanelaAviso = document.getElementById("janelaAvisoCabecalho" + strNomeTipoJanelaAviso);
				var fltAlturaAtualCabecalhoJanelaAviso = parseFloat(objCabecalhoJanelaAviso.offsetHeight);
				var fltLarguraAtualCabecalhoJanelaAviso = parseFloat(objCabecalhoJanelaAviso.offsetWidth);
				var fltLarguraAtualTituloJanelaAviso = parseFloat(document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).offsetWidth);
				if(objCabecalhoJanelaAviso.getAttribute("modoExibicaoJanelaAviso").toUpperCase() == cstModoNormalJanelaAviso) {
					//Armazena as �ltimas dimens�es da Janela Aviso antes de ser minimizada
					fltAlturaAtualJanelaAviso = parseFloat(objJanelaAviso.offsetHeight);
					fltLarguraAtualJanelaAviso  = parseFloat(objJanelaAviso.offsetWidth);
					
					//Armazena a �ltima largura da �rea do t�tulo da Janela Aviso antes de ser minimizada
					fltUltimaLarguraTituloJanelaAviso = parseFloat(document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).offsetWidth);
					
					//Armazena a �ltima largura da �rea do cabe�alho da Janela Aviso antes de ser minimizada
					fltUltimaLarguraCabecalhoJanelaAviso = parseFloat(objCabecalhoJanelaAviso.offsetWidth);
					
					//Esconde o conte�do
					if(document.getElementById("janelaAvisoCorpo" + strNomeTipoJanelaAviso)) {
						document.getElementById("janelaAvisoCorpo" + strNomeTipoJanelaAviso).style.display = "none";
					}
					if(document.getElementById("janelaAvisoRodape" + strNomeTipoJanelaAviso)) {
						document.getElementById("janelaAvisoRodape" + strNomeTipoJanelaAviso).style.display = "none";
					}
					document.getElementById("iconeCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).style.display = "none";
					document.getElementById("botoesCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).style.display = "none";
					
					//Redimensiona a janela para ter a altura do cabecalho e a largura do t�tulo da Janela Aviso
					objJanelaAviso.style.height = fltAlturaAtualCabecalhoJanelaAviso + cstSufixoPixelJanelaAviso;
					objJanelaAviso.style.width = fltLarguraAtualTituloJanelaAviso + cstSufixoPixelJanelaAviso;
					document.getElementById("janelaAviso" + strNomeTipoJanelaAviso).style.height = fltAlturaAtualCabecalhoJanelaAviso + cstSufixoPixelJanelaAviso;
					document.getElementById("janelaAviso" + strNomeTipoJanelaAviso).style.width = fltLarguraAtualTituloJanelaAviso + cstSufixoPixelJanelaAviso;
					document.getElementById("janelaAvisoIframeSobreposicao" + strNomeTipoJanelaAviso).style.height = fltAlturaAtualCabecalhoJanelaAviso + cstSufixoPixelJanelaAviso;
					document.getElementById("janelaAvisoIframeSobreposicao" + strNomeTipoJanelaAviso).style.width = fltLarguraAtualTituloJanelaAviso + cstSufixoPixelJanelaAviso;
					document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).style.width = "100%";
					
					//Reposiciona a janela ao rodap� da p�gina e � esquerda da janela do navegador
					objJanelaAviso.style.position = "absolute";
					objJanelaAviso.style.left = "0" + cstSufixoPixelJanelaAviso;
					document.getElementById("janelaAviso" + strNomeTipoJanelaAviso).style.left = "0" + cstSufixoPixelJanelaAviso;
					document.getElementById("janelaAvisoIframeSobreposicao" + strNomeTipoJanelaAviso).style.left = "0" + cstSufixoPixelJanelaAviso;
					if (typeof(window.innerHeight) == "number") {
						objJanelaAviso.style.top = window.innerHeight - fltAlturaAtualCabecalhoJanelaAviso;
					}
					else {
						if (document.documentElement && document.documentElement.clientHeight) {
							objJanelaAviso.style.top = document.documentElement.clientHeight - fltAlturaAtualCabecalhoJanelaAviso;
						}
						else {
							if (document.body && document.body.clientHeight) {
								objJanelaAviso.style.top = document.body.clientHeight - fltAlturaAtualCabecalhoJanelaAviso;
							}
						}
					}
					if(document.all) {
						objJanelaAviso.style.top = (parseFloat(objJanelaAviso.style.top.replace(cstSufixoPixelJanelaAviso,"")) + document.body.scrollTop) + cstSufixoPixelJanelaAviso;
					}
					else {
						objJanelaAviso.style.top = (parseFloat(objJanelaAviso.style.top.replace(cstSufixoPixelJanelaAviso,"")) + pageYOffset) + cstSufixoPixelJanelaAviso;
					}
					
					//Propriedades da janela minimizada
					//objJanelaAviso.style.clip = "rect(0px, " + fltLarguraAtualTituloJanelaAviso + cstSufixoPixelJanelaAviso, " + fltAlturaAtualCabecalhoJanelaAviso + cstSufixoPixelJanelaAviso, 0px)";
					document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).style.cursor = "pointer";
					document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).onmousedown = null;
					document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).setAttribute("title", "Clique aqui para voltar ao normal");
					objCabecalhoJanelaAviso.setAttribute("modoExibicaoJanelaAviso", "minimizada");
					document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).setAttribute("onclick", strNomeObjetoAPI + ".minimizarJanelaAviso('" + strNomeTipoJanelaAviso + "')");
					if(document.all && document.getElementById) {
						document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso)["onclick"] = new Function(strNomeObjetoAPI + ".minimizarJanelaAviso('" + strNomeTipoJanelaAviso + "')");
					}
					adicionarEventoJanelaAviso(window, "scroll", function() { seguirRolagemJanelaAviso(); }, false);
					
					this.verificaTamanhoTextoTituloJanelaAviso(document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).innerHTML, strNomeTipoJanelaAviso);
				}
				else {
					//Setando novamente o objeto da API
					apiJanelaAviso.prototype.objAPIJanelaAviso = new apiJanelaAviso(strNomeObjetoAPI);
					
					//Exibe conte�do
					if(document.getElementById("janelaAvisoCorpo" + strNomeTipoJanelaAviso)) {
						document.getElementById("janelaAvisoCorpo" + strNomeTipoJanelaAviso).style.display = "";
					}
					if(document.getElementById("janelaAvisoRodape" + strNomeTipoJanelaAviso)) {
						document.getElementById("janelaAvisoRodape" + strNomeTipoJanelaAviso).style.display = "";
					}
					document.getElementById("iconeCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).style.display = "block";
					document.getElementById("botoesCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).style.display = "block";
					
					//Redimensiona a janela para que volte a ter os valores iniciais
					objJanelaAviso.style.height = fltAlturaAtualJanelaAviso;
					objJanelaAviso.style.width = fltLarguraAtualJanelaAviso;
					document.getElementById("janelaAviso" + strNomeTipoJanelaAviso).style.height = fltAlturaAtualJanelaAviso;
					document.getElementById("janelaAviso" + strNomeTipoJanelaAviso).style.width = fltLarguraAtualJanelaAviso;
					document.getElementById("janelaAvisoIframeSobreposicao" + strNomeTipoJanelaAviso).style.height = fltAlturaAtualJanelaAviso;
					document.getElementById("janelaAvisoIframeSobreposicao" + strNomeTipoJanelaAviso).style.width = fltLarguraAtualJanelaAviso;
					//C�lculo para a porcentagem da nova largura da �rea do t�tulo
					var fltValorPorcentagemLarguraTituloJanelaAviso = parseFloat( (fltUltimaLarguraTituloJanelaAviso * 100)/fltUltimaLarguraCabecalhoJanelaAviso );
					document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).style.width = fltValorPorcentagemLarguraTituloJanelaAviso + "%";
					
					//Propriedades da janela
					document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).style.cursor = "move";
					document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).setAttribute("title", "");
					objCabecalhoJanelaAviso.setAttribute("modoExibicaoJanelaAviso", "normal");
					removerEventoJanelaAviso(window, "scroll", function() { seguirRolagemJanelaAviso(); }, false);
					document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).setAttribute("onclick", "");
					if(document.all && document.getElementById) {
						document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso)["onclick"] = null;
					}
					adicionarEventoJanelaAviso(document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso), "mousedown", function(event) { iniciarMovimentoElementoJanelaAviso(event, objJanelaAviso.id) }, false);
					centralizarJanelaAviso(objJanelaAviso);
					
					objAPIJanelaAviso.verificaTamanhoTextoTituloJanelaAviso(document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).innerHTML, strNomeTipoJanelaAviso);
				}
				
				function seguirRolagemJanelaAviso() {
					if(objJanelaAviso) {
						//Verifica se a Janela Aviso est� no modo minimizada para evitar que siga a barra de rolagem quando estive no modo de exibi��o normal
						if(objCabecalhoJanelaAviso.getAttribute("modoExibicaoJanelaAviso").toUpperCase() == cstModoMinimizadaJanelaAviso) {
							if (typeof(window.innerHeight) == "number") {
								objJanelaAviso.style.top = window.innerHeight - objJanelaAviso.offsetHeight;
							}
							else {
								if (document.documentElement && document.documentElement.clientHeight) {
									objJanelaAviso.style.top = document.documentElement.clientHeight - objJanelaAviso.offsetHeight;
								}
								else {
									if (document.body && document.body.clientHeight) {
										objJanelaAviso.style.top = document.body.clientHeight - objJanelaAviso.offsetHeight;
									}
								}
							}
							if(document.all) {
								objJanelaAviso.style.top = (parseFloat(objJanelaAviso.style.top.replace(cstSufixoPixelJanelaAviso,"")) + document.body.scrollTop) + cstSufixoPixelJanelaAviso;
							}
							else {
								objJanelaAviso.style.top = (parseFloat(objJanelaAviso.style.top.replace(cstSufixoPixelJanelaAviso,"")) + pageYOffset) + cstSufixoPixelJanelaAviso;
							}
						}
					}
				}
			}
			catch(strErro) {
				var strMsgErro = "Ocorreu um erro com a API Janela de Aviso - minimizarJanelaAviso. ";
				strMsgErro = strMsgErro + "Erro: " + strErro.description + " ";
				window.status = strMsgErro;
				return true;				
			}
		}
		
		this.maximizarJanelaAviso = function(strNomeTipoJanelaAviso) {
			try {
				var	objJanelaAviso = document.getElementById("divJanelaAviso" + strNomeTipoJanelaAviso);
				var objCentralizarJanelaAviso = new centralizarJanelaAviso(objJanelaAviso);
				var fltLarguraJanelaNavegador = objCentralizarJanelaAviso.pegarLarguraNavegadorJanelaAviso();
				var fltAlturaJanelaNavegador = objCentralizarJanelaAviso.pegarAlturaNavegadorJanelaAviso();
				var objBotaoMaximizarJanelaAviso = document.getElementById("btnMaximizar");
				var cstDiferencialMaximizarJanelaAviso = 10;
				
				if(objBotaoMaximizarJanelaAviso.getAttribute("tipo").toUpperCase() == cstModoMaximizarJanelaAviso) {
					//Armazena as �ltimas dimens�es da Janela Aviso antes de ser maximizada
					fltAlturaAtualJanelaAviso = parseFloat(objJanelaAviso.offsetHeight);
					fltLarguraAtualJanelaAviso = parseFloat(objJanelaAviso.offsetWidth);
					fltAlturaAtualMaximizarJanelaAviso = parseFloat(objJanelaAviso.offsetHeight);
					fltLarguraAtualMaximizarJanelaAviso = parseFloat(objJanelaAviso.offsetWidth);
					
					//Altera o tamanho da DIV
					objJanelaAviso.style.width = parseFloat(fltLarguraJanelaNavegador - cstDiferencialMaximizarJanelaAviso) + cstSufixoPixelJanelaAviso;
					objJanelaAviso.style.height = parseFloat(fltAlturaJanelaNavegador - cstDiferencialMaximizarJanelaAviso) + cstSufixoPixelJanelaAviso;
					
					//Altera o tamanho do IFRAME respons�vel pela sobreposi��o de elementos como combobox
					document.getElementById("janelaAvisoIframeSobreposicao" + strNomeTipoJanelaAviso).style.width = parseFloat(fltLarguraJanelaNavegador - cstDiferencialMaximizarJanelaAviso) + cstSufixoPixelJanelaAviso;
					document.getElementById("janelaAvisoIframeSobreposicao" + strNomeTipoJanelaAviso).style.height = parseFloat(fltAlturaJanelaNavegador - cstDiferencialMaximizarJanelaAviso) + cstSufixoPixelJanelaAviso;
					
					//Altera o tamanho da TABELA
					document.getElementById("janelaAviso" + strNomeTipoJanelaAviso).style.width = parseFloat(fltLarguraJanelaNavegador - cstDiferencialMaximizarJanelaAviso) + cstSufixoPixelJanelaAviso;
					document.getElementById("janelaAviso" + strNomeTipoJanelaAviso).style.height = parseFloat(fltAlturaJanelaNavegador - cstDiferencialMaximizarJanelaAviso) + cstSufixoPixelJanelaAviso;
					
					//Altera os atributos do bot�o maximizar para restaurar
					objBotaoMaximizarJanelaAviso.value = "Restaurar";
					objBotaoMaximizarJanelaAviso.setAttribute("title", "Restaurar")
					objBotaoMaximizarJanelaAviso.setAttribute("tipo", "restaurar");
					objBotaoMaximizarJanelaAviso.setAttribute("src", "" + strCaminhoPadraoArquivosImagensJanelaAviso + "IconeRestaurar.gif");
					
					centralizarJanelaAviso(objJanelaAviso);
					this.verificaTamanhoTextoTituloJanelaAviso(document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).innerHTML, strNomeTipoJanelaAviso);
				}
				else {
					//Altera o tamanho da DIV
					objJanelaAviso.style.width = fltLarguraAtualMaximizarJanelaAviso;
					objJanelaAviso.style.height = fltAlturaAtualMaximizarJanelaAviso;
					
					//Altera o tamanho do IFRAME respons�vel pela sobreposi��o de elementos como combobox
					document.getElementById("janelaAvisoIframeSobreposicao" + strNomeTipoJanelaAviso).style.width = fltLarguraAtualMaximizarJanelaAviso;
					document.getElementById("janelaAvisoIframeSobreposicao" + strNomeTipoJanelaAviso).style.height = fltAlturaAtualMaximizarJanelaAviso;
					
					//Altera o tamanho da TABELA
					document.getElementById("janelaAviso" + strNomeTipoJanelaAviso).style.width = fltLarguraAtualMaximizarJanelaAviso;
					document.getElementById("janelaAviso" + strNomeTipoJanelaAviso).style.height = fltAlturaAtualMaximizarJanelaAviso;				
					
					//Altera os atributos do bot�o restaurar para maximizar
					objBotaoMaximizarJanelaAviso.value = "Maximizar";
					objBotaoMaximizarJanelaAviso.setAttribute("title", "Maximizar")
					objBotaoMaximizarJanelaAviso.setAttribute("tipo", "maximizar");
					objBotaoMaximizarJanelaAviso.setAttribute("src", "" + strCaminhoPadraoArquivosImagensJanelaAviso + "IconeMaximizar.gif");
					
					centralizarJanelaAviso(objJanelaAviso);
					this.verificaTamanhoTextoTituloJanelaAviso(document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso).innerHTML, strNomeTipoJanelaAviso);
				}
			}
			catch(strErro) {
				var strMsgErro = "Ocorreu um erro com a API Janela de Aviso - maximizarJanelaAviso. ";
				strMsgErro = strMsgErro + "Erro: " + strErro.description + " ";
				window.status = strMsgErro;
				return true;				
			}
		}
		
		this.redimensionarBotaoJanelaAviso = function(strNomeTipoJanelaAviso) {
			try {
				var objJanelaAviso = document.getElementById("divJanelaAviso" + strNomeTipoJanelaAviso);
				//Teste comparando o tamanho do texto com o bot�o
				var objTesteTamanhoTextoBotaoJanelaAviso = document.createElement("span");
				objTesteTamanhoTextoBotaoJanelaAviso.setAttribute("id","divTesteTamanhoTextoBotoaoJanelaAviso");
				objTesteTamanhoTextoBotaoJanelaAviso.setAttribute("class","inputBotao");
				objJanelaAviso.appendChild(objTesteTamanhoTextoBotaoJanelaAviso);
				objTesteTamanhoTextoBotaoJanelaAviso.style.borderWidth = "4" + cstSufixoPixelJanelaAviso;
				objTesteTamanhoTextoBotaoJanelaAviso.style.borderStyle = "outset";
				
				switch(strNomeTipoJanelaAviso.toUpperCase()) {
					case cstTipoAlertJanelaAviso:
					//Redimensiona bot�o para Janela Aviso do tipo ALERT
						var objBotaoOKAlertJanelaAviso = document.getElementById("btnOKAlertJanelaAviso");
						objTesteTamanhoTextoBotaoJanelaAviso.innerHTML = objBotaoOKAlertJanelaAviso.value;
		  		  		if( parseFloat(objTesteTamanhoTextoBotaoJanelaAviso.offsetWidth) >= parseFloat(objBotaoOKAlertJanelaAviso.offsetWidth) ) {
					  		if( (parseFloat(objBotaoOKAlertJanelaAviso.offsetWidth) + objTesteTamanhoTextoBotaoJanelaAviso.offsetWidth) <= parseFloat(this.fltLarguraJanelaAviso.replace(cstSufixoPixelJanelaAviso,"")) ) {
					  			objBotaoOKAlertJanelaAviso.style.width = (parseFloat(document.getElementById("btnOKAlertJanelaAviso").offsetWidth) + objTesteTamanhoTextoBotaoJanelaAviso.offsetWidth) + cstSufixoPixelJanelaAviso;
					  		}
					  		else {
					  			alert("A��o inv�lida: a largura atual do bot�o, � maior que a da caixa de mensagem.\nFavor diminuir o texto do bot�o ou aumentar a largura da caixa.");
					  			this.fecharJanelaAviso(cstTipoAlertJanelaAviso);
					  		}
					  	}
					break;
					case cstTipoConfirmJanelaAviso:
					//Redimensiona os bot�es para Janela Aviso do tipo CONFIRM
						var objBotaoOKConfirmJanelaAviso = document.getElementById("btnOKConfirmJanelaAviso");
						var objBotaoCancelarConfirmJanelaAviso = document.getElementById("btnCancelarConfirmJanelaAviso");
						
				  		//Verifica qual o bot�o com maior quantidade de texto para que seja feita a verifica��o com base nele
				  		if(objBotaoOKConfirmJanelaAviso.value.length > objBotaoCancelarConfirmJanelaAviso.value.length) {
				  			var fltLarguraMaiorBotaoConfirmJanelaAviso = parseFloat(objBotaoOKConfirmJanelaAviso.offsetWidth);
				  			objTesteTamanhoTextoBotaoJanelaAviso.innerHTML = objBotaoOKConfirmJanelaAviso.value;
				  		}
				  		else {
				  			var fltLarguraMaiorBotaoConfirmJanelaAviso = parseFloat(objBotaoCancelarConfirmJanelaAviso.offsetWidth);
				  			objTesteTamanhoTextoBotaoJanelaAviso.innerHTML = objBotaoCancelarConfirmJanelaAviso.value;
				  		}
		
	  				  	if(parseFloat(objTesteTamanhoTextoBotaoJanelaAviso.offsetWidth) >= fltLarguraMaiorBotaoConfirmJanelaAviso) {
							if( (fltLarguraMaiorBotaoConfirmJanelaAviso + objTesteTamanhoTextoBotaoJanelaAviso.offsetWidth) <= parseFloat(this.fltLarguraJanelaAviso.replace(cstSufixoPixelJanelaAviso,"")) ) {
						  		objBotaoOKConfirmJanelaAviso.style.width = (fltLarguraMaiorBotaoConfirmJanelaAviso + objTesteTamanhoTextoBotaoJanelaAviso.offsetWidth) + cstSufixoPixelJanelaAviso;
						  		objBotaoCancelarConfirmJanelaAviso.style.width = (fltLarguraMaiorBotaoConfirmJanelaAviso + objTesteTamanhoTextoBotaoJanelaAviso.offsetWidth) + cstSufixoPixelJanelaAviso;
						  	}
						  	else {
					  			alert("A��o inv�lida: a largura atual dos bot�es, � maior que a da caixa de mensagem.\nFavor diminuir o texto dos bot�es ou aumentar a largura da caixa.");
					  			this.fecharJanelaAviso(cstTipoConfirmJanelaAviso);
						  	}
					  	}
					break;
				}
				objJanelaAviso.removeChild(objTesteTamanhoTextoBotaoJanelaAviso);
			}
			catch(strErro) {
				var strMsgErro = "Ocorreu um erro com a API Janela de Aviso - redimensionarBotaoJanelaAviso. ";
				strMsgErro = strMsgErro + "Erro: " + strErro.description + " ";
				window.status = strMsgErro;
				return true;				
			}
		}
		
		this.verificaTamanhoTextoTituloJanelaAviso = function(strTextoTituloJanelaAviso, strNomeTipoJanelaAviso) {
			var objJanelaAviso = document.getElementById("divJanelaAviso" + strNomeTipoJanelaAviso);
			var objTituloJanelaAviso = document.getElementById("tituloCabecalhoJanelaAviso" + strNomeTipoJanelaAviso);
			
			if(objTituloJanelaAviso) {
				var fltTamanhoCampoTituloJanelaAviso = parseFloat(objTituloJanelaAviso.offsetWidth);
				//Teste comparando o tamanho do texto com a �rea do t�tulo
				var objTesteTamanhoTextoTituloJanelaAviso = document.createElement("span");
				objTesteTamanhoTextoTituloJanelaAviso.setAttribute("id","divTesteTamanhoTextoTituloJanelaAviso");
				objTesteTamanhoTextoTituloJanelaAviso.setAttribute("class","janelaAvisoCabecalhoTitulo");
				objJanelaAviso.appendChild(objTesteTamanhoTextoTituloJanelaAviso);
				objTesteTamanhoTextoTituloJanelaAviso.innerHTML = strTextoTituloJanelaAviso;
				if( parseFloat(objTesteTamanhoTextoTituloJanelaAviso.offsetWidth) > fltTamanhoCampoTituloJanelaAviso ) {
					var strTituloOriginalJanelaAviso = strTextoTituloJanelaAviso;
					for(i = 0; i < strTituloOriginalJanelaAviso.length; i++) {
						var strTituloModificadoJanelaAviso = strTituloOriginalJanelaAviso.slice(-strTituloOriginalJanelaAviso.length, -i);
						if(strTituloModificadoJanelaAviso.length > 0) { 
							objTesteTamanhoTextoTituloJanelaAviso.innerHTML = strTituloModificadoJanelaAviso;
							//Verifica se a largura do texto � menor que a largura do campo do t�tulo
							if(parseFloat(objTesteTamanhoTextoTituloJanelaAviso.offsetWidth) < fltTamanhoCampoTituloJanelaAviso) {
								alert("Veja texto atual: " + strTituloModificadoJanelaAviso);
								//var strTrechoSubstituidoTituloJanelaAviso = strTituloModificadoJanelaAviso.substr((strTituloModificadoJanelaAviso.length - 3), 3);
								//strTituloModificadoJanelaAviso = strTituloModificadoJanelaAviso.replace(strTrechoSubstituidoTituloJanelaAviso, "...");
								/*alert("O trecho do t�tulo a ser substituido com o replace: " + strTrechoSubstituidoTituloJanelaAviso);
								alert("Com replace: " + strTituloModificadoJanelaAviso.replace(/strTituloModificadoJanelaAviso.substr((strTituloModificadoJanelaAviso.length - 3), 3)$/gi, "..."));
								alert(strTituloModificadoJanelaAviso);*/
								//objTituloJanelaAviso.innerHTML = strTituloModificadoJanelaAviso;
								break;
							}
						}
					}
				}
				objJanelaAviso.removeChild(objTesteTamanhoTextoTituloJanelaAviso);
			}
		}
		
		this.exibirImagemIconeJanelaAviso = function(strNomeArquivoIconeJanelaAviso, strNomeTipoJanelaAviso) {
			try {
				var objLocalIconeJanelaAviso = document.getElementById("iconeCabecalhoJanelaAviso" + strNomeTipoJanelaAviso);
				if(objLocalIconeJanelaAviso && strNomeArquivoIconeJanelaAviso != "") {
					objLocalIconeJanelaAviso.style.backgroundImage = "url('" + strCaminhoPadraoArquivosImagensJanelaAviso + strNomeArquivoIconeJanelaAviso + "')";
					objLocalIconeJanelaAviso.style.backgroundRepeat = "no-repeat";
					objLocalIconeJanelaAviso.style.backgroundPosition = "top center";
				}
			}
			catch(strErro) {
				var strMsgErro = "Ocorreu um erro com a API Janela de Aviso - exibirImagemIconeJanelaAviso. ";
				strMsgErro = strMsgErro + "Erro: " + strErro.description + " ";
				window.status = strMsgErro;
				return true;				
			}
		}
		
		this.fecharJanelaAviso = function(strNomeTipoJanelaAviso) {
			var objJanelaAviso = document.getElementById("divJanelaAviso" + strNomeTipoJanelaAviso);
			this.objLocalJanelaAviso.removeChild(objJanelaAviso);
			modalJanelaAviso(false, this.objLocalPaginaBloquearJanelaAviso);
			
			//Verifica a vari�vel que armazena as fun��es que devem ser executadas ap�s a Janela de Aviso, como se estivessem em evento JavaScript, 
			//vale lembrar que todas devem ser separadas por ponto e v�rgula(;)
			if(this.strFuncoesAExecutar != "") {
				try {
					eval(this.strFuncoesAExecutar);
				}
				catch(strErro) {
					var strMsgErro = "Ocorreu um erro com a API Janela de Aviso - fecharJanelaAviso. ";
					strMsgErro = strMsgErro + "Erro: " + strErro.description + " ";
					window.status = strMsgErro;
					return true;
				}
			}
		}
	}
	catch(strErro) {
		var strMsgErro = "Ocorreu um erro com a API Janela de Aviso. ";
		strMsgErro = strMsgErro + "Erro: " + strErro.description + " ";
		window.status = strMsgErro;
		return true;
	}
}

//-------------------------------------------------------------------------------------------------------------
//-- Fun��o respons�vel por centralizar a Janela Aviso
function centralizarJanelaAviso(elemento) {
	this.pegarAlturaNavegadorJanelaAviso = function() {
		var alturaJanela = 0;
		if (typeof(window.innerHeight) == "number") {
			alturaJanela = window.innerHeight;
		}
		else {
			if (document.documentElement && document.documentElement.clientHeight) {
				alturaJanela = document.documentElement.clientHeight;
			}
			else {
				if (document.body && document.body.clientHeight) {
					alturaJanela = document.body.clientHeight;
				}
			}
		}
		return alturaJanela;
	}
	
	this.pegarLarguraNavegadorJanelaAviso = function() {
		var larguraJanela = 0;
		if (typeof(window.innerWidth) == "number") {
			larguraJanela = window.innerWidth;
		}
		else {
			if (document.documentElement && document.documentElement.clientWidth) {
	        	larguraJanela = document.documentElement.clientWidth;
			}
			else {
				if (document.body && document.body.clientWidth) {
					larguraJanela = document.body.clientWidth;
	     		}
			}
	  	}
		return larguraJanela;
	}	
	
	if (document.getElementById) {
		var larguraJanela = this.pegarLarguraNavegadorJanelaAviso();
		var alturaJanela = this.pegarAlturaNavegadorJanelaAviso();
		if (larguraJanela > 0 && alturaJanela > 0) {
			//Verifica se o ELEMENTO passado n�o � um objeto
			if(typeof(elemento) != "object") {
				var objElemento = document.getElementById(elemento);
			}
			else {
            	var objElemento = elemento;
			}
			var larguraElemento = objElemento.offsetWidth;
			var alturaElemento = objElemento.offsetHeight;

			if (larguraJanela - larguraElemento > 0 && alturaJanela - alturaElemento > 0) {
				objElemento.style.position = "absolute";
				objElemento.style.left = ((larguraJanela / 2) - (larguraElemento / 2)) + cstSufixoPixelJanelaAviso;
				if(document.all) {
					objElemento.style.top = ((alturaJanela / 2 + (document.body.scrollTop)) - (alturaElemento / 2)) + cstSufixoPixelJanelaAviso;
				}
				else {
					objElemento.style.top = (((alturaJanela / 2) + (pageYOffset)) - (alturaElemento / 2)) + cstSufixoPixelJanelaAviso;
				}
			}
			else if(larguraJanela - larguraElemento > 0) {
				objElemento.style.position = "absolute";
				objElemento.style.left = ((larguraJanela / 2) - (larguraElemento / 2)) + cstSufixoPixelJanelaAviso;
				objElemento.style.top = 0 + cstSufixoPixelJanelaAviso;
			}
			else if(alturaJanela - alturaElemento > 0) {
				objElemento.style.position = "absolute";
				if(document.all) {
					objElemento.style.top = ((alturaJanela / 2 + (document.body.scrollTop)) - (alturaElemento / 2)) + cstSufixoPixelJanelaAviso;
				}
				else {
					objElemento.style.top = (((alturaJanela / 2) + (pageYOffset)) - (alturaElemento / 2)) + cstSufixoPixelJanelaAviso;
				}
				objElemento.style.left = 0 + cstSufixoPixelJanelaAviso;
			}
			else {
				objElemento.style.position = "static";
			}
		}
	}
}
//-- FIM - Fun��o respons�vel por centralizar a Janela Aviso
//-------------------------------------------------------------------------------------------------------------

function adicionarEventoJanelaAviso(objElemento, strTipoEvento, Funcao, blnPropagar) {
	if(document.addEventListener) {
		objElemento.addEventListener(strTipoEvento, Funcao, blnPropagar);
	}
	else if(document.attachEvent) {
		objElemento.attachEvent("on" + strTipoEvento, Funcao);
	}
	else {
		objElemento["on" + strTipoEvento] = Funcao;
	}
}

function removerEventoJanelaAviso(objElemento, strTipoEvento, Funcao, blnPropagar) {
	if(document.removeEventListener) {
		objElemento.removeEventListener(strTipoEvento, Funcao, blnPropagar);
	}
	else if(document.detachEvent) {
		objElemento.detachEvent("on" + strTipoEvento, Funcao);
	}
	else {
		objElemento["on" + strTipoEvento] = null;
	}
}

//-------------------------------------------------------------------------------------------------------------
//-- Scripts para mover a Janela Aviso
var objElementoMovelJanelaAviso; //Armazena o objeto do elemento a ser movimentado
var deltaX, deltaY;
var arrPosicaoPonteiroMouse; //Array com as posi��es X e Y respectivamente do mouse
var objEventoMoverJanelaAviso; //Armazena o evento retornado do elemento de forma global
		
function tratarSelecaoTextoJanelaAviso(objEvento, blnEvitarSelecaoTexto) {
	if(blnEvitarSelecaoTexto) {
		document.ondrag = function () { return false; };
		document.onselectstart = function () { return false; };
	}
	else {
		document.ondrag = function () { return true; };
		document.onselectstart = function () { return true; };		
	}
}

function setarOpacidadeJanelaAviso(objElementoMovelJanelaAviso, strValorOpacidade) {
	if(objElementoMovelJanelaAviso.filters) {
		try {
			objElementoMovelJanelaAviso.filters["alpha"].opacity = strValorOpacidade * 100;
		} 
		catch (strErro) { 
			try {
				objElementoMovelJanelaAviso.style.filter = "alpha(opacity=" + strValorOpacidade * 100 + ")";
			}
			catch(strErro) {
			}
		}
	} 
	else if (objElementoMovelJanelaAviso.style.opacity) {
		try {
			objElementoMovelJanelaAviso.style.opacity = strValorOpacidade;
		}
		catch(strErro) {
			try {
				objElementoMovelJanelaAviso.style.MozOpacity = ((strValorOpacidade/100));
			}
			catch(strErro) {
			}			
		}
	}
}

function pegarPosicaoHorizontalJanelaAviso(objElementoMovelJanelaAviso) {
	return parseInt(objElementoMovelJanelaAviso.style.left);
}

function pegarPosicaoVerticalJanelaAviso(objElementoMovelJanelaAviso) {
	return parseInt(objElementoMovelJanelaAviso.style.top);
}

function setarPosicaoElementoMovelJanelaAviso(objElementoMovelJanelaAviso, valorX, valorY) {
	objElementoMovelJanelaAviso.style.left = valorX + cstSufixoPixelJanelaAviso;
	objElementoMovelJanelaAviso.style.top = valorY + cstSufixoPixelJanelaAviso;
}

function iniciarMovimentoElementoJanelaAviso(objEventoElemento, idElemento) {
	objEventoMoverJanelaAviso = objEventoElemento? objEventoElemento : window.event;
	objElementoMovelJanelaAviso = document.getElementById(idElemento);
	setarOpacidadeJanelaAviso(objElementoMovelJanelaAviso, 0.50);
	arrPosicaoPonteiroMouse = pegarPosicaoPonteiroMouseJanelaAviso(objEventoMoverJanelaAviso);
	deltaX = arrPosicaoPonteiroMouse[0] - pegarPosicaoHorizontalJanelaAviso(objElementoMovelJanelaAviso);
	deltaY = arrPosicaoPonteiroMouse[1] - pegarPosicaoVerticalJanelaAviso(objElementoMovelJanelaAviso);
	if(document.all) {
		adicionarEventoJanelaAviso(document, "drag", moverElementoJanelaAviso, false);
	}
	adicionarEventoJanelaAviso(document, "mousemove", moverElementoJanelaAviso, false);
	adicionarEventoJanelaAviso(document, "mouseup", soltarElementoJanelaAviso, false);
}

function moverElementoJanelaAviso(objEventoMoverJanelaAviso) {
	tratarSelecaoTextoJanelaAviso(objEventoMoverJanelaAviso, true);
	arrPosicaoPonteiroMouse = pegarPosicaoPonteiroMouseJanelaAviso(objEventoMoverJanelaAviso);
	setarPosicaoElementoMovelJanelaAviso(objElementoMovelJanelaAviso, arrPosicaoPonteiroMouse[0] - deltaX, arrPosicaoPonteiroMouse[1] - deltaY);
	evitarPropagacaoEventoMoverJanelaAviso(objEventoMoverJanelaAviso);
}

function soltarElementoJanelaAviso(objEventoMoverJanelaAviso) {
	arrPosicaoPonteiroMouse = pegarPosicaoPonteiroMouseJanelaAviso(objEventoMoverJanelaAviso);
	setarOpacidadeJanelaAviso(objElementoMovelJanelaAviso, 1);
	if(document.all) {
		removerEventoJanelaAviso(document, "drag", moverElementoJanelaAviso, false);
	}
	removerEventoJanelaAviso(document, "mousemove", moverElementoJanelaAviso, false);
	removerEventoJanelaAviso(document, "mouseup", soltarElementoJanelaAviso, false);
	evitarPropagacaoEventoMoverJanelaAviso(objEventoMoverJanelaAviso);
	tratarSelecaoTextoJanelaAviso(objEventoMoverJanelaAviso, false);
}

function pegarPosicaoPonteiroMouseJanelaAviso(objEvento) {
 	if (document.all) {
  		mouseX = event.clientX + document.body.scrollLeft;
  		mouseY = event.clientY + document.body.scrollTop;
 	} 
 	else {
    	mouseX = objEvento.pageX;
    	mouseY = objEvento.pageY;
   	}
   	return [mouseX, mouseY];
}

function evitarPropagacaoEventoMoverJanelaAviso(objEvento) {
	if(objEvento.stopPropagation) {
		objEvento.stopPropagation();
		objEvento.preventDefault();
	}
	else if(objEvento.cancelBubble) {
		objEvento.cancelBubble = true;
		objEvento.returnValue = false;
	}
}
//-- FIM - Scripts para mover a Janela Aviso
//-------------------------------------------------------------------------------------------------------------

function modalJanelaAviso(blnBloquear, objLocalBloqueado) {
	try {
		//Verifica se a DIV que bloqueia a p�gina, ainda n�o foi criada
		if(!document.getElementById("divModalJanelaAviso")) {
			objBloqueiaPagina = document.createElement("div");
			objBloqueiaPagina.setAttribute("id","divModalJanelaAviso");
	  		try {
	  			window.document.getElementsByTagName("body")[0].appendChild(objBloqueiaPagina);
	  		} 
	  		catch(strErro) {
	  			try {
	  				window.top.document.getElementsByTagName("body")[0].appendChild(objBloqueiaPagina);
	  			}
	  			catch(strErro) {
	  				try {
	  					window.document.parentDocument.appendChild(objBloqueiaPagina);
	  				}
	  				catch(strErro) {
	  					try {
	  						document.getElementsByTagName("body")[0].appendChild(objBloqueiaPagina);
	  					}
	  					catch(strErro) {
	  						try {
		  						parent.appendChild(objBloqueiaPagina);
		  					}
		  					catch(strErro) {
		  					}
	  					}
	  				}	
	  			}		  			
	  		}
		   	objBloqueiaPagina.style.zIndex = "999999";
			objBloqueiaPagina.style.position = "absolute";
			objBloqueiaPagina.style.width = "100%";
			objBloqueiaPagina.style.height = "100%";
			objBloqueiaPagina.style.top = "0" + cstSufixoPixelJanelaAviso;
			objBloqueiaPagina.style.left = "0" + cstSufixoPixelJanelaAviso;
			objBloqueiaPagina.style.backgroundColor = "#000000";
			if(document.all) {
				objBloqueiaPagina.style.filter = "alpha(opacity=40)";
				objBloqueiaPagina.style.top = document.body.scrollTop;
				window.onscroll = function() {
					if(objBloqueiaPagina) {
						objBloqueiaPagina.style.top = document.body.scrollTop;
					}
				}
			}
			else {
		   		objBloqueiaPagina.style.MozOpacity = ((30/100));
		   		objBloqueiaPagina.style.position = "fixed!important"; //Estilo respons�vel pela fixa��o do fundo em Mozilla FireFox
		   	}
		   	objBloqueiaPagina.innerHTML = "<iframe src='" + strCaminhoPadraoArquivosFontesJanelaAviso + "JanelaAvisoPaginaIframeCorFundo.html' frameborder='0' id='modalIframeSobreposicao' width='100%' height='100%'></iframe>";
		}
		else {
			objBloqueiaPagina = document.getElementById("divModalJanelaAviso");	
		}
		
		if(!blnBloquear) {
			manipularBotaoDireitoJanelaAviso(false, objLocalBloqueado);
			objBloqueiaPagina.style.display = "none";
			try {
	  			window.document.getElementsByTagName("body")[0].removeChild(objBloqueiaPagina);
	  		} 
	  		catch(strErro) {
	  			try {
	  				window.top.document.getElementsByTagName("body")[0].removeChild(objBloqueiaPagina);
	  			}
	  			catch(strErro) {
					try {
	  					window.document.parentDocument.removeChild(objBloqueiaPagina);
	  				}
	  				catch(strErro) {	  					
	  					try {
	  						document.getElementsByTagName("body")[0].removeChild(objBloqueiaPagina);
	  					}
	  					catch(strErro) {
	  						try {
		  						parent.removeChild(objBloqueiaPagina);
		  					}
		  					catch(strErro) {
		  					}	  					
	  					}
	  				}	
	  			}		  			
	  		}		
		}
		else {
			manipularBotaoDireitoJanelaAviso(true, objLocalBloqueado);
		}
		
		objLink = objLocalBloqueado.getElementsByTagName("a");
		if(objLink || typeof(objLink) != cstVariavelTipoUndefinedJanelaAviso.toLowerCase()) {
			if(objLink.length > 0) {
				for (y = 0; y < objLink.length; y++) {
		        	objLink[y].disabled = blnBloquear;
				}
			}
		}	
		objInputbox = objLocalBloqueado.getElementsByTagName("input");
		if(objInputbox || typeof(objInputbox) != cstVariavelTipoUndefinedJanelaAviso.toLowerCase()) {
			if(objInputbox.length > 0) {
				for (z = 0; z < objInputbox.length; z++) {
		        	objInputbox[z].disabled = blnBloquear;
		        }
		    }
		}
		objCombobox = objLocalBloqueado.getElementsByTagName("select");
		if(objCombobox || typeof(objCombobox) != cstVariavelTipoUndefinedJanelaAviso.toLowerCase()) {
	    	if(objCombobox.length > 0) {
	    		for (i = 0; i < objCombobox.length; i++) {
	        		objCombobox[i].disabled = blnBloquear;
	        	}
	    	}
		}
	}
	catch(strErro) {
		var strMsgErro = "Ocorreu um erro com a fun��o modalJanelaAviso. ";
		strMsgErro = strMsgErro + "Erro: " + strErro.description + " ";
		window.status = strMsgErro;
		return true;
	}
}

function manipularBotaoDireitoJanelaAviso(blnDesabilitarBotaoDireito, objLocalAfetado) {
	if(blnDesabilitarBotaoDireito) {
		if (objLocalAfetado.attachEvent) {
			objLocalAfetado.attachEvent("oncontextmenu", cancelarEventoDesencadeadoJanelaAviso);
		}
		else if(objLocalAfetado.addEventListener) {
			objLocalAfetado.addEventListener("contextmenu", cancelarEventoDesencadeadoJanelaAviso, false);
		}
		else {
			objLocalAfetado["oncontextmenu"] = cancelarEventoDesencadeadoJanelaAviso;	
		}
	}
	else {
		if (objLocalAfetado.attachEvent) {
			objLocalAfetado.detachEvent("oncontextmenu", cancelarEventoDesencadeadoJanelaAviso);
		}
		else if(objLocalAfetado.addEventListener) {
			objLocalAfetado.removeEventListener("contextmenu", cancelarEventoDesencadeadoJanelaAviso, false);
		}
		else {
			objLocalAfetado["oncontextmenu"] = null;	
		}
	}
}

function cancelarEventoDesencadeadoJanelaAviso(objEventoDesencadeado) {
	if (document.all) {
		return false;
	}
	else {
		if(objEventoDesencadeado.cancelable) {
			objEventoDesencadeado.cancelBubble = true;
			objEventoDesencadeado.preventDefault();
		}
		objEventoDesencadeado.stopPropagation();
	}
}

function cancelandoEventoDesencadeadoJanelaAviso(objLocalDesencadeado, objEventoDesencadeado) {
	try {
		var objEventoDesencadeado = objEventoDesencadeado? objEventoDesencadeado : window.event;
		var strEventoDesencadeado = objEventoDesencadeado.type.toString();
		if(objLocalDesencadeado) {
			if (objLocalDesencadeado.attachEvent) {
				objLocalDesencadeado.attachEvent(strEventoDesencadeado, cancelarEventoDesencadeadoJanelaAviso);
			}
			else if(objLocalDesencadeado.addEventListener) {
				objLocalDesencadeado.addEventListener(strEventoDesencadeado, cancelarEventoDesencadeadoJanelaAviso, false);
			}
			else {
				objLocalDesencadeado[strEventoDesencadeado] = cancelarEventoDesencadeadoJanelaAviso;	
			}
		}
	}
	catch(strErro) {
		var strMsgErro = "Ocorreu um erro com a fun��o cancelandoEventoDesencadeadoJanelaAviso. ";
		strMsgErro = strMsgErro + "Erro: " + strErro.description + " ";
		window.status = strMsgErro;
		return true;
	}	
}

function CapturarEventosJanelaAviso(arrEventosCapturados) {
	var intContadorEventos;
	for (intContadorEventos = 0; intContadorEventos < arrEventosCapturados.length; intContadorEventos++) {	
		document.addEventListener(arrEventosCapturados[intContadorEventos], function (objEventoCapturado) {window.event = objEventoCapturado;}, true);
	}
}
if (document.addEventListener) {
	CapturarEventosJanelaAviso(["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","keyup","keydown","keypress"]);
}