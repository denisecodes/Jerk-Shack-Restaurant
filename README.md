# Jerk Shack Restaurant

## Table of contents

<ul>
  <li><a href="#overview">Overview</a>
    <ul>
      <li><a href="#project">The project</a></li>
      <li><a href="#setup">Project Setup</a></li>
      <li><a href="#filestructure">File Structure</a></li>
      <li><a href="design">Design</a></li>
      <li><a href="wireframes">Wireframes</a></li>
      <li><a href="#links">Links</a></li>
    </ul>
  </li>
  <li><a href="#instructions">General Instructions</a>
    <ul>
      <li><a href="#built">Built with</a></li>
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

<b>Should Have</b>
- [ ] Pre-order Food from the Menu
- [ ] Lucky Draw Discount
- [ ] Web accessibility
- [ ] Walk-In Queuing Tickets
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

We used GitHub Desktop to collaborate on work asychronously. In our file structure, we have divided the main set up into two folders with <b>public</b> and <b>src</b>.

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
│   │   ├── G.png
│   │   ├── award01.png
│   │   ├── award02.png
│   │   ├── award03.png
│   │   ├── award05.png
│   │   ├── bg.png
│   │   ├── caribbean_food.jpeg
│   │   ├── chef.png
│   │   ├── constants
│   │   │   ├── data.js
│   │   │   ├── images.js
│   │   │   └── index.js
│   │   ├── findus.png
│   │   ├── gallery01.png
│   │   ├── gallery02.png
│   │   ├── gallery03.png
│   │   ├── gallery04.png
│   │   ├── knife.png
│   │   ├── laurels.png
│   │   ├── logo.png
│   │   ├── meal.mp4
│   │   ├── menu.png
│   │   ├── overlaybg.png
│   │   ├── quote.png
│   │   ├── sign.png
│   │   ├── spoon.png
│   │   ├── spoon.svg
│   │   ├── team.jpg
│   │   └── welcome.png
│   ├── components
│   │   ├── Footer
│   │   │   ├── FooterOverlay.css
│   │   │   ├── FooterOverlay.jsx
│   │   │   ├── Newsletter.css
│   │   │   └── Newsletter.jsx
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
│   │   ├── Footer
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Gallery
│   │   │   ├── Gallery.css
│   │   │   └── Gallery.jsx
│   │   ├── Header
│   │   │   ├── Button.css
│   │   │   ├── Button.jsx
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
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
│   │   └── Contact
│   │       ├── Contact.css
│   │       └── Contact.js
│   ├── reportWebVitals.js
│   └── setupTests.js
└── yarn.lock
```

### Design

<ul>
  <li><a href="https://www.figma.com/">Figma</a> was used to build initial wireframes for the website.</li>
  <li><a href="https://colorhunt.co/">Color Hunt</a> was used to find a colour palette to suit the Caribbean theme of the website</li>
  <li>Website inspiration was mainly taken from <a href="https://www.cottons-restaurant.co.uk/">Cotton</a>, a Caribbean Restaurant.</li>
</ul>


### Wireframes

<div>
  <img width="360" alt="homepage" src="https://user-images.githubusercontent.com/119052310/234862605-ddf7bf9e-f053-4a04-a34c-e30a6f2be27f.png">
  <img width="360" alt="menu" src="https://user-images.githubusercontent.com/119052310/234862635-47a940cc-a3e8-4e76-9d3b-f0efce6632b5.png">
  <img width="360" alt="menu" src="https://user-images.githubusercontent.com/119052310/234864628-9e3f09ad-657d-4d2f-9f30-975425cf9854.png">  
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
TO BE FILLED!

### Installing

Before you can run the app, you will need to install the node_modules folder by running the following in your terminal:

```
npm install
```

Then you can run the app by typing the following in your terminal:

```
npm run start
```

The page will run in development mode in [http://localhost:3000](http://localhost:3000) where you can view it in your browser.


<!-- Comment out original read me from react  -->
<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
