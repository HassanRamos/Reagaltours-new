<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $fullName = $_POST['fullname'];
    $nationality = $_POST['nationality'];
    $noOfAdults = $_POST['adults'];
    $noOfChildren = $_POST['children'];
    $noOfInfants = $_POST['infants'];
    $destinationCountry = $_POST['destination'];
    $nextOfKinName = $_POST['next_of_kin_name'];
    $nextOfKinEmail = $_POST['next_of_kin_email'];
    $airlineUsed = $_POST['airline_used'];
    $typeOfCover = $_POST['type_of_cover'];
    $company = $_POST['company'];
    $amount = $_POST['amount'];
    $message = $_POST['your-message'];

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
    $emailSubject = "Insurance Application Request for the following info:";
    $emailMessage = "Dear Regal Tours,\n\n";
    $emailMessage .= "You have received an insurance application request with the following details:\n\n";
    $emailMessage .= "Full Names: " . $fullName . "\n";
    $emailMessage .= "Nationality: " . $nationality . "\n";
    $emailMessage .= "Number of Adults: " . $noOfAdults . "\n";
    $emailMessage .= "Number of Children: " . $noOfChildren . "\n";
    $emailMessage .= "Number of Infants: " . $noOfInfants . "\n";
    $emailMessage .= "Destination Country: " . $destinationCountry . "\n";
    $emailMessage .= "Next Of Kin Name: " . $nextOfKinName . "\n";
    $emailMessage .= "Next Of Kin Email: " . $nextOfKinEmail . "\n";
    $emailMessage .= "Airline Used: " . $airlineUsed . "\n";
    $emailMessage .= "Type Of Cover: " . $typeOfCover . "\n";
    $emailMessage .= "Insurance Company: " . $company . "\n";
    $emailMessage .= "Amount: " . $amount . "\n";
    $emailMessage .= "Additional Message: " . $message . "\n\n";
    $emailMessage .= "Best regards,\nEmpowered 360";

    // Set email content
    $mail->setFrom('empowered360@qwixai.com', 'Empowered 360');
    $mail->addAddress('ramoshassan42@gmail.com'); // Replace with your email address
    $mail->Subject = $emailSubject;
    $mail->Body = $emailMessage;

    // Send email
    if ($mail->send()) {
        echo 'Message has been sent successfully!';
    } else {
        echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
    }
}
?>