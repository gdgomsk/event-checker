var blog = {
    getFeeds: function() {
        
        
    function include_inhead(url) {
    
    var html_doc = document.getElementsByTagName('head').item(0);
    var js = document.createElement('script');
    
    js.setAttribute('language', 'javascript');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', url);
    html_doc.appendChild(js);
    
    return false;
        
};
        var url = "http://www.feedsweep.com/Products/FeedSweep/Producer.aspx?feeds=http%3a%2f%2fblog.gdgomsk.org%2ffeeds%2fposts%2fdefault&amp;title=GDG+Omsk&amp;maxoutput=5&amp;cat=12&amp;lang=it-IT&amp;linecolor=%23336699&amp;backgroundcolor=%23FFFFFF&amp;headercolor=%23FFFFFF&amp;datecolor=%23008000&amp;titlecolor=%230000FF&amp;textcolor=%23000000&amp;ver=5.0.1.0&amp;key=W6SNb_4bQ0-F_Gp7Z10ICw";
            
        include_inhead(url);

    }
};

document.addEventListener('DOMContentLoaded', function () {
  blog.getFeeds();
});

