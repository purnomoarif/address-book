// data class Contact
const contacts = [
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
console.log(contacts[2].birthdate.getFullYear());

// Function to get contacts and display them
function getContacts() {
  console.log(contacts);
  contacts.forEach((contact) => {
    console.log(`
      id: ${contact.id}
      Name: ${contact.name} 
      Phone: ${contact.phone}
      Email: ${contact.email}
      Address: ${contact.address.city}, ${contact.address.country}
      Birthdate: ${contact.birthdate}
    `);
  });
}

function showContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    console.log(`
      id: ${contact.id}
      Name: ${contact.name} 
      Phone: ${contact.phone}
      Email: ${contact.email}
      Address: ${contact.address.city}, ${contact.address.country}
      `);
  }
}

// Function add, delete, and edit contacts
function addContact(contactInput) {
  const contactData = {
    name: contactInput.name,
    phone: contactInput.phone,
    email: contactInput.email,
    address: {
      city: contactInput.address.city,
      country: contactInput.address.country,
    },
    birthdate: new Date(contactInput.birthdate),
  };
  contacts.push(contactData);
}

function deleteContact(contactDelete) {
  const filteredContacts = contacts.filter(
    (contact) => contact.id !== contactDelete.id
  );
  if (filteredContacts.length === contacts.length) {
    console.log("Contact not found!");
  } else {
    console.log("Contact deleted successfully!");
  }
  return filteredContacts;
}

function editContact(id, updatedContact) {
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    contacts[index] = { ...contacts[index], ...updatedContact };
    console.log("Contact updated successfully!");
  } else {
    console.log("Contact not found!");
  }
}

// localStorage.setItem("contacts", JSON.stringify(contacts));
const contact = [
  {
    name: "Arif Purnomo",
    address: "Depok, Indonesia",
    email: "purnomoarifdepok@gmail.com",
  },
  {
    name: "Purnomo Arif",
    address: "Osaka, Japan",
    email: "purnomoarifwibu@gmail.com",
  },
  {
    name: "Dinda Ayu Ratnasari",
    address: "Jakarta, Indonesia",
    email: "dindaaratnasari@gmail.com",
  },
];
//localStorage.setItem("contacts", JSON.stringify(contacts));
const storageContacts = JSON.parse(localStorage.getItem("contacts"));
console.log(storageContacts);
