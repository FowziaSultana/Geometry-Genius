let resultSpanId = 0;

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "../blog.html";
});

function getValueFromInput(id) {
  const element = document.getElementById(id);
  const value = element.value;
  return value;
}

function emptyInput(id) {
  const element = document.getElementById(id);
  element.value = "";
}
// ------------------------------------------------------------------Result div js----------------------

function changeResult(id, result) {
  const element = document.getElementById(id);
  const meterResult = result / 10000;
  element.innerText = meterResult.toFixed(2) + "m²";
}

function addList(name, result) {
  resultSpanId++;
  const parent = document.getElementById("result-list");
  const liElement = document.createElement("li");
  liElement.innerHTML = `<div class="mt-2 flex justify-around items-center gap-2"
  >
  <span class="text-xs">${name}</span> <span id=${resultSpanId} class="text-xs">${result}cm&#178;
  </span>   
    <button  onclick=changeResult("${resultSpanId}","${result}") class="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300  text-xs ml-2 px-2 py-1.5 text-center">Convert to m&#178;
    </button></div>
    `;
  parent.appendChild(liElement);
}

//-------------------------------------------------- triangle btn js---------------------------------------

document
  .getElementById("calculate-triangle-btn")
  .addEventListener("click", function () {
    const base = getValueFromInput("triangle-b");
    const height = getValueFromInput("triangle-h");
    if (isNaN(base) || isNaN(height)) {
      alert("Please enter a valid number");
    } else if (base <= 0 || height <= 0) {
      alert("Please give a positive number");
    } else {
      const area = (0.5 * parseFloat(base) * parseFloat(height)).toFixed(2);
      addList("Triangle", area);
      emptyInput("triangle-b");
      emptyInput("triangle-h");
    }
  });

//-------------------------------------------------- rectangle btn js---------------------------------------

document
  .getElementById("calculate-rectangle-btn")
  .addEventListener("click", function () {
    const width = getValueFromInput("rectangle-w");
    const length = getValueFromInput("rectangle-l");
    if (isNaN(width) || isNaN(length)) {
      alert("Please enter a valid number");
    } else if (width <= 0 || length <= 0) {
      alert("Please give a positive number");
    } else {
      const area = (parseFloat(width) * parseFloat(length)).toFixed(2);
      addList("Rectangle", area);
      emptyInput("rectangle-w");
      emptyInput("rectangle-l");
    }
  });

//-------------------------------------------------- parallelogram btn js---------------------------------------

document
  .getElementById("calculate-parallelogram-btn")
  .addEventListener("click", function () {
    const base = getValueFromInput("parallelogram-b");
    const height = getValueFromInput("parallelogram-h");
    if (isNaN(base) || isNaN(height)) {
      alert("Please enter a valid number");
    } else if (base <= 0 || height <= 0) {
      alert("Please give a positive number");
    } else {
      const area = (parseFloat(base) * parseFloat(height)).toFixed(2);
      addList("Parallelogram", area);
      emptyInput("parallelogram-b");
      emptyInput("parallelogram-h");
    }
  });

//-------------------------------------------------- rhombus btn js---------------------------------------

document
  .getElementById("calculate-rhombus-btn")
  .addEventListener("click", function () {
    const d1 = getValueFromInput("rhombus-d1");
    const d2 = getValueFromInput("rhombus-d2");
    if (isNaN(d1) || isNaN(d2)) {
      alert("Please enter a valid number");
    } else if (d1 <= 0 || d2 <= 0) {
      alert("Please give a positive number");
    } else {
      const area = (0.5 * parseFloat(d1) * parseFloat(d2)).toFixed(2);
      addList("Rhombus", area);
      emptyInput("rhombus-d1");
      emptyInput("rhombus-d2");
    }
  });
//-------------------------------------------------- Pentagon btn js---------------------------------------

document
  .getElementById("calculate-pentagon-btn")
  .addEventListener("click", function () {
    const perimeter = getValueFromInput("pentagon-p");
    const apothem = getValueFromInput("pentagon-b");
    if (isNaN(perimeter) || isNaN(apothem)) {
      alert("Please enter a valid number");
    } else if (perimeter <= 0 || apothem <= 0) {
      alert("Please give a positive number");
    } else {
      const area = (0.5 * parseFloat(perimeter) * parseFloat(apothem)).toFixed(
        2
      );
      addList("Pentagon", area);
      emptyInput("pentagon-p");
      emptyInput("pentagon-b");
    }
  });

//-------------------------------------------------- ellipse btn js---------------------------------------

document
  .getElementById("calculate-ellipse-btn")
  .addEventListener("click", function () {
    const aAxis = getValueFromInput("ellipse-a");
    const bAxis = getValueFromInput("ellipse-b");
    if (isNaN(aAxis) || isNaN(bAxis)) {
      alert("Please enter a valid number");
    } else if (aAxis <= 0 || bAxis <= 0) {
      alert("Please give a positive number");
    } else {
      const area = (3.14 * parseFloat(aAxis) * parseFloat(bAxis)).toFixed(2);
      addList("Ellipse", area);
      emptyInput("ellipse-a");
      emptyInput("ellipse-b");
    }
  });

//-------------------------------------------- backgroundColor change js
var myElements = document.querySelectorAll(".single-calculation-div");
for (const elementName of myElements) {
  elementName.addEventListener("mouseenter", function () {
    var colors = [
      "#DFFF00",
      "#FFBF00",
      "#FF7F50",
      "#9FE2BF",
      "#f1c1c2",
      "#fff2f4",
      "#e6e6fa",
    ];
    var randomIndex = Math.floor(Math.random() * colors.length);
    elementName.style.backgroundColor = colors[randomIndex];
  });
  elementName.addEventListener("mouseleave", function () {
    elementName.style.backgroundColor = "white";
  });
}
