/**
 * User: Yakov Lilo
 * Date: 17.02.13
 * Time: 22:44
 */

var twitterUserName = 'gdgomsk';
var twitterUrlTemplate = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name={userName}&count={count}'
var twitUrlTemplate = 'https://twitter.com/gdgomsk/status/{id}';
var twitterHashSearchUrlTemplate = 'https://twitter.com/search?q=%23$1&src=hash';

var twitterUrl = twitterUrlTemplate.replace('{userName}', twitterUserName).replace('{count}', 10);

function urlify(text) {
    var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

    return text.replace(urlRegex, '<a href="$1">$1</a>')
}

function tagify(text) {
    return text.replace(/#(\S*)/g,'<a href="' + twitterHashSearchUrlTemplate + '">#$1</a>')
}

$.ajax({
    url: twitterUrl,
    success: function(data) {
        $('.loading').remove();
        var page = $('.page').first();

        $.each(data, function(index, item) {
            page.append(tagify(urlify(item.text))).
                append($('<br>')).
                append($('<span>', {text: new Date(item.created_at).toLocaleDateString(), class: 'twitterDate'})).
                append($('<a>', {href: twitUrlTemplate.replace('{id}', item.id_str), text:'подробнее', class: 'twitterDetailed'})).
                append($('<img>', {src: '/images/grey_separator.png'}));
        });

        $('.page a').attr('target', '_blank');
        page.append($('<a>', {href: 'http://twitter.gdgomsk.org', text: 'Читать еще...', target: '_blank'}));
    }
});