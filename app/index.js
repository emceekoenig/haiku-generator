let poemElement = document.querySelector("#poem");

function displayPoem(response) {
  poemElement.classList.remove("animate-pulse");
  const poemResult = response.data.answer;
  new Typewriter("#poem", {
    strings: poemResult,
    autoStart: true,
    cursor: "",
    delay: 50,
  });

  poemElement.classList.remove("py-6");
  poemElement.classList.add("pt-6");
}

function generatePoem(event) {
  event.preventDefault();

  // build the API url
  // make a call to the API using axios
  // display the generated poem

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = process.env.API_KEY;
  let prompt = `User instructions: generate a unique haiku about ${instructionsInput.value}`;
  let context =
    "You are a haiku poem expert. Your mission is to generate a haiku in basic HTML. Separate each line with a <br />. Do not include a title. Make sure to follow the user instructions. At the end of the poem, sign the poem with 'SheCodes AI' wrapped inside a <p> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a haiku about
    <em>${instructionsInput.value}...</em>
`;

  setTimeout(() => {
    axios.get(apiUrl).then(displayPoem);
  }, 2200);
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
