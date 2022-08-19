// allow users to filter earthquake by ID (EMSC data!)
function findById(id, earthquakeArray) {
  const result = earthquakeArray.filter((earthquake) => earthquake.Eqid == id);
  return result;
}
module.exports = findById;
