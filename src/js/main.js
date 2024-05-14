import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { coders } from "../../public/data/database.js";
import { index, create } from "./operations.js";
import { showSmallAlertSuccess } from "./alerts.js";

const tbody = document.querySelector("tbody");
const form = document.getElementById("form");
const name = document.getElementById("name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
let flag = index(coders, tbody);

form.addEventListener("submit", function (event) {
    if (flag === undefined) {
        create(name, lastName, email, coders);
        showSmallAlertSuccess("saved");
    }

    create(coders, name, lastName, email);
    form.reset();
    event.preventDefault();
    index(coders, tbody);
});

table.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-danger")) {
        const idParaEliminar = event.target.getAttribute("data-id");
        deleteItem(coders, idParaEliminar);
        showSmallAlertSuccess("coder deleted");
        index(coders, tbody);
    }

    if (event.target.classList.contains("btn-warning")) {
        const idParaActualizar = event.target.getAttribute("data-id");

        // Vamos a buscar al usuario en la base de datos de manera impírica
        // const userFound = coders.find(coder => {
        //     if (coder.id == idParaActualizar){
        //     return coder
        //     }
        // })

        // Vamos a buscar al usuario en la base de datos de manera declarativa
        const userFound = coders.find((coder) => coder.id == idParaActualizar);

        // Pintar los datos nuevamente en el formulario
        name.value = userFound.name;
        lastName.value = userFound.lastName;
        email.value = userFound.email;
    }
});