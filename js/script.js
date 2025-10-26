import Etudiant from "./etudiant.js";

const displayEtudiants = async function () {
  return Etudiant.allEtudiants().then(function (response) {
    return response.map((etudiant) => {
      const { id, name, date, note } = etudiant;
      return `
       <tr>
          <td>${id}</td>
          <td>${name}</td>
          <td>${date}</td>
          <td>${note}</td>
          <td></td>
        </tr>
      `;
    });
  });
};
const renderEtudiants = function () {
  const body = document.querySelector(".list-etudiants");
  console.log(body);
  console.log(displayEtudiants().then((data) => (body.innerHTML = data)));
};
renderEtudiants();
