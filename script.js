// Function to detect if the device is a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Function to update the button text based on the device
function updateButtonText() {
    const button = document.querySelector('button');

    if (isMobileDevice()) {
        button.textContent = 'Click Me';
    } else {
        button.textContent = 'Hover Me';
    }
}

// Attach an event listener to handle changes when the window is resized
window.addEventListener('resize', updateButtonText);

// Initially update the button text when the page loads
updateButtonText();
