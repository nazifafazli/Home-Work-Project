let input = document.getElementById("textInput");

let keys = document.querySelectorAll(".key");

keys.forEach(function (key) {
  key.addEventListener("click", function () {
    let value = key.innerText;

    if (key.classList.contains("delete")) {
      input.value = input.value.slice(0, -1);
    } else if (key.classList.contains("space")) {
      input.value += " ";
    } else {
      input.value += value;
    }

    input.focus();
  });
});
