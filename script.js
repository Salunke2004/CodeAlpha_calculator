const display = document.getElementById("display");
let currentExpression = "";

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentExpression = "";
            display.value = "";
        } 
        else if (value === "=") {
            try {
                display.value = eval(currentExpression);
                currentExpression = display.value;
            } catch {
                display.value = "Error";
            }
        } 
        else if (value === "DEL") {
            currentExpression = currentExpression.slice(0, -1);
            display.value = currentExpression;
        } 
        else {
            currentExpression += value;
            display.value = currentExpression; // Show typed expression

            // Real-time result calculation
            try {
                const result = eval(currentExpression);
                console.log("Live result:", result); // You can log or use a tooltip
            } catch {
                // Ignore errors while typing incomplete expressions
            }
        }
    });
});