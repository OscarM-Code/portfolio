<?php

$a = $_GET["lastname"];
$b = $_GET["firstname"];
$c = $_GET["mail"];
$d = $_GET["tel"];
$e = $_GET["content"];

$to = "oscarmillot23@gmail.com";
$subject = "Nom : $a  Prénom : $b";
$message = $e;
$headers = "De : $c" . "\r\n" .
"Téléphone: $d";

if(filter_var($c, FILTER_VALIDATE_EMAIL))
{
    if(mail($to, $subject, $message, $headers))
    {
        echo "Votre mail a bien été envoyé !";
    } else {
        echo "Votre mail n'a pas pu être envoyé";
    }
} else {
    echo "Mail pas bon";
}


?>