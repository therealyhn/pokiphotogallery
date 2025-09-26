<?php
$keyFile = __DIR__ . "/secret.key";
$validPassword = trim(file_get_contents($keyFile));

$targetDir = __DIR__ . "/uploads/";
$jsonFile = $targetDir . "images.json";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['password'] !== $validPassword) {
        die("<p style='color:red;text-align:center;font-family:sans-serif'>❌ Unauthorized</p>");
    }

    $id = $_POST['id'];
    $year = $_POST['year'];
    $description = $_POST['description'];

    $data = file_exists($jsonFile) ? json_decode(file_get_contents($jsonFile), true) : [];

    foreach ($data as &$item) {
        if ($item['id'] === $id) {
            $item['year'] = $year;
            $item['description'] = $description;
        }
    }

    file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));

    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><script src='https://cdn.tailwindcss.com'></script></head>
    <body class='bg-gray-50 flex items-center justify-center min-h-screen'>
      <div class='bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center'>
        <p class='text-green-600 font-semibold text-xl mb-4'>✅ Updated</p>
        <a href='/' class='inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition'>⬅ Back to Gallery</a>
      </div>
    </body>
    </html>";
}
?>
