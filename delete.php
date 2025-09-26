<?php
$keyFile = __DIR__ . "/secret.key";
$validPassword = trim(file_get_contents($keyFile));

$targetDir = __DIR__ . "/uploads/";
$jsonFile = $targetDir . "images.json";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['password'] !== $validPassword) {
        die("<p style='color:red;text-align:center;font-family:sans-serif'>❌ Unauthorized</p>");
    }

    if (empty($_POST['id'])) {
        die("❌ No ID provided");
    }

    $id = $_POST['id'];
    $data = file_exists($jsonFile) ? json_decode(file_get_contents($jsonFile), true) : [];
    $newData = [];

    foreach ($data as $item) {
        if ($item['id'] !== $id) {
            $newData[] = $item;
        } else {
            // obriši fajl iz uploads
            $filePath = __DIR__ . $item['src']; 
            if (file_exists($filePath)) {
                unlink($filePath);
            }
        }
    }

    file_put_contents($jsonFile, json_encode($newData, JSON_PRETTY_PRINT));

    echo "✅ Deleted";
}
?>
