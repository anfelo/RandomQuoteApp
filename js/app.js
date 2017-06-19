$(document).ready(() => {

  $('#go-btn').on('click', (event) => {
    $('#go-btn').prop('disabled', true);
    let tweetIntent = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
    let randomQuote = "";
    let randomAuthor = "";

    if($('.quote-container')){
      $('.quote-container').html("");
    }

    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",
      function(data){

        randomAuthor = data["quoteAuthor"];
        randomQuote = data["quoteText"];
        tweetIntent += encodeURIComponent(`"${randomQuote}" ${randomAuthor}`);

        let html = 
          `<div class="quote-container">
            <div class="quote"> 
              <strong>&#8220;</strong> ${randomQuote}<strong>&#8221;</strong>
            </div>
            <div class="author">
              <strong>${randomAuthor}</strong>
            </div>
          </div>`;

        $(html).hide().appendTo(".main").show('slow');

        $('#tweet-btn').removeClass('disabled')
                      .prop("href", tweetIntent);

        $('#go-btn').prop('disabled', false);
      },
    );
  });
});
