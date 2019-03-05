function validateForm() {
    var x = document.getElementById('login-username').value;
    var y = document.getElementById('login-pass').value;
    var z = document.getElementById('login-pass2').value;
    var e = document.getElementById('login-email').value;
    
    if (x == "") {
      document.getElementById("username-div").classList.add('has-error');
      document.getElementById('username-help').style.visibility = "visible";
    }
    if (y == "") {
    document.getElementById("pass-div").classList.add('has-error');
    document.getElementById('password-help').style.visibility = "visible";
    }
    if (z == "") {
        document.getElementById("pass2-div").classList.add('has-error');
        document.getElementById('password2-help').style.visibility = "visible";
    }
    if (e == "") {
        document.getElementById("email-div").classList.add('has-error');
        document.getElementById('email-help').style.visibility = "visible";
    }

    if (y != "" && x != "" && y!=x){
        document.getElementById("pass2-div").classList.add('has-error');
        document.getElementById('password3-help').style.visibility = "visible";
    }
    
    
    if (x == "" || y == "" || z == "" || e == "" || y!=x){
        return false;
    }
    
  }