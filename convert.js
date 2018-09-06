/*========================================================
* CSV to JSON Converter made for the Introduction to NodeJS course on wdX.com
* made by Michael Houmann - michael@michael-h.dk
========================================================*/

// First we import the modules we need for this project

// FS is a core module and is used for writing the JSON file
const fs = require("fs");

// Path is used for working with file and directory paths here used to plase the
// JSON file in the same folder
const path = require("path");

// csvtojson is a npm module, that takes care of the conversion itself, info and
//documentation can be found here: https://www.npmjs.com/package/csvtojson
const csv = require("csvtojson");

// The simple program
csv()
  // First we specify the file we want to convert
  .fromFile("./customer-data.csv")
  .then(jsonObj => {
    console.log("Conversion is started");
    // Change the data to JSON data
    let json = JSON.stringify(jsonObj, null, 2);

    // Write the file and plase it in the folder
    fs.writeFileSync(path.join(__dirname, "./", "customer-data.json"), json);
    console.log(`The file is done and are called "customer-data.json"`);
  });
