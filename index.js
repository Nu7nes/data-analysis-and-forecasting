import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);



if (process.env.NODE_ENV != 'development') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get("*", (req, res) => { res.sendFile(path.join(__dirname, 'client/build/index.html', (error) => { console.log(error); })) })
}
app.listen(process.env.PORT, () => {
    console.log("Servidor rodando - ", process.env.PORT);
})