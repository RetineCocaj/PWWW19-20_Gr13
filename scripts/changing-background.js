function changeColor() {

    var colors = [0, 0, 0];
    var minute = new Date().getMinutes();
    var morningColors = [255, 179, 25];
    var nightColors = [0, 0, 139];

    var gradient = Math.abs(new Date().getMinutes() - 30);

    colors[0] = morningColors[0] * gradient / 30;
    colors[1] = morningColors[1] * gradient / 30;
    colors[2] = (nightColors[2] - morningColors[2]) * (1 - gradient / 30) + morningColors[2];
    document.body.style.backgroundColor = "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
    console.log("rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")");
}
changeColor();
setInterval(changeColor, 60000);