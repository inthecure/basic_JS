const todos = [];
// dividerPad is 3 to match the output format: "0: [string]""
const divider = "*";
const dividerPad = 3;
let dividerCount = 0;

run = document.getElementById("run");
run.addEventListener("click", function(){
    // Reset input and mainPrompt at every button click
    let input = "";    
    let mainPrompt = "What would you like to do?";

    while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q") {
        input = prompt(mainPrompt);
        // Reset mainPrompt in case user enters invalid command
        // And prompt is modified with an error message
        mainPrompt = "What would you like to do?";

        if (input.toLowerCase() === "new") {
            let newTodo = prompt("Enter new To Do");

            // Modify divider based on max todo length
            let todoLength = newTodo.length;
            if (dividerCount < todoLength) {
                dividerCount = todoLength;
            }

            todos.push(newTodo);
            console.log(`${newTodo} added to the list`)
        }
        else if (input.toLowerCase() === "list") {
            console.log(divider.repeat(dividerCount + dividerPad));

            for (let i = 0; i < todos.length; i++) {
                console.log(`${i}: ${todos[i]}`);

            }

            console.log(divider.repeat(dividerCount + dividerPad));
        }
        else if (input.toLowerCase() === "delete") {
            let index = prompt("What todo index do you want to delete?");

            // Check if user input is a number
            if (!Number.isInteger(parseInt(index))) {
                console.log(`You entered ${index}, which is not a valid number`);
            }
            // Check if user input isn't negative
            else if (parseInt(index) < 0) {
                console.log(`You entered ${index}. Please enter 0 or above`);
            }
            // Check if user input is in range of array indexes
            else if (parseInt(index) > (todos.length - 1)) {
                console.log(`You entered ${index}. That is not a valid todo index`);
            }
            // Remove element from array if all conditions met
            else {
                let deleted = todos.splice(index, 1);
                console.log(`Todo ${deleted} removed`);
            }
        }
        else {
            mainPrompt = "Not a valid command. " + mainPrompt;
        }
    }

    console.log("Okay, you quit the app");
});