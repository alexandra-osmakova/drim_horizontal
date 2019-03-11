<?php
    header('Refresh: 5; url=index.html', true, 301);
    $user_name = $_POST['client_name'];
    $telephone = $_POST['client_phone'];

    $email_subject = "Заявка с сайта";

    $email_body = "User Name: $user_name.\n".
                    "User Telephon Number: $telephone.\n".




    $to = "alexandra.osmakova@gmail.com";

    $headers = "From: $email_from \r\n";

    $ok = mail($to, $email_subject, $email_body, $headers);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&amp;subset=cyrillic" rel="stylesheet">
    <link rel="stylesheet" href="./drim.css/reset.css">
    <link rel="stylesheet" href="./drim.css/drim-horizontal.css">
    <title>Document</title>
</head>

<body>
    <section class="thanx_content">
        <h2>
            Спасибо за заявку!
        </h2>
        <p>Мы свяжемся с Вами в ближайшее время</p>
        <div class="thanx_page_bg">
            <svg viewBox="0 0 1203 363" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M172 242.999C93.6 334.199 24.6667 358.333 0 358.999V362.999H1202.5V0C1202.5 0 1085.96 29.0001 973.5 151.499C889.929 242.533 841.167 268.732 796.685 292.631L796 292.999C756.667 314.999 652.4 335.799 550 242.999C447.6 150.199 362 136.333 332 140.999C311.333 136.999 250.4 151.799 172 242.999Z"
                    fill="url(#paint0_linear)" />
                <defs>
                    <linearGradient id="paint0_linear" x1="601.25" y1="0" x2="601.25" y2="362.999" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#449FD1" />
                        <stop offset="1" stop-color="#7377B8" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </section>

</body>

</html>
