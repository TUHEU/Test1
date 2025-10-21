// Handle Contact Form Submission (Fake Email Simulation)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  // Get form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.querySelector('.status');

  // Simple validation
  if (!name || !email || !message) {
    status.textContent = "Please fill all fields!";
    status.style.color = "red";
    return;
  }

  // Display success message
  status.textContent = "Thank you, your message has been sent!";
  status.style.color = "lightgreen";

  // Clear form
  document.getElementById('contactForm').reset();
});
