// JavaScript Document


// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "Comprometimento <br> Inovação <br> Ética profissional <br> Superação dos resultados <br> Melhoria contínua <br>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var about_tags = document.getElementsByClassName("single-tab");

for (var a= 0; a < about_tags.length; a++) {
	
	about_tags[a].onclick = function()  {
		
		// aqui é onde fica o segundo looping... olha depois no arquivo txt  aula 31 que vc vai entender melhor  
		for ( var b=0; b < about_tags.length; b++)  {
			about_tags[b].style['background-color'] = unselected_color;
			about_tags[b].style['font-weight'] = "normal";
			
			}
		
		// nesta parte ele acessou usando [] pq o nome é composto --> background-color..... não podendo usar o ponto assim --> style.right
		this.style['background-color'] = selected_color;
		this.style['font-weight'] = "bold";
		
	
		var selecionado = this.innerHTML;
		document.getElementById("box-text").innerHTML = aboutUs[selecionado]; 
		
		};
		
	
	
	}