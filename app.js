const container = document.querySelector(".container");

const games = [
  {
    name: "League Of Legends",
    image: "./image/League_Of_Legends.bmp",
    link: "https://www.leagueoflegends.com/en-us/download/",
  },
  {
    name: "CS2",
    image: "./image/CS2.bmp",
    link: "https://store.steampowered.com/app/730/CounterStrike_2/",
  },
  {
    name: "FC25",
    image: "./image/FC25.bmp",
    link: "https://store.steampowered.com/app/2669320/EA_SPORTS_FC_25/",
  },
  {
    name: "DOTA2",
    image: "./image/DOTA2.bmp",
    link: "https://store.steampowered.com/app/570/Dota_2/",
  },
  {
    name: "CHAINED TOGETHER",
    image: "./image/CHAINED_TOGETHER.bmp",
    link: "https://store.steampowered.com/app/2567870/Chained_Together/",
  },
  {
    name: "ELDEN RING",
    image: "./image/ELDEN_RING.bmp",
    link: "https://store.steampowered.com/agecheck/app/1245620/",
  },
];

const initializeGames = () => {
  let output = "";
  games.forEach(({ name, image, link }) => {
    output += `
      <div class="card">
        <img class="card--avatar" src="${image}" alt="${name}" onerror="this.src='./images/placeholder.png';" />
        <h1 class="card--title">${name}</h1>
        <a class="card--link" href="${link}" target="_blank">Download</a>
      </div>
    `;
  });
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", () => {
  try {
    initializeGames();
    console.log("Games loaded successfully!");
  } catch (error) {
    console.error("Error displaying games:", error);
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(() => console.log("Service Worker registered successfully!"))
      .catch((err) => console.error("Service Worker registration failed:", err));
  });
}