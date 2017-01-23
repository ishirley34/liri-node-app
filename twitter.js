// Calls in twitter API keys
var twitterKeys =require("./keys").twitterKeys;
var Twitter =require("twitter");



function Tweets(){
	// Assigns twitter api keys
	var consumer_key = twitterKeys["consumer_key"];
	var consumer_secret = twitterKeys["consumer_secret"];
	var access_token_key = twitterKeys["access_token_key"];
	var access_token_secret = twitterKeys["access_token_secret"];

	var twitterClient = new Twitter({
		consumer_key: consumer_key,
		consumer_secret: consumer_secret,
		access_token_key: access_token_key,
		access_token_secret: access_token_secret
	}); // closes twitterClient

	twitterClient.get("statuses/user_timeline", {screen_name: "ishirley0516", count: 20}, 
		function(err, tweets, response) {
		if (err) {
			console.log(err);
		}else {
			var tweeters= "";
			for (var i = 0; i < 10; i++) {
				tweeters += "\n" + tweets[i].text + "\n";
			}
			console.log(tweeters);
		} // closes else
	}); //closes twitterCleint.get
} // closes MyTweets
// exports 
module.exports=Tweets;