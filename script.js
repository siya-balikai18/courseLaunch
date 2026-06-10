const targetDate = new Date("December 31, 2026 09:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

function scrollToForm() {
  document.getElementById("paymentSection").scrollIntoView({
    behavior: "smooth",
  });
}

document.getElementById("registerBtn").addEventListener("click", scrollToForm);

document
  .getElementById("heroRegisterBtn")
  .addEventListener("click", scrollToForm);

document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("paymentModal").style.display = "flex";
  });

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("paymentModal").style.display = "none";
});

document.getElementById("payNow").addEventListener("click", function () {
  alert("Payment Successful!\n\nWelcome to LearnX Academy.");

  document.getElementById("paymentModal").style.display = "none";

  document.getElementById("registerForm").reset();
});
