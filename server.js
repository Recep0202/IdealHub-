const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // static files

app.post('/get-suggestion', async (req, res) => {
    const topic = req.body.topic;

    // Burada OpenAI veya Hugging Face API'sini kullanarak öneri al
    const suggestion = `Güzel bir öneri: ${topic} ile ilgili harika bir içerik yapabilirsiniz!`;
    
    // Öneriyi döndür
    res.json({ suggestion });
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
