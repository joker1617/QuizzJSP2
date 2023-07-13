const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector("form");
const card = document.querySelectorAll(".card");

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  checkResponse();
}

function checkResponse() {
  /*on pointe d'abord chaque élément input*/
  const R1 = document.querySelectorAll("input[name='responseQ1']:checked");
  const R2 = document.querySelectorAll("input[name='responseQ2']:checked");
  const R3 = document.querySelectorAll("input[name='responseQ3']:checked");
  const R4 = document.querySelectorAll("input[name='responseQ4']:checked");
  const R5 = document.querySelectorAll("input[name='responseQ5']:checked");

  /*On recupère les valeurs des réponses cocher que l'on met dans un tableau */
  let values = [];
  R1.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  R2.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  R3.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  R4.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  R5.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  console.log(values);

  for (let i = 0; i < responses.length; i++) {
    if (responses[i] === values[i]) {
      card.style.backgroundColor = "green";
    } else {
      card.style.backgroundColorColor = "red";
    }
  }
}
