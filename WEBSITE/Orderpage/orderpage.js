window.onload = function () {
  console.log("Script loaded successfully!");

  var confirmed = confirm(
    "Please enable JavaScript to have full features and fill all the text fields."
  );
  if (!confirmed) {
    console.log("User declined JavaScript. Redirecting...");
    window.location.href = "https://example.com"; // Redirect to another page if JavaScript is disabled
  } else {
    console.log("User accepted JavaScript. Proceeding...");

    // Form validation function
    function validateForm() {
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var email = document.getElementById("email").value;
      var number = document.getElementById("number").value;
      var quantity = document.getElementById("quantity").value;

      var nameRegex = /^[a-zA-Z]+$/;
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var numberRegex = /^\d{10}$/;
      var quantityRegex = /^\d+$/;

      if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        alert("First name and last name should only contain letters.");
        return false;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address (e.g., example@gmail.com).");
        return false;
      }

      if (!numberRegex.test(number)) {
        alert("Phone number should have 10 digits.");
        return false;
      }

      if (!quantityRegex.test(quantity)) {
        alert("Quantity should be a valid number.");
        return false;
      }

      return true; // Form is valid
    }

    // Handle form submission
    document.getElementById("orderForm").onsubmit = function () {
      return validateForm();
    };
  }
};
