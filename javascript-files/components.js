const tabList = document.querySelector('[role="tablist"]');
const tab = tabList.querySelectorAll('[role="tab"]');

let tabMe = 0;

// slide left and right with arrow keys
tabList.addEventListener('keydown', (e) => {
    const slideLeft = 37;
    const slideRight = 39;
    const spaceBar = 32;
    const keyPress = e.keyCode;

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
            tabMe = 3;
        }
        tab[tabMe].focus();
    } 

    // if the user hit on space bar
    if (keyPress == spaceBar) {
        tab.tabIndex = "0";
        console.log("activated");
    }

})

