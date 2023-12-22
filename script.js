function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const colors = ["#3498db", "#e74c3c", "#2ecc71"];
shuffleArray(colors);

function submitForm() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;

  const resultsDiv = document.getElementById("results");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = `Field 1: ${input1}, Field 2: ${input2}, Field 3: ${input3}`;

  // Assign different colors sequentially from the shuffled array
  const colorIndex = resultsDiv.childElementCount % colors.length;
  newParagraph.style.color = colors[colorIndex];

  resultsDiv.appendChild(newParagraph);
}
