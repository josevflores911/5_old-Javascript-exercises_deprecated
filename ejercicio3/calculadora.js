function init(){

	var operadorA;
	var operadorB;
	var operacion;


	var resultado = document.getElementById("resultado");
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var zero = document.getElementById('zero');
	var suma = document.getElementById('suma');
	var resta = document.getElementById('resta');
	var multiplicacion = document.getElementById('multiplicacion');
	var division = document.getElementById('division');
	var reset = document.getElementById('reset');


	var temporal=0;
	

	uno.onclick = function(e){
		resultado.textContent = resultado.textContent + "1";
		
	}

	dos.onclick = function(e){
		resultado.textContent = resultado.textContent + "2";
		
	}

	tres.onclick = function(e){
		resultado.textContent = resultado.textContent + "3";
	}

	cuatro.onclick = function(e){
		resultado.textContent = resultado.textContent + "4";
	}

	cinco.onclick = function(e){
		resultado.textContent = resultado.textContent + "5";
	}

	seis.onclick = function(e){
		resultado.textContent = resultado.textContent + "6";
	}

	siete.onclick = function(e){
		resultado.textContent = resultado.textContent + "7";
	}

	ocho.onclick = function(e){
		resultado.textContent = resultado.textContent + "8";
	}

	nueve.onclick = function(e){
		resultado.textContent = resultado.textContent + "9";
	}

	zero.onclick = function(e){
		resultado.textContent = resultado.textContent + "0";
	}

	

	//boas praticas

	reset.onclick = function(e){
		resetear();
	}

	suma.onclick = function(e){
		operadorA = resultado.textContent;
		operacion = "+";
		limpiar();

	}

	resta.onclick = function(e){
		operadorA = resultado.textContent;
		operacion = "-";
		limpiar();

	}

	multiplicacion.onclick = function(e){
		operadorA = resultado.textContent;
		operacion = "*";
		limpiar();

	}

	division.onclick = function(e){
		operadorA = resultado.textContent;
		operacion = "/";
		limpiar();

	}

	igual.onclick = function(e){
		operadorB = resultado.textContent;
		resolver();
	}

	function limpiar(){
		resultado.textContent = "";

	}

	function resetear(){
		resultado.textContent = "";
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
		}
		resetear();
		resultado.textContent = res;
	}




}

















/*
reset.onclick = function(e){

		resultado.textContent="";
		temporal = 0;
		operadorA = 0;
		operadorB = 0;
		operacion = "";
		
		console.log(resultado.textContent);
		console.log(temporal);

		
	}

	suma.onclick = function(e){

		if(resultado.textContent==""){
			resultado.textContent=0;
		}

		temporal +=  parseInt(resultado.textContent);

		console.log(typeof parseInt(resultado.textContent));
		console.log(temporal);

		resultado.textContent = "";
	}

	resta.onclick = function(e){

		if(resultado.textContent==""){
			resultado.textContent=0;
		}

		temporal -=  parseInt(resultado.textContent);

		console.log(typeof parseInt(resultado.textContent));
		console.log(temporal);

		resultado.textContent = "";
	}

	multiplicacion.onclick = function(e){

		operadorA = resultado.textContent;
		operacion = "*";
		resultado.textContent = "";
	}

	division.onclick = function(e){

		operadorA = resultado.textContent;
		operacion = "/";
		resultado.textContent = "";		
	}

	igual.onclick = function(e){
		operadorB = resultado.textContent;
		var res = 0; //creo q es temporal
		switch(operacion){
			case "*":
				console.log(operadorA);
				console.log(operadorB);
				res = parseFloat(operadorA) + parseFloat(operadorB);
				console.log(res);
				console.log("multi");
				console.log(typeof res);
				break;

			case "/":

				res = parseFloat(operadorA) + parseFloat(operadorB);
				console.log(res);
				console.log("divi");
				break;

		}


	}
*/