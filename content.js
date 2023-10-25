chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'set_color') {
        document.body.style.backgroundColor = message.color;
    }
});
