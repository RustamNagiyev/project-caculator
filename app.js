      // Get the display element
      const display = document.getElementById("display");

      // Define a variable to store the expression
      let expression = "";

      // Define a function to clear the display
      function clearDisplay() {
        expression = "";
        display.value = "0";
      }

      // Define a function to delete the last character of the expression
      function deleteLast() {
        expression = expression.slice(0, -1);
        if (expression === "") {
            display.value = "0";
        } else {
            display.value = expression;
        }
        
      }

      // Define a function to add a digit to the expression
      function addDigit(digit) {
        if (expression === "0") {
            expression = digit.toString();
        } else {
            expression += digit.toString();
        }
        display.value = expression; 
      }

      // Define a function to add an operator to the expression
      function addOperator(operator) {
        if (expression === "") {
            return;
        }
        if (expression.endsWith("+") || expression.endsWith("-") || expression.endsWith("*") || expression.endsWith("/")) {
            expression = expression.slice(0, -1);
        }
        expression += operator;
        display.value = expression; 
      }

      // Define a function to add a decimal point to the expression
      function addDecimal() {
        if (!expression.includes(".")) {
            expression += ".";
            display.value = expression;
        }
      }

      // Define a function to calculate the result of the expression
      function calculate() {
        const result = eval(expression);
        expression = result.toString();
        display.value = expression;
      }