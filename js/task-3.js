const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  const displayName = value === "" ? "Anonymous" : value;
  outputEl.textContent = displayName;
  console.log(`Hello, ${displayName}!`);
});
