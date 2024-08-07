console.log("login_page");

let register_btn = document.getElementById("register");

register_btn.addEventListener("click", (e) => {
  window.location = "signup.html";
  e.preventDefault();
});

let email_input = document.getElementById("email");
let password_input = document.getElementById("password");
let login_btn = document.getElementById("login_btn");
let login_form = document.getElementById("login_form");
let error = document.getElementById("error");

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

login_form.addEventListener("submit", (e) => {
  let errors = [];

  if (email_input.value === "") {
    errors.push("Email required");
    email_input.classList.add("incorrect");
  } else if (!isValidEmail(email_input.value)) {
    errors.push("Email not valid");
  } else {
    email_input.classList.remove("incorrect");
  }

  if (password_input.value === "") {
    errors.push("Password required");
    password_input.classList.add("incorrect");
  } else if (password_input.value.length < 8) {
    errors.push("Password must be at least 8 charcter");
  } else if (password_input.value.length > 16) {
    errors.push("Password must be at less than 16 charcter");
  } else {
    password_input.classList.remove("incorrect");
  }

  error.innerHTML = errors.join(". ");

  if (errors.length > 0) {
    e.preventDefault();
  }
});
