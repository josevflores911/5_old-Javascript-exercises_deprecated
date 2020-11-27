
		
		var valor, x, y, z, numero;
		var myArray = [];

		x=1;
		y=1;
		z=1;

		var fruits = ["Banana", "Orange", "Apple", "Mango"];
		fruits.push("Lemon");

		

		  function factorial(quadro,x){
			
			numero = parseInt(valor);	
			
			quadro.value = "";
			for (var i = 0; i < numero; i++) {
			
				//x = x * (valor-i);
				x *= (numero - i);
				quadro.value += x + "=>" + (numero-i) + "\n";


				myArray[i] = x;					
				//array
				if (i == (numero-1)){
					x=1;
					numero=1;
			
				}
			
			}
			
			console.log(myArray);			
						
		}


		

		function combinatoria (quadro,param = 3){
			
			numero = parseInt(valor);	
			
			for (var i = 0; i < numero; i++) {
				x *= (numero - i);
			}

			for (var i = 0; i < (numero-param); i++) {
				z *= ((numero - param) - i);
			}


			for (var i = 0; i < param; i++) {
				y *= (param - i);
			}

			console.log(x);
			console.log(y);
			console.log(z);
		}

/*----------------------------------------*/
	