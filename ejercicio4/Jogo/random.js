y = Math.round( ( Math.random() ) * 100 );

	function gerarNumero(){

		var ingreso = document.getElementById("try");

		var boton = document.getElementById("send");

		var show = document.getElementById("show");

		var contador = 0;

		
		
		console.log(y);

		
		boton.onclick = function(e){

			var x = parseInt(ingreso.value);
			
			document.getElementById("show").innerHTML = (contador+1) + "° Intento";

			if( contador<4 ){

				console.log(show.value);

				if ( x == y ){
				document.getElementById("show").innerHTML = "YOU DID IT!!"
				
				contador=0;
				y = Math.round( ( Math.random() ) * 100 );
				console.log(y);
				}else{
					++contador;
					console.log("wrong answer");
					console.log(contador);
				}

			}else{
				document.getElementById("show").innerHTML = "YOU LOOSE!!"
				
				contador = 0;
				y = Math.round( ( Math.random() ) * 100 );
				console.log(y);
			}		
		}

		restart.onclick = function(e){
			contador = 0;
			y = Math.round( ( Math.random() ) * 100 );
			console.log(y);
			document.getElementById("show").innerHTML = "GO AGAIN!!"
		}

	}