function calculo(){
	
		var fechaString =document.getElementById("fecha").value;

		var fechaSeparadaString = fechaString.split("/", 3);

		var fechaSeparadaNumber = [];

		//año 0, mes 1, dia 2
			
		for (var i = 0; i <= 2; i++) {
				fechaSeparadaNumber[i] = parseInt(fechaSeparadaString[i]);	
				console.log(fechaSeparadaNumber);
			}	

		

		console.log(fechaString);

		console.log(fechaSeparadaNumber[2]);
		
		/*umDia = new Date(nuevoValor,11,19);*/

		umDia = new Date();

		//ano = umDia.getYear() ; =120
		month =umDia.getMonth()+1;
		dia = umDia.getDate();
		hora = umDia.getHours();
		minutos = umDia.getMinutes();

		ano = umDia.getYear() + 1900;
		
		
		restaAno = ano - fechaSeparadaNumber[0];
		restaMes = month - fechaSeparadaNumber[1];
		restaDia = dia - fechaSeparadaNumber[2];

		console.log(dia);	

		document.writeln("Horário de Greenwich: " +restaAno + " Anos "+restaMes+" meses "+restaDia + " dias ");


	if(hora >= 6 && hora <= 12){
		document.bgColor="white";
		document.fgColor="black";
		document.getElementById('cuerpo').style.fontSize = "30px";

	}

	if(hora > 12 && hora <= 18){
		document.bgColor="yellow";
		document.fgColor="black";
		document.getElementById('cuerpo').style.fontSize = "30px";
	}

	if(hora > 18 && hora <= 24){
		document.bgColor="black";
		document.fgColor="white";
		document.getElementById('cuerpo').style.fontSize = "30px";
	}

	if(hora >= 0  && hora < 6){
		document.bgColor="blue";
		document.fgColor="white";
		document.getElementById('cuerpo').style.fontSize = "30px";
	}				
					



		console.log(hora);

}



