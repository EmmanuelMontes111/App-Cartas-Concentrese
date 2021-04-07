//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes38=Array("Media/Numeros/carta38.png","Media/38.jpg");
	var imagenVisible38=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar38(img)
	{
		imagenVisible38++;
		if(imagenVisible38>=imagenes38.length)
		{
			imagenVisible38=0;
		}
		img.src=imagenes38[imagenVisible38];
		cargarSiguienteImagen36();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen36()
	{
		if((imagenVisible38+1)<imagenes38.length)
		{
			console.log(imagenVisible38+1);
			var imgTmp38=new Image();
			imgTmp38.src=imagenes38[imagenVisible38+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
