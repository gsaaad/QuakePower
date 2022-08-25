function filterLargest(query, earthquakeArray) {
  let filteredResults = earthquakeArray;
  console.log(query);

  // user can query and filter deadliest earthquakes by Year, Date, Magnitude, Depth, Location
  if (query.Year) {
    filteredResults = filteredResults.filter(
      (earthquake) => earthquake.Year == query.Year
    );
  }
  if (query.Date) {
    filteredResults = filteredResults.filter(
      (earthquake) => earthquake.Date == query.Date
    );
  }
  if (query.Magnitude) {
    filteredResults = filteredResults.filter(
      (earthquake) => earthquake.Magnitude == query.Magnitude
    );
  }
  if (query.Depth) {
    console.log(typeof query.Depth);
    filteredResults = filteredResults.filter(
      (earthquake) => earthquake.Depth == query.Depth
    );
  }
  if (query.Region) {
    filteredResults = filteredResults.filter(
      (earthquake) => earthquake.Region == query.Region
    );
  }
  return filteredResults;
}
module.exports = filterLargest;
