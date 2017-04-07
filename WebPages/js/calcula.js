//alert ("deu");
//IMC = peso em kg / (altura em metros * altura em metros)

$( "#texto2" ).hide();



$('#btnCalcula').click(function() {
	var x = $('#idPeso').val();
	var y = $('#idAltura').val() / 100;

	var quadrado = parseFloat(y) * parseFloat(y);
	var result = (parseFloat(x)/ quadrado);
	$('#resultado').val(result);


	if (parseFloat(x) != 0 && parseFloat(x) != undefined && parseFloat(x) != null && parseFloat(y) != 0 && parseFloat(y) != undefined && parseFloat(y) != null){

		console.log (parseFloat(y));
		console.log (parseFloat(x));
		if (result < 18.5 ){
			$('#texto').html('Seu IMC é de '+ result + '<br> <br> Você está abaixo do peso ideal');
			$( "#texto2" ).show();
		} else if (result < 24.9){
			$('#texto').html('Seu IMC é de '+ result + '<br><br> Parabéns — você está em seu peso normal');
			$( "#texto2" ).show();	
		} else if (result < 29.9){
			$('#texto').html('Seu IMC é de '+ result + '<br><br> Você está acima de seu peso (sobrepeso)');
			$( "#texto2" ).show();
		} else if (result < 34.9){
			$('#texto').html('Seu IMC é de '+ result + '<br><br> Obesidade grau I');
			$( "#texto2" ).show();
		} else if (result < 39.9){
			$('#texto').html('Seu IMC é de '+ result + '<br><br> Obesidade grau II');
			$( "#texto2" ).show();
		} else {
			$('#texto').html('Seu IMC é de '+ result + '<br><br> Obesidade grau III');
			$( "#texto2" ).show();
		}
	} else {
		$('#texto').html('Insira seu peso em kg e sua altura em cm');
		$( "#texto2" ).show();
	}

	// $('#imcForm').submit();	
})

$('#btnApagar').click(function(){
	$('#idPeso').val('null');
	$('#idAltura').val('null');
	$('#resultado').val(0);
	$('#texto2').hide();
})
