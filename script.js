async function loadData() {
  const res = await fetch('data/weather.json');
  const data = await res.json();

  document.getElementById("update-time").innerText =
    "업데이트: " + data.update_time;

  render(data);
}

function render(data) {
  const highway = document.getElementById("highway-select").value;
  const container = document.getElementById("weather-container");

  container.innerHTML = "";

  const sections = data.highways[highway];

  sections.forEach(sec => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <b>${sec.name}</b><br>
      상태: ${sec.weather}
    `;
    container.appendChild(div);
  });
}

document.getElementById("highway-select").addEventListener("change", loadData);

loadData();