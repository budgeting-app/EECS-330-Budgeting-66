var flag2 = localStorage.getItem("flag");

function loader() {
    if (flag2 == "true"){
      document.getElementById('aa').style.visibility = "visible";
      localStorage.setItem("flag", "false");
    }
  }