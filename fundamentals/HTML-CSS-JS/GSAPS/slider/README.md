# Voyager Slider Project

## Overview

This project is a **3D card slider with animated background and changing info text** built using **HTML, CSS, and JavaScript**.

It shows one main card in front, with the previous and next cards positioned behind it.
When the user clicks the arrows, the cards, background image, and info text all switch in sync.
It also includes a loading screen that waits for images before showing the slider.

---

## What This Code Does

This project implements:

* A **card slider**
* A **blurred animated background**
* A **previous / current / next card system**
* A **matching info panel**
* A **loading screen**
* Smooth transitions using **GSAP**

It is a strong example of **DOM manipulation, animation, and layered UI design**.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* GSAP
* imagesLoaded
* Flexbox
* CSS Variables
* Google Fonts

---

## File Structure

```bash
index.html   → Main slider structure
styles.css   → Slider layout and animation styling
main.js      → Card swapping and animation logic
images       → Background and card images
```

---

## HTML Breakdown

### Main Layout

```html
<div class="app">
    <div class="app__bg">
        <div class="app__bg__image current--image">
            <img src="..." alt="" />
        </div>
        <div class="app__bg__image next--image">
            <img src="..." alt="" />
        </div>
        <div class="app__bg__image previous--image">
            <img src="..." alt="" />
        </div>
    </div>
</div>
```

This is the background layer.
It holds three images:

* current image
* next image
* previous image

These background images change together with the cards.

---

### Card Slider

```html
<div class="cardList">
    <button class="cardList__btn btn btn--left">
        <div class="icon">
            <span class="material-symbols-outlined">keyboard_arrow_left</span>
        </div>
    </button>

    <div class="cards__wrapper">
        <div class="card current--card">
            <div class="card__image">
                <img src="..." alt="" />
            </div>
        </div>
        <div class="card next--card">
            <div class="card__image">
                <img src="..." alt="" />
            </div>
        </div>
        <div class="card previous--card">
            <div class="card__image">
                <img src="..." alt="" />
            </div>
        </div>
    </div>

    <button class="cardList__btn btn btn--right">
        <div class="icon">
            <span class="material-symbols-outlined">keyboard_arrow_right</span>
        </div>
    </button>
</div>
```

### Structure Meaning

* `.cardList`
  Holds the slider cards and navigation buttons.

* `.btn--left` and `.btn--right`
  Move the slider left or right.

* `.cards__wrapper`
  Wraps all cards and gives them perspective.

* `.current--card`
  The visible front card.

* `.next--card`
  The card that will appear next.

* `.previous--card`
  The card behind the current one.

---

### Info Section

```html
<div class="infoList">
    <div class="info__wrapper">
        <div class="info current--info">
            <h1 class="text name">James</h1>
            <h4 class="text location">Kenya</h4>
            <p class="text description">Fort of the Sun</p>
        </div>
        <div class="info next--info">
            <h1 class="text name">Machu Jamez</h1>
            <h4 class="text location">Peru</h4>
            <p class="text description">Adventure is never far away</p>
        </div>
        <div class="info previous--info">
            <h1 class="text name">Chamonix Jamez</h1>
            <h4 class="text location">France</h4>
            <p class="text description">Let your dreams come true</p>
        </div>
    </div>
</div>
```

This section displays the title, location, and description for each card.

---

### Loading Screen

```html
<div class="loading__wrapper">
    <div class="loader--text">Please Wait...</div>
    <div class="loader">
        <span></span>
    </div>
</div>
```

This shows a loading overlay until all images are ready.

---

## CSS Breakdown

## 1. Global Variables

```css
:root {
  --card-width: 200px;
  --card-height: 300px;
  --card-transition-duration: 800ms;
  --card-transition-easing: ease;
}
```

These CSS variables control the card size and animation timing.

---

## 2. Page Setup

```css
body {
    background: rgba(0, 0, 0, 0.787);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
```

This centers the entire slider and hides overflow so the animation stays clean.

---

## 3. Background Layer

```css
.app__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -5;
    filter: blur(8px);
    pointer-events: none;
    user-select: none;
    overflow: hidden;
}
```

This creates the blurred full-screen background.

The `::before` overlay darkens it so the cards and text stand out better.

---

## 4. Background Images

