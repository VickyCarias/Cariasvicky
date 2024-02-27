function displayDateTime() {
    var currentDate = new Date();
  
    var date = currentDate.toDateString();
    var time = currentDate.toLocaleTimeString();
  
    document.getElementById("datetime").innerHTML = "Date: " + date + "<br>Time: " + time;
  }
  
  window.onload = displayDateTime;
  