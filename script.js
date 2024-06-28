// script.js
const result = () => {
    return "Hello from the JavaScript file!";
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('result').innerText = result();
});
