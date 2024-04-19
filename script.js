document.addEventListener('DOMContentLoaded', function() {
    // Disable text selection
    disableTextSelection();

    // Disable context menu
    disableContextMenu();
});

function disableTextSelection() {
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
}

function disableContextMenu() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
}


document.addEventListener('DOMContentLoaded', function() {
    // Create an overlay div to prevent interaction with underlying content
    createOverlay();
});

function createOverlay() {
    // Create a div element
    var overlay = document.createElement('div');

    // Style the div to cover the entire page and make it transparent
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'transparent';
    overlay.style.zIndex = '9999'; // Make sure it's above all other elements

    // Add event listeners to prevent interaction
    overlay.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    overlay.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });

    // Append the overlay to the body
    document.body.appendChild(overlay);
}
