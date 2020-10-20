<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь

$message = $_POST['message'];


// Формирование самого письма
$title = "Новое обращение с сайта Universal";
$body = "
<h2>Добавлен новый комментарий!</h2>
<b>Комментарий:</b> $message<br><br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
     $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'zipzaper35@gmail.com'; // Логин на почте
    $mail->Password   = 'ebobo123'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('zipzaper35@gmail.com', 'Timothy Popovskiy'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('pronenko.artem@mail.ru');  
    


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}


// Отображение результата
header('Location: message.html');
?>
