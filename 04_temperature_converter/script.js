// TEMPERATURE CONVERTER

const fahrenheitInput = document.getElementById("fahrenheit");
const celsiusInput = document.getElementById("celsius");

// Convert Fahrenheit to Celsius
fahrenheitInput.addEventListener("input", () => {
   const fVal = parseFloat(fahrenheitInput.value);
   if (!isNaN(fVal)) {
        const cVal = (fVal - 32) * (5 / 9);
        celsiusInput.value = parseFloat(cVal.toFixed(2));
   }else{
       celsiusInput.value = "";
   }
});

// Convert Celsius to Fahrenheit
celsiusInput.addEventListener("input", () => {
    const cVal = parseFloat(celsiusInput.value);
    if (!isNaN(cVal)) {
        const fVal = (cVal * 9 / 5) + 32;
        fahrenheitInput.value = parseFloat(fVal.toFixed(2));
    }else{
        celsiusInput.value = "";
    }
});