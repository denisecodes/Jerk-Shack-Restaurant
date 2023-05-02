# Jerk Shack Restaurant

## Table of contents

<ul>
  <li><a href="#overview">Overview</a>
    <ul>
      <li><a href="#the-project">The project</a></li>
      <li><a href="#project-setup">Project Setup</a></li>
      <li><a href="#files-tructure">File Structure</a></li>
      <li><a href="design">Design</a></li>
      <li><a href="wireframes">Wireframes</a></li>
      <li><a href="#links">Links</a></li>
    </ul>
  </li>
  <li><a href="#general-instructions">General Instructions</a>
    <ul>
      <li><a href="#built-with">Built with</a></li>
      <li><a href="#getting-started">Getting Started</a></li>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installing">Installing</a></li>
      <li><a href="#deployment">Deployment</a></li>
    </ul>
  </li>
  <li><a href="#authors">Authors</a></li>
  <li><a href="#acknowledgements">Acknowledgements</a></li>
  <li><a href="#contact">Contact Us</a></li>
</ul>

## Overview

### The project
A collaborative attempt to create a Caribbean Restaurant Website as part of Code First Girls' Coding Kickstarter Javascript Course. We built a web app to allow users to book a reservation, contact the restaurant and see a picture gallery of the dishes and restaurant. 

