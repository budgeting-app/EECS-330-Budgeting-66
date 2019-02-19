function validateForm() {
    var x = document.getElementById('login-username').value;
    var y = document.getElementById('login-pass').value;
    if (x == "") {
      document.getElementById("username-div").classList.add('has-error');
      document.getElementById('username-help').style.visibility = "visible";
      if (y == "") {
        document.getElementById("pass-div").classList.add('has-error');
        document.getElementById('password-help').style.visibility = "visible";
      }
      return false;
    }
    if (y == "") {
      document.getElementById("pass-div").classList.add('has-error');
      document.getElementById('password-help').style.visibility = "visible";
      if (x == "") {
        document.getElementById("username-div").classList.add('has-error');
        document.getElementById('username-help').style.visibility = "visible";
      }
      return false;
    }
  }