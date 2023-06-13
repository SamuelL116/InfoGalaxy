<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'ecipient@example.com';
  $subject = 'New Contact Us Message';
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  if (mail($to, $subject, $body)) {
    echo 'Thank you for contacting us!';
  } else {
    echo 'Sorry, there was an error sending your message. Please try again later.';
  }
}
?>