/**
 * User: Yakov Lilo
 * Date: 17.02.13
 * Time: 22:44
 */

//https://api.twitter.com/1/statuses/user_timeline.json?screen_name=gdgomsk&count=10

var twitterUserName = 'gdgomsk';
var twitterUrlTemplate = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name={userName}&count={count}'

var twitterUrl = twitterUrlTemplate.replace('{userName}', twitterUserName).replace('{count}', 10);

$.ajax({
    url: twitterUrl,
    success: function(data) {
        $('.loading').remove();
        var page = $('.page').first();

        $.each(data, function(index, item) {
            page.append($('<a>', {href: item.url, text: item.title, target: '_blank'})).
                append(item.text).
                append($('<img>', {src: '/images/grey_separator.png'}));
        });

        $('.page a').attr('target', '_blank');
    }
});