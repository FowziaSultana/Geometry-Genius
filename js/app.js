function getValueFromInput(id) {
  const element = document.getElementById(id);
  const value = element.value;
  return value;
}
function addList(name, result) {
  const parent = document.getElementById("result-list");
  const liElement = document.createElement("li");
  liElement.innerHTML = `<div class="mt-2 flex justify-around items-center gap-2"
  >
  <span class="">${name}</span> <span class="">${result}cm&#178;
  </span>   
    <button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium  text-xs ml-2 px-2 py-1.5 text-center">Convert to m&#178;
    </button></div>
    `;
  parent.appendChild(liElement);
}
document
  .getElementById("calculate-triangle-btn")
  .addEventListener("click", function () {
    const base = getValueFromInput("triangle-b");
    const height = getValueFromInput("triangle-h");
    if (isNaN(base) || isNaN(height)) {
      alert("please enter a valid number");
    } else if (base <= 0 || height <= 0) {
      alert("please give a positive number");
    } else {
      const area = (0.5 * parseFloat(base) * parseFloat(height)).toFixed(2);
      addList("Triangle", area);
    }
  });
//   b7a5-geometry-genius-assignment-FowziaSultana
