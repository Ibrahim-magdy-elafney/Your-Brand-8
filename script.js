const form = document.getElementById("form");

const program = document.getElementById("Program");

const duration = document.getElementById("duration");

const result = document.getElementById("result");

const total = document.getElementById("total");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // البيانات الأساسية
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phoneNumber = document.getElementById("phoneNumber").value.trim();

    const messageField = document.getElementById("message").value.trim();

    // المواعيد
    const date1 = document.querySelectorAll(".date")[0].value;

    const time1 = document.querySelectorAll(".time")[0].value;

    const date2 = document.querySelectorAll(".date")[1].value;

    const time2 = document.querySelectorAll(".time")[1].value;

    // التحقق من البيانات
    if (!name || !phoneNumber || !date1 || !time1) {

        result.style.color = "red";

        result.innerText = "Please fill the required fields!";

        return;

    }

    // بيانات الاشتراك
    const price = Number(program.value);

    const months = Number(duration.value);

    const finalPrice = price * months;

    const programText =
        program.options[program.selectedIndex].text;

    const durationText =
        duration.options[duration.selectedIndex].text;

    // عرض السعر
    total.innerText =
        `Total Price: $${finalPrice}`;

    // رسالة نجاح
    result.style.color = "limegreen";

    result.innerText =
        "Membership request sent successfully 💪";

    // رسالة الواتساب
    const message = `🏋️ New Gym Membership Request

👤 Username:
${name}

📞 Phone Number:
${phoneNumber}

📧 Email:
${email || "Not Provided"}

🔥 Program:
${programText}

📅 Subscription:
${durationText}

💵 Total Price:
$${finalPrice}

📅 Registration Day:
${date1}

⏰ Registration Time:
${time1}

📅 Expected Visit Day:
${date2 || "Not Specified"}

⏰ Expected Visit Time:
${time2 || "Not Specified"}

📝 Notes:
${messageField || "No Notes"}`;

    // رقم الواتساب
    const phone = "2010XXXXXXXX";

    // رابط الواتساب
    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // فتح واتساب
    setTimeout(() => {

        window.open(url, "_blank");

    }, 1000);

});