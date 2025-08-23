const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("change", (event) => {
  const value = event.currentTarget.value.trim();
  const displayName = value === "" ? "Anonymous" : value;
  outputEl.textContent = displayName;
  console.log(`Hello, ${displayName}!`);
  inputEl.value = "";
});
