function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function getRandomRgb() {
  var min = 0,
      max = 255,
      rgb = {
        r: randomIntFromInterval(min, max),
        g: randomIntFromInterval(min, max),
        b: randomIntFromInterval(min, max)
  };
  return 'rgb('+rgb.r+', '+rgb.g+', '+rgb.b+')';
}

function generateNewRGB(rgbList) {
  var newRgb = getRandomRgb();
  while(rgbList[newRgb]) {
    newRgb = getRandomRgb();
  }
  rgbList[newRgb] = true;
  return newRgb;
}

function setIntervalX(callback, delay, repetitions) {
  var x = 0,
      intervalID = window.setInterval(function () {
        callback();
        if (++x === repetitions) {
          window.clearInterval(intervalID);
        }
      }, delay);
}

function render(rgb) {
  document.body.style.backgroundColor = rgb;
}

exports.start = function() {
  var rgbList = {},
      delay = 1000,
      repetitions = 10;

  function changeBackground() {
    render(generateNewRGB(rgbList));
  }

  setIntervalX(changeBackground, delay, repetitions);
}