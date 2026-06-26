// App Started
console.log("VS Code IDE Initialized Successfully!");


// Toast Function
function showToast(message){

  console.log("Toast:", message);

  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-text");

  toastText.innerText = message;

  // Show Toast
  toast.classList.remove("opacity-0", "pointer-events-none");
  toast.classList.add("opacity-100");

  // Hide After 2 Seconds
  setTimeout(() => {

    toast.classList.add("opacity-0", "pointer-events-none");
    toast.classList.remove("opacity-100");

  }, 2000);

}


// Vibration Effect
function triggerVibration(){

  console.warn("Haptic vibration triggered!");

  showToast("⚡ Haptic Vibe Triggered!");

  document.body.classList.add("animate-pulse");

  setTimeout(() => {

    document.body.classList.remove("animate-pulse");

  }, 400);

}


// Button Event
document.addEventListener("DOMContentLoaded", () => {

  const actionBtn = document.getElementById("btn-action");

  if(actionBtn){

    actionBtn.addEventListener("click", () => {

      console.log("Main Action Clicked!");

      showToast("🚀 App compiling & rendering live!");

    });

  }

});
