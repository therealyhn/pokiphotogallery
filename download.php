<?php
$keyFile = __DIR__ . "/secret.key";
$validPassword = trim(file_get_contents($keyFile));

$targetDir = __DIR__ . "/uploads/";
$jsonFile  = $targetDir . "images.json";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['password'] !== $validPassword) {
        die("<p style='color:red;text-align:center;font-family:sans-serif'>❌ Unauthorized</p>");
    }

    if (empty($_POST['id'])) {
        die("❌ No ID provided");
    }

    $id   = $_POST['id'];
    $data = file_exists($jsonFile) ? json_decode(file_get_contents($jsonFile), true) : [];

    $filePath = null;
    foreach ($data as $item) {
        if ($item['id'] === $id) {
            $filePath = __DIR__ . $item['src'];
            break;
        }
    }

    if (!$filePath || !file_exists($filePath)) {
        die("<p style='color:red;text-align:center;font-family:sans-serif'>❌ File not found</p>");
    }

    // Pošalji fajl za preuzimanje
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . basename($filePath) . '"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($filePath));
    readfile($filePath);
    exit;
}
?>
