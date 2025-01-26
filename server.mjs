import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.use(cors());

app.get("/trails", async (req, res) => {
  const apiUrl =
    "https://sheets.googleapis.com/v4/spreadsheets/15MjOsfrT-_JZMX9lpON7BQf5Wy3jwiJzbBnoycE_zac/values/sheet1?key=AIzaSyBgxeYiuepnbX0Rl1aaHwMy5svfcHzF2Uo";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data from Google Sheets" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
