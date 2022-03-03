
function seleccionarSeguro(){
	let tipoSeguro = document.getElementById("tipoSeguro");
	let seguroElegido = tipoSeguro.value;

	document.getElementById("seguroSeleccionado").innerText =`${seguroElegido}`;
}
		
