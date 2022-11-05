const form = document.querySelector(".contacts");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const messageText = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.removeChild(form.lastChild);

  const message = document.createElement("p");

  message.style.margin = "10px 0";

  if (name.value === "") {
    message.textContent = "Please fill the name field";
  } else if (email.value === "") {
    message.textContent = "Please fill the email field";
  } else if (phone.value === "") {
    message.textContent = "Please fill the phone field";
  } else if (messageText.value === "") {
    message.textContent = "Please fill the message field";
  } else {
    message.textContent = "Thank you for your message!";
    form.reset();
  }
  form.appendChild(message);
});