We used the [MosCow method](https://www.parkersoftware.com/blog/software-development-and-the-moscow-method/) to set out our goals for this project. </br>

<b>Must Have</b>
- [ ] Book a reservation
- [ ] Picture gallery of food and restaurant
- [x] Navagation Bar
- [ ] Responsiveness
- [x] Footer 
- [x] Contact page

<b>Should Have</b>
- [ ] Pre-order Food from the Menu
- [x] Lucky Draw Discount
- [ ] Web accessibility
- [x] Walk-In Queuing Tickets
- [ ] Payments

<b>Could Have</b>
- [ ] Feedback
- [ ] Meal kits
- [ ] Subscribe to Blog for Recipes
- [ ] Allergy Information
- [ ] Calorie Information
- [ ] Calorie Calculator
- [ ] FAQ

<b>Wont Have</b>
- [ ] Pop Up Messages (Events, Announcements)
- [ ] Customer Service Chat Bot
- [ ] Dark Mode

### Project Setup 

We used GitHub Desktop to collaborate and work asychronously. In our file structure, we have divided the main set up into two folders with <b>public</b> and <b>src</b>.

<b>public</b> 

This folder is where we have stored the icons and the base html file where we have imported Google Font and Font Awesome scripts to run the web app. 

<b>src</b> 

This folder is main folder where we have stored media files, components, containers and pages to run the website. 
<ul>
  <li>In the <b>assets</b> folder, you can find the images and any other media files used.</li>
  <li>In the <b>components</b> folder, you can find reusable components such as Navbar to render the web app.</li>
  <li>In the <b>container</b> folder, you can find sections to render parts of the website such as About Us on our homepage.</li>
  <li>In the <b>layout</b> folder, you can find a file named "MainLayout.js" used as the base file to render other pages in the website such as the Contact page.</li>
  <li>In the <b>pages</b> folder, you can find files used to render different pages in our web app.</li>
  <li>The App.js file is used to render the homepage of the website.</li>
  <li>The index.js file, we have implemented a router to create different paths to access different pages on the website.</li>
</ul>

### File Structure (To edit as this won't be the final one - code to get the tree directory: tree -L 4 -I node_modules)

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon-ipad-76x76.png
│   ├── apple-touch-icon-ipad-retina-152x152.png
│   ├── apple-touch-icon-iphone-60x60.png
│   ├── apple-touch-icon-iphone-retina-120x120.png
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── assets
│   │   ├── caribbean_food.jpeg
│   │   ├── constants
│   │   │   ├── data.js
│   │   │   ├── images.js
│   │   │   └── index.js
│   │   └── team.jpg
│   ├── components
│   │   ├── Button
│   │   │   └── Button.js
│   │   ├── Footer
│   │   │   ├── Footer.css
│   │   │   ├── Footer.jsx
│   │   │   ├── SubscribeButton.css
│   │   │   └── SubscribeButton.jsx
│   │   ├── Menuitem
│   │   │   ├── MenuItem.css
│   │   │   └── MenuItem.jsx
│   │   ├── Navbar
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.jsx
│   │   ├── SubHeading
│   │   │   └── SubHeading.jsx
│   │   └── index.js
│   ├── container
│   │   ├── AboutUs
│   │   │   ├── AboutUs.css
│   │   │   └── AboutUs.jsx
│   │   ├── Chef
│   │   │   ├── Chef.css
│   │   │   └── Chef.jsx
│   │   ├── Findus
│   │   │   └── FindUs.jsx
│   │   ├── Gallery
│   │   │   ├── Gallery.css
│   │   │   └── Gallery.jsx
│   │   ├── Header
│   │   │   ├── Header.css
│   │   │   ├── Header.jsx
│   │   │   ├── LuckyDrawButton.css
│   │   │   └── LuckyDrawButton.jsx
│   │   ├── Intro
│   │   │   ├── Intro.css
│   │   │   └── Intro.jsx
│   │   ├── Laurels
│   │   │   ├── Laurels.css
│   │   │   └── Laurels.jsx
│   │   ├── Menu
│   │   │   ├── SpecialMenu.css
│   │   │   └── SpecialMenu.jsx
│   │   └── index.js
│   ├── index.css
│   ├── index.js
│   ├── layout
│   │   └── MainLayout.js
│   ├── logo.svg
│   ├── pages
│   │   ├── Contact
│   │   │   ├── Contact.css
│   │   │   └── Contact.jsx
│   │   └── Queuing
│   │       ├── Queuing.css
│   │       └── Queuing.jsx
│   ├── reportWebVitals.js
│   └── setupTests.js
└── yarn.lock
```

### Design

<ul>
  <li><a href="https://colorhunt.co/">Color Hunt</a> was used to find a colour palette to suit the Caribbean theme of the website</li>
  <li><a href="https://fonts.google.com/">Google Fonts</a> was used to find fonts to suit the Caribbean theme</li>
  <li>Inspiration was mainly taken from <a href="https://www.cottons-restaurant.co.uk/">Cottons Restaurant</a>, a Caribbean Franchise Restaurant in London.</li>
</ul>


### Wireframes

<div>
  <img width="300" alt="homepage" src="https://user-images.githubusercontent.com/119052310/234862605-ddf7bf9e-f053-4a04-a34c-e30a6f2be27f.png">
  <img width="300" alt="menu" src="https://user-images.githubusercontent.com/119052310/234862635-47a940cc-a3e8-4e76-9d3b-f0efce6632b5.png">
  <img width="300" alt="menu" src="https://user-images.githubusercontent.com/119052310/234864628-9e3f09ad-657d-4d2f-9f30-975425cf9854.png">  
</div>

### Links
<ul>
  <li><a href="https://github.com/denisecodes/CFG-Javascript-Group-Project">Repository</li>
  <li><a href="">Live Site URL</a></li>
</ul> 

## General Instructions

### Built with
<ul>
  <li><a href="https://www.figma.com/">Figma</a> - A cloud-based design tool</li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">HTML5</a> - The web framework used</li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a> - The styling language used</li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a> - The programming language used</li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">React</a> - The front-end framework used</li>
</ul>

### Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
@testing-library/jest-dom@5.16.5
@testing-library/react@13.4.0
@testing-library/user-event@13.5.0
bootstrap@5.2.3
react-bootstrap@2.7.4
react-dom@18.2.0
react-router-dom@6.10.0
react-router-hash-link@2.4.3
react-scripts@5.0.1
react@18.2.0
web-vitals@2.1.4
```
### Installing

Our application is using npm for package management. To install all the necessary package follow these steps:
1. Install dependencies
```
npm install
```

Then launch the server

```
npm run start
```

The page will run in development mode in [http://localhost:3000](http://localhost:3000) where you can view it in your browser.

### Deployment

To deploy the package, enter the command:
```
npm run build
```

## Authors
<ul>
  <li><b>Denise Chan</b> <i>-- Developer -</i> <a href="https://github.com/denisecodes">denisecodes</a></li>
  <li><b>Grace Mavudzi</b> <i>-- Developer -</i> <a href="https://github.com/YourstrulyGiGi">YourstrulyGiGi</a></li>
</ul>

