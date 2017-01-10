<?php
$name = $_GET["name"];
$subject = $_GET["subject"];
$body = $_GET["body"];

$name = str_replace("\n.", "\n..", $name);
$subject = str_replace("\n.", "\n..", $subject);
$body = str_replace("\n.", "\n..", $body);

$totalMessage = "\nFrom: " . $name . "\n" . "Message: " . $body;

mail ( "thyfaulttime@gmail.com", $subject, $totalMessage );

?>
<script>
window.location.href = "/index.html";
</script>
