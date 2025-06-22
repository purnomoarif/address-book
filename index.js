// Array to store contacts
let contacts = [];

// Function to add a new contact
function addContact() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !email || !phone || !age) {
    alert("Please fill in all fields.");
    return;
  }

  const contact = { name, email, phone, age };
  contacts.push(contact);
  displayContacts(contacts);

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("age").value = "";
}

// Function to display contacts
function displayContacts(list) {
  let main = document.querySelector("main");
  // Remove old contact list if exists
  let oldList = document.getElementById("contact-list");
  if (oldList) oldList.remove();

  let ul = document.createElement("ul");
  ul.id = "contact-list";

  if (list.length === 0) {
    let li = document.createElement("li");
    li.textContent = "No contacts found.";
    ul.appendChild(li);
  } else {
    list.forEach((contact, idx) => {
      let li = document.createElement("li");
      li.textContent = `${contact.name} | ${contact.email} | ${contact.phone} | Age: ${contact.age}`;
      ul.appendChild(li);
    });
  }
  main.appendChild(ul);
}

// Function to search contacts
function search() {
  const keyword = document.getElementById("search").value.trim().toLowerCase();
  if (!keyword) {
    displayContacts(contacts);
    return;
  }
  const filtered = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(keyword) ||
      contact.email.toLowerCase().includes(keyword) ||
      contact.phone.toLowerCase().includes(keyword) ||
      contact.age.toString().includes(keyword)
  );
  displayContacts(filtered);
}

// Initial display
displayContacts(contacts);
