"use strict";
// I need to take in the user's input and determine what they are asking for
var inquirer =require("inquirer");
var Spotify =require("./spotify");
var Omdb =require("./omdb.js");
var fs =require("fs");
var twitter =require("./twitter");
// This asks the user what they would like to do in a list format
inquirer.prompt([
	{
		type: "list",
		name: "request",
		message: "What would you like to do?",
		choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
	} // closes prompt

// If they are asking for "my-tweets" then it should pull my last 10 tweets from twitter 
]).then(function(info){
	var userChoice = info.request;
	// Calls the Tweets function from twitter.js
	if (userChoice === "my-tweets") {
		var MyTweets = new twitter();
		
	// If i get "spotify-this-song" then it should return the Artist, song name, preview link, and album	
	}else if (userChoice === "spotify-this-song") {
		inquirer.prompt([
			{
				type: "input",
				name: "song",
				message: "Which song would you like to get information on?"
			}
		]).then(function(response) {
			var songName = response.song;
			var SpotifyThis = new Spotify();
			// If no song is given then it should default to "The Sign" - Ace of Base
			if (songName === "") {
				songName = "The Sign - Ace of Base";
				// This is going to point to the spotify file
				SpotifyThis.getSong(songName);

			}else {
				SpotifyThis.getSong(songName);
			} // closes else
		}); // closes response

	// If "movie-this" Then it shoudl return Title, year, IMDB rating, Origin Country, Language, Plot, cast, Rotten tomatoes rating, Rotten Tomatoes URL
	// If no use given then it should return information for "Mr. Nobody"
	}else if (userChoice === "movie-this") {
		inquirer.prompt([
			{
				type: "input",
				name: "movie",
				message: "Which movie would you like information on?"
			}
		]).then(function(response) {
			var MovieThis = new Omdb();
			var movieName = response.movie;
			if (movieName === "") {
				movieName = "Mr Nobody";
				MovieThis.getMovie(movieName);
			}else {
				MovieThis.getMovie(movieName);
			} //closes else
		}); //closes response

	// If "do-what-it-says"then it should read from random.txt and do what is in the the file

	}else if (userChoice === "do-what-it-says") {
		fs.readFile("random.txt", "utf8", function(err, data){
			if (err) {
				console.log(err);
			}else {
				var randomArray = data.split(",");
      			var command = randomArray[0].split(" ");
      			var request = randomArray[1];
      			console.log(randomArray);
      			console.log(request);

      			switch(command[0]){
        			case "spotify-this-song":
          				var SpotifyThis = new Spotify();
          				var songName = request;
          				SpotifyThis.getSong(songName);
        			break;
        			case "movie-this":
        				var MovieThis = new Omdb();
        				var movieName = request;
        				MovieThis.MovieSearch(movieName);
        		};
			} // closes else
		}); //closes readFile
	} // closes if
}); // closes info function