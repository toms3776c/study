const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// booklog保存処理
app.post('/booklog', (req, res) => {
    const booklog = req.body;

    if (!(booklog.name && booklog.text)) {
        return res.json({
            "ok": false,
            "error": "invalid parameter"
        });
    }

    res.json({
        "ok": true,
        "booklog": booklog
    });
});

app.listen(port, () => {
    console.log(`App listen http://localhost:${port}`);
});