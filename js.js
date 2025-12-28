let cartQuantity = 0;

function showCart() {
    alert("تعداد در سبد: " + cartQuantity);
}

function addToCart(num) {
    cartQuantity += num;
    alert("به سبد اضافه شد! تعداد کنونی: " + cartQuantity);
}

function restartCart() {
    cartQuantity = 0;
    alert("سبد خرید خالی شد!");
}

/* ---- فرم ---- */
function submitForm() {
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let isValid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("lastError").innerText = "";
    document.getElementElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";
    document.getElementById("successMsg").innerText = "";
    document.getElementById("userInfo").innerHTML = "";

    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "نام را وارد کنید";
        isValid = false;
    }
    if (lastname.trim() === "") {
        document.getElementById("lastError").innerText = "نام خانوادگی را وارد کنید";
        isValid = false;
    }
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "ایمیل را وارد کنید";
        isValid = false;
    }
    if (password.length < 4) {
        document.getElementById("passError").innerText = "رمز باید حداقل ۴ کاراکتر باشد";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMsg").innerText = "ثبت‌نام با موفقیت انجام شد ✔";
        document.getElementById("userInfo").innerHTML =
            "نام: " + name + "<br>نام خانوادگی: " + lastname + "<br>ایمیل: " + email;
    }
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("successMsg").innerText = "";
    document.getElementById("nameError").innerText = "";
    document.getElementById("lastError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";
    document.getElementById("userInfo").innerHTML = "";
}

