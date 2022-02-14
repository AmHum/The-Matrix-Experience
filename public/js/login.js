let loginForm = document.querySelector(".login");
let signupForm = document.querySelector(".signup");
let loginBtn = document.querySelector(".login-btn");
let signupBtn = document.querySelector(".signup-btn");

async function loginFormHandler(event) {
  event.preventDefault();

  loginForm.style.display = "block";
  signupForm.style.display = "none";

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  loginForm.style.display = "none";
  signupForm.style.display = "block";

  const firstname = document.querySelector("#firstname").value.trim();
  const lastname = document.querySelector("#lastname").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (firstname && lastname && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

loginForm.addEventListener("submit", loginFormHandler);
loginBtn.addEventListener("click", loginFormHandler);

signupForm.addEventListener("submit", signupFormHandler);
signupBtn.addEventListener("click", signupFormHandler);
