/* Settings */

var checkInterval = 3600 * 100;

var groupId = '102520175692033125056';
var key = 'AIzaSyCnZJ9bTzXA3G_SSDX6Zo9T35n02xnvCSk';

var activitiesUrlTemplate = 'https://www.googleapis.com/plus/v1/people/{userId}/activities/public?key={key}';
var groupPageTemplate = 'https://plus.google.com/u/0/{userId}';

var activitiesUrl = activitiesUrlTemplate.replace('{userId}', groupId).replace('{key}', key);
var groupPage = groupPageTemplate.replace('{userId}', groupId);

/* Functions */

function checkEvents() {
    $.ajax({
        url: activitiesUrl,
        success: function(data) {
            if(localStorage['lastActivityUrl']) {
                for (var i = 0; i < data.items.length; i++) {
                    if (data.items[i].url == localStorage['lastActivityUrl']) {
                        updateUnread(i || '');
                        return;
                    }
                }

                updateUnread(data.items.length + '+');
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
            updateUnread('');
            localStorage['lastActivityUrl'] = data.items[0].url;
        }
    });
}

/* Events */

chrome.browserAction.onClicked.addListener(function(t) {
    chrome.tabs.create({ url : groupPage }, function(tab) { });
});

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

