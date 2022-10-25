const meals = document.getElementById("meals");

async function getRandomMeal() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  addMeal(randomMeal, true);

  console.log(randomMeal);
}
getRandomMeal();
async function getMealById(id) {
  const meal = await fetch(
    "www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
}

async function getMealBySearch(term) {
  const meal = await fetch(
    "www.themealdb.com/api/json/v1/1/search.php?s=" + term
  );
}

function addMeal(mealData, random = false) {
  const meal = document.createElement("div");
  meal.classList.add("meal");

  meal.innerHTML = `
    <div class="meal-header">
      ${random ? `<span class="random">random recipe</span>` : ""}
      <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    </div>
    <div class="meal-body">
      <h4>${mealData.strMeal}</h4>
      <button class="fav-btn">
        <i class="fas fa-heart"></i>
      </button>
    </div>
  `;

  const btn = meal.querySelector(".meal-body .fav-btn");

  btn.addEventListener("click", () => {
    btn.classList.toggle('active');
   // alert("hello");
  });
  meals.appendChild(meal);
}
