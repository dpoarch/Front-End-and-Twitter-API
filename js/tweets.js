$(document).ready(function() {
    getTweet();

    $("#tweetit").click(function() {
        var status = encodeURIComponent($("#comment").val());
        var youtube = $("#youtubeurl").val();
        $.getJSON('create.php?status=' + status + '&y=' + youtube, function(d) {

        });
        $("#tweeter-feed").html("");

        $("#comment").val("");
        $("#youtubeurl").val("");
        wait(2000);
        getTweet();
    });

    function getTweet() {
        var limit = 0;
        $.getJSON('twitter.php', function(d) {
            for (var i = 0; limit < 5; i++) {
                if (d[i].entities.hashtags.length != 0) {
                    var location = d[i].user.location;
                    var name = d[i].user.name;
                    var screen_name = d[i].user.screen_name;
                    var img_url = d[i].user.profile_image_url;
                    var youtube_url = "";
                    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                    ];
                    var tweetdate = new Date(d[i].created_at);
                    var tweetdate_formatted = tweetdate.getUTCDate() + " " + monthNames[tweetdate.getUTCMonth()] + " " + tweetdate.getUTCFullYear();

                    if (d[i].entities.urls.length != 0) {
                        if (d[i].entities.urls[0].expanded_url.search("www.youtube.com") != -1) {
                            youtube_url = d[i].entities.urls[0].expanded_url.replace("https:\/\/www.youtube.com/watch?v=", "https:\/\/www.youtube.com/embed/");
                        }
                    }
                    var content = d[i].text;
                    var tweet = '<div class="tweet-container">';
                    if (youtube_url != "") {
                        tweet += '<div class="youtube_frame"><iframe width="100%" height="280" src="' + youtube_url + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><div class="tweet_frame">';
                    }else{
                        tweet+= '<div class="tweet_frame" style="width:100% !important;">';
                    }

                    tweet += '<div class="avatar"><img src="' + img_url + '"></div><div class="display"><span class="name">' + name + '</span><br /><span class="user">@' + screen_name + '</span></div><div class="twitter_logo"><img src="https:\/\/logos-download.com/wp-content/uploads/2016/02/Twitter_logo_bird_transparent_png.png"></div><div class="content_text">' + content + '</div><div class="content_date">' + tweetdate_formatted + '</div></div></div>';
                    $("#tweeter-feed").append(tweet);
                    limit++;
                }
            }
        });
    }

    function wait(ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }
});