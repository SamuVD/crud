import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { coders } from "../../public/data/database.js";
import { index, create } from './operations.js';


const tbody = document.querySelector("tbody");
const form = document.getElementById("form")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const btnSave = document.getElementById("btn-save")

index(coders, tbody);


form.addEventListener("submit", function (event) {
    create(coders, name, lastName, email)
    form.reset()
    event.preventDefault()
    index(coders, tbody);
})


// coders.forEach(coder => {
//     if (coder.id == 2) {
//         coders.splice(coders.indexOf(coder), 1)
//     }
// })