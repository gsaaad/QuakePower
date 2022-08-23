function filterByQuery(query, earthquakeArray) {
  let filteredResults = earthquakeArray;

  // users can query and filter by Magnitude, Lat&Long, Depth, Date, Region
  if (query.Date) {
    filteredResults = filteredResults.filter(
      (earthquake) => earthquake.Date === query.Date
    );
  }

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
  if (query.Depth) {
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

module.exports = filterByQuery;
