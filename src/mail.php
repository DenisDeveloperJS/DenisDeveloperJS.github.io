<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$telegram = $_POST['telegram'];
$count_toy = $_POST['count-toy'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$count_toy = htmlspecialchars($count_toy);

$name = urldecode($name);
$phone = urldecode($phone);
$count_toy = trim($count_toy);

$from = "denisdevelop4604@gmail.com";
$subject = "Заявка с Tud Toy";
$message = "Имя отправителя: <b>{$name}</b><br> Tелефон отправителя: <b> {$phone} </b><br> telegram отправителя: <b>{$telegram} </b><br> Количество: <b>{$count_toy} </b>";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Create email headers
$headers .= 'From: ' . $from . "\r\n" .
    'Reply-To: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($from, $subject, $message, $headers);
