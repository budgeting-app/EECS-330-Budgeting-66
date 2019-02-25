function validateForm() {
    var x = document.getElementById('date').value;
    var y = document.getElementById('c2').value;
    if (x == "") {
      document.getElementById("date-div").classList.add('has-error');
      document.getElementById('date-help').style.visibility = "visible";
      if (y == "0") {
        document.getElementById("expense-amount-div").classList.add('has-error');
        document.getElementById('expense-amount-help').style.visibility = "visible";
      }
      return false;
    }
    if (y == "0") {
      document.getElementById("expense-amount-div").classList.add('has-error');
      document.getElementById('expense-amount-help').style.visibility = "visible";
      if (x == "") {
        document.getElementById("date-div").classList.add('has-error');
        document.getElementById('date-help').style.visibility = "visible";
      }
      return false;
    }
    document.getElementById("login-button").onclick = function() {
      window.location("page3.html")
    }
  }