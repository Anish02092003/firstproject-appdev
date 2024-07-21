
function calculator(m, n, operator) {
    switch (operator) {
        case '+':
            return m + n;
        case '-':
            return m - n;
        case 'x':
            return m * n;
        case '/':
            if (m !== 0) {
                return m / n;
            } else {
                return "Division by zero is not allowed";
            }
        case '%':
            return m % n;
        default:
            return "Invalid operator";
    }
}
let m = 10;
let n = 5;

console.log(`Sum: ${calculator(m, n, '+')}`);
console.log(`Subtraction: ${calculator(m, n, '-')}`);
console.log(`Multiplication: ${calculator(m, n, 'x')}`);
console.log(`Division: ${calculator(m, n, '/')}`);
console.log(`Remainder: ${calculator(m, n, '%')}`);
