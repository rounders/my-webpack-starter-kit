import "../stylesheets/main.scss";

function helloWorld() {
  const element = document.createElement('div')

  element.innerHTML = "<h1>Hello World</h1>";

  return element;
}

const appDiv = document.getElementById("app");
appDiv.appendChild(helloWorld());

console.log(`Current APP version is ${APP_VERSION}`);
