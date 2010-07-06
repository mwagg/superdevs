(function($) {
  $.fn.twitter_feed = function(username) {

    $(this).each(function() {
      TwitterFeed.init(username, $(this));
    });

  }
})(jQuery);

var TwitterFeed = {};

TwitterFeed.init = function(username, div) {
  var model = TwitterFeed.model(username);
  var view = TwitterFeed.view(div, model);
  TwitterFeed.controller(model, view);
  model.load();
};

TwitterFeed.controller = function(model, view) {
  model.onLoadComplete = function() {
    view.feedLoaded();
  };

  model.onError = function(){
    view.errorOccurred();
  }
};

TwitterFeed.model = function(username) {
  var feed_url = 'http://api.twitter.com/1/statuses/user_timeline.rss?id=' + username;
  var feed = '';

  var self = {
    onLoadComplete: function () {},
    onError: function(){},

    load: function () {
      load_feed();
    },
    entries : function() {
      return feed.entries;
    }

  };

  function load_feed() {
    $.jGFeed(feed_url, feed_loaded, 5);
  }

  function feed_loaded(_feed) {
    if (!_feed) {
      return self.onError();
    }
    feed = _feed;
    self.onLoadComplete()
  }

  return self;
};

TwitterFeed.view = function(div, feed) {
  var list = div.find("ul:first");

  var self = {
    feedLoaded: function() {
      display_feed();
    },
    errorOccurred: function(){
      raise_error();
    }
  };

  function display_feed() {
    var entries = feed.entries();
    
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      list.append("<li>" + entry.title + "</li>");
    }
    return true;
  }

  function raise_error() {
    alert("Error!");
    return false;
  }

  return self;
};

