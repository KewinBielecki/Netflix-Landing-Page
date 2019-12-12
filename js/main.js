const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    // `#` To dynamic grab. this.id = tab-1/tab-2/tab-2
    const tabContentItem = document.querySelector(`#${this.id}-content`);
//    Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}


// Listener for tabl click
tabItems.forEach(item => item.addEventListener('click', selectItem));

