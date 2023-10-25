// This event listener ensures that the code inside it runs when the DOM (Document Object Model) is fully loaded and ready.
document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the color picker input element with the id 'color-picker'.
    const colorPicker = document.getElementById('color-picker');
    
    // Get a reference to the button element with the id 'set-color'.
    const setColorButton = document.getElementById('set-color');

    // Add a click event listener to the 'set-color' button.
    setColorButton.addEventListener('click', function () {
        // Get the selected color from the color picker input element.
        const color = colorPicker.value;
        
        // Use the Chrome extension's tabs API to query for the currently active tab in the current window.
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            // Send a message to the content script of the active tab with an action 'set_color' and the selected color.
            chrome.tabs.sendMessage(tabs[0].id, { action: 'set_color', color: color });
        });
    });
});
