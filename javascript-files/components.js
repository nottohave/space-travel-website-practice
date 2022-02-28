const tabList = document.querySelector('[role="tablist"]');
const tab = tabList.querySelectorAll('[role="tab"]');
const planetInfos = document.querySelectorAll(".planet_infos");

const slideLeft = 37;
const slideRight = 39;
const spaceBar = 32;

let tabMe = 0;

// create click event on the tab that user click on
tab.forEach(function(tab) {
    tab.addEventListener('click', clickOnTab)
});

// slide left and right with arrow keys
tabList.addEventListener('keydown', switchTabByKeys);

// function for keyboard switching on tab control
function switchTabByKeys(key) {
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
function clickOnTab(click) {
    const targetClick = click.target;
    // tab list of buttons selected
    const tabContainer = targetClick.parentNode; 
    // body content selected
    const contentContainer = tabContainer.parentNode;
    // main body. Main body > body content, tab list > button; 
    const mainContainer = contentContainer.parentNode;
    
    let movingClick = targetClick.getAttribute("aria-controls");

    // hide all planet information
    for (i = 0; i < planetInfos.length; i++) {
        planetInfos[i].setAttribute("hidden", "true");
    }
    // select all role tab and set aria selected to false
    for (i = 0; i < tab.length; i++) {
        tab[i].setAttribute("aria-selected", "false");
    }
    // hide all pictures
    let picture = document.querySelectorAll('picture');
    for (i = 0; i < picture.length; i++) {
        picture[i].setAttribute("hidden", "true");
    }

    // remove the chosen planet, chosen planet information and set active status on the button that the user clicked
    mainContainer.querySelector([`#${movingClick}`]).removeAttribute('hidden');
    contentContainer.querySelector([`#${movingClick}`]).removeAttribute('hidden');
}
