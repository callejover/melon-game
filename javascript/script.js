
  //redirects log in and create account buttons to menu.html
  function Redirect() {
    window.location="menu.html";
  }
//redriects from button 'leaderboard' on menu.html to leader-board.html
  function lBoardRedirect() {
    window.location="leader-board.html";
  }

  function startGame() {
    window.location="game.html";
  }
//For leaderboard drop down
  $('.show-info').click( function() {
	$(this).find('.more-info').slideToggle('slow');
});