# ScrollTrigger Project

## Overview

This project is a **scroll-based animated landing page** built with **HTML, CSS, and JavaScript**.

It uses **GSAP**, **ScrollTrigger**, **ScrollToPlugin**, **ScrollSmoother**, and **SplitText** to create smooth scrolling, animated text, parallax images, and section-by-section motion.

---

## What This Code Does

This project implements:

* a **fixed header**
* a **hero intro section**
* multiple **scroll-animated content slides**
* **smooth scrolling**
* **split text animations**
* **parallax image movement**
* a **footer with back-to-top navigation**

It is a strong example of **GSAP-powered scroll storytelling**.

---

## Technologies Used

* HTML5
* CSS3 / SCSS-style nesting
* JavaScript
* GSAP
* ScrollTrigger
* ScrollToPlugin
* ScrollSmoother
* SplitText
* Flexbox
* Google Fonts

---

## File Structure

```bash
index.html   → Page structure
styles.css   → Layout and animation styling
scripts.js   → GSAP animation and scroll logic
img/         → Project images
```

---

## HTML Breakdown

### Main Wrapper

```html
<div id="smooth-wrapper">
    <div class="stage" id="smooth-content">
        ...
    </div>
</div>
```

This creates the smooth-scroll container used by **ScrollSmoother**.

---

### Header

```html
<header class="header">
    <div class="logo">JAMEZ</div>
    <a href="#" class="nav-btn">...</a>
</header>
```

The header holds the site logo and a simple menu button made with SVG rectangles.

---

### Intro Section

```html
<section class="intro slide--0" id="slide-0">
    ...
</section>
```

This is the hero section. It contains:

* the main title
* a short quote
* two overlapping images

It acts as the starting point of the page.

---

### Content Slides

Each slide follows a similar structure:

```html
<section class="slide slide--1" id="slide-1">
    <div class="col col--1">...</div>
    <div class="col col--2">...</div>
</section>
```

Each slide has:

* a left content column
* a right image column
* a scroll link to the next section

---

### Footer

```html
<footer class="footer" id="slide-7">
    ...
</footer>
```

The footer contains:

* a branded link
* a top button
* copyright text

---

## CSS Breakdown

## 1. Global Setup

```css
:root {
    --dark: #242423;
}
```

This defines the main dark text color used across the page.

---

## 2. Base Styling

```css
html, body {
    min-height: 100vh;
}

body {
    background-color: white;
    font-family: 'Noto Sans', sans-serif;
    font-size: 14px;
    color: var(--dark);
    line-height: 1.3;
}
```

This sets the overall page style and typography.

---

## 3. Typography

```css
.logo,
h1,
h2 {
    font-family: 'Cinzel', serif;
    font-weight: 400;
}
```

This gives the headings a more elegant serif look.

---

## 4. Stage Wrapper

```css
.stage {
    position: relative;
    background: white;
    visibility: hidden;
}
```

The page starts hidden until the JavaScript sets it visible after setup.

---

## 5. Header Styling

```css
.header {
    position: fixed;
    left: 40px;
    top: 24px;
    z-index: 100;
    display: flex;
}
```

This keeps the header fixed at the top-left of the page.

---

## 6. Intro Section

```css
.intro {
    position: relative;
    padding: 5vw;
    background: #C0D7D8;
    overflow: hidden;
}
```

This creates the large hero panel with a soft background.

---

## 7. Slide Layout

```css
.slide {
    display: flex;
    align-items: stretch;
    height: 100vh;
    overflow: hidden;
}
```

Each slide fills the full screen and uses two columns.

---

## 8. Column Content

```css
.col__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding: 6vw 6vw 10vw;
}
```

This places the text near the bottom of the left column.

---

## 9. Slide Background Colors

Each slide content block has its own background color, which gives every section a different mood.

Example:

```css
.col__content--1 {
    background: #D8C0C0;
}
```

---

## 10. Scroll Link Styling

```css
.slide__scroll-link {
    position: absolute;
    right: -113px;
    bottom: 3.5vw;
    width: 140px;
    height: 140px;
    background: var(--dark);
}
```

This creates the circular scroll button on each slide.

---

## 11. Footer Styling

```css
.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #cecece;
}
```

The footer is centered and styled like a closing section.

---

## JavaScript Breakdown

## 1. Plugin Registration

```js
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollSmoother);
```

This enables the GSAP plugins used in the project.

---

## 2. DOM Selection

```js
const stage = select('.stage');
const slides = selectAll(".slide");
const links = selectAll(".slide__scroll-link");
const titles = selectAll('.col__content-title');
```

These lines grab the key page elements for animation.

---

## 3. SplitText Setup

```js
const introTitle = new SplitText('.intro__title', {type: "lines", linesClass: "intro-line"});
const splitTitles = new SplitText(titles, {type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
```

This breaks text into smaller pieces so it can animate line by line.

---

## 4. Smooth Scrolling

```js
const smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    smoothTouch: 0.1,
});
```

This gives the whole page a smooth scrolling feel.

---

## 5. Header Animation

```js
function initHeader() {
    let tl = gsap.timeline({delay: 0.5});
    ...
}
```

This animates the logo and menu button into view when the page loads.

---

## 6. Intro Animation

```js
function initIntro() {
    let tl = gsap.timeline({delay: 1.2});
    ...
}
```

This animates:

* the title
* the intro text
* the two images

It also adds scroll-based motion to the hero section.

---

## 7. Scroll Links

```js
function initLinks() {
    links.forEach((link, index) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            gsap.to(window, {
                duration: 2,
                scrollTo: {
                    y: "#slide-" + (index + 2)
                }
            });
        });
    });
}
```

This makes the scroll buttons smoothly jump to the next slide.

---

## 8. Slide Animations

```js
function initSlides() {
    slides.forEach((slide) => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: slide,
                start: "40% 50%",
            }
        });
        ...
    });
}
```

Each slide animates when it enters the viewport.

The text, buttons, and scroll indicators all move in with staggered motion.

---

## 9. Parallax Images

```js
function initParallax() {
    slides.forEach((slide) => {
        let imageWrappers = slide.querySelectorAll('.col__image-wrap');
        gsap.fromTo(imageWrappers, {
            y: "-30vh"
        }, {
            y: "30vh",
            scrollTrigger: {
                trigger: slide,
                scrub: true
            }
        });
    });
}
```

This creates the parallax effect where images move at a different speed from the rest of the content.

---

## 10. Back to Top

```js
function scrollTop() {
    gsap.to(window, {
        duration: 2,
        scrollTo: {
            y: "#slide-0"
        }
    });
}
```

This smoothly returns the user to the top section.

---

## 11. Keyboard Navigation

```js
function initKeys() {
    document.addEventListener('keydown', (e) => {
        ...
    });
}
```

This adds keyboard control for moving through the page.

---

## 12. Initialization

```js
function init() {
    gsap.set(stage, { autoAlpha: 1 });
    initHeader();
    initIntro();
    initLinks();
    initSlides();
    initParallax();
    initKeys();
}
```

This runs all animation setup functions after the page is ready.

---

## How It Works

1. The page loads hidden
2. GSAP and ScrollSmoother are initialized
3. The header animates in
4. The intro section plays its entrance animation
5. Each slide animates as it scrolls into view
6. Images move with parallax motion
7. Scroll buttons and keyboard navigation move between sections
8. The footer ends the experience with a back-to-top link