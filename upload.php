<?php
$keyFile = __DIR__ . "/secret.key";
$validPassword = trim(file_get_contents($keyFile));

$targetDir = __DIR__ . "/uploads/";
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0755, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES["file"])) {
    if ($_POST['password'] !== $validPassword) {
        die("<p style='color:red;text-align:center;font-family:sans-serif'>❌ Unauthorized</p>");
    }

    $fileName = time() . "_" . basename($_FILES["file"]["name"]);
    $targetFile = $targetDir . $fileName;

    $year = !empty($_POST['year']) ? $_POST['year'] : date("Y");
    $description = !empty($_POST['description']) ? $_POST['description'] : "New uploaded image";

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        $jsonFile = $targetDir . "images.json";
        $data = file_exists($jsonFile) ? json_decode(file_get_contents($jsonFile), true) : [];

        $data[] = [
            "id" => uniqid(),
            "src" => "/uploads/" . $fileName,
            "year" => $year,
            "description" => $description
        ];

        file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));

        echo "
        <!DOCTYPE html>
        <html lang='en'>
        <head>
          <meta charset='UTF-8'>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <script src='https://cdn.tailwindcss.com'></script>
        </head>
        <body class='bg-gray-50 flex items-center justify-center min-h-screen'>
          <div class='bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center'>
            <p class='text-green-600 font-semibold text-xl mb-4'>✅ Upload successful!</p>
            <a href='/' class='inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition'>⬅ Back to Gallery</a>
          </div>
        </body>
        </html>";
    } else {
        echo "❌ Error uploading file.";
    }
} else {
    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <script src='https://cdn.tailwindcss.com'></script>
    </head>
    <body class='bg-gray-50 flex items-center justify-center min-h-screen'>
      <div class='bg-white shadow-lg rounded-xl p-8 w-full max-w-md'>
        <h1 class='text-2xl font-bold text-gray-800 mb-6 text-center'>Upload New Photo</h1>
        <form method='POST' enctype='multipart/form-data' class='space-y-4'>
          <div>
            <label class='block text-sm font-medium'>Select photo</label>
            <input type='file' name='file' required class='w-full border rounded-lg p-2' />
          </div>
          <div>
            <label class='block text-sm font-medium'>Year</label>
            <input type='text' name='year' placeholder='e.g. 2025' class='w-full border rounded-lg p-2' />
          </div>
          <div>
            <label class='block text-sm font-medium'>Description</label>
            <textarea name='description' rows='3' class='w-full border rounded-lg p-2'></textarea>
          </div>
          <div>
            <label class='block text-sm font-medium'>Password</label>
            <input type='password' name='password' required class='w-full border rounded-lg p-2' />
          </div>
          <button type='submit' class='w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg'>Upload</button>
        </form>
      </div>
    </body>
    </html>";
}
?>