import { createObjectCsvWriter } from "csv-writer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { HeaderCsv } from "./HeaderCsv.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function CreateCsv(records) {
  const csvWriter = createObjectCsvWriter({
    path: join(__dirname, "../temp/backup.csv"),
    header: HeaderCsv,
    append: false,
  });

  return await csvWriter
    .writeRecords(records)
    .then(() => {
      return {
        message: "CSV file is created!",
        path: join(__dirname, "../temp/backup.csv"),
      };
    })
    .catch((err) => {
      return err;
    });
}
