const citys = [
  "Algiers",
  "Oran",
  "Mascara",
  "Constantine",
  "Annaba",
  "Blida",
  "Tlemcen",
  "Bejaia",
  "Tizi Ouzou",
  "Setif",
  "Batna",
  "Skikda",
  "Mostaganem",
  "Biskra",
  "Laghouat"
];

const cityselect = document.getElementById("city");
citys.forEach( city =>{
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    cityselect.appendChild(option);
});

function getAdhanTimes() {
  const city = document.getElementById("city").value;
  const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Algeria&method=3`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      const times = data.data.timings;
      const date = data.data.date.readable;

      const html = `
        <h2>Adhan Times for ${city} (${date})</h2>
        <table>
            <thead>
            <tr>
                <th>Prayer</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            <tr><td>Fajr</td><td>${times.Fajr}</td></tr>
            <tr><td>Dhuhr</td><td>${times.Dhuhr}</td></tr>
            <tr><td>Asr</td><td>${times.Asr}</td></tr>
            <tr><td>Maghrib</td><td>${times.Maghrib}</td></tr>
            <tr><td>Isha</td><td>${times.Isha}</td></tr>
            </tbody>
        </table>
        `;
        document.getElementById("adhan-times").innerHTML = html;

    })
    .catch(error => {
      console.error("Error fetching prayer times:", error);
      document.getElementById("adhan-times").innerHTML = "Error loading data.";
    });
}