
		
		var valor, x, y, z, numero;
		var myArray = [];

		x=1;
		y=1;
		z=1;

		var fruits = ["Banana", "Orange", "Apple", "Mango"];
		fruits.push("Lemon");

		

		  function factorial(quadro){
			
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
	
	console.log("Circulo");
	//metodo
	function imprimir(){
		
		//console.log("c: raio = " + c2.r + " (" + this.x + "," + c1.y + ")");
		//document.write("");

		props = "";
		for (z in c1){
			//props+= x + " = " + c2[x] + "\n";
			//props+= x +"\n";
			console.log(x+"="+c1[z]);
		}

		 //console.log(props);
	}


	//constructor
	function Circulo(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;

//		this.imprime = imprimir;
	}


	c1 = new Circulo(0, 3, 4 );
	//c1.imprime();


	c2 = new Circulo(1, 0, 6 );

	
	//c2.imprime();


/*---------------------------------------------*/

function Cliente(nome, email, telefone){
	this.nome = nome;
	this.email = email;
	this.telefone = telefone;
}


function show(objeto) {

props = "";

for (idx in objeto) {
	props+= idx + " = " + objeto[idx] + "\n";
}
return props;
}

cli1 = new Cliente("maria", "mar@", 46546546);
cli2 = new Cliente("pedro", "pedr@", 132321321);
cli3 = new Cliente("juan", "jua@", 798798798);
cli4 = new Cliente("jose", "jose@", 1111111);
cli5 = new Cliente("Marco", "marco@", 22222222);


