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
controllers:
	authenticate-controller.js
	leaderboard-controller.js
	points-controller.js
	questions-controller.js
	register-controller.js
	user-controller.js
```

```
css:
	game.css
	leader-board.css
	map.css
	menu.css
	reset.css
	style.css
```

```
html:
	game.html
	leader-board.html
	menu.html
```

```
javascript:
	accounts.js
	map.js
	menu.js
	script.js
	timer.js
```

```
node_modules:
pictures:
.gitignore
config.js
displaying_data.php
index.html
index.js
package-lock.json
package.json
Procfile
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
