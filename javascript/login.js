const email = document.querySelector(".email");
const password = document.querySelector(".password");

email.focus();

function dieuhuong() {

    if (email.value.length > 4 &&
        password.value.length > 7
    ) {
        window.location = "home.html";
    } else
        alert("Dữ liệu không hợp lệ")
}