//Variables
const cancelButton = document.getElementById("cancel-btn");
const modal = document.getElementById("modal");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");

// Pointer cursor will show when the user mouseover to the cancel button
cancelButton.style.cursor = "pointer";

// The modal will show when cancel button is clicked
cancelButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// MOdal will hide when the NO button is clicked
noButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Update the modal when the yes button is clicked
yesButton.addEventListener("click", () => {
  const cancelButtonCell = cancelButton.parentElement;
  cancelButtonCell.innerHTML = "Cancelled";
  modal.innerHTML = "<p>Subscription successfully cancelled!</p>";
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 2000);
});
