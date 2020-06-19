import "../stylesheets/main.scss";
const peopleTemplate = require("../html/_people.hbs")

function peopleComponent() {
  const element = document.createElement('div')

  const people = [
    {
      name: "Jeff",
      email: "jeff@example.com"
    },
    {
      name: "Bob",
      email: "bob@example.com"
    },
    {
      name: "Jenn",
      email: "jenn@example.com"
    },
    {
      name: "Frank",
      email: "frank@example.com"
    },
    {
      name: "Elliott",
      email: "el@example.com"
    }
  ];

  element.innerHTML = peopleTemplate({people: people});

  return element;
}

const appDiv = document.getElementById("app");
appDiv.appendChild(peopleComponent());

console.log(`APP version: ${APP_VERSION}`);
console.log(`jQuery version: ${jQuery.fn.jquery}`);
