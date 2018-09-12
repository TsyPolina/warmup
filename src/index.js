module.exports = function warmup(temperature) {
  var start_tempratute=32, coefficient=1.8, fahrenheit;
  fahrenheit=temperature*coefficient+start_tempratute;
 return fahrenheit;
};
