// const base = require('airtable').base('appoA2cEynkrD40GL');
// EXAMPLE USING CUSTOM CONFIGURATION
// var Airtable = require("airtable");
// Airtable.configure({
//   endpointUrl: "https://api.airtable.com",
//   apiKey: "keyMauE9U1NpxdgKy",
//   table: "tblorpSxgv6TZkT9n",
// });
// var base = Airtable.base("appoA2cEynkrD40GL");
// console.log(base,Airtable);

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyMauE9U1NpxdgKy'}).base('appoA2cEynkrD40GL');

base('法律主提案').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('內容關鍵字'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

// base('法律主提案').select({
//     view: 'Grid view'
// }).firstPage(function(err, records) {
//     if (err) { console.error(err); return; }
//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('提案名稱'));
//     });
// });