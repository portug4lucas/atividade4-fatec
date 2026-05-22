const express = require("express");
const router = express.Router();
const pool = require("./database");

router.get("/senas", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM senas ORDER BY id_sena DESC");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao listar jogos." });
    }
});

router.post("/senas", async (req, res) => {
    const { nros } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO senas (nros) VALUES ($1) RETURNING *",
            [nros]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao cadastrar jogo." });
    }
});

module.exports = router;