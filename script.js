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
        <h2>Prayer Times for ${city} (${date})</h2><br>
        <ul>
          <li><strong>Fajr:</strong> ${times.Fajr}</li>
          <li><strong>Dhuhr:</strong> ${times.Dhuhr}</li>
          <li><strong>Asr:</strong> ${times.Asr}</li>
          <li><strong>Maghrib:</strong> ${times.Maghrib}</li>
          <li><strong>Isha:</strong> ${times.Isha}</li>
        </ul>
      `;
      document.getElementById("adhan-times").innerHTML = html;
    })
    .catch(error => {
      console.error("Error fetching prayer times:", error);
      document.getElementById("adhan-times").innerHTML = "Error loading data.";
    });
}