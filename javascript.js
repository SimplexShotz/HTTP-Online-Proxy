
var request = require("request");

window.onload = function() {
  document.getElementById("JS").innerHTML = ""; // This won't work if their JavaScript is disabled
  document.getElementById("view").style.height = window.innerHeight - document.getElementById("view").offsetTop - 20 + "px";
  document.getElementById("url").onkeyup = function() {
    var options = {
      url: document.getElementById("url").value,
      method: "GET",
      mode: "no-cors"
    };
    request("https://cors-anywhere.herokuapp.com/" + document.getElementById("url").value, function(error, response, body) {
      if (error) {
        console.error(error);
      }
      if (response.statusCode === 200) {
        console.log(body);
        document.getElementById("view").contentDocument.body.innerHTML = body;
      }
    });
  };
};
