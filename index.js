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
  },
];

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

showContacts();
