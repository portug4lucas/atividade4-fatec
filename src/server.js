const dotenv = require("dotenv");
const express = require("express");
const path = require("path");

dotenv.config({
    quiet: true,
    path: path.resolve(__dirname, "..", ".env")
});

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(publicPath, "pages", "index.html"));
});

const senasRoutes = require("./senas.routes");
app.use(senasRoutes);

app.listen(PORT, function () {
    console.log(`Rodando em http://localhost:${PORT}`);
    console.log("publicPath:", publicPath);
});