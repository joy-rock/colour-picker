document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('color-picker');
    const setColorButton = document.getElementById('set-color');

    setColorButton.addEventListener('click', function () {
        const color = colorPicker.value;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'set_color', color: color });
        });
    });
});
