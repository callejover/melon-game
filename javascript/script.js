
  //redirects log in and create account buttons to menu.html
  function Redirect() {
    window.location="menu.html";
  }
//For leaderboard drop down
  $('.show-info').click( function() {
	$(this).find('.more-info').slideToggle('slow');
});