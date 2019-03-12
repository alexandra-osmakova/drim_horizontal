<?php
    header('Refresh: 5; url=index.html', true, 301);
    $user_name = $_POST['client_name'];
    $telephone = $_POST['client_phone'];

    $email_subject = "Заявка с сайта";

    $email_body = "User Name: $user_name.\n".
                    "User Telephon Number: $telephone.\n".




    $to = "hello@drim.agency";

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
        <div class="thanx_page_drim_logo">
            <svg fill="none" viewBox="0 0 141 60">
                <path d="m41.781 39.43v-18.572h6.9063c5.6815 0 9.5625 4.0063 9.5625 9.3781 0 5.1349-3.881 9.1942-9.5625 9.1942h-6.9063zm3.8959-3.6777h3.0104c3.3002 0 5.4896-2.2593 5.4896-5.5165 0-3.3879-2.1894-5.7004-5.4896-5.7004h-3.0104v11.217zm27.448 3.6777v-18.572h8.1458c2.2693 0 4.0264 0.6633 5.1354 1.8389 1.0555 1.0796 1.5903 2.5389 1.5938 4.4132-0.0035 2.9279-1.5569 4.8117-3.8958 5.7004l4.427 6.6198h-4.6041l-3.8959-5.8843h-3.0104v5.8843h-3.8958zm3.8958-9.562h3.8959c1.9265 0 3.0104-1.0612 3.0104-2.7582 0-1.6724-1.1595-2.5744-3.0104-2.5744h-3.8959v5.3326zm26.031 9.562v-18.572h3.896v18.572h-3.896zm19.656 0v-18.572h4.25l4.782 7.907 4.604-7.907h4.25v18.572h-3.896v-12.136l-4.958 7.907h-0.178l-4.958-7.907v12.136h-3.896z"
                    fill="#4A4A4A" />
                <path d="m41.781 39.43v-18.572h6.9063c5.6815 0 9.5625 4.0063 9.5625 9.3781 0 5.1349-3.881 9.1942-9.5625 9.1942h-6.9063zm3.8959-3.6777h3.0104c3.3002 0 5.4896-2.2593 5.4896-5.5165 0-3.3879-2.1894-5.7004-5.4896-5.7004h-3.0104v11.217zm27.448 3.6777v-18.572h8.1458c2.2693 0 4.0264 0.6633 5.1354 1.8389 1.0555 1.0796 1.5903 2.5389 1.5938 4.4132-0.0035 2.9279-1.5569 4.8117-3.8958 5.7004l4.427 6.6198h-4.6041l-3.8959-5.8843h-3.0104v5.8843h-3.8958zm3.8958-9.562h3.8959c1.9265 0 3.0104-1.0612 3.0104-2.7582 0-1.6724-1.1595-2.5744-3.0104-2.5744h-3.8959v5.3326zm26.031 9.562v-18.572h3.896v18.572h-3.896zm19.656 0v-18.572h4.25l4.782 7.907 4.604-7.907h4.25v18.572h-3.896v-12.136l-4.958 7.907h-0.178l-4.958-7.907v12.136h-3.896z"
                    fill="#242424" />
                <path d="m102.88 4.8595h-97.573v50.016h97.573v-34.202h4.25v38.616h-106.25v-58.843h106.25v4.4132h-4.25z"
                    clip-rule="evenodd" fill="url(#logo_grad)" fill-rule="evenodd" />
                <defs>
                    <linearGradient id="logo_grad" x1="107.12" x2=".875" y1="29.868" y2="29.868" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#40A2D3" offset="0" />
                        <stop stop-color="#FF006E" offset="1" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
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