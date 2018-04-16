# Babe Lords Website

A full MERN stack web application for the band Babe Lords.   

## Requirements

This repository requires:

* Node.js <6. Please see [here](https://johnpapa.net/multiple-versions-of-node-with-n/) a tutorial on how to work with multiple Node versions.
* An external Mongo database.

## Getting Started

### 1. Clone the repository

```sh
git clone git@github.com:hmhudson/babelords-react.git
cd babelords-react
```

### 2. Install dependencies

```sh
npm install
```

### 3. Create the .env file and other settings.

Use template from .env.example:

```sh
JWT_SECRET=
JWT_ISSUER=
JWT_AUDIENCE=
```

### 4. Start development live-reload server

```sh
npm run dev
```
### 5. Navigate to development site

```sh
localhost:8080
```

# Features

## Blog
A simple blog page with the ability for users to comment on post made by an admin.

User view:
![Alt text](https://i.imgur.com/mxEGq02.png "Blog Page")

Admin view:
![Alt text](https://i.imgur.com/6emeqn3.png "Blog Page with admin view")

## Babes
An about page for the band
![Alt text](https://i.imgur.com/DkoqTEY.png "About Page")

## Merch
A merchandise page powered by the Etsy API allowing users to see view what is in the Etsy store and navigate to the site to purchase.
![Alt text](https://i.imgur.com/kAKdDKF.png "Merchandise Page")

## Shows
A show calendar powered by React-Big-Calendar that allows users to view upcoming shows and links to event pages on Facebook.
![Alt text](https://i.imgur.com/ZsQskk9.png "Show Calendar")

## Gallery
A gallery powered by React-Image-Lightbox that allows users to browse images.
![Alt text](https://i.imgur.com/wrGmItj.png "Image Gallery")

## Music
A page that allows users to stream music that is powered by Bandcamp's embedded music player.
![Alt text](https://i.imgur.com/PW9a80x.png "Music Page")

## Videos
A page that allows users to watch videos that are powered by YouTube's embedded video player.
![Alt text](https://i.imgur.com/QewVLZ4.png "Videos Page")

## Contact
A page that features links to interact with the band such as Instagram, Facebook, and through email.
![Alt text](https://i.imgur.com/LG0EFhC.png "Contact Page")

##  User Features
A user can create an account to comment on blog posts.

### User Registration
Standard registration page with HTML5 form validation.
![Alt text](https://i.imgur.com/0EkcCl6.png "Registration Page")

### User Login
Standard login page with HTML5 form validation.
![Alt text](https://i.imgur.com/FaSrAC7.png "Login Page")
