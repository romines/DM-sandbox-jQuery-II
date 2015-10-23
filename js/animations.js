$(document).ready(function(){
  $('.tweet-compose').on('click', beginCompose).keyup(function() {
    var charsLeft = 140 - $(this).val().length;
    // console.log(charsLeft);
    $('#char-count').text(charsLeft);
    if (charsLeft < 10) {
      $('#char-count').css('color', 'rgb(182, 40, 40)');
      $('.button').prop('disabled', true);
    }

});;

  function beginCompose() {
    $('#tweet-controls').show();
    $(this).addClass('taller');
  }

  $('#tweet-submit').on('click', function(){
    var twext = $('.tweet-compose').val();
    tweet(twext);
  });

  function tweet(str){
    //
    //
    // Markup before tweet
    //
    var tweetPre = '<div class="tweet"> <div class="content"> <img class="avatar" src="img/alagoon.jpg"> <strong class="fullname">Dude Brah Nah Brah</strong> <span class="username">@thompenn</span> <p class="tweet-text">';
    //
    //
    // Markup to follow tweet
    //
    var tweetaPre =
              '</p> <div class="tweet-actions"> <ul> <li><span class="icon action-reply"></span> Reply</li> <li><span class="icon action-retweet"></span> Retweet</li> <li><span class="icon action-favorite"></span> Favorite</li> <li><span class="icon action-more"></span> More</li> </ul> </div> <div class="stats"> <div class="retweets"> <p class="num-retweets">30</p> <p>RETWEETS</p> </div> <div class="favorites"> <p class="num-favorites">6</p> <p>FAVORITES</p> </div> <div class="users-interact"> <div> <img src="img/alagoon.jpg"> <img src="img/vklimenko.jpg"> </div> </div> <div class="time"> 1:04 PM - 19 Sep 13 </div> </div> <div class="reply"> <img class="avatar" src="img/alagoon.jpg"> <textarea class="tweet-compose" placeholder="Reply to @mybff"></textarea> </div> </div> </div><!-- .tweet -->';

    var tweetHtml = tweetPre + str + tweetaPre;
    $('#stream').prepend(tweetHtml);
  }






});
