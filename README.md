
# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Progress Blog](#ProgressBlog)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information
- See animation keyframe on every pages

### Screenshot

![](./preview.jpg)

Preview Shot

### Links

- Solution URL: [SOLUTION](https://www.frontendmentor.io/solutions/space-tourism-website-solution-flex-grid-components-js-dom-oZq1miNor)
- Live Site URL: [LIVE SITE](https://nottohave.github.io/space-travel-website-practice/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Components
- Mobile-first workflow
- JS DOM 

### What I learned

I learnt analyzing the design structure following the tutorial. Built components, messed around with media queries, learnt grid, aspect-ratio (ratio of width / height of the object), use [role=tab] in dom manipulation, declare variables in CSS Class, change and update CSS variables as I continue building the destination, crew and technology page. Plug and play with components to see what desiable for the experience.
I learnt a bit on using animation keyframe in components then apply it on areas on the webpage. 

To see how you can add code snippets, see below:

```html
<nav>
    <ul id="primary-navigation" data-visible="false" class="primary-navigation underline-indicators flex" >
        <li ><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="./index.html">
            <span aria-hidden="true">00</span>Home</a></li>
        <li ><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="./html-files/destination.html">
            <span aria-hidden="true">01</span>Destination</a></li>
        <li ><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="./html-files/crew-commander.html">
            <span aria-hidden="true">02</span>Crew</a></li>
        <li ><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="./html-files/technology.html">
            <span aria-hidden="true">03</span>Technology</a></li>
    </ul>
</nav>
```
```css
.some-class-example {
    inset: 0 0 0 20%;
    aspect-ratio: 1;
    justify-self: start;
    align-content: start;
}

```
```js
const tabList = document.querySelector('[role="tablist"]');
const tab = tabList.querySelectorAll('[role="tab"]');

```


### Continued development

Commander content on Crew needs to be displayed after 2nd clicked. 1st button on  Technology Page need to show letter 1.
Need to get better on using animation keyframe to make the website more interactive and fun to the user.


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Frontend Mentor - [@nottohave](https://www.frontendmentor.io/profile/nottohave)
- Github - [nottohave](https://github.com/nottohave)
- Twitter - [@Ubering_Cacti](https://twitter.com/Ubering_Cacti)

## Acknowledgments
Credit for awesome design and challenge files go to Frontendmentor.
Credit for Kevin Powell create amazing tutorial to follow through [Scrimba Tutorial](https://scrimba.com/learn/spacetravel).

## Progress Blog

01/31/22 - 02/13/22
Project initialized, following tutorial and self practice building main and moon page 

02/14/22 - 02/18/22
Build destination moon page - lesson the destination page: mobile layout, medium screen layout, large screen layout, fixing the alignment issue.

For the content lesson: learn to set up the crew page on my own then watch tutorial for feedbacks.

02/19/22
Construct crew page in mobile and tablet form. Fix minor padding problems.

02/20/22 - 02/25/22
Add transparency to header across all pages, add on tab switch on keyboard and mouse click.

02/25/22 - 02/27/22
Finalize destination page for all devices, continue on crew page. Need to troubleshoot the content.

03/01/22
Built technology page in mobile. Fix hr line on crew page.

03/02/22
Finish building technology page in desktop mode. Add on small animations for the home page. Futher bug fix will be next coming date.
