"use strict";
// I need to take in the user's input and determine what they are asking for
var inquirer =require("inquirer");
var spotify =require("./spotify");
var omdb =require("./omdb");
var fs =require("fs");
var twitter =require("./twitter")
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
	if (userChoice === "my-tweets") {
		var MyTweets = new twitter();
		// Calls the Tweets function from twitter.js
		MyTweets.newTweets();
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
			var SongSearch = new spotify();
			// If no song is given then it should default to "The Sign" - Ace of Base
			if (songName === "") {
				songName = "The Sign";
				// This is going to point to the spotify file
				SongSearch.getSong();

			}else {
				SongSearch.getSong();
			} // closes else
		}); // closes response

	// If "movie-this" Then it shoudl return Title, year, IMDB rating, Origin Country, Language, Plot, cast, Rotten tomatoes rating, Rotten Tomatoes URL
	// If no use given then it should return information for "Mr. Nobody"
	}else if (userChoice === "movie-this") {
		var MovieThis = new omdb();
		inquirer.prompt([
			{
				type: "input",
				name: "movie",
				message: "Which movie would you like information on?"
			}
		]).then(function(response) {
			var movieName = response.movie;
			if (movieName === "") {
				movieName = "Mr Nobody";
				MovieThis.newMovieSearch(movieName);
			}else {
				MovieThis.newMovieSearch(movieName);
			} //closes else
		}); //closes response

	// If "do-what-it-says"then it should read from random.txt and do what is in the the file

	}else if (userChoice === "do-what-it-says") {
		var SpotifyThis = new spotify();
		var songName = fs.readFile("./random.txt", "utf8", function(err, data){
			if (err) {
				console.log(err);
			}else {
				SpotifyThis.newSongSearch(songName);
			} // closes else
		}); //closes readFile
	} // closes if
}); // closes info function