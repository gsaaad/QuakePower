function filterByQuery(query, earthquakeArray) {
  let filteredResults = earthquakeArray;

  //   users can look up earthquakes by Magnitude, Latitude&Longitude, Depth and time/Date
  if (query.Magnitude) {
    filteredResults = filteredResults.filter(
      // ! we have to check for a match loosely, since one type is string, the other is number
      (earthquake) => earthquake.Magnitude == query.Magnitude
    );
  }
  if (query.Latitude && query.Longitude) {
    filteredResults = filteredResults.filter(
      (earthquake) =>
        earthquake.Latitude == query.Latitude &&
        earthquake.Longitude == query.Longitude
    );
  }
  if (query["Depth/Km"]) {
    filteredResults = filteredResults.filter(
      (earthquake) => earthquake["Depth/Km"] == query["Depth/Km"]
    );
  }
  if (query.Date) {
    // console.log(query.Date);
    // console.log(filteredResults[13].Date);
    filteredResults = filteredResults.filter(
      (earthquake) => earthquake.Date == query.Date
    );
  }

  return filteredResults;
}

module.exports = filterByQuery;
