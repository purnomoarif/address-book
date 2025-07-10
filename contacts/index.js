const urlParams = new URLSearchParams(window.location.search);
const paramsContactId = Number(urlParams.get("id"));

const searchedContact = loadContacts().find(
  (contact) => contact.id === paramsContactId
);

const contactCardElement = document.getElementById("contact-card");

contactCardElement.innerHTML = `
  
  <h2 id="full-name" class="text-2xl font-semibold">${searchedContact.name}</h2>
  <p id="company" class="text-gray-600">${searchedContact.phone}</p>
`;

// Replace HTML values
const contactDetailElement = document.getElementById("contact-detail");

contactDetailElement.innerHTML = `
  
  <div class="flex justify-start">
    <span class="text-gray-600">ID</span>
    <span class="text-gray-800 ml-20">${searchedContact.id}</span>
  </div>
  
  <div class="flex justify-start">
    <span class="text-gray-600">Name</span>
    <span class="text-gray-800 ml-5">${searchedContact.name}</span>
  </div>
  <div class="flex justify-start">
    <span class="text-gray-600">Phone</span>
    <span class="text-gray-800 ml-11">${searchedContact.phone || null}</span>
  </div>
  <div class="flex justify-start">
    <span class="text-gray-600">Email</span>
    <span class="text-gray-800 ml-12">${searchedContact.email || null}</span>
  </div>
  <div class="flex justify-start">
    <span class="text-gray-600">Address</span>
    <span class="text-gray-800 ml-12">${searchedContact.address || null}</span>
  </div>
  <div class="flex justify-start">
    <span class="text-gray-600">Birthdate</span>
    <span class="text-gray-800 ml-5"
      >${formatDateTime(searchedContact.birthdate) || null}</span
    >
  </div>
`;
