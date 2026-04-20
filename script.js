const form = document.getElementById("form");
const meal = document.getElementById("meal");
const result = document.getElementById("result");
const total = document.getElementById("total");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // تحقق من البيانات
    if (!name || !email) {
        result.style.color = "red";
        result.innerText = "Please fill all fields!";
        return;
    }

    const price = Number(meal.value);

    // الكمية = 1 تلقائي
    const finalPrice = price;

    total.innerText = `Total Price: $${finalPrice}`;
    result.style.color = "green";
    result.innerText = "Order placed successfully!";

    // تحويل لصفحة الشكر
    setTimeout(() => {
        window.location.href = "index-form.html";
    }, 1000);
});