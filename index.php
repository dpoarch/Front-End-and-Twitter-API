<!DOCTYPE html>
<html>
<head>
	<title>#nowplaying in San Francisco</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<div class="container">
	<div class="row">
		<h1>#nowplaying in San Francisco</h1>
		<p>This page shows #nowplaying tweets in San Francisco that contain a youtube link. It also <br /> allows you to post a #nowplaying tweet with a YouTube link.</p>
	</div>
	<div class="row navigation">
		<div class="content">
		<div class="youtube_input">
			<label>Video URL:</label>
			<input id="youtubeurl" type="text" placeholder="http://youtube.com/" />
		</div>
		<div class="comment_input">
			<label>Comment:</label>
			<input id="comment" type="text"/>
		</div>
			<button id="tweetit">Tweet to #nowplaying</button>
		</div>
	</div>
	<div class="row" id="tweeter-feed">

	</div>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/tweets.js"></script>
</body>
</html>