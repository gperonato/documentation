var plotly = require('plotly')('test-runner', '9h29fe3l0x')

y0 = Math.random() * 50
y1 = Math.random() * 50 + 1

var trace1 = {
  y: y0, 
  type: "box"
};
var trace2 = {
  y: y1, 
  type: "box"
};
var data = [trace1, trace2];

plotly.plot(data, function (err, msg) {
    console.log(msg);
});