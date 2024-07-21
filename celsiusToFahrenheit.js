
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
let celsius = 30;
let fahrenheit = celsiusToFahrenheit(celsius);

console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
