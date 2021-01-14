var word = "HolaQueHace";

var distance = word.length;

var separate = word.split("");

var borrar=0;

var almacen = []; 

var mayor = separate.length;

var union;

var salida=0;

function rolling(){

	for (var i = 0; i<=separate.length; ++i) {
			

		almacen[mayor - i]  = separate[i];

		
		console.log(almacen[mayor - i]);

		union = almacen.join("");
		document.getElementById("loop").placeholder = union;
		

		if(i==separate.length){
				
			console.log(union);

			rollingback();
		}
	}



}


function rollingback(){

	for (var i = 0; i<=almacen.length; ++i) {
		separate[mayor - i]  = almacen[i];

		console.log(separate[mayor - i]);

		union = separate.join("");
		document.getElementById("loop").placeholder = union;
		


		if(i==almacen.length){

			if (salida<3){
				
				++salida;
				console.log(salida);

				console.log(union);

				rolling();
			}
		}
	}


}


/*------------------------------------------------------------------------*/


//se uinicia la variable 
var variable1;

//accion que se ejecuta al seleccionar el elemento que posse la accion inverter con
//con el argumento quadro  -> this.form.caja2 = quadro
function inverter(quadro){
	
//tomma el valor segun el id en el documento en curso	
	variable1 = document.getElementById("caja1").value;

//convierte un elemento en arreglo segun la regla indicada entre las comillas
	contrario = variable1.split("");

//invierte los elementos de un arreglo
	mix = contrario.reverse(); 

//convierte un arreglo en un valor unico con el elemento entre las comillas
	mixed = mix.join("");
//imprime en el cuadro de la derecha
	quadro.value +=mixed;

//imprime en consola
	console.log(contrario);

}


/*
var viejo = 0;
var nuevo = 0;


function move(){


	var id = setInterval(frame, 2000);

	function frame(){
		++nuevo;
		
		console.log(nuevo);

		
		

	}
}

*/
/*














/*


console.log("hi");

	var str ="Hello World";
	var res;

	var myVar;


function myFunction() {
  myVar = setInterval(rolling, 2000);
}

function rolling(){

	console.log(str.length);

	for (var i = 0; i <= str.length ; i++) {
		
		
			res = str.substring(0, i);

			document.getElementById("loop").value = res;

			//console.log(i)
			//console.log(res);	
		
	}
	
}



*/

