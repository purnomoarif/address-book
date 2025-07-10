let dataContacts = [
  {
    id: 1,
    name: "Arif Purnomo",
    phone: "+628561066962",
    email: "purnomoarifdepok@gmail.com",
    address: {
      city: "Depok",
      country: "Indonesia",
    },
    birthdate: new Date("1989-07-28"),
  },
  {
    id: 2,
    name: "Purnomo Arif",
    phone: "+81 123456",
    email: "purnomoarifwibu@gmail.com",
    address: {
      city: "Osaka",
      country: "Japan",
    },
    birthdate: new Date("1990-01-01"),
  },
  {
    id: 3,
    name: "Dinda Ayu Ratnasari",
    phone: "+6285719214858",
    email: "dindaaratnasari@gmail.com",
    address: {
      city: "Jakarta",
      country: "Indonesia",
    },
    birthdate: new Date("1997-10-28"),
  },
];

function deleteContact(id) {
  const updatedContacts = dataContacts.filter((contact) => contact.id !== id);
  dataContacts = updatedContacts;
  renderContacts(dataContacts);
}

function renderContacts(contacts) {
  const contactsListElement = document.getElementById("contacts-list");

  const contactsElements = contacts
    .map((contact) => {
      return `<li>
      <p>Name: ${contact.name}</p>
      <p>Phone: ${contact.phone}</p>
      <p>Email: ${contact.email}</p>
      <p>Address: ${contact.address.city}, ${contact.address.country}</p>
      <p>Birthdate: ${contact.birthdate.toLocaleDateString()}</p>
      <button onclick="deleteContact(${contact.id})">Delete</button>
      </li>`;
    })
    .join("");
  contactsListElement.innerHTML = contactsElements;
}

renderContacts(dataContacts);
