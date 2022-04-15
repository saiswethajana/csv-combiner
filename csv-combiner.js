/* Code begin */
const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");

let arguments = process.argv;
let filePaths = arguments.slice(2);

let combined_data = [];
filePaths.map((filePath) => {
  let file_name = filePath.slice(filePath.lastIndexOf("/") + 1);

  csv
    .parseFile(filePath, {
      headers: true,
      escape: "\\",
      ignoreEmpty: true,
    })
    .transform((data) => ({ ...data, filename: file_name }))
    .on("error", (error) => console.error(error))
    .on("data", (row) => console.log(row));
});
/* Code end */
