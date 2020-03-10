// ID of the Google Spreadsheet
var spreadsheetID =
  "1B88-yCOTs5Z2nxrfo71Ver7WXaITGkZ3t86lyFjkBFI";
 
// Make sure it is public or set to Anyone with link can view
var url =
  "https://spreadsheets.google.com/feeds/list/" +
  spreadsheetID +
  "/2/public/values?alt=json";

$.getJSON(url, function(data) {
  
  var entry = data.feed.entry;
  
  // Giving a link to the raw JSON for reference.
  $(".json").html(
    '<a href="' + url + ' "target="_blank">Link to source JSON</a>'
  );
  
  $(entry).each(function(){
    // Pulling in each entry
    $('.books').prepend('<figure class="book"><h2 class="title">'+this.gsx$title.$t+'</h2><img src="'+this.gsx$img.$t+'" alt=""><span class="score">'+this.gsx$score.$t+'</span><span class="date">'+this.gsx$date.$t+'</span></figure>');
  });
  
});
