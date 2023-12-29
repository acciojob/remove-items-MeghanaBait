//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    let selectElement = document.getElementById('colorSelect');
    let removeButton = document.querySelector('input[type="button"]');
    
    removeButton.addEventListener('click', function() {
        let selectedOption = selectElement.options[selectElement.selectedIndex];
        if (selectedOption) {
            selectElement.removeChild(selectedOption);
        }
    });
});
