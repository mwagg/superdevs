(function($) {
  $.fn.twitter_feed = function(username) {
    var feed_url = 'http://api.twitter.com/1/statuses/user_timeline.rss?id='+username;

    var list = "";

    $(this).each(function() {
      list = $(this).find("ul:first");
      load_feed();
    });

    function load_feed() {
      $.jGFeed(feed_url, display_feed, 5)
    }

    function display_feed(feed) {
      if (!feed) {
        alert("Error!");
        return false;
      }

      var entries = feed.entries;
      for(var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        list.append("<li>" + entry.title + "</li>");
      }
      return true;
    }
  }
})(jQuery);