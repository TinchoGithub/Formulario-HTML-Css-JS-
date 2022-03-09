
const seleccionarSeguro = () => {
	var tipoSeguro = document.getElementById("tipoSeguro");
	var seguroElegido = tipoSeguro.value;

	document.getElementById("seguroSeleccionado").innerText =`${seguroElegido}`;
}
	
		
