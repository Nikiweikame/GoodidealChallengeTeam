var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer keyMauE9U1NpxdgKy");
myHeaders.append("Cookie", "brw=brwGFqqqsO8NKxLWH");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
var AA 
fetch("https://api.airtable.com/v0/appoA2cEynkrD40GL/%E6%B3%95%E5%BE%8B%E4%B8%BB%E6%8F%90%E6%A1%88", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result);AA=result.records})
  .catch(error => console.log('error', error));

  AA.records[0].fields.內容關鍵字