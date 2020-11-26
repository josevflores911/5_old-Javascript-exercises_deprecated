for (i = -40; i < 100; i = i + 10) {

fahrenheit = ( i * ( 9/5 )) - 32;

document.write("<p>fahr: " + fahrenheit  +"</p>");
}

/*---------------Ejercicio 2-------------------*/
	


	var grupo = [10,100,190,230,200];

	function compararNumeros(b,a) {
	  return a - b;
	}

	document.write('Ordenada com compararNumeros:', grupo.sort(compararNumeros));

	mayor = grupo[0];

	
/*-------barras-------*/


	for(var i=0; i < 5; i++){

		if(i==0){
			document.write("<p>["+ i +"]" + "*".repeat(20)  +"</p>");			
		}else{

			barra = (grupo[i] * 20)/grupo[0];
			x = Math.round(barra); 
			//document.write("<p>" + x );

			document.write("<p>["+ i +"]" + "*".repeat(x)  +"</p>");		
		}
	}




	/*valor = prompt("Digite um número");
	numero = parseInt(valor);
	
	grupo[i]=numero;*/

	//document.write("<p>" + mayor );

/*
for(i=0;i<5;i++){


	document.write("<p>array: " + grupo[i]);


}
*/

//var valor1, valor2, valor3, valor4, valor5;
//var grupo = ['valor1','valor2','valor3','valor4','valor5']







