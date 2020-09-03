const viewContent = document.querySelector(".btn-viewContent");
const formContent = document.querySelector(".btn-formContent");

function loadView() {
    viewContent.style.backgroundColor = "#dcdde1";
    formContent.style.backgroundColor = "#f5f6fa";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "./loading.html", true);
    xhttp.send();
    setTimeout(function() {
        xhttp.open("GET", "./viewContents.html", true);
        xhttp.send();
    }, 5000);
}


function loadForm() {
    viewContent.style.backgroundColor = "#f5f6fa";
    formContent.style.backgroundColor = "#dcdde1";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "./loading.html", true);
    xhttp.send();
    setTimeout(function() {
        xhttp.open("GET", "./formContents.html", true);
        xhttp.send();
    }, 5000);
}

function loadEditProfile() {
    viewContent.style.backgroundColor = "#f5f6fa";
    formContent.style.backgroundColor = "#f5f6fa";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "./editProfile.html", true);
    xhttp.send();
}
// $('document').ready(function(){
//     $('#update').click(

//     )
// })