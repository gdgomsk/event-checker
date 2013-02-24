/* Settings */

var checkInterval = 3600 * 100;

var groupId = '102520175692033125056';
var key = 'AIzaSyCnZJ9bTzXA3G_SSDX6Zo9T35n02xnvCSk';

//https://developers.google.com/events/feed/json?group=102520175692033125056&start=1325397600&end=1357020000
var activitiesUrlTemplate = 'https://www.googleapis.com/plus/v1/people/{userId}/activities/public?key={key}';
var groupPageTemplate = 'https://plus.google.com/u/0/{userId}';

var activitiesUrl = activitiesUrlTemplate.replace('{userId}', groupId).replace('{key}', key);
var groupPage = groupPageTemplate.replace('{userId}', groupId);

/* Functions  */

function restoreStateAfterAlert() {
    chrome.browserAction.setIcon({ path: 'images/icon19.png' });
}

function checkEventsOnAlert(events) {
    for (var i = 0; i < events.length; i++) {
        for (var j = 0; j < alertMap.length; j++) {
            if (events[0].title.toLowerCase().indexOf(alertMap[j].word.toLowerCase()) >= 0 ||
                events[0].object.content.toLowerCase().indexOf(alertMap[j].word.toLowerCase()) >= 0) {
                alertMap[j].handler();
                return;
            }
        }
    }
    restoreStateAfterAlert();
}

function checkEvents() {
    $.ajax({
        url: activitiesUrl,
        success: function(data) {
            if(localStorage['lastActivityUrl']) {
                var unread = -1;

                for (var i = 0; i < data.items.length; i++) {
                    if (data.items[i].url == localStorage['lastActivityUrl']) {
                        unread = i;
                        break;
                    }
                }

                if (unread < 0) {
                    updateUnread(data.items.length + '+');
                    checkEventsOnAlert(data.items);
                } else {
                    updateUnread(unread || '');
                    checkEventsOnAlert(data.items.slice(0, unread));
                }
            } else {
                localStorage['lastActivityUrl'] = data.items[0].url;
            }
        }
    });
};

function updateUnread(text) {
    chrome.browserAction.setBadgeText({
        text: '' + text
    });
};

function reset() {
    $.ajax({
        url: activitiesUrl,
        success: function(data) {
            localStorage['lastActivityUrl'] = data.items[0].url;

            checkEvents();
        }
    });
}

/* Events */

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "reset") {
        reset();
    } else if (request.method == "getId") {
        sendResponse({ id: groupId });
    }
});

/* Main */

setInterval(checkEvents, checkInterval);
checkEvents();