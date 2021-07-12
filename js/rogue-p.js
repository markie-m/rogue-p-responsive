// This is the code that makdes the Locations page animated globe icon function
function globespin() {
  var a;
  a = document.getElementById("globe");
  a.innerHTML = "&#xf57d;";
  setTimeout(function () {
      a.innerHTML = "&#xf57e;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf57c;";
    }, 2000);
}
globespin();
setInterval(globespin, 3000);
// End of Locations page animated icon JS
