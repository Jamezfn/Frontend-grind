# 3D Isometric Social Icons

## Overview

This project creates a **3D isometric social media icon list** using pure HTML and CSS.

It features:

* Perspective-based 3D transform
* Isometric skew effect
* Shadow depth illusion
* Hover color transitions
* Platform-specific brand colors

---

## What This Code Does

This project builds:

* A centered horizontal icon list
* 3D tilted square tiles
* Depth simulation using pseudo-elements
* Smooth hover lift animation
* Unique color themes per icon

When hovered:

* Icon tile lifts
* Shadow grows
* Background changes to brand color
* Icon turns white

---

## Technologies Used

* HTML5
* CSS3
* CSS Transforms
* CSS Perspective
* Pseudo-elements (`::before`, `::after`)
* nth-child selectors
* Font Awesome Icons

---

# File Structure

```
index.html   → Icon structure
index.css    → 3D effect styling
```

---

# HTML Structure Breakdown

```html
<ul>
  <li><a><i class="fa fa-youtube"></i></a></li>
  ...
</ul>
```

### Explanation

* `<ul>` → Container for icons
* `<li>` → Each icon item
* `<a>` → The 3D tile
* `<i class="fa ...">` → Icon from Font Awesome

Simple structure. The magic is in CSS.

---

# CSS Breakdown

---

## Centering the List

```css
ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
}
```

This:

* Moves list to center of screen
* Uses flexbox for horizontal layout

---

## The 3D Tile Effect

```css
ul li a {
    transform-style: preserve-3d;
    transform: perspective(1000px)
               rotate(-30deg)
               skew(25deg)
               translate(0,0);
}
```

### What’s Happening Here

* `perspective(1000px)` → Creates depth
* `rotate(-30deg)` → Tilts tile
* `skew(25deg)` → Creates isometric angle
* `box-shadow` → Simulates depth

This gives the fake 3D cube illusion.

---

## The Side Faces (Fake Depth)

### Left Face

```css
ul li a::before
```

### Bottom Face

```css
ul li a::after
```

These pseudo-elements create:

* Left wall
* Bottom wall

They are skewed using:

```css
skewY(-45deg)
skewX(-45deg)
```

That’s what makes it look like a 3D block.

Without them, it would just be a flat square.

---

## Hover Lift Effect

```css
ul li a:hover {
  transform: perspective(1000px)
             rotate(-30deg)
             skew(25deg)
             translate(20px,-20px);
}
```

This moves the tile upward diagonally.

At the same time:

```css
box-shadow:-50px 50px 50px rgba(0,0,0,.5);
```

Shadow increases → stronger depth illusion.

---

## Icon Color Transition

```css
ul li a:hover .fa {
  color: #fff;
}
```

Icons switch from dark to white on hover.

Smooth transition thanks to:

```css
transition: .5s;
```

---

## Brand Colors Using nth-child

Example:

```css
ul li:hover:nth-child(1) a {
    background-color: #cd201f;
}
```

Each index corresponds to a platform:

1 → YouTube
2 → Bitbucket
3 → Instagram
4 → Tumblr
5 → Skype
6 → Facebook
7 → GitHub
8 → Pinterest

Each platform gets:

* Main color
* Darker left face
* Lighter bottom face

That makes the 3D effect believable.

---

# How It Works (Visual Flow)

1. Page loads
2. Icons appear tilted in 3D
3. User hovers one tile
4. Tile lifts diagonally
5. Shadow deepens
6. Background changes to brand color
7. Icon turns white

Smooth. Clean. Interactive.

---

# Features

* 3D isometric illusion
* Hover lift animation
* Brand-specific colors
* Pseudo-element depth trick
* No JavaScript
* Lightweight implementation

---

# Advanced Concepts Used

* `perspective()`
* `transform-style: preserve-3d`
* `skew()` for isometric effect
* Pseudo-elements for fake 3D faces
* `nth-child()` targeting
* Smooth transitions
* Box-shadow depth simulation

