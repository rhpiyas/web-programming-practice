# Lab Performance 1 - Checkbox Auto Selection

This project was developed as **Lab Performance 1** for the **Desktop and Web Programming** course.

## Objective

The task is to automatically select the correct checkbox based on the digits of a given student ID (or any numeric string).

For each digit in the text, the corresponding checkbox in that row is automatically checked using JavaScript.

## Technologies Used

- HTML5
- JavaScript (DOM Manipulation)

## Project Structure

```
lab-performance-1/
│
├── index.html
├── index.js
└── README.md
```

## How It Works

1. Reads the numeric string from the HTML element.
2. Stores the string in JavaScript.
3. Finds every question row.
4. Selects the checkbox that matches each digit automatically.

Example:

Student ID:

```
581307924615830
```

Automatically checks:

- Row 1 → 5
- Row 2 → 8
- Row 3 → 1
- Row 4 → 3
- ...

## JavaScript Logic

The script performs the following steps:

- Reads the text using `getElementById()`
- Gets all question containers using `getElementsByClassName()`
- Finds all checkboxes inside each question
- Uses the digit as the checkbox index
- Marks the corresponding checkbox as checked

## Important Note

The JavaScript logic depends on the current HTML structure.

If any of the following are changed:

- Element IDs
- Class names
- HTML structure
- Number or order of checkboxes

then the DOM selection code inside `index.js` must also be updated accordingly.

The overall logic remains the same, but the element selection methods may need to be modified to match the new HTML structure.

## Author

**Rakib Hasan Piyas**  
Department of Software Engineering  
Daffodil International University
