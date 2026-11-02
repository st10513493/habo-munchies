// FAQ ACCORDION

const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question) {

    question.addEventListener("click", function() {

        const answer = this.nextElementSibling;

        answer.classList.toggle("active");

    });

});


const meals = [
    {
        name: "Cheese Burger",
        price: 55,
        description: "A delicious freshly prepared cheese burger."
    },
    {
        name: "Kota Special",
        price: 45,
        description: "A tasty South African kota packed with flavour."
    },
    {
        name: "Large Chips",
        price: 30,
        description: "Golden and crispy large chips."
    }
];

const menuItems = document.getElementById("menuItems");
const menuSearch = document.getElementById("menuSearch");
const noResults = document.getElementById("noResults");

// Display meals
function displayMeals(mealList) {

    menuItems.innerHTML = "";

    mealList.forEach(function(meal) {

        const mealCard = document.createElement("div");

        mealCard.classList.add("menu-item");

        mealCard.innerHTML = `
            <h3>${meal.name}</h3>
            <p>${meal.description}</p>
            <p class="menu-price">R${meal.price}</p>
        `;

        menuItems.appendChild(mealCard);

    });

    noResults.style.display =
        mealList.length === 0 ? "block" : "none";
}

// Search meals
menuSearch.addEventListener("input", function() {

    const searchText = this.value.toLowerCase();

    const filteredMeals = meals.filter(function(meal) {

        return meal.name.toLowerCase().includes(searchText);

    });

    displayMeals(filteredMeals);

});

displayMeals(meals);


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const email = document.getElementById("customerEmail").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const message = document.getElementById("customerMessage").value.trim();

        const feedback = document.getElementById("formFeedback");

        if (!name || !email || !phone || !message) {

            feedback.textContent = "Please complete all fields.";
            feedback.style.color = "red";

            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

            feedback.textContent = "Please enter a valid email address.";
            feedback.style.color = "red";

            return;
        }

        if (!/^[0-9+\s()-]{10,15}$/.test(phone)) {

            feedback.textContent = "Please enter a valid phone number.";
            feedback.style.color = "red";

            return;
        }

        feedback.textContent = "Your enquiry has passed validation!";
        feedback.style.color = "green";

        contactForm.reset();

    });

}