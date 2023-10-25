chrome.contextMenus.create({
    title: 'Pick a Color',
    contexts: ['all'],
    onclick: function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'show_popup' });
        });
    }
});
