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

        echo "<div style='font-family:sans-serif; padding:20px; text-align:center;'>
                <p style='color:green; font-weight:bold;'>✅ Upload successful!</p>
                <a href='/' style='color:#f97316; font-weight:bold; text-decoration:underline;'>⬅ Back to gallery</a>
              </div>";
    } else {
        echo "❌ Error uploading file.";
    }
} else {
    echo '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Upload Photo</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-50 flex items-center justify-center min-h-screen">
        <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
            <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Upload New Photo</h1>
            <form method="POST" enctype="multipart/form-data" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Select photo</label>
                    <input type="file" name="file" required
                        class="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Year</label>
                    <input type="text" name="year" placeholder="e.g. 2025"
                        class="w-full rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea name="description" rows="3" placeholder="Write a short description..."
                        class="w-full rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500"></textarea>
                </div>
                <button type="submit"
                    class="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition">
                    Upload
                </button>
            </form>
        </div>
    </body>
    </html>
    ';
}
?>