"use strict";

let input = document.getElementById("input");
      let output = document.getElementById("output");
      let expression = "";

      function addInput(value) {
        expression += value;
        input.value = expression;
        calculate();
      }

      function addOperator(operator) {
        if (operator === '%') {
				expression = `${eval(expression)/100}`
				input.value = expression;
        output.value = expression;
				return;
			}
			
			if (operator !== "=") {
				expression += operator;
				input.value = expression;
			} else {
				calculate("=");
			}
		}
      function reset() {
        expression = "";
        input.value = 0;
        output.value = expression;
      }

      async function calculate(op) {
        try {
          let result = await new Promise((resolve) =>
            setTimeout(() => resolve(eval(expression)), 0)
          );
          if (op === "=") input.value = result;
          output.value = result;
        } catch (error) {
          console.log(error);
        }
      }