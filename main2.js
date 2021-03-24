function pleasework() {
    var finalresultpizza = localStorage.getItem("newpizza");
    document.getElementById("theonetoadd").innerHTML = finalresultpizza;
}

function chance() {

    var randomnum = Math.floor(Math.random() * 10);
    console.log(randomnum);

    if(randomnum == 0) {
        document.getElementById("theonetoadd").innerHTML = "Sorry, try a different one and it will probably make it";
    }
    if(randomnum == 1) {
        document.getElementById("theonetoadd").innerHTML = "Sorry, try a different one and it will probably make it";
    }
    if(randomnum == 2) {
        document.getElementById("theonetoadd").innerHTML = "Sorry, try a different one and it will probably make it";
    }
    if(randomnum == 3) {
        document.getElementById("theonetoadd").innerHTML = "Sorry, try a different one and it will probably make it";
    }
    if(randomnum == 4) {
        pleasework();
    }
    if(randomnum == 5) {
        pleasework();
    }
    if(randomnum == 6) {
        pleasework();
    }
    if(randomnum == 7) {
        pleasework();
    }
    if(randomnum == 8) {
        pleasework();
    }
    if(randomnum == 9) {
        pleasework();

    }
}
function newpage() {
    window.location = "reccomendpizza.html";
}