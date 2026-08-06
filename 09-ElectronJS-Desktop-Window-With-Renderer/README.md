# Electron Desktop Window

A simple Electron.js desktop application that creates a desktop window using **HTML, CSS, JavaScript, and Electron**.

## Features

* Creates a desktop application window
* Loads a local HTML file
* Simple UI with HTML & CSS
* JavaScript-based interaction using `renderer.js`

## Project Structure

```text
.
├── main.js
├── renderer.js
├── index.html
├── style.css
├── package.json
├── package-lock.json
└── .gitignore
```

> **Note:** The `node_modules` folder is **not included** in this repository because it is very large and can be regenerated using npm.

## Prerequisites

Make sure you have installed:

* Node.js
* npm (comes with Node.js)

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project folder:

```bash
cd <project-folder>
```

Install all required dependencies:

```bash
npm install
```

This command will automatically recreate the `node_modules` folder.

## Run the Project

Start the Electron application:

```bash
npm start
```

The desktop window will open automatically.

## Technologies Used

* Electron.js
* HTML5
* CSS3
* JavaScript (ES6)

## Notes

* `node_modules` is excluded from Git using `.gitignore`.
* If you clone this project, always run `npm install` before `npm start`.

## License

This project is created for learning and educational purposes.
