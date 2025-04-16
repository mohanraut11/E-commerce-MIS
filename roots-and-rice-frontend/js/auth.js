console.log("Auth script loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = loginForm.querySelector("input[type='email']").value;
      const password = loginForm.querySelector("input[type='password']").value;
      alert("Logged in successfully (placeholder)");
      window.location.href = "index.html";
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = signupForm.querySelector("input[type='text']").value;
      const email = signupForm.querySelector("input[type='email']").value;
      const password = signupForm.querySelector("input[type='password']").value;
      alert("Account created (placeholder)");
      window.location.href = "login.html";
    });
  }
});
