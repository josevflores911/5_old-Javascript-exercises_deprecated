/*import { uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, 
		zero, punto, pi, suma, resta, multiplicacion, division,
		percent, raiz, tangente, seno, coseno, power, logaritmo
		factorial, erase, resultado} from './variables.js';
*/


function init(){

	var operadorA;;
	var operadorB;
	var operacion;

	

		/*---- numeros-----*/

	var uno = document.getElementById('uno');
	var dos = document.getElementById("dos");
	var tres = document.getElementById("tres");
	var cuatro = document.getElementById("cuatro");
	var cinco = document.getElementById("cinco");
	var seis = document.getElementById("seis");
	var siete = document.getElementById("siete");
	var ocho = document.getElementById("ocho");
	var nueve = document.getElementById("nueve");
	var zero = document.getElementById("zero");

	var punto = document.getElementById("punto");
	var pi = document.getElementById("pi");

	/*---operadores----*/

	var suma = document.getElementById("suma");
	var resta = document.getElementById("resta");
	var multiplicacion = document.getElementById("multiplicacion");
	var division = document.getElementById("division");
	var percent = document.getElementById("percent");
	var raiz = document.getElementById("raiz");
	var tangente = document.getElementById("tangente");
	var seno = document.getElementById("seno");
	var coseno = document.getElementById("coseno");
	var power = document.getElementById("power");
	var logaritmo = document.getElementById("logaritmo");
	var factorial = document.getElementById("factorial");


	var erase = document.getElementById("erase");
	var resultado = document.getElementById("mirror");
	var igual = document.getElementById("resultado");

	/*----cambio de forma----*/

	var regular = document.getElementById("regular");
	var cientific = document.getElementById("cientific");

	//import { limpiar, resetear, resolver, operadorA, operadorB, operacion, res } from './funciones.js'

	/*---------------funciones de numeros--------*/

	uno.onclick = function(e){
		if(resultado.value == "+" || resultado.value == "-" || resultado.value == "*" || resultado.value == "/" || resultado.value == "^"){
			resultado.value="";
			resultado.value = resultado.value + "1";
		}else{
			resultado.value = resultado.value + "1";
		}
		
		
	}

	dos.onclick = function(e){
		if(resultado.value == "+" || resultado.value == "-" || resultado.value == "*" || resultado.value == "/" || resultado.value == "^"){
			resultado.value="";
			resultado.value = resultado.value + "2";
		}else{
			resultado.value = resultado.value + "2";
		}
		
	}

	tres.onclick = function(e){
		if(resultado.value == "+" || resultado.value == "-" || resultado.value == "*" || resultado.value == "/" || resultado.value == "^"){
			resultado.value="";
			resultado.value = resultado.value + "3";
		}else{
			resultado.value = resultado.value + "3";
		}
		
	}

	cuatro.onclick = function(e){
		if(resultado.value == "+" || resultado.value == "-" || resultado.value == "*" || resultado.value == "/" || resultado.value == "^"){
			resultado.value="";
			resultado.value = resultado.value + "4";
		}else{
			resultado.value = resultado.value + "4";
		}
		
	}
	cinco.onclick = function(e){
		if(resultado.value == "+" || resultado.value == "-" || resultado.value == "*" || resultado.value == "/" || resultado.value == "^"){
			resultado.value="";
			resultado.value = resultado.value + "5";
		}else{
			resultado.value = resultado.value + "5";
		}
		
	}
	seis.onclick = function(e){
		if(resultado.value == "+" || resultado.value == "-" || resultado.value == "*" || resultado.value == "/" || resultado.value == "^"){
			resultado.value="";
			resultado.value = resultado.value + "6";
		}else{
			resultado.value = resultado.value + "6";
		}
		
	}
	siete.onclick = function(e){
		if(resultado.value == "+" || resultado.value == "-" || resultado.value == "*" || resultado.value == "/" || resultado.value == "^"){
			resultado.value="";
			resultado.value = resultado.value + "7";
		}else{
			resultado.value = resultado.value + "7";
		}
		
	}
	ocho.onclick = function(e){
		if(resultado.value == "+" || resultado.value == "-" || resultado.value == "*" || resultado.value == "/" || resultado.value == "^"){
			resultado.value="";
			resultado.value = resultado.value + "8";
		}else{
			resultado.value = resultado.value + "8";
		}
		
	}
	nueve.onclick = function(e){
		if(resultado.value == "+" || resultado.value == "-" || resultado.value == "*" || resultado.value == "/" || resultado.value == "^"){
			resultado.value="";
			resultado.value = resultado.value + "9";
		}else{
			resultado.value = resultado.value + "9";
		}
		
	}

	zero.onclick = function(e){
		if(resultado.value == "+" || resultado.value == "-" || resultado.value == "*" || resultado.value == "/" || resultado.value == "^"){
			resultado.value="";
			resultado.value = resultado.value + "0";
		}else{
			resultado.value = resultado.value + "0";
		}
		
	}

	pi.onclick = function(e){
		if(resultado.value == "+" || resultado.value == "-" || resultado.value == "*" || resultado.value == "/" || resultado.value == "^"){
			resultado.value="";
			resultado.value = Math.PI;
		}else{
			resultado.value = Math.PI;
		}
		
	}

	punto.onclick = function(e){
	
	/*ESTA SECCION EVALUA SI HAY ALGUN PUNTO EN EL ESPACIO, AL CONVERTIR EL TEXTO EN UN ARRAY MAPEARLO, SI NO LO ENCUENTRA AGREGA SOLO 1*/
		if (resultado.value!=""){
			var evaluador1;
			evaluador1=resultado.value.split("");

			function check(point) {
	 			return point == ".";
			}

			evaluador2 = evaluador1.some(check);

			if( !evaluador2 ){
				resultado.value = resultado.value + ".";
				console.log(evaluador2);
			}
		}


		if(resultado.value == ""){
			resultado.value = resultado.value + "0.";

		}
		
		
	}

	/*----operaciones----*/

	suma.onclick = function(e){
		operadorA = resultado.value;
		operacion = "+";
		resultado.value = "+";
		
		
	}	

	resta.onclick = function(e){
		operadorA = resultado.value;
		operacion = "-";
		resultado.value = "-";
		
	}

	multiplicacion.onclick = function(e){
		operadorA = resultado.value;
		operacion = "*";
		resultado.value = "*";
		
	}

	division.onclick = function(e){
		operadorA = resultado.value;
		operacion = "/";
		resultado.value = "/";
	}

	/*------otros operadores--------*/

	power.onclick = function(e){
		operadorA = resultado.value;
		operacion = "^";
		resultado.value = "^";


	}


	seno.onclick = function(e){
		operadorA = resultado.value;
		operacion = "sen()";
		resultado.value = "sen("+operadorA+")";
	}

	coseno.onclick = function(e){
		operadorA = resultado.value;
		operacion = "cos()";
		resultado.value = "cos("+operadorA+")";
	}

	tangente.onclick = function(e){
		operadorA = resultado.value;
		operacion = "tan()";
		resultado.value = "tan("+operadorA+")";
	}

	raiz.onclick = function(e){
		operadorA = resultado.value;
		operacion = "sqrt()";
		resultado.value = "sqrt("+operadorA+")";
	}

	
	factorial.onclick = function(e){
		operadorA = resultado.value;
		operacion = "n!";
		resultado.value = operadorA+"!";
	}

	logaritmo.onclick = function(e){
		operadorA = resultado.value;
		operacion = "ln()";
		resultado.value = "ln("+operadorA+")";
	}

	percent.onclick = function(e){
		evaluador3=parseFloat(resultado.value);
		evaluador3 = evaluador3 / 100;
		resultado.value = evaluador3;
	}



/*-------clear everything CE--------*/

	erase.onclick = function(e){
		resetear();
		
	}

/*-------resultado--------*/
	igual.onclick = function(e){
		operadorB = resultado.value;
		resolver();
	}

	/**-----funciones------*/




function limpiar(){
	resultado.value = "";
}

function resetear(){
		resultado.value = "";
		operadorA = 0;
		operadorB = 0;
		operacion = "";
}

function resolver(){
	 var res = 0;
		switch(operacion){
			case "+":
				res = parseFloat(operadorA)+parseFloat(operadorB);
				break;
			case "-":
				res = parseFloat(operadorA)-parseFloat(operadorB);
				break;
			case "*":
				res = parseFloat(operadorA)*parseFloat(operadorB);
				break;
			case "/":
				res = parseFloat(operadorA)/parseFloat(operadorB);
				break;
			case "sen()":
				/*se tiene que hacer la conversion de grados a radianes*/
				res = parseFloat(operadorA);
				res = Math.sin(res * Math.PI / 180)
				console.log(res);
				break;
			case "cos()":
				res = parseFloat(operadorA);
				res = Math.cos(res * Math.PI / 180)
				console.log(res);
				
				break;
			case "tan()":
				res = parseFloat(operadorA);
				res = Math.tan(res * Math.PI / 180)
				console.log(res);
				break;
			case "sqrt()":
				res = parseFloat(operadorA);
				res = Math.sqrt(res);
				console.log(res);
				break;
			

			case "^":
						
				res= Math.pow(parseFloat(operadorA), parseFloat(operadorB));
				console.log(operadorB);
				break;
			case "n!":
				res = parseFloat(operadorA);
				res = Math.sqrt(res);
				console.log(res);
				break;
			case "ln()":
				res = parseFloat(operadorA);
				res = Math.log(res);
				console.log(res);
				break;
			
		}
		resetear();
		resultado.value = res;

}


	
}