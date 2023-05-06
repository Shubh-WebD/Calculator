# Calculator
Trainee Engineer Assignment

README

Introduction:
This is a simple web-based calculator application that performs basic arithmetic operations (addition, subtraction, multiplication, division, percentage, and power).

How to run the app:
To run the app, simply open the HTML file in any modern web browser.
- Double click on the index.html file, and it should open in your default web browser.

How to use the app:
- The app allows users to enter expressions by clicking on the buttons.
- Users can enter numbers 0 to 9, decimal point, and parentheses ().
- Users can perform basic arithmetic operations (+, -, *, /), power (**), and percentage (%).
- Users can clear the input area by clicking on the AC button.
- Users can get the result of the expression by clicking on the equal (=) button.

Decisions taken and explanation:
- I have used HTML, CSS, and JavaScript to build this application.
- The UI design is minimalistic, to avoid any clutter and to give a more professional look.
- The input field is read-only, to prevent users from editing the expression manually.
- The output field displays the result of the expression.
- I have added functionality to allow users to perform percentage calculations (%).
- Also added functionality to allow users to calculate powers (^).
- Avoided using eval() function, as it can be a security risk. Instead, I have written my own calculate() function that evaluates the expression using regular expressions and the built-in JavaScript eval() function.
-Moreover,  I have included the "use strict" directive in the JavaScript code to enable strict mode, which helps to catch coding errors and enforce best practices.
- Used "let" and "const" to declare variables, instead of "var", to prevent scope issues.
- Added error handling to display an error message if the user enters an invalid expression.

Thank you for using this calculator app.
