document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");

    const redInput = document.getElementById("red-input");
    const greenInput = document.getElementById("green-input");
    const blueInput = document.getElementById("blue-input");

    const colorBox = document.getElementById("color-box");
    const colorCode = document.getElementById("color-code");
    const colorPicker = document.getElementById("color-picker");

    function rgbToHex(r, g, b) {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    }

    function hexToRgb(hex) {
        let bigint = parseInt(hex.substring(1), 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    }

    function updateColor() {
        let r = parseInt(red.value);
        let g = parseInt(green.value);
        let b = parseInt(blue.value);

        let hex = rgbToHex(r, g, b);
        
        colorBox.style.backgroundColor = hex;
        colorCode.textContent = hex;
        colorPicker.value = hex;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function updateSliders() {
        red.value = redInput.value;
        green.value = greenInput.value;
        blue.value = blueInput.value;
        updateColor();
    }

    function updateFromPicker() {
        let rgb = hexToRgb(colorPicker.value);
        red.value = rgb.r;
        green.value = rgb.g;
        blue.value = rgb.b;

        redInput.value = rgb.r;
        greenInput.value = rgb.g;
        blueInput.value = rgb.b;

        updateColor();
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);

    redInput.addEventListener("input", updateSliders);
    greenInput.addEventListener("input", updateSliders);
    blueInput.addEventListener("input", updateSliders);

    colorPicker.addEventListener("input", updateFromPicker);

    updateColor();
});