```css
.app__bg__image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) translateX(var(--image-translate-offset, 0));
    width: 180%;
    height: 180%;
    overflow: hidden;
    transition: transform 1000ms ease, opacity 1000ms ease;
}
```

Each background image is positioned in the center and shifted slightly left or right depending on whether it is current, next, or previous.

---

## 5. Card Container

```css
.cardList {
  position: absolute;
  width: calc(3 * var(--card-width));
  height: auto;
}
```

This sets the space where the slider cards live.

---

## 6. Navigation Buttons

```css
.cardList__btn {
    --btn-size: 35px;
    width: var(--btn-size);
    height: var(--btn-size);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
}
```

These are the arrow buttons placed on the left and right side of the cards.

---

## 7. Cards

```css
.card {
    --card-translateY-offset: 100vh;
    position: absolute;
    left: 50%;
    top: 50%;
    display: inline-block;
    border: 0.1px solid silver;
    transform: translate(-50%, -50%)
                translateX(var(--card-translateX-offset))
                translateY(var(--card-translateY-offset))
                rotateY(var(--card-rotation-offset))
                scale(var(--card-scale-offset));
    width: var(--card-width);
    height: var(--card-height);
    transition: transform var(--card-transition-duration) var(--card-transition-easing);
    user-select: none;
}
```

This is the core card styling.

Each card can move, rotate, and scale using CSS variables controlled by JavaScript.

---

## 8. Card States

```css
.card.current--card {
    --card-translateX-offset: 0;
    --card-scale-offset: 1.2;
    --opacity: 0.8;
}

.card.previous--card {
    --card-translateX-offset: calc(-1 * var(--card-width) * 1.1);
    --card-rotation-offset: 25deg;
}

.card.next--card {
    --card-translateX-offset: calc(var(--card-width) * 1.1);
    --card-rotation-offset: -25deg;
}
```

These classes control where each card sits.

* current card = centered and larger
* previous card = left side
* next card = right side

---

## 9. Info Panel

```css
.infoList {
    position: absolute;
    width: calc(3 * var(--card-width));
    height: var(--card-height);
    pointer-events: none;
}
```

This keeps the text section aligned with the cards.

The text is not clickable, so `pointer-events: none` is used.

---

## 10. Loading Screen

```css
.loading__wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    z-index: 200;
}
```

This covers the whole screen before the slider is ready.

---

## JavaScript Breakdown

## 1. Button Setup

```js
const buttons = {
	prev: document.querySelector(".btn--left"),
	next: document.querySelector(".btn--right")
};
```

This grabs the left and right navigation buttons.

---

## 2. Main Elements

```js
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");
const cardInfosContainerEl = document.querySelector(".info__wrapper");
```

These select the card container, background container, and info container.

---

## 3. Swapping Cards

```js
buttons.next.addEventListener("click", () => swapCards("right"));
buttons.prev.addEventListener("click", () => swapCards("left"));
```

Clicking the arrows changes the slider direction.

---

## 4. Card Swap Logic

The `swapCards(direction)` function:

* gets the current, previous, and next cards
* gets the matching background images
* updates the info text
* changes classes
* updates z-index
* rebinds events to the new current card

This is what keeps everything synchronized.

---

## 5. Info Animation

The `changeInfo(direction)` part uses **GSAP** to animate the text out and in smoothly.

It disables button clicks briefly during the animation so things do not break.

---

## 6. Pointer Interaction

```js
function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();

	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};

	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
}
```

This adds a slight tilt effect when the user moves the pointer over the current card.

---

## 7. Resetting the Card

```js
function resetCardTransforms(e) {
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
}
```

This returns the card to its normal position when the pointer leaves.

---

## 8. Initial Load

```js
function init() {
	let tl = gsap.timeline();
	tl.to(cardsContainerEl.children, {
		...
		"--card-translateY-offset": "0%",
	})
}
```

This animates the cards into view when the page loads.

---

## 9. Image Loading

```js
const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	...
};
```

This waits for all images to load, updates the progress bar, then hides the loading screen and starts the slider.

---

## How It Works

1. The page loads
2. The loader waits for images
3. The slider cards animate into view
4. The user clicks left or right
5. The current card, info text, and background all shift together
6. The new current card becomes active
7. The user can also tilt the current card with the pointer