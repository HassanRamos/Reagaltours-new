<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $fullName = $_POST['your-name'];
    $email = $_POST['your-email'];
    $phoneNumber = $_POST['tel-922'];
    $subject = $_POST['your-subject'];
    $messageContent = $_POST['your-message'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer;

    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = 'rbx107.truehost.cloud';
    $mail->SMTPAuth = true;
    $mail->Username = 'empowered360@qwixai.com';
    $mail->Password = 'Hassanku190$';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Construct email message
    $message = "Dear Regal Tours You have message from: \n\n";
    $message .= "Full Name: " . $fullName . "\n";
    $message .= "Email Address: " . $email . "\n";
    $message .= "Phone Number: " . $phoneNumber . "\n";
    $message .= "Subject: " . $subject . "\n";
    $message .= "Message:\n" . $messageContent . "\n\n";

    // Set email content
    $mail->setFrom('empowered360@qwixai.com', 'Empowered 360');
    $mail->addAddress('ramoshassan42@gmail.com'); // Replace with your email address
    $mail->Subject = "Message from Visitor";
    $mail->Body = $message;

    // Send email
    if ($mail->send()) {
        echo 'Message has been sent successfully!';
    } else {
        echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
    }
}
?>
