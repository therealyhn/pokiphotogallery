<?php
// Folder gde će se čuvati slike
$targetDir = __DIR__ . "/uploads/";

// Ako folder ne postoji, napravi ga
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0755, true);
}

// Proveri da li je fajl poslat
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES["file"])) {
    $fileName = time() . "_" . basename($_FILES["file"]["name"]); // jedinstveno ime
    $targetFile = $targetDir . $fileName;

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        // Ažuriraj images.json
        $jsonFile = $targetDir . "images.json";
        $data = [];

        if (file_exists($jsonFile)) {
            $data = json_decode(file_get_contents($jsonFile), true);
        }

        $data[] = [
            "src" => "/uploads/" . $fileName,
            "year" => date("Y"),
            "description" => "New uploaded image"
        ];

        file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));

        echo "✅ Upload successful!<br><a href='/'>Back to gallery</a>";
    } else {
        echo "❌ Error uploading file.";
    }
} else {
    // Forma za upload
    echo '<form method="POST" enctype="multipart/form-data">
            <input type="file" name="file" required />
            <button type="submit">Upload</button>
          </form>';
}
?>