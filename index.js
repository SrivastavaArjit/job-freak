const buttons = document.querySelector(".navbar");
const panels = document.querySelectorAll(".panel");

buttons.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.matches("a")) {
    panels.forEach((panel) => panel.classList.remove("show"));
    const { id } = e.target.dataset;
    const selector = `#${id}`;
    document.querySelector(selector).classList.add("show");
  }
}
