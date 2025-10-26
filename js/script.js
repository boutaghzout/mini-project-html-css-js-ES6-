import Etudiant from "./etudiant.js";

const displayEtudiants = async function () {
  return Etudiant.allEtudiants().then(function (response) {
    return response.map((etudiant) => {
      const { id, name, date, note } = etudiant;
      return `<tr>
          <td>${id}</td>
          <td>${name}</td>
          <td>${date}</td>
          <td>${note}</td>
          <td><button class="btn btn-danger btn-sm">Supprimer</button></td>
        </tr>`;
    });
  });
};

const addEtudiant = (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const date = document.querySelector("#date").value;
  const note = document.querySelector("#note").value;
  const etudiant = new Etudiant(name, date, note);
  etudiant.addEtudiant();
};

const renderEtudiants = function () {
  const body = document.querySelector(".list-etudiants");

  displayEtudiants().then(function (data) {
    body.innerHTML = data.join(" ");
  });
};

const init = function () {
  const refreshButton = document.querySelector("#refresh");
  const addButton = document.querySelector("#add");

  refreshButton.addEventListener("click", renderEtudiants);
  addButton.addEventListener("click", addEtudiant);
};

init();
renderEtudiants();
