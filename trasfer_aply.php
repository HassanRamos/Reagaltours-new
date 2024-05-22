<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $pickupLocation = $_POST['pickup_location'];
    $dropoffLocation = $_POST['dropoff_location'];
    $pickupTime = $_POST['pickup_time'];
    $dropoffTime = $_POST['dropoff_time'];
    $fullName = $_POST['fullname'];
    $nationality = $_POST['nationality'];
    $noOfAdults = $_POST['adults'];
    $noOfChildren = $_POST['children'];
    $noOfInfants = $_POST['infant'];
    $destinationCountry = $_POST['destination'];
    $durationOfWeeks = $_POST['weeks'];
    $purposeOfVisit = $_POST['purpose-of-visit'];
    $airlineUsed = $_POST['airline-ised'];
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
    $emailSubject = "Visa Application Request for the following info:";
    $emailMessage = "Dear Regal Tours,\n\n";
    $emailMessage .= "You have received a visa application request with the following details:\n\n";
    $emailMessage .= "Pick-up Location: " . $pickupLocation . "\n";
    $emailMessage .= "Drop-off Location: " . $dropoffLocation . "\n";
    $emailMessage .= "Pick-up Time: " . $pickupTime . "\n";
    $emailMessage .= "Drop-off Time: " . $dropoffTime . "\n";
    $emailMessage .= "Full Names: " . $fullName . "\n";
    $emailMessage .= "Nationality: " . $nationality . "\n";
    $emailMessage .= "Number of Adults: " . $noOfAdults . "\n";
    $emailMessage .= "Number of Children: " . $noOfChildren . "\n";
    $emailMessage .= "Number of Infants: " . $noOfInfants . "\n";
    $emailMessage .= "Destination Country: " . $destinationCountry . "\n";
    $emailMessage .= "Duration of Stay (weeks): " . $durationOfWeeks . "\n";
    $emailMessage .= "Purpose of Visit: " . $purposeOfVisit . "\n";
    $emailMessage .= "Airline Used: " . $airlineUsed . "\n";
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
