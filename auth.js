const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const email = document.getElementById("email").value;

  localStorage.setItem("userEmail", email);

  alert("تم تسجيل الدخول");

  window.location.href = "dashboard.html";

});
