const tabList = document.querySelector('[role="tablist"]');
const tab = tabList.querySelectorAll('[role="tab"]');
const crewDetails = document.querySelector('article');

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
    // main content selected
    const mainContainer = tabContainer.parentNode;

    let movingClick = targetClick.getAttribute("aria-controls");
    // hide all crew information
    for (i = 0; i < crewDetails.length; i++) {
        crewDetails[i].setAttribute("hidden", "true");
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

    // remove hidden content  and set active to the button upon user click
    mainContainer.querySelector([`#${movingClick}`]).removeAttribute('hidden');
    mainContainer.querySelector([`.${movingClick}`]).removeAttribute('hidden');

}
