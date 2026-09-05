const data = [
  {
    img: "image1.jpg",
    h2: "1. Ellie Williams",
    p: "A tough, smart girl who goes from a funny teenager to a survivor obsessed with revenge.",
  },
  {
    img: "image2.jpg",
    h2: "2. Joel Miller",
    p: "A harsh survivor who lost everything, but would do any bad thing to keep Ellie safe.",
  },
  {
    img: "image3.jpg",
    h2: "3. Dina",
    p: "A kind, funny girl who stays by Ellie's side and tries to keep her safe from the dark.",
  },
  {
    img: "image4.jpg",
    h2: "4. Abby Anderson",
    p: "A powerful soldier who loses her family and learns how much revenge actually hurts.",
  },
  {
    img: "image5.jpg",
    h2: "5. Tommy Miller",
    p: "Joel’s sniper brother who tries to live a good life, but ends up ruined by anger and loss.",
  },
];

function info(number) {
  const selectedData = data[number];

  document.querySelector("#info img").src = selectedData.img;
  document.querySelector("#info h2").textContent = selectedData.h2;
  document.querySelector("#info p").textContent = selectedData.p;
}

info(0);
