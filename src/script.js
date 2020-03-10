// ID of the Google Spreadsheet
var spreadsheetID =
    "1B88-yCOTs5Z2nxrfo71Ver7WXaITGkZ3t86lyFjkBFI";

// These are variables for each of the tabs in the Google Sheets document
var url1 =
    "https://spreadsheets.google.com/feeds/list/" +
    spreadsheetID +
    "/1/public/values?alt=json";

var url2 =
    "https://spreadsheets.google.com/feeds/list/" +
    spreadsheetID +
    "/2/public/values?alt=json";

var url3 =
    "https://spreadsheets.google.com/feeds/list/" +
    spreadsheetID +
    "/3/public/values?alt=json";

// Giving a link to the raw JSON for reference.
$(document).ready(function() {

    $(".json").html(
        '<a href="' + url1 + ' "target="_blank">The Chain</a><a href="' + url2 + ' "target="_blank">Progress</a><a href="' + url3 + ' "target="_blank">Books Read</a>'
    );
});

//Displaying Books Read
$.getJSON(url3, function(data) {

    var bookentry = data.feed.entry;

    $(bookentry).each(function() {
        // Pulling in each entry
        $('.books').prepend('<figure class="book"><span class="title">' + this.gsx$title.$t + '</span><img src="' + this.gsx$img.$t + '" alt=""><span class="score">' + this.gsx$score.$t + '</span><span class="date">' + this.gsx$date.$t + '</span></figure>');
    });
});
