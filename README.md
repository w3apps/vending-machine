# vending-machine

## Using the application
- if you wan to purchase any product you first need to insert money, this can be achieved by clicking on the coins or notes on the right side;
- after you have some money you just need to enter the code of the product you want by click each digit individually from the keypad.

## Requirements
- node v6.9.x (tested with 6.9.1 on OSX).

## Installation
- clone the repository;
- go to the project folder;
- from a terminal run `npm run build` - this will generate a `dist` folder that contains the compiled files (if running on a windows the terminal window may require Administrator permissions);
- after the build is completed run `npm run start` - this will create a dummy server using `http-server` to serve the static files;
- in a browser open `http://localhost:8080/dist`;
- if you want to avoid having `/dist` in the path run `npm install -g http-server`, go to the `/dist` folder run `http-server` and open `http://localhost:8080` in the browser;

## Development
- if you want to make changes to the project it's better to enable the webpack `watch` flag in `./webpack/build.js` so that the files are re-built on every change.

