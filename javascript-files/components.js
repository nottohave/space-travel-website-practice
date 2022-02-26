const tabList = document.querySelector('[role="tablist"]');
const tab = tabList.querySelectorAll('[role="tab"]');
const planetInfos = document.querySelectorAll(".planet_infos");

const slideLeft = 37;
const slideRight = 39;
const spaceBar = 32;

let tabMe = 0;

// create click event on the tab that user click on
tab.forEach(function(tab) {
    tab.addEventListener('click', moveTab)
});

// slide left and right with arrow keys
tabList.addEventListener('keydown', switchTab);

// function for keyboard switching on tab control
function switchTab(key) {
    const keyPress = key.keyCode;

    // change the tabindex of the current tab to -1 
    tab.tabIndex = "-1";

    // if the right key is pushed, move the next tab to the right
    if (keyPress == slideRight) {
        tabMe = tabMe + 1;
        if (tabMe >= tab.length) {
            tabMe = 0;
        }
        tab[tabMe].focus();
    } 

    // if the left key is pushed, move the next tab to the left
    if (keyPress == slideLeft) {
        tabMe = tabMe - 1;
        if (tabMe === -1) {
            tabMe = tab.length - 1;
        }
        tab[tabMe].focus();
    } 

    // if the user hit on space bar
    if (keyPress == spaceBar) {
        tab.tabIndex = "0";
    }
}

// Changing tab content upon user's click
function moveTab(click) {
    const targetClick = click.target;
    let movingClick = targetClick.getAttribute("aria-controls");

    // hide all panels
    for (i = 0; i < planetInfos.length; i++) {
        planetInfos[i].setAttribute("hidden", "true");
    }
    // select all role tab
    for (i = 0; i < tab.length; i++) {
        tab[i].setAttribute("aria-selected", "false");
    }
    // select all picture
    let picture = document.querySelectorAll('picture');
    for (i = 0; i < picture.length; i++) {
        // console.log(picture.length);
        // console.log(picture[i]);
        picture[i].setAttribute("hidden", "true");
    }

    const tabContainer = targetClick.parentNode;
    const contentContainer = tabContainer.parentNode;

    // remove hidden and set active to the button upon user click
    contentContainer.querySelector([`#${movingClick}`]).removeAttribute('hidden');
    movingClick.setAttribute("aria-controls", "true");
    
}