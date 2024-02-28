const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});

const ingredientsList = document.getElementById('ingredients');
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  ingredientsList.appendChild(li);
});
const ulIngredients = document.getElementById("ingredients")
ingredients.forEach((ingredient)=> {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item")
    ulIngredients.appendChild(li);
})
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

images.forEach(image => {
  const li = document.createElement("li");
  li.innerHTML = `<img src="${image.url}" alt="${image.alt}">`;
  gallery.appendChild(li);
});
const counterValue = document.getElementById("value");
let value = 0;

document.getElementById("counter").addEventListener("click", event => {
  if (event.target.dataset.action === "decrement") {
    value--;
  } else if (event.target.dataset.action === "increment") {
    value++;
  }

  counterValue.textContent = value;
});
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = nameInput.value;
    }
});
const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const length = parseInt(input.getAttribute("data-length"));
  const valueLength = input.value.length;

  if (valueLength === length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");
fontSizeControl.addEventListener("input", () => {
    const fontSize = fontSizeControl.value + "px";
    textSpan.style.fontSize = fontSize;
});
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;
    if (!emailInput.value || !passwordInput.value) {
        alert('Proszę wypełnić wszystkie pola formularza.');
        return;
    }
    const formData = {
        email: emailInput.value,
        password: passwordInput.value
    };
    console.log(formData);
    this.reset();
})

const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', function () {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}