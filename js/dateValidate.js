function validateForm() {
    var x = document.getElementById('date').value;
    var y = document.getElementById('c2').value;
    var z = document.getElementById('inputState').value;
    if (x == "") {
      document.getElementById("date-div").classList.add('has-error');
      document.getElementById('date-help').style.visibility = "visible";
      if (y == "0") {
        document.getElementById("expense-amount-div").classList.add('has-error');
        document.getElementById('expense-amount-help').style.visibility = "visible";
        document.getElementById('expense-label').style.color = "brown";
      }
      if (z == "Choose...") {
        document.getElementById("category-div").classList.add('has-error');
        document.getElementById('category-help').style.visibility = "visible";
        document.getElementById('category-label').style.color = "brown";
      }
      return false;
    }
    if (y == "0") {
      document.getElementById("expense-amount-div").classList.add('has-error');
      document.getElementById('expense-amount-help').style.visibility = "visible";
      document.getElementById('expense-label').style.color = "brown";
      if (x == "") {
        document.getElementById("date-div").classList.add('has-error');
        document.getElementById('date-help').style.visibility = "visible";
      }
      if (z == "Choose...") {
        document.getElementById("category-div").classList.add('has-error');
        document.getElementById('category-help').style.visibility = "visible";
        document.getElementById('category-label').style.color = "brown";
      }
      return false;
    }

    if (z == "Choose...") {
      document.getElementById("category-div").classList.add('has-error');
      document.getElementById('category-help').style.visibility = "visible";
      document.getElementById('category-label').style.color = "brown";

      return false;
    }
  }