//zGRPvXMg

const artApp = {};
artApp.key = "zGRPvXMg";

artApp.getArt = function () {
  const url = new URL("https://www.rijksmuseum.nl/api/en/collection");
  url.search = new URLSearchParams({
    key: artApp.key,
    imgonly: true,
    q: "monkeys",
  });

  fetch(url)
    .then((apiData) => apiData.json())
    .then((jsonData) => {
      //display the art on the page
      artApp.displayArt(jsonData.artObject);
    });
};

artApp.displayArt = function (arrayOfObjects) {};

artApp.init = function () {
  artApp.getArt();
};

artApp.init();
