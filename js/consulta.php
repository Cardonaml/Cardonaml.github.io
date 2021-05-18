<?php
$nombre = $_POST['inputNameField']; // el valor dentro de las '' debe coincidir con el valor de name de cada input
$correo = $_POST['inputEmailField'];
$mensaje = $_POST['mensaje'];

$destino = "monicardona1013@gmail.com"; // la direcci�n de correo a d�nde quiero que llegue el mail

$asunto = "Consulta enviada desde Landing Page Monica"; // t�tulo/asunto del mail

$cuerpo = "Nombre: ".$nombre."\r\n". "Correo: ".$correo."\r\n"."Mensaje: ".$mensaje;

$remitente = "From: $nombre <$correo>"; // direcci�n de respuesta

mail ($destino, $asunto, $cuerpo, $remitente); // Para probarlo deben subirlo a un servidor
?>