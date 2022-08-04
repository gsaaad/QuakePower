// tookbox for reading and writing files

const fs = require("fs");

function read(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, textData) => {
      if (!err) {
        resolve(textData);
      } else {
        reject(err);
        return;
      }
    });
  });
}

function write(fileName, textData) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, textData, (err) => {
      if (!err) {
        resolve();
      } else reject(err);
      return;
    });
  });
}

module.exports = {
  read: read,
  write: write,
};
