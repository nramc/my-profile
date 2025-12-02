document.addEventListener("DOMContentLoaded", function () {
    fetch("https://tamil-kural-api.vercel.app/api/daily") // Replace with your REST API URL
        .then(response => response.json())
        .then(data => {
            document.getElementById("thirukkural-container").innerHTML = `
                <blockquote>
                    <h4>${data.meaning['en']}</h4>
                    <p><small>Kural: ${data.number}</small></p>
                    <p>
                        <small>${data.kural[0]}</small> <br />
                        <small>${data.kural[1]}</small>
                    </p>
                    <p><small>Meaning:</small><br/><small>${data.meaning['ta_salamon']}</small></p>
                </blockquote>
                <a href="https://en.wikipedia.org/wiki/Kural" target="_blank">Intrested to know more about Thirukkural ??</a>
            `;
        })
        .catch(error => console.error("Error fetching Thirukkural:", error));
});
