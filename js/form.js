function validateForm() {
    var x = document.getElementById('login-username').value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }