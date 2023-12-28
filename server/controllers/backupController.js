
import { CreateCsv } from "../models/CsvFileCreate.js";
import Form from "../models/Form.js";
import fs from 'fs';

let pathFile = ''

export const backupAndDownload = async (req, res) => {
  try {
    const data = await Form.find();
    const csv = await CreateCsv(data);
    pathFile = csv.path
    // res.status(200).download(csv.path)

    res.download(pathFile, (err) => {
      if (err) {
        console.error('Erro ao enviar o arquivo para download:', err);
        res.status(500).send('Erro ao fazer o download do arquivo');
      }
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const clearTempFiles = async (req, res) => {
  if (fs.existsSync(pathFile)) {
    fs.unlink(pathFile, (err) => {
      if (err) {
        res.status(400).send("Erro ao apagar o arquivo:", err);
      }
      res.status(200).send("Arquivo temporário foi removido com sucesso!");
    });
  } else {
    res.status(404).send("O arquivo não existe ou já foi removido anteriormente.");
  }
}