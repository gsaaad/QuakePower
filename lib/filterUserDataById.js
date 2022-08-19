// allow users to filter earthquake by ID (EMSC data!)
function filterUserDataById(id, earthquakeArray) {
  const result = earthquakeArray.filter((earthquake) => earthquake.id == id);
  return result;
}
module.exports = filterUserDataById;
