(function($) {
  $.fn.blog_feed = function(feed_url) {
    var list = "";

    $(this).each(function() {
      list = $(this).find("dl:first");
      load_feed();
    });

    function load_feed() {
      $.jGFeed(feed_url, display_feed, 10)
    }

    function display_feed(feed) {
      if (!feed) {
        alert("Error!");
        return false;
      }

      var entries = feed.entries.sort(sort_by_date);
      var odd = false;
      for(var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        list.append(get_date_tag(new Date(entry.publishedDate)));
        var alternate_class = odd ? ' class="odd"' : '';
        var title = '<a href="#"><h5>' + entry.title + '</h5></a>';
        var snippet = '<p>'+entry.contentSnippet+'</p>';
        list.append('<dd><ul><li'+alternate_class+'>'+title+snippet+'</li></ul></dd>');
        odd = !odd;
      }
      return true;
    }

    function sort_by_date(a,b) {
      var x = a.publishedDate;
      var y = b.publishedDate;
      return ((x<y) ? -1 : ((x>1) ? 1 : 0));
    }

    var months_names = { 1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",
                         7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"};

    function get_date_tag(date) {
      var dayOfMonth = date.getDate();
      var month = months_names[date.getMonth()+1];
      var year = date.getFullYear();
      return "<dt>"+dayOfMonth+" <strong>"+month+"</strong> "+year+"</dt>"
    }
  }
})(jQuery);