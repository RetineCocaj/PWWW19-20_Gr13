function greet() {
    if (sessionStorage.getItem("name") != null) {
        var el = document.getElementById("greeting");
        el.innerHTML = "Hi, " + sessionStorage.getItem("name");
    }
}