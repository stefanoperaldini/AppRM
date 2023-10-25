"use strict";

const URL = "https://rickandmortyapi.com/api/character";

const ulElementCharacters = document.querySelector("ul#characters");

const main = async () => {
  try {
    const result = await fetch(URL);
    const data = await result.json();
    //console.log(data.results);
    for (const character of data.results) {
      //console.log(character.name);
      const liElement = document.createElement("li");
      liElement.textContent = character.name;
      ulElementCharacters.append(liElement);
    }
  } catch (error) {}
};

main();
