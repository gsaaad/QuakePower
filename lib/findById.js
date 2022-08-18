// todo EMSC data filter by Eq IDs
function findById(id, earthquakeArray) {
  const result = earthquakeArray.filter((earthquake) => earthquake.Eqid == id);
  return result;
}
module.exports = findById;
