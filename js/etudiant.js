import { ENDPOINT } from "./constants.js";
export default class Etudiant {
  constructor(name, age, note) {
    this.name = name;
    this.age = age;
    this.note = note;
  }
  static allEtudiants = async function () {
    const response = await fetch(ENDPOINT);
    const etudiants = await response.json();
    return etudiants;
  };
  addEtudiant = async function () {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.name,
        date: this.age,
        note: this.note,
      }),
    });

    console.log(response);
    return response;
  };
}
