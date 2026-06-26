console.log("Android VS Code Initialized");

// Toast Function
function showToast(message) {

  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-text");

  toastText.innerText = message;

  toast.classList.remove("opacity-0");

  setTimeout(() => {
    toast.classList.add("opacity-0");
  }, 2000);
}

// Vibration Effect
function triggerVibration() {

  showToast("⚡ Emulator Started");

  document.body.classList.add("animate-pulse");

  setTimeout(() => {
    document.body.classList.remove("animate-pulse");
  }, 500);

}
