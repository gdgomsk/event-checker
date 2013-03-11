/**
 * User: Yakov Lilo
 * Date: 11.03.13
 * Time: 23:26
 */

var groupId = '102520175692033125056';
var key = 'AIzaSyCnZJ9bTzXA3G_SSDX6Zo9T35n02xnvCSk';

//https://developers.google.com/events/feed/json?group=102520175692033125056&start=1325397600&end=1357020000
var activitiesUrlTemplate = 'https://www.googleapis.com/plus/v1/people/{userId}/activities/public?key={key}';
var groupPageTemplate = 'https://plus.google.com/u/0/{userId}';

var activitiesUrl = activitiesUrlTemplate.replace('{userId}', groupId).replace('{key}', key);
var groupPage = groupPageTemplate.replace('{userId}', groupId);

chrome.extension.sendRequest({ method: "reset" }, function(response) { });

$.ajax({
    url: activitiesUrl,
    success: function(data) {
        $('.loading').remove();
        var page = $('.page').first();

        $.each(data.items.slice(0, 20), function(index, item) {
            var contents = item.object.content;

            page.append($('<div>', {class: 'plusTitle'}).append($('<a>', {href: item.url, text: item.title, target: '_blank'}))).
                append(contents).
                append($('<img>', {src: '/images/grey_separator.png'}));
        });

        $('.page a').attr('target', '_blank');
        page.append($('<a>', {href: groupPage, text: 'Читать еще...', target: '_blank'}));
    }
});