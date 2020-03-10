// ID of the Google Spreadsheet
var spreadsheetID =
    "1B88-yCOTs5Z2nxrfo71Ver7WXaITGkZ3t86lyFjkBFI";

// These are variables for each of the tabs in the Google Sheets document
var url_chain =
    "https://spreadsheets.google.com/feeds/list/" +
    spreadsheetID +
    "/1/public/values?alt=json";

var url_progress =
    "https://spreadsheets.google.com/feeds/list/" +
    spreadsheetID +
    "/2/public/values?alt=json";

var url_books =
    "https://spreadsheets.google.com/feeds/list/" +
    spreadsheetID +
    "/3/public/values?alt=json";

// Giving a link to the raw JSON for reference.
$(document).ready(function() {

    $(".json").html(
        '<a href="' + url_chain + ' "target="_blank">The Chain</a><a href="' + url_progress + ' "target="_blank">Progress</a><a href="' + url_books + ' "target="_blank">Books Read</a>'
    );
});

//Displaying Books Read
$.getJSON(url_books, function(data) {

    var entry_book = data.feed.entry;

    $(entry_book).each(function() {
        // Pulling in each entry
        $('.books').prepend('<figure class="book"><span class="title">' + this.gsx$title.$t + '</span><img src="' + this.gsx$img.$t + '" alt=""><span class="score">' + this.gsx$score.$t + '</span><span class="date">' + this.gsx$date.$t + '</span></figure>');
    });
});

//Displaying Percentages
$.getJSON(url_progress, function(data) {

    var entry_perc = data.feed.entry;

    $(entry_perc).each(function() {
        // Pulling in each entry
        $('.percentages').append('<span>' + this.gsx$excercise.$t + '</span>');
    });
});
