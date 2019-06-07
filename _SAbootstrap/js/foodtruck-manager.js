function cadastroFoodTruck(){
			if (typeof(Storage)!=="undefined") {
				if(localStorage.cont){
					localStorage.cont=Number(localStorage.cont)+1;
				}else{
					localStorage.cont = 1;
				}
			var cad = document.getElementById('nomeFoodTruck').value+";"+document.getElementById('codigo').value+";"+document.getElementsByClassName('tipoProduto').value+";"+document.getElementById('nomeResponsavel').value+";"+document.getElementById('telefoneResponsavel').value+";"+document.getElementById('emailLogin').value+";"+document.getElementById('dataEntrada').value;

			var cad_json = JSON.stringify(cad);
			localStorage.setItem("cad"+localStorage.cont, cad_json);

			var form = document.getElementById("fconf");
			form.style.display="none";
			
			var span = document.getElementById("mensagem");
			span.innerHTML = "Dados salvos!";

			}else{
			}
		}


		function mostraCadastro(){
		var form=document.getElementById("fconf");
		form.style.display="block"; 
		}


		function lerCadastro(){
			var cad_json = localStorage.getItem("cad");
			var cad = JSON.parse(cad_json);
			var span = document.getElementById("mensagem");
			span.innerHTML = "Não consigo fazer esse trem funcionar";
		}

		
		function apagarCadastro(){
			localStorage.removeItem("cad");
			var span = document.getElementById("mensagem");
			span.innerHTML = "Também não consigo :(";		
		}
	