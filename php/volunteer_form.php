<?php
/* Set e-mail recipient */
// $myemail  = "emcnvol@andstones.ca";
$myemail  = "s@andstones.ca";

/* Check all form inputs using check_input function */

$firstname = check_input($_POST['input-first-name']);
$lastname = check_input($_POST['input-last-name']);
$email    = check_input($_POST['input-email']);
$phone    = check_input($_POST['input-phone']);
$address    = check_input($_POST['input-address']);
$positions    = check_input($_POST['input-positions']);
$duration    = check_input($_POST['input-duration']);
$comments = check_input($_POST['input-personal-statement']);

$subject  = "Website Contact Form";
$headers = 'From: websitevolunteer@emcn.ab.ca' . "\r\n" .
    'Reply-To: website@emcn.ab.ca' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(!$firstname){
  header('Location: /thankyou/thankyou.html');
  exit();
}


/* Let's prepare the message for the e-mail */
$message = "

Your contact form has been submitted by:

Name: ".$firstname." ".$lastname."
E-mail: ".$email."
Phone: ".$phone."
Address: ".$address."
Positions applying for: ".$positions."
Expected duration: ".$duration."


Comments:
".$comments."

End of message.
";

/* Send the message using mail() function */
mail($myemail, $subject, $message, $headers);

/* Redirect visitor to the thank you page */
header('Location: /thankyou/thankyou.html');
exit();

/* Functions we used */
function check_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>
