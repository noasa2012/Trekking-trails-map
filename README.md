<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Trekking Trails Map</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eaeaea;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: Consolas, monospace;
        }
        pre {
            background-color: #eaeaea;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
        ul {
            margin: 0;
            padding-left: 20px;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Trekking Trails Map</h1>
    <p>This project is a web-based application designed to display global hiking trails on an interactive map. Users can explore various trails, view details such as difficulty, altitude, and duration, and filter the trails based on their preferences.</p>

    <h2>Key Features</h2>
    <ul>
        <li><strong>Interactive Map:</strong> Displays trails using <code>Leaflet.js</code> with <strong>OpenStreetMap</strong> tiles as the base layer.</li>
        <li><strong>Trail Information:</strong> Each trail includes details like name, location, altitude, difficulty level (Easy, Moderate, Hard), and duration in days.</li>
        <li><strong>Custom Markers:</strong> Markers on the map are color-coded based on the difficulty level of the trails.</li>
        <li><strong>Filter Options:</strong> Allows users to filter trails by difficulty, location, altitude range, and duration range.</li>
        <li><strong>Dynamic Data:</strong> Trail data is retrieved from <strong>Google Sheets</strong> via a Node.js backend.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Leaflet.js for maps.</li>
        <li><strong>Backend:</strong> Node.js and Express for serving trail data.</li>
        <li><strong>Database:</strong> Google Sheets API as the data source for the trails.</li>
    </ul>

    <h2>Installation and Usage</h2>
    <ol>
        <li>Clone this repository:
            <pre><code>git clone &lt;repository-url&gt;</code></pre>
        </li>
        <li>Navigate to the project directory.</li>
        <li>Install dependencies for the Node.js backend:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the server:
            <pre><code>node server.js</code></pre>
        </li>
        <li>Open the <code>index.html</code> file in your browser to view the application.</li>
    </ol>

    <h2>License</h2>
    <p>This project is open-source and available for personal and educational use.</p>
</body>
</html>
