QUIZ-WALK
=========

**En GPS baserad frågesport i mobilen.**


Utvecklare:
-----------
*Johanna Jovér*  
*Eleonor Dammfors*  
*Carl Jovér*  
*Thérese Scott Rossi*  

Lista på filer:
--------------
```
// Controllers handles requests to SQL database.

controllers:
	authenticate-controller.js		// User logs in
	leaderboard-controller.js		// Get users points from db 
	points-controller.js			// Updates points to db
	questions-controller.js			// Get questions from db
	register-controller.js			// User creates a new account
	user-controller.js			



// CSS for game and leaderboard page.

css:
	game.css				// CSS for the game
	leader-board.css			// CSS for the leaderboard
	map.css					// CSS for the map
	menu.css				// CSS for the menu page
	reset.css				// Resets CSS to default
	style.css				// CSS styling, not specified to significant pages
	
	
	
// HTML pages.

html:
	game.html				// Page for the game
	leader-board.html			// Page for the leaderboard
	menu.html				// Page for the menu



// Javascript files

javascript:
	map.js					// Js for map and game
	menu.js					// Js for the menu page
	script.js				// Not specified to significant pages. Handles AJAX requests. 
	timer.js				// Timer for game start and gameplay.



// Root files

node_modules:					// NPM files
pictures:					// Pictures and Icons
.gitignore					// Ignored files by GIT
config.js					// Connection to database
displaying_data.php         // Getting data from database and displays it on the leaderboard
index.html					// Landing page
index.js					// Api
package-lock.json
package.json
Procfile					// Heroku Procfile
README.md
```

Tekniker:
---------

**Kartan är hämtad från Google Maps efter deras egna rekommendation:**  
	https://developers.google.com/maps/documentation/javascript/tutorial
	
**För responsiviteten har vi använt oss av Bootstrap:**  
	https://getbootstrap.com/

**Vi har också använt oss av node.js som går att ladda ner härifrån:**  
	https://nodejs.org/en/

**För att använda php har vi laddat ner xampp:**  
	https://www.apachefriends.org/index.html

Användning efter kloning av repo:
---------------------------------

* Se till att php är installerat på din dator.
* ```cd``` in till repot i terminalen.
* Kör ```php -S localhost:8080``` för att starta anslutning med php.
* Öppna en ny flik i terminalen och ```cd``` till repot.
* Kör ```node index.js``` för att starta anslutningen till databasen.
* Nu är du ansluten och kan använda spelet.

Framtidsplaner:
---------------
I framtiden ser vi att spelet ska kunna spelas i lag, samt innehålla frågor kategoriserade efter genre och poäng.  
Även att frågorna placeras ut beroende på vart spelaren vill börja spela och inte ha förutbestämda koordinater.

Länkar:
------

**Trello:**  
  https://trello.com/b/J9ujzUrG/melonas
  
**GitHub:**  
  https://github.com/callejover/melon-game
  
**Spela spelet**  
  http://quizwalk.gouk.pw/
  
  *Notera att inloggning och leaderboard är tillgängligt vid en dator men spelet kan endast öppnas med en mobil enhet.*

