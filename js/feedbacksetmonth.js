var flag5 = localStorage.getItem("flagmonthset");

function loader() {
    if (flag5 == "true"){
      document.getElementById('aa2').style.visibility = "visible";
      localStorage.setItem("flagmonthset", "false");
    }
  }