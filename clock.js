var counter = 1;
var min = 0;
var hrs = 0;
var printmessage = function() {
    $("h1").text(hrs + ":" + min + ":" + counter);
    counter++;
    if (counter === 60) {
        min++;
        counter = 0;
    }
    if (min === 60) {
        hrs++;
        min = 0;
    }

}
setInterval(printmessage, 1000);