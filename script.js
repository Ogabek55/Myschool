document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (password === "12345") {
      window.location.href = "/pages/index.html";
    } else {
      document.getElementById("errorMessage").textContent =
        "Iltimos parolni qayta kiriting!";
    }
  });
