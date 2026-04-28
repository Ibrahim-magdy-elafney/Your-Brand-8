const form = document.getElementById("form");
const meal = document.getElementById("meal");
const duration = document.getElementById("duration");
const result = document.getElementById("result");
const total = document.getElementById("total");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const messageField = document.getElementById("message").value;

    if (!name || !email) {
        result.style.color = "red";
        result.innerText = "Please fill all fields!";
        return;
    }

    const price = Number(meal.value);
    const months = Number(duration.value);

    const programText = meal.options[meal.selectedIndex].text;

    const finalPrice = price * months;

    total.innerText = `Total Price: $${finalPrice}`;

    result.style.color = "green";
    result.innerText = "Request sent successfully!";

    const message = `🔥 New Membership Request

Name: ${name}
Email: ${email}
Program: ${programText}
Duration: ${months} Month(s)
Total: $${finalPrice}

Notes: ${messageField}`;

    const phone = "2010xxxxxxxx";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
        window.open(url, "_blank");
    }, 1000);

});