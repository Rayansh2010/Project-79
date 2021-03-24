var nameofnewpizza = "";

function navigateandaddmenu() {
    nameofnewpizza = document.getElementById("nameofpizza").value;
    localStorage.setItem("newpizza", nameofnewpizza);

    window.location = "index2.html";
}