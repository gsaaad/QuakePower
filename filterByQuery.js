function filterByQuery(query, earthquakeArray) {
  let filteredResults = earthquakeArray;
  console.log(filteredResults[1].Magnitude);

  //   if (query.Latitude && query.Longitude) {
  //     filteredResults = filteredResults.filter(
  //       (earthquake) =>
  //         earthquake.Latitude === query.Latitude &&
  //         earthquake.Longitude === query.Longitude
  //     );
  //   }
  //   if (query.Magnitude) {
  //     filteredResults = filteredResults.filter(
  //       (earthquake) => earthquake.Magnitude === query.Magnitude
  //     );
  //   }
  return filteredResults;
}

module.exports = filterByQuery;
