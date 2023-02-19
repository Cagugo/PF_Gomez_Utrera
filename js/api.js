let transactionStatus = "idle";
const $statusContainer = document.querySelector("#status");
const $button = document.querySelector("#button");
$statusContainer.innerHTML = transactionStatus;
const ENDPOINT = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "01375a0498bf4c70a7c33770e2051321";

const $container = document.querySelector("#tacosList");
function init() {
  transactionStatus = "loading";
  $statusContainer.innerHTML = transactionStatus;
  fetch(`${ENDPOINT}?apiKey=${API_KEY}&query=tacos`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.results.forEach((result) => {
        const li = document.createElement("li");
        const image = document.createElement("img");
        image.src = result.image;
        console.log(image);
        li.appendChild(document.createTextNode(result.title));
        li.appendChild(image);
        $container.appendChild(li);
        transactionStatus = "finished";
        $statusContainer.innerHTML = transactionStatus;
      });
    })
    .catch((error) => {
      transactionStatus = "failed";
      $statusContainer.innerHTML = transactionStatus;
      console.log(error);
    });
}

$button.addEventListener("click", init);