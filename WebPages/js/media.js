$('#btnOk').click(function(){
	var n1= $('#nota1').val();
	var n2= $('#nota2').val();
	var n3= $('#nota3	').val();
	var result = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
	console.log (result);
	$('#resultado').val(result);
});


$('#btnApagar').click(function(){
	$('#nota1').val('null');
	$('#nota2').val('null');
	$('#nota3').val(null);
	$('#resultado').val(null);
});