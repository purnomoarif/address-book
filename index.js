const contacts = [
  {
    id: 1,
    name: "Arif Purnomo",
    phone: "+628561066962",
    email: "purnomoarifdepok@gmail.com",
    address: "Osaka, Japan",
  },
  {
    id: 2,
    name: "Dinda Ayu Ratnasari",
    phone: "+6285719214858",
    email: "dindaaratnasari@gmail.com",
    address: "Jakarta, Indonesia",
  },
];
console.log(contacts);

function showContacts() {
  for (let id = 0; id < contacts.length; id++) {
    const contact = contacts[id];

    console.log(`
      id: ${contact.id}
      name: ${contact.name} 
      phone: ${contact.phone}
      email: ${contact.email}
      address: ${contact.address}
      `);
  }
}

showContacts();
