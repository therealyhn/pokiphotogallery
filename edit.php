<?php
$keyFile = __DIR__ . "/secret.key";
$validPassword = trim(file_get_contents($keyFile));

$targetDir = __DIR__ . "/uploads/";
$jsonFile = $targetDir . "images.json";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['password'] !== $validPassword) {
        die("❌ Unauthorized");
    }

    if (empty($_POST['id'])) {
        die("❌ No ID provided");
    }

    $id = $_POST['id'];
    $year = trim($_POST['year']);
    $description = trim($_POST['description']);

    error_log("Edit request: " . print_r($_POST, true));

    $data = file_exists($jsonFile) ? json_decode(file_get_contents($jsonFile), true) : [];

    $updated = false;
    foreach ($data as &$item) {
        if ($item['id'] === $id) {
            $item['year'] = $year ?: $item['year'];
            $item['description'] = $description ?: $item['description'];
            $updated = true;
        }
    }

    if ($updated) {
        file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));
        echo "✅ Updated";
    } else {
        echo "❌ ID not found";
    }
}
?>