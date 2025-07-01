const fruits = [
  { name: "apple", price: 1.2, quantity: 10 },
  { name: "banana", price: 0.5, quantity: 20 },
  { name: "cherry", price: 2.0, quantity: 15 },
  { name: "orange", price: 3.0, quantity: 5 },
];

//localStorage.setItem("fruits", JSON.stringify(fruits));

const storageFruits = JSON.parse(localStorage.getItem("fruits"));
console.log(storageFruits);
