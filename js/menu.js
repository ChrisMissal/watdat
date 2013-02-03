chrome.contextMenus.create({
  type: "normal",
  title: "Wat Dat?!",
  contexts: ["image", "link"]
}, function () {
  var err = chrome.extension.lastError;
  if (err) console.log(err);
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
	chrome.tabs.create({'url': 'http://images.google.com/searchbyimage?image_url=' + encodeURIComponent(info.srcUrl) });
});
