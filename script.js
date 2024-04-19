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
