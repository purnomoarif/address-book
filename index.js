const contacts = [
  {
    name: "Arif Purnomo",
    phone: "+628561066962",
    email: "purnomoarifdepok@gmail.com",
    address: "Osaka, Japan",
  },
  {
    name: "Dinda Ayu Ratnasari",
    phone: "+6285719214858",
    email: "dindaaratnasari@gmail.com",
    address: "Jakarta, Indonesia",
  },
];
console.log(contacts);

function showContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    console.log(`
      name: ${contact.name} 
      phone: ${contact.phone}
      email: ${contact.email}
      address: ${contact.address}
      `);
  }
}

showContacts();
