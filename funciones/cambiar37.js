//-------------------------PARA LA SEGUNDA CARTA-------------------------------

	
	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes37=Array("Media/Numeros/carta37.png","Media/37.jpg");
	var imagenVisible37=0;
 
	var carta = document.getElementById("carta");
	// Función que cambia la imagen actual por la siguiente
	function cambiar37(img)
	{
		imagenVisible37++;
		if(imagenVisible37>=imagenes37.length)
		{
			imagenVisible37=0;
		}
		img.src=imagenes37[imagenVisible37];
		cargarSiguienteImagen36();

		carta.play();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen36()
	{
		if((imagenVisible37+1)<imagenes37.length)
		{
			console.log(imagenVisible37+1);
			var imgTmp37=new Image();
			imgTmp37.src=imagenes37[imagenVisible37+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
