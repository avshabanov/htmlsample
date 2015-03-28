
var s = require("./service.js");

console.log("in main module (5)");

document.getElementById("greeting-result").textContent = "'" + s.FooService.getGreeting() + "'";

