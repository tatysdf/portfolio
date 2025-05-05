<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $recaptchaSecret = '6LccRi8rAAAAAH0db7P6FAVndNpncaQKSZ7dMbHx';
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    // Vérifiez la réponse reCAPTCHA
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaResponse");
    $responseKeys = json_decode($response, true);

    if (intval($responseKeys["success"]) !== 1) {
        echo 'Veuillez vérifier le reCAPTCHA.';
    } else {
        // Traitez les données du formulaire
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Préparez l'email
        $to = 'tatysideflandre@gmail.com'; // Remplacez par votre adresse email
        $subject = 'Nouveau message du formulaire de contact';
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $body = "Nom: $name\nEmail: $email\nMessage:\n$message";

        // Envoyez l'email
        if (mail($to, $subject, $body, $headers)) {
            echo 'Merci pour votre message, ' . htmlspecialchars($name) . '!';
        } else {
            echo 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.';
        }
    }
} else {
    echo 'Méthode de requête non autorisée.';
}
