<?php
$targetDir = __DIR__ . "/uploads/";

if (!is_dir($targetDir)) {
    mkdir($targetDir, 0755, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES["file"])) {
    $fileName = time() . "_" . basename($_FILES["file"]["name"]);
    $targetFile = $targetDir . $fileName;

    $year = !empty($_POST['year']) ? $_POST['year'] : date("Y");
    $description = !empty($_POST['description']) ? $_POST['description'] : "New uploaded image";

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        $jsonFile = $targetDir . "images.json";
        $data = [];

        if (file_exists($jsonFile)) {
            $data = json_decode(file_get_contents($jsonFile), true);
        }

        $data[] = [
            "src" => "/uploads/" . $fileName,
            "year" => $year,
            "description" => $description
        ];

        file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));

        echo '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Upload Successful</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-50 flex items-center justify-center min-h-screen">
        <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
            <p class="text-green-600 font-semibold text-xl mb-4">✅ Upload successful!</p>
            <a href="/" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition">⬅ Back to Gallery</a>
        </div>
    </body>
    </html>
    ';
    } else {
        echo '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Upload Error</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-50 flex items-center justify-center min-h-screen">
        <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
            <p class="text-red-600 font-semibold text-xl mb-4">❌ Error uploading file.</p>
            <a href="/upload.php" class="inline-block bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition">🔄 Try Again</a>
        </div>
    </body>
    </html>
    ';
    }
}
?>