const crusts = ["Thin Crust", "Cheese Burst", "Pan Crust", "Stuffed Crust", "Whole Wheat"];
const sauces = ["Tomato Basil", "BBQ", "Pesto", "Garlic White", "Spicy Red"];
const toppings = ["Pepperoni", "Mushrooms", "Olives", "Onions", "Bell Peppers", "Jalapenos", "Pineapple", "Bacon"];
const sizes = ["Small", "Medium", "Large", "Extra Large"];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generatePizza() {
  const size = getRandomItem(sizes);
  const crust = getRandomItem(crusts);
  const sauce = getRandomItem(sauces);
  
  // Choose 3 random toppings
  const shuffledToppings = toppings.sort(() => 0.5 - Math.random());
  const selectedToppings = shuffledToppings.slice(0, 3);

  const order = `Your pizza order:
  <br><strong>Size:</strong> ${size}
  <br><strong>Crust:</strong> ${crust}
  <br><strong>Sauce:</strong> ${sauce}
  <br><strong>Toppings:</strong> ${selectedToppings.join(', ')}`;

  document.getElementById("orderDisplay").innerHTML = order;
}
