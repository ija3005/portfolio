document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();

    let popup = document.querySelector(".popup");
    if(!popup){
      popup = document.createElement("div");
      popup.className = "popup";
      document.body.appendChild(popup);
    }

    popup.textContent = "Thanks! Your message has been saved.";
    popup.classList.add("show");

    clearTimeout(window.popupTimer);
    window.popupTimer = setTimeout(() => {
      popup.classList.remove("show");
    }, 2500);
  });
});
const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } 
  else {
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});






const form = document.querySelector(".contact-form");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusText.textContent = "Thanks! Your message has been saved.";
  form.reset();
});

