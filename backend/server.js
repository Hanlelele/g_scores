const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const csv = require("csv-parser");
const fs = require("fs");

const Score = require("./models/score");
dotenv.config();

const scoreRouter = require("./routes/scoreRoutes");

const PORT = process.env.PORT || 8000;
const app = express();

//CONNECT DATABASE
const connectToDB = require("./configs/db");
connectToDB();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use(
    cors({
        origin: [
            "http://localhost:5173",
        ],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);

const parseNumber = (value) => {
    const num = parseFloat(value);
    return isNaN(num) ? null : num; 
  };

const importData = async () => {
    try {
      const results = [];
      fs.createReadStream("./data/diem_thi_thpt_2024.csv")
        .pipe(csv({ separator: "," }))
        .on("data", (data) => {
          results.push({
            sbd: data.sbd,
            math: parseNumber(data.toan),
            literature: parseNumber(data.ngu_van),
            english: parseNumber(data.ngoai_ngu),
            physics: parseNumber(data.vat_li),
            chemistry: parseNumber(data.hoa_hoc),
            biology: parseNumber(data.sinh_hoc),
            history: parseNumber(data.lich_su),
            geography: parseNumber(data.dia_li),
            civic_education: parseNumber(data.gdcd),
            language_code: data.ma_ngoai_ngu,
          });
        })
        .on("end", async () => {
          await Score.deleteMany();
          await Score.insertMany(results);
          console.log("Data imported successfully!");
          mongoose.connection.close();
        });

        console.log("results", results);
    } catch (error) {
      console.error("Error importing data:", error);
      mongoose.connection.close();
    }
  };
  
importData();

app.get("/", (req, res) => {
    res.send("Hello Node.js!");
});

// Routes
app.use("/api/v1/scores", scoreRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
