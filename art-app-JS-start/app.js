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
      console.log(jsonData);
      artApp.displayArt(jsonData.artObjects);
    });
};

artApp.displayArt = function (arrayOfObjects) {
  arrayOfObjects.forEach((art) => {
    //construct some HTML
    const title = document.createElement("h2");
    title.innerText = art.title;

    const artist = document.createElement("p");
    artist.innerText = art.principalOrFirstMaker;

    const image = document.createElement("img");
    image.src = art.webImage.url;
    image.alt = art.title;

    const artPiece = document.createElement("div");
    artPiece.classList.add("piece");

    //add the individual elements to artPiece
    artPiece.append(title, artist, image);

    document.querySelector("#artwork").appendChild(artPiece);
  });
};

artApp.init = function () {
  artApp.getArt();
};

artApp.init();
