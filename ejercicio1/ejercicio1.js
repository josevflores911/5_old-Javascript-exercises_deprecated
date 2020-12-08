autor = "Cyrano de Bergerac";
document.write("<b> <p>Hoje:" + document.lastModified + "</b>");
document.write("<p>Autor: " + autor);


/*******************************************************/
function soma(a, b) {
	return a + b;
}

resultado = soma(5, 6);
document.write("<P>A soma de 5 e 6 é " + resultado);


/****************************************/

var nome;
var email;
var num = 0;

function escrever(quadro) {
	info = "Usuário número " + (++num) + "\n";
	info += "Nome: " + nome + "\n";
	info += "E-mail: " + email + "\n\n";
	quadro.value += info;
	alert(info);
}


















/*
//-------------------------------------------------
var name, email, count;

count = 1;

//muchas funciones no son recomendables
function GrabarName(){


	name = prompt("Please enter your name:");
  
}

function GrabarEmail(){

	email = prompt("Please enter your email:");

}


function Cadastrar(){

	
	document.getElementById("textoName").innerHTML = name;
	document.getElementById("textoEmail").innerHTML = email;

	count++;

	document.getElementById("textoNumber").innerHTML = count;

}

	<FORM>
	<INPUT TYPE="button"

		onclick = "GrabarName()"
		VALUE="nombre">

		<INPUT TYPE="button"

		onclick = "GrabarEmail()"
		VALUE="email">
	

	

	<INPUT TYPE="button"

		onclick = "Cadastrar()"
		VALUE="Cadastrar">
	</FORM>






	<div id="textoNumber"></div>
	<div id="textoName"></div>
	<div id="textoEmail"></div>


	//////////////////////////////////////////////////

	<table id="myTable" class="table table-borderless table-striped table-earning">
  <thead>
    <tr>
      <th>date</th>
      <th>file name</th>
    </tr>
  </thead>
  <tbody id="testBody"></tbody>
</table>
<script>

  const items1 = [
    { date: "10/17/2018", name: "john doe" },
    { date: "10/18/2018", name: "jane doe" },
    { date: "10/18/2018", name: "jane doe" },
  ];
  const items2 = [
    { date: "10/17/2019", name: "john doe" },
    
  ];
  const items3 = [
    { date: "10/17/2019", name: "Maria" },
    
  ];


  function loadTableData(items) {
    const table = document.getElementById("testBody");
    items.forEach( item => {
      let row = table.insertRow();
      
      let date = row.insertCell(0);
      date.innerHTML = item.date;
      
      let name = row.insertCell(1);
      name.innerHTML = item.name;
    });
  }

  loadTableData(items1);
  loadTableData(items2);
  loadTableData(items3);
  loadTableData([]);
</script>*/