// https://calculator.swiftutors.com/wind-load-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const windLoadRadio = document.getElementById('windLoadRadio');
const areaRadio = document.getElementById('areaRadio');
const windPressureRadio = document.getElementById('windPressureRadio');
const dragCoefficientRadio = document.getElementById('dragCoefficientRadio');
const exposureCoefficientRadio = document.getElementById('exposureCoefficientRadio');
const gustResponseRadio = document.getElementById('gustResponseRadio');

let windLoad;
let area = v1;
let windPressure = v2;
let dragCoefficient = v3;
let exposureCoefficient = v4;
let gustResponse = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

windLoadRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Area';
  variable2.textContent = '(P) Wind Pressure';
  variable3.textContent = '(Cd) Drag Coefficient';
  variable4.textContent = '(Kz) Exposure Coefficient';
  variable5.textContent = '(Gh) Gust Response';
  area = v1;
  windPressure = v2;
  dragCoefficient = v3;
  exposureCoefficient = v4;
  gustResponse = v5;
  result.textContent = '';
});

areaRadio.addEventListener('click', function() {
  variable1.textContent = 'Wind Load';
  variable2.textContent = '(P) Wind Pressure';
  variable3.textContent = '(Cd) Drag Coefficient';
  variable4.textContent = '(Kz) Exposure Coefficient';
  variable5.textContent = '(Gh) Gust Response';
  windLoad = v1;
  windPressure = v2;
  dragCoefficient = v3;
  exposureCoefficient = v4;
  gustResponse = v5;
  result.textContent = '';
});

windPressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Wind Load';
  variable2.textContent = '(A) Area';
  variable3.textContent = '(Cd) Drag Coefficient';
  variable4.textContent = '(Kz) Exposure Coefficient';
  variable5.textContent = '(Gh) Gust Response';
  windLoad = v1;
  area = v2;
  dragCoefficient = v3;
  exposureCoefficient = v4;
  gustResponse = v5;
  result.textContent = '';
});

dragCoefficientRadio.addEventListener('click', function() {
  variable1.textContent = 'Wind Load';
  variable2.textContent = '(A) Area';
  variable3.textContent = '(P) Wind Pressure';
  variable4.textContent = '(Kz) Exposure Coefficient';
  variable5.textContent = '(Gh) Gust Response';
  windLoad = v1;
  area = v2;
  windPressure = v3;
  exposureCoefficient = v4;
  gustResponse = v5;
  result.textContent = '';
});

exposureCoefficientRadio.addEventListener('click', function() {
  variable1.textContent = 'Wind Load';
  variable2.textContent = '(A) Area';
  variable3.textContent = '(P) Wind Pressure';
  variable4.textContent = '(Cd) Drag Coefficient';
  variable5.textContent = '(Gh) Gust Response';
  windLoad = v1;
  area = v2;
  windPressure = v3;
  dragCoefficient = v4;
  gustResponse = v5;
  result.textContent = '';
});

gustResponseRadio.addEventListener('click', function() {
  variable1.textContent = 'Wind Load';
  variable2.textContent = '(A) Area';
  variable3.textContent = '(P) Wind Pressure';
  variable4.textContent = '(Cd) Drag Coefficient';
  variable5.textContent = '(Kz) Exposure Coefficient';
  windLoad = v1;
  area = v2;
  windPressure = v3;
  dragCoefficient = v4;
  exposureCoefficient = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(windLoadRadio.checked)
    result.textContent = `Wind Load = ${computeWindLoad().toFixed(2)}`;

  else if(areaRadio.checked)
    result.textContent = `Area = ${computeArea().toFixed(2)}`;

  else if(windPressureRadio.checked)
    result.textContent = `Wind Pressure = ${computeWindPressure().toFixed(2)}`;

  else if(dragCoefficientRadio.checked)
    result.textContent = `Drag Coefficient = ${computeDragCoefficient().toFixed(2)}`;

  else if(exposureCoefficientRadio.checked)
    result.textContent = `Exposure Coefficient = ${computeExposureCoefficient().toFixed(2)}`;

  else if(gustResponseRadio.checked)
    result.textContent = `Gust Response = ${computeGustResponse().toFixed(2)}`;
})

// calculation

function computeWindLoad() {
  return Number(area.value) * Number(windPressure.value) * Number(dragCoefficient.value) * Number(exposureCoefficient.value) * Number(gustResponse.value);
}

function computeArea() {
  return Number(windLoad.value) / (Number(windPressure.value) * Number(dragCoefficient.value) * Number(exposureCoefficient.value) * Number(gustResponse.value));
}

function computeWindPressure() {
  return Number(windLoad.value) / (Number(area.value) * Number(dragCoefficient.value) * Number(exposureCoefficient.value) * Number(gustResponse.value));
}

function computeDragCoefficient() {
  return Number(windLoad.value) / (Number(area.value) * Number(windPressure.value) * Number(exposureCoefficient.value) * Number(gustResponse.value));
}

function computeExposureCoefficient() {
  return Number(windLoad.value) / (Number(area.value) * Number(windPressure.value) * Number(dragCoefficient.value) * Number(gustResponse.value));
}

function computeGustResponse() {
  return Number(windLoad.value) / (Number(area.value) * Number(windPressure.value) * Number(dragCoefficient.value) * Number(exposureCoefficient.value));
}