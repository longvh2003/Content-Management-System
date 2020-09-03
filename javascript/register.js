const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const rePassword = document.querySelector(".rePassword");

username.focus();

function dieuhuong() {
    if (username.value.length < 3
        || email.value.length < 5
        || password.value.length < 8
        || rePassword.value.length < 8) {
        alert("Dữ liệu không hợp lệ")
    }
    else {
        if (password.value != rePassword.value) alert("Mật khẩu nhập lại không khớp")
        else window.location = "home.html";
    }
}