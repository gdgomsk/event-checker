/**
 * User: Yakov Lilo
 * Date: 13.02.13
 * Time: 0:26
 */

var blogId = '6778359321555814830';
var key = 'AIzaSyCnZJ9bTzXA3G_SSDX6Zo9T35n02xnvCSk';

var blogPostsUrlTemplate = 'https://www.googleapis.com/blogger/v3/blogs/{blogId}/posts?key={key}';
var blogPostsUrl = blogPostsUrlTemplate.replace('{blogId}', blogId).replace('{key}', key);

$.ajax({
    url: blogPostsUrl,
    success: function(data) {
        $('.loading').remove();
        var page = $('.page').first();

        $.each(data.items.slice(0, 5), function(index, item) {
            var contents = $(item.content).contents();

            page.append($('<h3>').append($('<a>', {href: item.url, text: item.title, target: '_blank'}))).
                append(contents).
                append($('<img>', {src: '/images/grey_separator.png'}));
        });

        $('.page a').attr('target', '_blank');
        page.append($('<a>', {href: 'http://blog.gdgomsk.org', text: 'Читать еще...', target: '_blank'}));
    }
});