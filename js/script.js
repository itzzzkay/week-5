document
  .getElementById("gameplus")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const Genre = document.getElementById("Genre").value;
    const Mode = document.getElementById("mode").value;

    if (!Genre || !Mode) {
      alert("Kinldly fill in the forms that have been provided!");
      return;
    }
  });

const games = [
  {
    title: "Stray",
    genre: "Adventure",
    mode: "Singleplayer",
    console: "PlayStation, Xbox, Nintendo Switch",
  },
  {
    title: "Ghost of Tsushima",
    genre: "Adventure",
    mode: "All",
    console: "PC, PlayStation",
  },
  {
    title: "The Legend of Zelda:Breath of the Wild",
    genre: "Adventure",
    mode: "Singleplayer",
    console: "Nintendo Switch, Wii U",
  },
  {
    title: "God of War",
    genre: "Action",
    mode: "Singleplayer",
    console: "PC, PlayStation",
  },
  {
    title: "Grand Theft Auto V",
    genre: "Action",
    mode: "All",
    console: "PC, PlayStation, Xbox",
  },
  {
    title: "FC 25",
    genre: "Sports",
    mode: "All",
    console: "PC, PlayStation, Nintendo Switch, Xbox",
  },
  {
    title: "NBA 2K25",
    genre: "Sports",
    mode: "All",
    console: "PlayStation, Xbox",
  },
  {
    title: "Euro Truck Simulator",
    genre: "Simulation",
    mode: "All",
    console: "PC",
  },
  {
    title: "Gran Tourismo 7",
    genre: "Simulation",
    mode: "All",
    console: "PlayStation",
  },
  {
    title: "Hollow Kinght",
    genre: "Platformer",
    mode: "Singleplayer",
    console: "PC, PlayStation, Nintendo Switch, Xbox",
  },
  {
    title: "Super Mario Odyssey",
    genre: "Platformer",
    mode: "Singleplayer",
    console: "Nintendo Switch",
  },
  {
    title: "Elden Ring",
    genre: "RPG",
    mode: "All",
    console: "PC, PlayStation, Xbox",
  },
  {
    title: "Black Myth: Wukong",
    genre: "RPG",
    mode: "Singleplayer",
    console: "PC, PlayStation, Xbox",
  },
  {
    title: "Call Of Duty: Warzone",
    genre: "FPS",
    mode: "All",
    console: "PC, PlayStation, Xbox",
  },
  {
    title: "DOOM Eternal",
    genre: "FPS",
    mode: "All",
    console: "PC, PlayStation, Nintendo Switch, Xbox",
  },
  {
    title: "Mortal Kombat 1",
    genre: "Fighting",
    mode: "All",
    console: "PC, PlayStation, Nintendo Switch, Xbox",
  },
  {
    title: "Super Smash Bros. Ultimate",
    genre: "Fighting",
    mode: "All",
    console: "Nintendo Switch",
  },
  {
    title: "Forza Horizon 5",
    genre: "Racing",
    mode: "All",
    console: "PC, PlayStation, Xbox",
  },
  {
    title: "Need for Speed: Most Wanted",
    genre: "Racing",
    mode: "All",
    console: "PC, PlayStation, Wii U, Xbox",
  },
  {
    title: "Among Us",
    genre: "Party",
    mode: "All",
    console: "PC, PlayStation, Nintendo Switch, Xbox",
  },
  {
    title: "Mario Kart 8",
    genre: "Party",
    mode: "All",
    console: "Nintendo Switch, Wii U",
  },
  {
    title: "Minecraft",
    genre: "Survival",
    mode: "All",
    console: "PC, PlayStation, Nintendo Switch, Xbox, Wii U",
  },
  {
    title: "Rust",
    genre: "Survival",
    mode: "All",
    console: "PC, PlayStation, Xbox",
  },
  {
    title: "Fortnite",
    genre: "Battle Royale",
    mode: "All",
    console: "PC, PlayStation, Nintendo Switch, Xbox",
  },
  {
    title: "Apex Legends",
    genre: "Battle Royale",
    mode: "All",
    console: "PC, PlayStation, Nintendo Switch, Xbox",
  },
  {
    title: "Five Nights at Freddy's",
    genre: "Horror",
    mode: "Singleplayer",
    console: "PC, PlayStation, Nintendo Switch, Xbox",
  },
  {
    title: "Dead by Daylight",
    genre: "Horror",
    mode: "All",
    console: "PC, PlayStation, Nintendo Switch, Xbox",
  },
];

const suggestion = games.filter(
  (games) => games.genre === Genre && games.mode === Mode
);
const Output = document.getElementById("output");
if (suggestion.length > 0) {
  output.textContent = `We recomend that you check out ${suggestion.map(
    (game) => game.title
  )}.`;
} else {
  output.textContent = "We don't have any games for you right now. :(";
}

console.log("output");
