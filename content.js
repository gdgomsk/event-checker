$(function() {
    var gdgLink = 'a[oid="{id}"]';

    chrome.extension.sendRequest({method: "getId"}, function(response) {
        if ($(gdgLink.replace("{id}", response.id)).length != 0) {
            chrome.extension.sendRequest({ method: "reset" }, function(response) { });
        }
    });
});