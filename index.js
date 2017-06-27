function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function getRandomRgb() {
  var min = 0,
      max = 255;
  return {
    r: randomIntFromInterval(min, max),
    g: randomIntFromInterval(min, max),
    b: randomIntFromInterval(min, max)
  }
}

function generateNewRGB(rgb) {
  var newRgb = getRandomRgb();
  while(JSON.stringify(rgb) === JSON.stringify(newRgb)) {
    newRgb = getRandomRgb();
  }
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
  function getCss(rgb) {
    return 'rgb('+rgb.r+', '+rgb.g+', '+rgb.b+')';
  }

  document.body.style.backgroundColor = getCss(rgb);
}

exports.start = function() {
  var rgb = {},
      delay = 1000,
      repetitions = 10;

  function changeBackground() {
    render(generateNewRGB(rgb));
  }

  setIntervalX(changeBackground, delay, repetitions);
}