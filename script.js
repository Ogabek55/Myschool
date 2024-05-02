document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (password === "12345") {
      // Bu erda Instagram sahifasiga o'tish kerak bo'lgan qismi boshqarishni o'rnating
      window.location.href = "https://t.me/kompyuter263";
    } else {
      document.getElementById("errorMessage").textContent = "Parol noto'g'ri";
    }
  });
