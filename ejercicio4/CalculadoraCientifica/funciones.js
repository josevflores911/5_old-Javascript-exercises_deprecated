var operadorA;;
var operadorB;
var operacion;
var res;

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
	 res = 0;
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

export { limpiar, resetear, resolver, operadorA, operadorB, operacion, res };