const express = require('express');
const app = express();
const port = 3000;
let booklog = {};   // 本当は複製が望ましいが、複雑になるので単数形で処理する

app.use(express.json());

// booklog保存処理
app.post('/booklog', (req, res) => {
    booklog = req.body;

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

// booklog一覧データ取得処理
app.get("/booklog", (req, res) => {
    res.json({
        "ok": true,
        "booklog": [
            booklog
        ]
    });
});

app.listen(port, () => {
    console.log(`App listen http://localhost:${port}`);
});