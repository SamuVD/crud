export function index(coders, tbody) {
  tbody.innerHTML = ``;

  coders.forEach((coder) => {
    tbody.innerHTML += `
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td>${coder.email}</td>
            <td>
            <button type="button" data-id="${coder.id}" class="btn btn-info">Detail</button>
            <button type="button" data-id="${coder.id}" class="btn btn-warning">Edit</button>
            <button type="button" data-id="${coder.id}" class="btn btn-danger">Delete</button>
            </td>
        </tr>
        `;
  });
}

export function create(coders, name, lastName, email) {
  const tempCoder = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value,
  };

  coders.push(tempCoder);
}

export function deleteItem(coders, idParaEliminar) {
  coders.forEach((coder, index) => {
    if (coder.id == idParaEliminar) {
      coders.splice(index, 1);
    }
  });
}

// export function listWithBasicElements(coders,tbody) {
//     coders.forEach(coder => {
//         const tr = document.createElement("tr");

//         for (let i = 0; i < 4; i++) {
//             const td = document.createElement("td");
//             tr.appendChild(td);
//         }

//         tr.firstElementChild.textContent = coder.id;
//         tr.firstElementChild.nextElementSibling.textContent = coder.name;
//         tr.firstElementChild.nextElementSibling.nextElementSibling.textContent = coder.lastName;
//         tr.lastElementChild.textContent = coder.email;

//         tr.children[0].textContent=coder.id
//         tr.children[1].textContent=coder.name
//         tr.children[2].textContent=coder.lastName
//         tr.children[3].textContent=coder.email

//         tbody.appendChild(tr)
//   });
// }
// listWithBasicElements()