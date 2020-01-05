var myIndex = 0;
slideshow();

function slideshow() {
    var i;
    var x = document.getElementsByClassName("header_slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(slideshow, 5000);
}