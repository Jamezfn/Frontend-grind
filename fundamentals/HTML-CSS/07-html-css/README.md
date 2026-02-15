# Live Match Card UI

##  Overview

This project is a **modern live football match card interface** built using pure HTML and CSS.

It replicates a sports betting style match display showing:

* Match status (Live)
* League information
* Team logos and names
* Live score
* Match time elapsed
* Referee details
* Betting odds
* Call-to-action button

No JavaScript is used — the layout and positioning are fully controlled with CSS.

---

## What This Code Does

This project creates:

* A centered match card
* A 3-column layout (Home – Details – Away)
* Clean card-style UI with shadows
* Circular team logos with layered effect
* Highlighted leading score
* Styled betting options
* Floating “Place a bet” button

It demonstrates structured layout design and component-style CSS organization.

---

## Technologies Used

* HTML5
* CSS3
* Flexbox
* CSS Variables
* Absolute & Relative Positioning
* Box Shadows

---

# File Structure

```
index.html   → Match card structure
index.css    → Styling and layout
```

---

# HTML Structure Breakdown

## Main Layout

```html
<div class="container">
    <div class="match">
        <div class="match-header"></div>
        <div class="match-content"></div>
    </div>
</div>
```

### Structure Explanation

* `.container` → Centers the entire card
* `.match` → Main card wrapper
* `.match-header` → Top section (Live badge, league, icons)
* `.match-content` → Main 3-column layout

---

## 3-Column Layout

Inside `.match-content`:

```html
<div class="column">Home Team</div>
<div class="column">Match Details</div>
<div class="column">Away Team</div>
```

Each column takes:

```css
width: calc(100% / 3);
```

This ensures equal width sections.

---

# CSS Breakdown

---

## Page Centering

```css
.container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

### What This Does

* Makes container fill entire viewport
* Uses flexbox to center the card vertically and horizontally

Clean and efficient.

---

## Card Styling

```css
.match {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0,0,0,0.1);
}
```

### Effect

* White card background
* Soft rounded corners
* Subtle shadow for depth

Modern UI look.

---

## Header Layout

```css
.match-header {
    display: flex;
    border-bottom: 2px solid rgba(0,0,0,0.1);
}
```

Inside it:

* Live badge → left (auto margin push)
* League info → center
* Action buttons → right

Flexbox handles spacing automatically.

---

## Live Badge

```css
.match-status {
    background-color: #fdeaec;
    color: #d72641;
}
```

Includes a small circular indicator using:

```css
.match-status::before {
    content: "";
    border-radius: 50%;
}
```

Creates that “live dot” effect.

---

## Team Logo Design

```css
.team-logo {
    border-radius: 50%;
    box-shadow: 0 0 0 15px #f3f5f9;
}
```

### Why It Looks Good

* `border-radius: 50%` makes it circular
* Outer box-shadow creates a soft ring
* Logo centered using flexbox

Very clean layering trick.

---

## Score Highlight

```css
.match-score-number--leading {
    color: #623ce6;
}
```

The leading team gets a theme color highlight.

This improves visual hierarchy instantly.

---

## Absolute Positioned CTA Button

```css
.match-bet-place {
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
}
```

Important:

`.match-content` has:

```css
position: relative;
```

This makes the button position relative to the card, not the page.

Without this, layout breaks.

---

# How It Works (User Flow)

1. Page loads
2. Card is centered
3. Live badge immediately visible
4. Teams and score displayed clearly
5. Betting options appear below score
6. CTA button floats slightly outside bottom of card

The UI mimics real sports betting apps.

---

# Features

* Clean card-based UI
* Flexbox 3-column layout
* Responsive alignment structure
* Themed color system using CSS variables
* Circular logo styling
* Absolute positioned CTA button
* No JavaScript required

---

# Advanced Concepts Used

* CSS Variables (`:root`)
* `calc()` for equal width layout
* `position: relative` + `absolute`
* `transform: translateX(-50%)`
* Pseudo-elements (`::before`)
* Flexbox alignment logic
* Box-shadow layering