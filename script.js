
window.addEventListener('DOMContentLoaded', (event) => {
    fetch('meta.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // 'data' contains the JSON data.
            // Use it to manipulate your HTML as required.
        });
});
