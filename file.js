const fs = require("fs");

function read(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, Data) => {
      if (!err) {
        resolve(Data);
      } else {
        reject(err);
        return;
      }
    });
  });
}

function write(fileName, Data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, Data, (err) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
        return;
      }
    });
  });
}

module.exports = {
  read: read,
  write: write,
};
