// Calls in twitter API keys
var apiKey =require("./keys.js");
var twitter =require("twitter");

// Assigns twitter api keys
var consumer_key = twitterKeys["consumer_key"];
var consumer_secret = twitterKeys["consumer_secret"];
var access_token_key = twitterKeys["access_token_key"];
var access_token_secret = twitterKeys["access_token_secret"];

function Tweets(){
	var twitterClient = new Twitter({
		consumer_key: consumer_key,
		consumer_secret: consumer_secret,
		access_token_key: access_token_key,
		access_token_secret: access_token_secret
	}); // closes twitterClient

	twitterClient.get("search/tweets", {q: "ishirley0516", count: 20}, function(err, tweets, response) {
		if (err) {
			console.log(err);
		}else {
			var tweeters= "";
			for (var i = 0; i < tweets.statuses.length; i++) {
				tweets += "\n" + tweets.statuses[i].text + "\n";
			}
			console.log(tweeters);
		} // closes else
	}); //closes twitterCleint.get
} // closes MyTweets