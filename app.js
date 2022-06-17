// Grab the HTML element in JavaScript:
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

// Link the player Lives Count:
playerLivesCount.textContent = playerLives;

// Get Data from Images:
const getData = () => [
  { imgSrc: "./Images/Discord.jpg", name: "Discord" },
  { imgSrc: "./Images/Instagram.jpg", name: "Instagram" },
  { imgSrc: "./Images/Netflix.jpg", name: "Netflix" },
  { imgSrc: "./Images/Spotify.jpg", name: "Spotify" },
  { imgSrc: "./Images/TikTok.jpg", name: "TikTok" },
  { imgSrc: "./Images/Twitter.jpg", name: "Twitter" },
  { imgSrc: "./Images/Whatsapp.jpg", name: "Whatsapp" },
  { imgSrc: "./Images/Youtube.jpg", name: "Youtube" },
  { imgSrc: "./Images/Discord.jpg", name: "Discord" },
  { imgSrc: "./Images/Instagram.jpg", name: "Instagram" },
  { imgSrc: "./Images/Netflix.jpg", name: "Netflix" },
  { imgSrc: "./Images/Spotify.jpg", name: "Spotify" },
  { imgSrc: "./Images/TikTok.jpg", name: "TikTok" },
  { imgSrc: "./Images/Twitter.jpg", name: "Twitter" },
  { imgSrc: "./Images/Whatsapp.jpg", name: "Whatsapp" },
  { imgSrc: "./Images/Youtube.jpg", name: "Youtube" },
];

// Randomize the images:
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};
randomize();

// Card Generator Function:
const cardGenerator = () => {
  const cardData = randomize();
  // Generate the card in HTML by loop:
  cardData.forEach((item, index) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //Attach Informer to card Image:
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    //Attach the card to the Section:
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    // Turning The Selected Card
    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

//Check Card
const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const FlippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
  // Logic
  if (FlippedCards.length === 2) {
    if (
      FlippedCards[0].getAttribute("name") ===
      FlippedCards[1].getAttribute("name")
    ) {
      console.log("Math");
      FlippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("Wrong");
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart("Looser");
      }
      FlippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => {
          card.classList.remove("toggleCard");
        }, 1000);
      });
    }
  }

  if (toggleCard.length === 16) {
    restart("You Won");
  }
};

// Restart the game if the playerLives is 0:
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 6;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 1000);
};

cardGenerator();
