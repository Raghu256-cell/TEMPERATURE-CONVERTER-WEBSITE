function convertTemperature() {
    let inputTemp = parseFloat(document.getElementById("temperatureInput").value);
    let inputUnit = document.getElementById("inputUnit").value;
    let resultText = "";

    if (isNaN(inputTemp)) {
        resultText = "Please enter a valid number!";
    } else {
        let celsius, fahrenheit, kelvin;

        if (inputUnit === "Celsius") {
            celsius = inputTemp;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
        } else if (
