// toolbox for earthquake server/mongo

const papa = require("papaparse");
const file = require("./file.js");
const request = require("request-promise");

const toolBox = () => {
  function importCsvFile(file) {
    return file.read(file).then((data) => {
      const result = papa.parse(data, { header: true, dynamicTypic: true });

      return result.data;
    });
  }
  function importFromMySql(db, tableName) {
    return db.exec("select * from " + tableName);
  }
  function importCsvFromRestApi(url) {
    return request
      .get({
        uri: url,
        json: false,
      })
      .then((response) => {
        const result = papa.parse(response, {
          header: true,
          dynamicTyping: true,
        });

        return result.data;
      });
  }
  function importJsonFromRestApi(url) {
    return request.get(url).then((response) => {
      return JSON.parse(response);
    });
  }
  function importJsonFile(filePath) {
    return file.read(filePath).then((textFileData) => {
      return JSON.parse(textFileData);
    });
  }
  function exportCsvFile(fileName, data) {
    const csv = papa.unparse(data);
    return file.write(fileName, csv);
  }
  function exportJsonFile(fileName, data) {
    const json = JSON.stringify(data, null, 4);
    return file.write(fileName, json);
  }
  function exportToMongoDB(db, collectionName, data) {
    return db[collectionName].insert(data);
  }
  function exportToMySql(db, tableName, data) {
    return data.reduce(
      (prevPromise, record) =>
        prevPromise.then(() =>
          db.exec("insert into " + tableName + " set ?", record)
        ),
      Promise.resolve()
    );
  }
};

module.exports = toolBox;
