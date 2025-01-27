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
    <p>An interactive web app to explore global hiking trails using <strong>Leaflet.js</strong> and <strong>OpenStreetMap</strong>. Users can filter trails by difficulty, location, altitude, and duration, with trail data fetched dynamically from a <strong>Google Sheets API</strong>.</p>

    <h2>Features</h2>
    <ul>
        <li>Interactive map with custom, color-coded markers based on trail difficulty.</li>
        <li>Filters for difficulty, location, altitude, and duration.</li>
        <li>Dynamic trail data from Google Sheets via a Node.js backend.</li>
    </ul>

    <h2>Setup</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone &lt;repository-url&gt;</code></pre>
        </li>
        <li>Install backend dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the server:
            <pre><code>node server.js</code></pre>
        </li>
        <li>Open <code>index.html</code> in a browser.</li>
    </ol>

    <h2>License</h2>
    <p>Open-source for personal and educational use.</p>
</body>
</html>
