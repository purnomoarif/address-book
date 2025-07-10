let dataContacts = [
  {
    id: 1,
    name: "Arif Purnomo",
    phone: "+628561066962",
    email: "purnomoarifdepok@gmail.com",
    address: {
      city: "Jakarta",
      country: "Indonesia",
    },
    birthdate: new Date("1989-07-28"),
  },
  {
    id: 2,
    name: "Syafiq Purnomo",
    phone: "+62856789101112",
    email: "syafiq3@gmail.com",
    address: {
      city: "Jakarta",
      country: "Indonesia",
    },
    birthdate: new Date("2018-12-03"),
  },
  {
    id: 3,
    name: "Dinda Ayu Ratnasari",
    phone: "+6285719214858",
    email: "dinda.ayu@gmail.com",
    address: {
      city: "Jakarta",
      country: "Indonesia",
    },
    birthdate: new Date("1996-10-28"),
  },
];

function renderContacts(contacts) {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("q");

  const contactsToDisplay = searchQuery
    ? searchContacts(loadContacts(), searchQuery)
    : loadContacts();

  console.log(contactsToDisplay);

  const contactsListElement = document.getElementById("contacts-list");
  const contactsCountElement = document.getElementById("contacts-count");

  // Update the contacts count
  contactsCountElement.textContent = `All Contacts - ${contacts.length} contacts`;

  const contactsListHTMLString = contactsToDisplay.map((contact) => {
    const date = formatDateTime(contact.birthdate);

    return `
      <li
        class="pt-4 flex items-center px-4 py-2 hover:bg-gray-50"
      >
        <img 
          src="${contact.avatar || "https://i.pravatar.cc/150?img=1"}"
          alt="Avatar"
          class="w-10 h-10 rounded-full"
        />
        <p class="ml-9 w-10">${contact.id}</p>
        <p class="w-36">${contact.name}</p>
        <p class="w-52">${contact.phone}</p>
        <p class="w-80">${contact.email}</p>
        <p class="w-44">${contact.address.city}, ${contact.address.country}</p>
        <p class="w-44">${date}</p>
        <div>
        <a href="/contacts/?id=${
          contact.id
        }" class="border rounded bg-blue-500 text-xs text-white px-1 py-0.5">View</a>
          <button
            class="border rounded bg-red-500 text-xs text-white px-1 py-0.5"
            onclick="deleteContact(loadContacts(), ${contact.id})"
          >
            Delete
          </button>
        </div>
      </li>
    `;
  });

  contactsListElement.innerHTML = contactsListHTMLString.join("");
}

function searchContacts(contacts, searchTerm) {
  const searchedContacts = contacts.filter((contact) => {
    return (
      (contact.name &&
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (contact.phone &&
        contact.phone.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  if (searchedContacts.length <= 0) {
    console.log("No contact(s) found");
    return;
  }

  return searchedContacts;
  // renderContacts(searchedContacts);
}

function generateId(contacts) {
  if (contacts.length === 0) {
    return 1;
  }
  return contacts[contacts.length - 1].id + 1;
}

function addContact(contacts, newContactInput) {
  const newContact = {
    id: generateId(contacts),
    avatar: newContactInput.avatar,
    name: newContactInput.name,
    phone: newContactInput.phone,
    email: newContactInput.email,
    address: {
      city: newContactInput.address.city,
      country: newContactInput.address.country,
    },
    birthdate: new Date(newContactInput.birthdate),
  };

  const newContacts = [...contacts, newContact];
  dataContacts = newContacts;
  saveContacts(dataContacts);
  renderContacts(dataContacts);
}

function deleteContact(contacts, contactId) {
  const filteredContacts = contacts.filter((contact) => {
    return contact.id === contactId;
  });

  const filterContacts = contacts.filter((contact) => {
    return contact.id != contactId;
  });

  if (filteredContacts.length <= 0) {
    console.log(`There is no contact with the ID ${contactId} to delete`);
    return;
  }

  dataContacts = filterContacts;
  saveContacts(dataContacts);
  renderContacts(dataContacts);
}

function updateContact(contacts, contactId, updateContactInput) {
  const originalContact = contacts.find((contact) => contact.id === contactId);

  if (!originalContact) {
    console.log(`Contact with ID ${contactId} not found.`);
    return;
  }

  const updateContact = {
    id: contactId,
    name: updateContactInput.name || originalContact.name,
    phone: updateContactInput.phone || originalContact.phone,
    email: updateContactInput.email || originalContact.email,
    address: {
      city: updateContactInput.address.city || originalContact.address.city,
      country:
        updateContactInput.address.country || originalContact.address.country,
    },
    birthdate: new Date(
      updateContactInput.birthdate || originalContact.birthdate
    ),
  };

  const updatedContacts = contacts.map((contact) => {
    if (contact.id === contactId) {
      return updateContact;
    }
    return contact;
  });

  dataContacts = updatedContacts;
  saveContacts(dataContacts);
  renderContacts(dataContacts);
}

function saveContacts(data) {
  localStorage.setItem("storageDataContacts", JSON.stringify(data));
}

function loadContacts() {
  const storageDataContacts = JSON.parse(
    localStorage.getItem("storageDataContacts")
  );

  if (!storageDataContacts) {
    saveContacts(dataContacts);
    return dataContacts;
  }

  // Convert 'birthdate' strings back into Date objects
  const parsedContacts = storageDataContacts.map((contact) => ({
    ...contact,
    birthdate: contact.birthdate ? new Date(contact.birthdate) : null,
  }));

  return parsedContacts;
  // return storageDataContacts;
}

function formatDateTime(date) {
  if (!date) return null;

  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Run Address Book functions
 */

// renderContacts(loadContacts());
window.addEventListener("load", function () {
  renderContacts(loadContacts());
});
