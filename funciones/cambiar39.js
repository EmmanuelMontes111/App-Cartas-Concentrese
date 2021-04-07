//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes39=Array("Media/Numeros/carta39.png","Media/39.jpg");
	var imagenVisible39=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar39(img)
	{
		imagenVisible39++;
		if(imagenVisible39>=imagenes39.length)
		{
			imagenVisible39=0;
		}
		img.src=imagenes39[imagenVisible39];
		cargarSiguienteImagen36();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen36()
	{
		if((imagenVisible39+1)<imagenes39.length)
		{
			console.log(imagenVisible39+1);
			var imgTmp39=new Image();
			imgTmp39.src=imagenes39[imagenVisible39+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
