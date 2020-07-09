
var operador1 = document.getElementById("operacao1");

operador1.onclick =  function(valor1, valor2) {
	var valor1 = document.getElementById("valor1").value;
	var valor2 = document.getElementById("valor2").value;
	var soma = parseInt(valor1) + parseInt(valor2);

	alert(soma);
	$('.resultado').value(soma);
};

var operador2 = document.getElementById("operacao2");

operador2.onclick =  function(valor1, valor2) {
	var valor1 = document.getElementById("valor1").value;
	var valor2 = document.getElementById("valor2").value;
	var subtrai = parseInt(valor1) - parseInt(valor2);

	alert(subtrai);
};

var operador3 = document.getElementById("operacao3");

operador3.onclick =  function(valor1, valor2) {
	var valor1 = document.getElementById("valor1").value;
	var valor2 = document.getElementById("valor2").value;
	var multiplica = parseInt(valor1) * parseInt(valor2);

	alert(multiplica);
};

var operador4 = document.getElementById("operacao4");

operador4.onclick =  function(valor1, valor2) {
	var valor1 = document.getElementById("valor1").value;
	var valor2 = document.getElementById("valor2").value;
	var divide = parseInt(valor1) / parseInt(valor2);

	alert(divide);
};