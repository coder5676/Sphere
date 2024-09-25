<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['name'];
    $roll= $_POST['roll'];

    // Create an associative array
    $newData = array(
        'name' => $name,
        'roll' => $roll
    );

    // Read the existing data from the JSON file
    $jsonFile = 'form.json';
    $jsonData = file_get_contents($jsonFile);
    $data = json_decode($jsonData, true);

    // Append the new data
    $data[] = $newData;

    // Encode the updated data to JSON and save it back to the file
    $newJsonData = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents($jsonFile, $newJsonData);

    echo "Data successfully appended!";
}
?>