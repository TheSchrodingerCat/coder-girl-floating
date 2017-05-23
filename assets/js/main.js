//Para cambiar mensaje

document.getElementById("inscrip").addEventListener("click",cambiaMensaje);

function cambiaMensaje(){
	var mensaje = document.getElementById("mensaje");
	var mensajeOculto = document.getElementById("mensaje-oculto");

	mensaje.classList.toggle("nothing");
	mensajeOculto.classList.toggle("nothing");
}


//para invertir los float

document.getElementById("hackathon").addEventListener("click",invierte);

function invierte(){
	var foto = document.getElementById("photo-hack");
	var info = document.getElementById("info");

	foto.classList.toggle("change");
	info.classList.toggle("change");
}


//para validar formulario

document.getElementById("enviar").addEventListener("click",validate);

function validate(){

	var nameValidate = (/^[A-Z][a-z]{3,19}\s[A-Z][a-z]{3,19}$/).test(document.getElementById("in-name").value);
	var mailValidate = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(document.getElementById("in-email").value);
	var asuntoValidate = "";//(/^[a-zA-Z0-9\s,¿?¡!.:;=]{1,19}$/).test(document.getElementById("in-asunto").value);
	var messageValidate = (/^[a-zA-Z0-9\s,¿?¡!.:;=]{1,100}$/).test(document.getElementById("in-msg").value);

	if (!nameValidate || !mailValidate || !asuntoValidate || !messageValidate){
		alert("¡ERROR!\nLos datos o el mensaje no están escritos en el formato correcto. Por favor, revise su ingreso nuevamente.");
	} else {
		alert("Datos ingresados con éxito.\n¡PRONTO NOS CONTACTAREMOS CONTIGO!");
	}

	/*if (!nameValidate){
		alert("Formato de nombre no válido. Ingrese nuevamente.");
	} else {
		if (!mailValidate){
			alert("Email inválido. Ingrese nuevamente.");
		} else {
			if (asuntoValidate){
				alert("Debe incluír un asunto.");
			} else {
				if (!messageValidate){
					alert("El mensaje debe tener máximo 100 caracteres.");
				} else {
					alert("Datos ingresados con éxito.\n¡PRONTO NOS CONTACTAREMOS CONTIGO!");
				}
			}
		}
	}*/
}

