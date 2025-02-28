document.addEventListener("DOMContentLoaded", function () {
    fetch("https://tamil-kural-api.vercel.app/api/daily") // Replace with your REST API URL
        .then(response => response.json())
        .then(data => {
            document.getElementById("thirukkural-container").innerHTML = `
                <blockquote>
                    <p><small>Kural: ${data.number}</small></p>
                    <p>
                        ${data.kural[0]} <br />
                        ${data.kural[1]}
                    </p>
                    <em>Meaning:</em>
                    <p>${data.meaning['ta_mu_va']}</p>
                    <p>${data.meaning['ta_salamon']}</p>
                    <p>${data.meaning['en']}</p>
                </blockquote>
                <a href="https://en.wikipedia.org/wiki/Kural" target="_blank">Intrested to know more about Thirukural ??</a>
            `;
        })
        .catch(error => console.error("Error fetching Thirukkural:", error));
});
