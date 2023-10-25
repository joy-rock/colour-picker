// Create a context menu item titled 'Pick a Color' that is available in all contexts.
chrome.contextMenus.create({
    title: 'Pick a Color',
    contexts: ['all'],
    onclick: function () {
        // Query for the active tab in the current window
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            // Send a message to the content script of the active tab to show the popup
            chrome.tabs.sendMessage(tabs[0].id, { action: 'show_popup' });
        });
    }
});
