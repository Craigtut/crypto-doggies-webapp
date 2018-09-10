# Crypto Doggies Web app

A rediculous web app for viewing breeds of dogs - https://crypto-doggies.firebaseapp.com/

This app pulls down a list of dog breeds and then shows images associated with each breed. All data is pulled down from a [Dog API](http://dog.ceo/dog-api/) and names are pulled down from a Name API. It has a fun Crypto theme to it. Why? - because crypto everything.

## Features

* Mobile Ready and Responsive
* View images by breed or filter down to a sub-breed.
* Ghost content loading screens to decrease perceived loading times
  * On Breed List loading
  * On dog image's loading

## Installation
To install, download and run in project directory
```
yarn install
```
or npm...


## Development
To run locally in dev mode:

```
npm run dev
```

## Production Build
To build for production:

```
npm run build
```

## Build and Deploy
To build for production & deploy to firebase:

```
npm run deploy
```
* note requires access to firebase project