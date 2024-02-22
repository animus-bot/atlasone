// This function sends a GET request to an IP API to determine the country
function getCountry() {
    fetch("https://ipapi.co/country/")
    .then(response => response.text())
    .then(country => {
        document.getElementById("country").textContent = country;
    });
}

getCountry(); // Call the function when the page loads
