<?php
$password = "tajna123";
$targetDir = __DIR__ . "/uploads/";
$jsonFile = $targetDir . "images.json";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['password'] !== $password) {
        die("<p style='color:red;text-align:center;font-family:sans-serif'>❌ Unauthorized</p>");
    }

    $id = $_POST['id'];
    $year = $_POST['year'];
    $description = $_POST['description'];

    if (file_exists($jsonFile)) {
        $data = json_decode(file_get_contents($jsonFile), true);

        foreach ($data as &$item) {
            if ($item['id'] === $id) {
                $item['year'] = $year;
                $item['description'] = $description;
            }
        }

        file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));

        echo '<div style="text-align:center;font-family:sans-serif;padding:20px;color:green;">✅ Updated. <a href="/">Back to gallery</a></div>';
    }
}
?>
